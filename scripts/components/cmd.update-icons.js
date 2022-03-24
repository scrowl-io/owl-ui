import fs from '../utls/file-system.js';
import { compile } from './templater.js';

const setDest = filename => {
  return `packages/icons/src/Default/${filename}`;
};

const update = () => {
  const iconsPath = 'node_modules/material-design-icons/iconfont/codepoints';
  const iconsRaw = fs.getFile(iconsPath);
  const icons = iconsRaw
    .trim()
    .replace(
      /([a-zA-Z|\d]*(_*[a-zA-z|\d]*)) ([a-z|\d]{4,})/g,
      (match, icon) => {
        return `'${icon.trim()}'`;
      }
    )
    .split(/\n/g)
    .join('|');
  const updates = {
    types: {
      template: fs.getFile(`scripts/components/templates/icons/types.hbs`),
      dest: setDest(`Default.types.ts`),
      data: {
        icons,
        datetime: new Date().toDateString(),
      },
    },
  };

  for (let update in updates) {
    const contents = compile(updates[update].template, updates[update].data);

    fs.setFile(updates[update].dest, contents);
  }
};

update();
