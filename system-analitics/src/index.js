import readline from "readline";
import * as logger from "./logger.js";
import * as monitor from "./monitor.js";
import { startCLI } from "./cli.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.clear();
  console.log("=== Proyecto system-analitics ===");
  console.log("1. Registro y depuración (Logger)");
  console.log("2. Monitor del sistema");
  console.log("3. Herramienta CLI");
  console.log("4. Salir\n");

  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        ejecutarLogger();
        break;
      case "2":
        ejecutarMonitor();
        break;
      case "3":
        ejecutarCLI();
        break;
      case "4":
        console.log("\n ¡Hasta luego!");
        rl.close();
        break;
      default:
        console.log("\n Opción inválida");
        volverAlMenu();
    }
  });
}

function ejecutarLogger() {
  logger.startSystem();
  logger.timerStart("ProcesoPrincipal");

  // Simulación de accesos
  logger.logAccess("Carlos");
  logger.logAccess("Ana");
  logger.logAccess("Carlos");

  logger.warn("Capacidad de usuarios alcanzando el límite");
  logger.error("No se pudo conectar a la base de datos");

  const usuarios = [
    { nombre: "Carlos", rol: "Admin" },
    { nombre: "Ana", rol: "User" },
  ];
  logger.table(usuarios);

  logger.timerEnd("ProcesoPrincipal");
  volverAlMenu();
}

function ejecutarMonitor() {
  monitor.startMonitor(3000);
  rl.question("\n Presiona ENTER para detener el monitor...", () => {
    monitor.stopMonitor();
    volverAlMenu();
  });
}

function ejecutarCLI() {
  startCLI({ logger, monitor }, rl, () => {
    volverAlMenu();
  });
}

function volverAlMenu() {
  rl.question("\nPresiona ENTER para volver al menú...", () => {
    menu();
  });
}

menu();
