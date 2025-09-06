import chalk from 'chalk';

export function startSystem() {
  console.log(chalk.green.bold('\n=== Inicio del sistema ===\n'));
}

export function endSystem() {
  console.log(chalk.green.bold('\n=== Fin del sistema ===\n'));
}

export function logAccess(user) {
  console.count(chalk.blue(` Acceso de usuario ${user}`));
}

export function warn(msg) {
  console.warn(chalk.yellow(`${msg}`));
}

export function error(msg) {
  console.error(chalk.red.bold(`${msg}`));
}

export function table(data) {
  console.log(chalk.cyan('\n Lista de usuarios conectados: '));
  console.table(data);
}

export function timerStart(label) {
  console.time(chalk.yellow(label));
}

export function timerEnd(label) {
  console.timeEnd(chalk.yellow(label));
}

