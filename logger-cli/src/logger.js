// src/logger.js
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const logsDir = path.resolve('logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

const logFile = path.join(logsDir, 'app.log');

function writeToFile(level, message) {
  const line = `${new Date().toISOString()} [${level}] ${message}\n`;
  fs.appendFileSync(logFile, line);
}

export function info(msg) {
  console.log(chalk.green('[INFO]'), msg);
  writeToFile('INFO', msg);
}

export function warn(msg) {
  console.log(chalk.yellow('[WARN]'), msg);
  writeToFile('WARN', msg);
}

export function error(msg) {
  console.error(chalk.red('[ERROR]'), msg);
  writeToFile('ERROR', msg);
}

export function table(data) {
  console.table(data);
  writeToFile('TABLE', JSON.stringify(data));
}

