const TrainingGuide = require('../models/TrainingGuide');
const CustomPokemon = require('../models/CustomPokemon');
const Pokemon = require('../models/Pokemon');
const mongoose = require('mongoose');
const trainingGuideController = {};

// Helper function to calculate stat from base, IV, EV, and level
const calculateStat = (base, iv, ev, level, isHP = false) => {
  if (isHP) {
    return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10;
  } else {
    return Math.floor((Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5));
  }
};

// Helper function to check if target stats are achievable with given EVs and IVs
const checkAchievability = async (customPokemonId, targetEVs, targetIVs) => {
  try {
    // Get the custom pokemon
    const customPokemon = await CustomPokemon.findById(customPokemonId).lean();
    if (!customPokemon) {
      return { achievable: false, reason: "Custom pokemon not found" };
    }

    // Get the base pokemon stats
    const basePokemon = await Pokemon.findById(customPokemon.base_pokemon_id).lean();
    if (!basePokemon) {
      return { achievable: false, reason: "Base pokemon not found" };
    }

    const level = customPokemon.level;
    const targetStats = customPokemon.stats;
    const baseStats = basePokemon.base_stats;

    // Calculate what the stats would be with the given EVs and IVs
    const calculatedStats = {
      hp: calculateStat(baseStats.hp, targetIVs.hp, targetEVs.hp, level, true),
      attack: calculateStat(baseStats.attack, targetIVs.attack, targetEVs.attack, level),
      defense: calculateStat(baseStats.defense, targetIVs.defense, targetEVs.defense, level),
      special_attack: calculateStat(baseStats.special_attack, targetIVs.special_attack, targetEVs.special_attack, level),
      special_defense: calculateStat(baseStats.special_defense, targetIVs.special_defense, targetEVs.special_defense, level),
      speed: calculateStat(baseStats.speed, targetIVs.speed, targetEVs.speed, level)
    };

    // Check if calculated stats match target stats
    const matches = {
      hp: calculatedStats.hp === targetStats.hp,
      attack: calculatedStats.attack === targetStats.attack,
      defense: calculatedStats.defense === targetStats.defense,
      special_attack: calculatedStats.special_attack === targetStats.special_attack,
      special_defense: calculatedStats.special_defense === targetStats.special_defense,
      speed: calculatedStats.speed === targetStats.speed
    };

    const allMatch = Object.values(matches).every(match => match);

    return {
      achievable: allMatch,
      calculatedStats,
      targetStats,
      matches,
      reason: allMatch ? "Stats are achievable with these EVs and IVs" : "Stats do not match with these EVs and IVs"
    };
  } catch (err) {
    return { achievable: false, reason: "Error checking achievability: " + err.message };
  }
};

// Get all training guides
trainingGuideController.getAllTrainingGuides = async (req, res) => {
  try {
    const guides = await TrainingGuide.find().lean();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(guides);
  } catch (err) {
    console.error("Error fetching training guides:", err);
    res.status(500).json({ error: "An error occurred while fetching training guides." });
  }
};

// Get a single training guide by ID
trainingGuideController.getTrainingGuideById = async (req, res) => {
  try {
    const guide = await TrainingGuide.findById(req.params.id).lean();
    if (guide) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(guide);
    } else {
      res.status(404).json({ error: "Training guide not found." });
    }
  } catch (err) {
    console.error("Error fetching training guide by ID:", err);
    res.status(500).json({ error: "An error occurred while fetching the training guide." });
  }
};

// Get training guide by custom pokemon ID
trainingGuideController.getTrainingGuideByPokemonId = async (req, res) => {
  try {
    const guide = await TrainingGuide.findOne({ custom_pokemon_id: req.params.pokemonId }).lean();
    if (guide) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(guide);
    } else {
      res.status(404).json({ error: "No training guide found for this pokemon." });
    }
  } catch (err) {
    console.error("Error fetching training guide by pokemon ID:", err);
    res.status(500).json({ error: "An error occurred while fetching the training guide." });
  }
};

