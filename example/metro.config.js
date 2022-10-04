/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const escape = require('escape-string-regexp');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');
const peerDependencies = Object.keys(pkg.peerDependencies);
const modules = [...peerDependencies, '@babel/runtime'];

module.exports = {
  watchFolders: [root],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blacklistRE: exclusionList(
      modules.map(m => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`)),
    ),
    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),
  },
};