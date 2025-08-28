// practica2/cli-tool.js
process.stdin.setEncoding('utf8');

console.log('CLI simple: escribe "hola", "tiempo" o "salir".');

process.stdin.on('data', data => {
  const cmd = data.toString().trim().toLowerCase();

  if (cmd === 'hola') {
    process.stdout.write('¡Hola! ¿Cómo estás?\n');
  } else if (cmd === 'tiempo') {
    process.stdout.write(`Hora actual: ${new Date().toLocaleString()}\n`);
  } else if (cmd === 'salir') {
    process.stdout.write('Saliendo...\n');
    process.exit(0);
  } else {
    process.stdout.write(`Comando desconocido: ${cmd}\n`);
  }
});