// Create a new training guide
trainingGuideController.createTrainingGuide = async (req, res) => {
  try {
    const { user_id, custom_pokemon_id, target_evs, target_ivs, notes } = req.body;

    // Validate total EVs
    const totalEVs = Object.values(target_evs).reduce((sum, ev) => sum + ev, 0);
    if (totalEVs > 510) {
      return res.status(400).json({ error: "Total EVs cannot exceed 510. Current total: " + totalEVs });
    }

    // Check achievability
    const achievabilityCheck = await checkAchievability(custom_pokemon_id, target_evs, target_ivs);

    const newGuide = new TrainingGuide({
      user_id: mongoose.Types.ObjectId(user_id),
      custom_pokemon_id: mongoose.Types.ObjectId(custom_pokemon_id),
      target_evs,
      target_ivs,
      is_achievable: achievabilityCheck.achievable,
      notes: notes || ''
    });

    const saved = await newGuide.save();
    
    res.status(201).json({ 
      message: "Training guide created successfully.", 
      id: saved._id,
      achievability: achievabilityCheck
    });
  } catch (err) {
    console.error("Error creating training guide:", err);
    res.status(500).json({ error: "An error occurred while creating the training guide." });
  }
};

// Update a training guide by ID
trainingGuideController.updateTrainingGuideById = async (req, res) => {
  try {
    const { target_evs, target_ivs, ...otherUpdates } = req.body;

    // Validate total EVs if provided
    if (target_evs) {
      const totalEVs = Object.values(target_evs).reduce((sum, ev) => sum + ev, 0);
      if (totalEVs > 510) {
        return res.status(400).json({ error: "Total EVs cannot exceed 510. Current total: " + totalEVs });
      }
    }

    // Get existing guide to check achievability
    const existingGuide = await TrainingGuide.findById(req.params.id).lean();
    if (!existingGuide) {
      return res.status(404).json({ error: "Training guide not found." });
    }

    const updatedEVs = target_evs || existingGuide.target_evs;
    const updatedIVs = target_ivs || existingGuide.target_ivs;

    // Check achievability with updated values
    const achievabilityCheck = await checkAchievability(
      existingGuide.custom_pokemon_id, 
      updatedEVs, 
      updatedIVs
    );

    const updatedData = {
      ...otherUpdates,
      ...(target_evs && { target_evs }),
      ...(target_ivs && { target_ivs }),
      is_achievable: achievabilityCheck.achievable
    };

    const result = await TrainingGuide.updateOne(
      { _id: req.params.id },
      { $set: updatedData }
    );

    if (result.matchedCount > 0) {
      res.status(200).json({ 
        message: "Training guide updated successfully.",
        achievability: achievabilityCheck
      });
    } else {
      res.status(404).json({ error: "Training guide not found." });
    }
  } catch (err) {
    console.error("Error updating training guide:", err);
    res.status(500).json({ error: "An error occurred while updating the training guide." });
  }
};

// Delete a training guide by ID
trainingGuideController.deleteTrainingGuideById = async (req, res) => {
  try {
    const result = await TrainingGuide.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Training guide deleted successfully." });
    } else {
      res.status(404).json({ error: "Training guide not found." });
    }
  } catch (err) {
    console.error("Error deleting training guide:", err);
    res.status(500).json({ error: "An error occurred while deleting the training guide." });
  }
};

// Check achievability for a training guide
trainingGuideController.checkAchievability = async (req, res) => {
  try {
    const { custom_pokemon_id, target_evs, target_ivs } = req.body;

    // Validate total EVs
    const totalEVs = Object.values(target_evs).reduce((sum, ev) => sum + ev, 0);
    if (totalEVs > 510) {
      return res.status(400).json({ error: "Total EVs cannot exceed 510. Current total: " + totalEVs });
    }

    const achievabilityCheck = await checkAchievability(custom_pokemon_id, target_evs, target_ivs);
    
    res.status(200).json(achievabilityCheck);
  } catch (err) {
    console.error("Error checking achievability:", err);
    res.status(500).json({ error: "An error occurred while checking achievability." });
  }
};

module.exports = trainingGuideController;
