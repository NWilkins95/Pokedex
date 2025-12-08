module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '6.0.0',
      skipMD5: true,
    },
    instance: {
      dbName: 'pokedex-test',
    },
    autoStart: false,
  },
};
