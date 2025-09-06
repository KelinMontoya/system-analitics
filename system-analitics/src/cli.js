import chalk from "chalk";

export function startCLI({ logger, monitor }, rl, callback) {
  console.log(chalk.cyan("\n Bienvenido a la CLI de system-analitics"));
  console.log("Comandos: hola, tiempo, monitor on, monitor off, salir");

  rl.question("Ingresa un comando: ", (cmd) => {
    switch (cmd.trim().toLowerCase()) {
      case "hola":
        console.log(chalk.green("¡Hola! ¿Cómo estás?"));
        break;
      case "tiempo":
        console.log(chalk.blue(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`));
        break;
      case "monitor on":
        monitor.startMonitor();
        break;
      case "monitor off":
        monitor.stopMonitor();
        break;
      case "salir":
        console.log(chalk.yellow("⏹  Saliendo de la CLI..."));
        return callback();
      default:
        console.log(chalk.red(" Comando no reconocido."));
    }
    startCLI({ logger, monitor }, rl, callback);
  });
}