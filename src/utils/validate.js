const validator = require('./validator');
const mongoose = require('mongoose');

const isObjectId = (id) => mongoose.Types.ObjectId.isValid(String(id));

const respondValidationError = (errors, next) => {
	const err = new Error('Validation failed');
	err.statusCode = 422;
	err.details = errors;
	next(err);
};

const validateGetAll = (req, res, next) => {
  const rules = {
    page: 'integer|min:1',
    limit: 'integer|min:1|max:100',
    sort: 'in:asc,desc'
  };

  validator(req.query, rules, {}, (errors, isValid) => {
    if (isValid) {
      next();
    } else {
      respondValidationError(errors, next);
    }
  });
};

const validateBattleTeamCreate = (req, res, next) => {
	const rules = {
		name_of_team: 'required|string|max:100',
		custom_pokemon_ids: 'required|array'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			const ids = req.body.custom_pokemon_ids || [];
			if (!Array.isArray(ids) || ids.length === 0) {
				return respondValidationError({ custom_pokemon_ids: ['Team must have at least 1 Pokemon'] }, next);
			}
			if (ids.length > 6) {
				return respondValidationError({ custom_pokemon_ids: ['Team can have a maximum of 6 Pokemon'] }, next);
			}
			const invalid = ids.filter(id => !isObjectId(id));
			if (invalid.length > 0) {
				return respondValidationError({ custom_pokemon_ids: [`Invalid ObjectId(s): ${invalid.join(', ')}`] }, next);
			}

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateBattleTeamUpdate = (req, res, next) => {
	const rules = {
		name_of_team: 'string|max:100',
		custom_pokemon_ids: 'array'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			const ids = req.body.custom_pokemon_ids;
			if (ids) {
				if (!Array.isArray(ids) || ids.length === 0) {
					return respondValidationError({ custom_pokemon_ids: ['Team must have at least 1 Pokemon'] }, next);
				}
				if (ids.length > 6) {
					return respondValidationError({ custom_pokemon_ids: ['Team can have a maximum of 6 Pokemon'] }, next);
				}
				const invalid = ids.filter(id => !isObjectId(id));
				if (invalid.length > 0) {
					return respondValidationError({ custom_pokemon_ids: [`Invalid ObjectId(s): ${invalid.join(', ')}`] }, next);
				}
			}

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateBattleHistoryCreate = (req, res, next) => {
	const rules = {
		battle_team_id: 'required|string',
		battle_date: 'required|date',
		result: 'required|string'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (!isObjectId(req.body.battle_team_id)) {
				return respondValidationError({ battle_team_id: ['Invalid battle_team_id'] }, next);
			}
			if (!['win', 'loss', 'draw'].includes(req.body.result)) {
				return respondValidationError({ result: ["Result must be 'win', 'loss', or 'draw'"] }, next);
			}

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateBattleHistoryUpdate = (req, res, next) => {
	const rules = {
		battle_date: 'date',
		result: 'string'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (req.body.battle_team_id && !isObjectId(req.body.battle_team_id)) {
				return respondValidationError({ battle_team_id: ['Invalid battle_team_id'] }, next);
			}
			if (req.body.result && !['win', 'loss', 'draw'].includes(req.body.result)) {
				return respondValidationError({ result: ["Result must be 'win', 'loss', or 'draw'"] }, next);
			}

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateCustomPokemonCreate = (req, res, next) => {
	const rules = {
		base_pokemon_id: 'required|string',
		nickname: 'optional|string|max:100',
		level: 'required|integer|min:1|max:100',
		ability: 'required|string',
		moves: 'required|array',
		stats: 'required'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (!isObjectId(req.body.base_pokemon_id)) {
				return respondValidationError({ base_pokemon_id: ['Invalid base_pokemon_id'] }, next);
			}

			const moves = req.body.moves || [];
			if (!Array.isArray(moves)) {
                return respondValidationError({ moves: ['Moves must be an array'] }, next);
            } 
			if (moves.length > 4) {
                return respondValidationError({ moves: ['A pokemon can have a maximum of 4 moves'] }, next);
            }
			const invalidMoves = moves.filter(m => !isObjectId(m));
			if (invalidMoves.length > 0) {
                return respondValidationError({ moves: [`Invalid move id(s): ${invalidMoves.join(', ')}`] }, next);
            }

			const stats = req.body.stats || {};
			const statKeys = ['hp','attack','defense','special_attack','special_defense','speed'];
			const statErrors = [];
			statKeys.forEach(k => {
				if (typeof stats[k] !== 'number') {
                    statErrors.push(`${k} must be a number`);
                } 
				else if (stats[k] < 1) {
                    statErrors.push(`${k} must be >= 1`);
                }
			});
			if (statErrors.length > 0) {
                return respondValidationError({ stats: statErrors }, next);
            }

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateCustomPokemonUpdate = (req, res, next) => {
	const rules = {
		base_pokemon_id: 'string',
		nickname: 'string|max:100',
		level: 'integer|min:1|max:100',
		ability: 'string',
		moves: 'array',
		stats: 'required'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (req.body.base_pokemon_id && !isObjectId(req.body.base_pokemon_id)) {
				return respondValidationError({ base_pokemon_id: ['Invalid base_pokemon_id'] }, next);
			}

			if (req.body.moves) {
				if (!Array.isArray(req.body.moves)) {
                    return respondValidationError({ moves: ['Moves must be an array'] }, next);
                }
				if (req.body.moves.length > 4) {
                    return respondValidationError({ moves: ['A pokemon can have a maximum of 4 moves'] }, next);
                }
				const invalidMoves = req.body.moves.filter(m => !isObjectId(m));
				if (invalidMoves.length > 0) {
                    return respondValidationError({ moves: [`Invalid move id(s): ${invalidMoves.join(', ')}`] }, next);
                }
			}

			if (req.body.stats) {
				const stats = req.body.stats;
				const statKeys = ['hp','attack','defense','special_attack','special_defense','speed'];
				const statErrors = [];
				statKeys.forEach(k => {
					if (stats[k] !== undefined && typeof stats[k] !== 'number') { 
                        statErrors.push(`${k} must be a number`);
                     }
					else if (stats[k] !== undefined && stats[k] < 1)  {
                        statErrors.push(`${k} must be >= 1`);
                    }
				});
				if (statErrors.length > 0) {
                    return respondValidationError({ stats: statErrors }, next);
                }
			}

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateGetMovesForPokemon = (req, res, next) => {
	const rules = {
		pokemonId: 'required|string'
	};

	validator(req.params, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (!isObjectId(req.params.pokemonId)) {
                return respondValidationError({ pokemonId: ['Invalid pokemonId'] }, next);
            }
			if (req.query && req.query.level) {
				const lvl = parseInt(req.query.level, 10);
				if (isNaN(lvl) || lvl < 1 || lvl > 100) {
                    return respondValidationError({ level: ['Level must be an integer between 1 and 100'] }, next);
                }
			}
			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateAssignMovesToTeamPokemon = (req, res, next) => {
	const paramRules = {
		teamId: 'required|string',
		pokemonIndex: 'required|integer'
	};

	validator(req.params, paramRules, {}, (errors, isValid) => {
		if (!isValid) {
            return respondValidationError(errors, next);
        }

		if (!isObjectId(req.params.teamId)) {
            return respondValidationError({ teamId: ['Invalid teamId'] }, next);
        }
		const idx = parseInt(req.params.pokemonIndex, 10);
		if (isNaN(idx)) {
            return respondValidationError({ pokemonIndex: ['Invalid pokemonIndex'] }, next);
        }
		if (idx < 0 || idx > 5) {
            return respondValidationError({ pokemonIndex: ['pokemonIndex must be between 0 and 5'] }, next);
        }

		// validate body.moveIds
		const bodyRules = { moveIds: 'required|array' };
		validator(req.body, bodyRules, {}, (bErrors, bIsValid) => {
			if (!bIsValid) {
                return respondValidationError(bErrors, next);
            }

			const moveIds = req.body.moveIds || [];
			if (!Array.isArray(moveIds)) {
                return respondValidationError({ moveIds: ['moveIds must be an array'] }, next);
            }
			if (moveIds.length > 4) {
                return respondValidationError({ moveIds: ['A pokemon can have a maximum of 4 moves'] }, next);
            }
			const invalid = moveIds.filter(m => !isObjectId(m));
			if (invalid.length > 0) {
                return respondValidationError({ moveIds: [`Invalid move id(s): ${invalid.join(', ')}`] }, next);
            }

			return next();
		});
	});
};

const validateTrainingGuideCreate = (req, res, next) => {
	const rules = {
		custom_pokemon_id: 'required|string',
		target_evs: 'required',
		target_ivs: 'required'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (!isObjectId(req.body.custom_pokemon_id)) {
                return respondValidationError({ custom_pokemon_id: ['Invalid custom_pokemon_id'] }, next);
            }

			const evs = req.body.target_evs || {};
			const ivs = req.body.target_ivs || {};
			const statKeys = ['hp','attack','defense','special_attack','special_defense','speed'];
			const evErrors = [];
			statKeys.forEach(k => {
				if (typeof evs[k] !== 'number') { 
                    evErrors.push(`${k} EV must be a number`); 
                }
				else if (evs[k] < 0 || evs[k] > 255) { 
                    evErrors.push(`${k} EV must be between 0 and 255`); 
                }
			});
			if (evErrors.length > 0) {
                return respondValidationError({ target_evs: evErrors }, next);
            }

			const ivErrors = [];
			statKeys.forEach(k => {
				if (typeof ivs[k] !== 'number') { 
                    ivErrors.push(`${k} IV must be a number`); 
                }
				else if (ivs[k] < 0 || ivs[k] > 31) { 
                    ivErrors.push(`${k} IV must be between 0 and 31`); 
                }
			});
			if (ivErrors.length > 0) {
                return respondValidationError({ target_ivs: ivErrors }, next);
            }

			const totalEVs = Object.values(evs).reduce((s, v) => s + v, 0);
			if (totalEVs > 510) {
                return respondValidationError({ target_evs: [`Total EVs cannot exceed 510. Current total: ${totalEVs}`] }, next);
            }

			return next();
		}

		return respondValidationError(errors, next);
	});
};

const validateTrainingGuideUpdate = (req, res, next) => {
	const rules = {
		target_evs: 'required',
		target_ivs: 'required'
	};

	validator(req.body, rules, {}, (errors, isValid) => {
		if (isValid) {
			if (req.body.target_evs) {
				const evs = req.body.target_evs || {};
				const statKeys = ['hp','attack','defense','special_attack','special_defense','speed'];
				const evErrors = [];
				statKeys.forEach(k => {
					if (evs[k] !== undefined && typeof evs[k] !== 'number') { 
                        evErrors.push(`${k} EV must be a number`); 
                    }
					else if (evs[k] !== undefined && (evs[k] < 0 || evs[k] > 255)) { 
                        evErrors.push(`${k} EV must be between 0 and 255`); 
                    }
				});
				if (evErrors.length > 0) {
                    return respondValidationError({ target_evs: evErrors }, next);
                }
				const totalEVs = Object.values(evs).reduce((s, v) => s + v, 0);
				if (totalEVs > 510) {
                    return respondValidationError({ target_evs: [`Total EVs cannot exceed 510. Current total: ${totalEVs}`] }, next);
                }
			}

			if (req.body.target_ivs) {
				const ivs = req.body.target_ivs || {};
				const statKeys = ['hp','attack','defense','special_attack','special_defense','speed'];
				const ivErrors = [];
				statKeys.forEach(k => {
					if (ivs[k] !== undefined && typeof ivs[k] !== 'number') { 
                        ivErrors.push(`${k} IV must be a number`); 
                    }
					else if (ivs[k] !== undefined && (ivs[k] < 0 || ivs[k] > 31)) { 
                        ivErrors.push(`${k} IV must be between 0 and 31`); 
                    }
				});
				if (ivErrors.length > 0) {
                    return respondValidationError({ target_ivs: ivErrors }, next);
                }
			}

			return next();
		}

		return respondValidationError(errors, next);
	});
};


// ------------------------ //
// Generic param validators // 
// ------------------------ //

const validateIdParam = (paramName) => (req, res, next) => {
	const rules = {};
	rules[paramName] = 'required|string';
	validator(req.params, rules, {}, (errors, isValid) => {
		if (!isValid) {
            return respondValidationError(errors, next);
		}
		if (!isObjectId(req.params[paramName])) {
            return respondValidationError({ [paramName]: ['Invalid id'] }, next);
		}
		return next();
	});
};

const validateNameParam = (paramName) => (req, res, next) => {
	const rules = {};
	rules[paramName] = 'required|string';
	validator(req.params, rules, {}, (errors, isValid) => {
		if (!isValid) {
            return respondValidationError(errors, next);
		}
		return next();
	});
};

const validateBattleTeamId = validateIdParam('id');
const validateBattleTeamByName = validateNameParam('name');

const validateBattleHistoryId = validateIdParam('id');
const validateBattleHistoryByTeamId = validateIdParam('teamId');
const validateBattleHistoryByTeamName = validateNameParam('teamName');

const validateCustomPokemonId = validateIdParam('id');
const validateCustomPokemonByName = validateNameParam('name');

const validatePokemonId = validateIdParam('id');

const validateTrainingGuideId = validateIdParam('id');
const validateTrainingGuideByPokemonId = validateIdParam('pokemonId');


module.exports = {
    validateGetAll,
	validateBattleTeamCreate,
	validateBattleTeamUpdate,
	validateBattleTeamId,
	validateBattleTeamByName,
	validateBattleHistoryCreate,
	validateBattleHistoryUpdate,
	validateBattleHistoryId,
	validateBattleHistoryByTeamId,
	validateBattleHistoryByTeamName,
	validateCustomPokemonCreate,
	validateCustomPokemonUpdate,
	validateCustomPokemonId,
	validateCustomPokemonByName,
	validateGetMovesForPokemon,
	validateAssignMovesToTeamPokemon,
	validatePokemonId,
	validateTrainingGuideCreate,
	validateTrainingGuideUpdate,
	validateTrainingGuideId,
	validateTrainingGuideByPokemonId
};