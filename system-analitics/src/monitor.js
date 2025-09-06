import os from 'os';
import chalk from 'chalk';

let intervalId = null;

function snapshot() {
  console.clear();
  console.log(chalk.magenta(' Monitor de Sistema'));
  console.log('----------------------------------------');
  console.log(`Sistema: ${os.platform()} (${os.arch()})`);
  console.log(`CPU: ${os.cpus()[0].model}`);
  console.log(`Núcleos: ${os.cpus().length}`);
  console.log(`Memoria Libre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Memoria Total: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Uptime: ${(os.uptime() / 60).toFixed(2)} minutos`);
  console.log(`Usuario: ${os.userInfo().username}\n`);
}

export function startMonitor(interval = 5000) {
  if (intervalId) return;
  snapshot();
  intervalId = setInterval(snapshot, interval);
}

export function stopMonitor() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log(chalk.green(' Monitor detenido.'));
  }
}
