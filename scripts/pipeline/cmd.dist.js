import { execSync as exec } from 'child_process';
import fs from '../utls/file-system.js';
import locations from '../utls/locations.js';
import { apply as applyFixes } from '../node-module-fixes/module-fixes.js';

const logLevel = '--log-level warn';

function getRemoteOptions(config) {
  let options = '';

  for (let opt in config) {
    options += `${opt} ${config[opt]} `;
  }

  return options;
}

function build(entry, remoteConfig) {
  let remoteOpts = '';

  if (remoteConfig) {
    remoteOpts = getRemoteOptions(remoteConfig);
  }

  console.log(`building: ${entry} ${remoteOpts}`);
  exec(`parcel build ${entry} ${logLevel} ${remoteOpts}`);
}

function buildTargets(pkg, entries, remoteConfig) {
  entries.forEach(entry => {
    let target;
    let remoteOpts = '';

    if (fs.getExt(entry)) {
      target = `${pkg}/${entry} --dist-dir ${pkg}/dist`;
    } else {
      target = `${pkg} --target ${entry}`;
    }

    if (remoteConfig) {
      remoteOpts = getRemoteOptions(remoteConfig);
    }

    console.log(`building: ${pkg} ${entry} ${remoteOpts}`);
    exec(`parcel build ${target} ${logLevel} ${remoteOpts}`);
  });
}

function preBuild(name, config) {
  const pkg = fs.normalize(`packages/${name}`);

  const dist = `packages/${name}/dist`;
  fs.removeSync(dist);

  if (config.entries instanceof Array) {
    buildTargets(pkg, config.entries, config.config.parcelrc);
  } else {
    build(pkg, config.config.parcelrc);
  }
}

function postBuild(files) {
  function getDistPath(pkg, filename) {
    return `packages/${pkg}/dist/${filename}`;
  }

  function replaceMapNames(path, lookup, replacer) {
    const contents = fs.getFile(path);

    return contents.replace(new RegExp(lookup, 'g'), () => {
      return replacer;
    });
  }

  files.forEach(file => {
    const buildName = file.source.replace('src/', '').replace('.scss', '.css');
    const buildPath = getDistPath(file.package, buildName);
    const buildMapName = buildName + '.map';
    const buildMapPath = buildPath + '.map';
    const distName = file.dist.replace('dist/', '');
    const distPath = getDistPath(file.package, file.dist.replace('dist/', ''));
    const distMapName = distName + '.map';
    const distMapPath = distPath + '.map';

    fs.renameFile(buildPath, distPath);
    fs.renameFile(buildMapPath, distMapPath);

    const buildContents = replaceMapNames(distPath, buildMapName, distMapName);
    const mapContents = replaceMapNames(distMapPath, buildMapName, distMapName);

    fs.setFile(distPath, buildContents);
    fs.setFile(distMapPath, mapContents);
  });
}

function process() {
  const pkgs = locations.entries();
  const componentsPkg = 'components';
  const themePkg = 'theme';
  const utilsPkg = 'utils';

  fs.removeSync('.parcel-cache');
  applyFixes();

  preBuild(utilsPkg, pkgs[utilsPkg]);

  for (let pkg in pkgs) {
    if (pkg !== componentsPkg && pkg !== utilsPkg) {
      preBuild(pkg, pkgs[pkg]);
    }
  }

  preBuild(componentsPkg, pkgs[componentsPkg]);
  postBuild([
    {
      package: themePkg,
      source: pkgs[themePkg].config.source,
      dist: pkgs[themePkg].config.style,
    },
    {
      package: componentsPkg,
      source: pkgs[componentsPkg].config.targets.style.source,
      dist: pkgs[componentsPkg].config.style,
    },
  ]);
  console.log(`\n`);
}

process();
