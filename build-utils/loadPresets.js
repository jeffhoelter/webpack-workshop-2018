const webpackMerge = require("webpack-merge");

const applyPresets = env => {
  const { presets } = env;
  /** @type {string[]} */
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./build-utils/webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
