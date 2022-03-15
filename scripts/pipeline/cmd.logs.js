import fs from '../utls/file-system.js';
import parser from 'yargs-parser';
import { log, clear, color } from '../utls/console.js';

const formatReport = rawFile => {
  const lines = rawFile.split(/\r|\n/g);
  const report = {};
  const regex = {
    loc: /line (\d+), col (\d+),/i,
    log: /line \d+, col \d+,/i,
  };

  const formatter = line => {
    if (regex.log.test(line)) {
      const loc = regex.loc.exec(line);
      const lineNum = parseInt(loc[1], 10);
      const colNum = parseInt(loc[2], 10);
      const parts = line.split(regex.log);
      const rawPath = parts[0].trim();
      const filepath = `${rawPath}${lineNum}:${colNum}`;
      const localPath = rawPath.replace(
        '/Users/chrisaube/Documents/GitHub/owl-ui/',
        ''
      );
      const msg = parts[1].trim();

      if (!Object.prototype.hasOwnProperty.call(report, localPath)) {
        report[localPath] = [];
      }

      report[localPath].push(`${filepath} - ${msg}`);
    }
  };

  lines.forEach(formatter);
  return report;
};

const logReport = rawMsg => {
  const msg = rawMsg
    .replace('Error', color('Error', 'red', true))
    .replace('Warning', color('Warning', 'yellow', true));

  log(msg);
};

const processArgs = () => {
  try {
    const argv = parser(process.argv.slice(2));

    if (!Object.prototype.hasOwnProperty.call(argv, 'f')) {
      throw Error('No file name supplied, use -f to specify a file');
    }

    const filepath = argv.f;
    const file = fs.getFile(filepath);
    const report = formatReport(file);
    let issuesNum = '';

    for (let loc in report) {
      issuesNum = color(`Found ${report[loc].length} issues\n`, 'purple', true);
      log(`\n\n${loc} ${issuesNum}`, 'info');
      report[loc].forEach(logReport);
    }
  } catch (err) {
    log(err);
    process.exit(1);
  }
};

clear();
processArgs();
