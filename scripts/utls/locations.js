import fs from 'fs';
import path from 'path';
import { execSync as exec } from 'child_process';
import { log } from './console.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const filename = '[id]/dist/owl.[name].js';

export const getPackagePaths = () => {
  const pkgPaths = [];
  const pkgs = JSON.parse(exec('yarn workspaces info --json').toString());

  for (let pkg in pkgs) {
    if (/packages\//.test(pkgs[pkg].location)) {
      const pkgPath = path.join(
        __dirname,
        '../..',
        pkgs[pkg].location,
        'package.json'
      );

      pkgPaths.push(pkgPath);
    }
  }

  return pkgPaths;
};

export const setTargets = (entry, pkg) => {
  entry.entries = [];
  entry.dists = [];

  for (let target in pkg.targets) {
    if (pkg.targets[target] !== false) {
      entry.entries.push(target);
      entry.dists.push(pkg[target]);
    }
  }
};

export const getEntries = () => {
  const entries = {};
  const packages = getPackagePaths();
  const libPrefix = '@owlui/';

  packages.forEach(pkgPath => {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const name = pkg.name.replace(libPrefix, '');

    entries[name] = {
      path: pkgPath,
      config: pkg,
    };

    if (pkg.source) {
      entries[name].entries = pkg.source;
      entries[name].dists = pkg.main;
    } else if (pkg.targets) {
      setTargets(entries[name], pkg);
    } else {
      log('[WARN] Package not defined correctly: skipping', 'warn');
      print(pkg);
    }
  });

  return entries;
};

export default {
  filename,
  packagePaths: getPackagePaths,
  entries: getEntries,
};
