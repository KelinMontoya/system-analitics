// practica3/system-monitor.js
const os = require('os');

function humanBytes(bytes) {
  return `${Math.round(bytes / (1024*1024))} MB`;
}

function printStats() {
  console.clear();
  console.log('=== System Monitor ===');
  console.log('Platform:', os.platform());
  console.log('Uptime:', Math.round(os.uptime()), 's');
  console.log('CPU:', os.cpus()[0].model);
  console.log('Cores:', os.cpus().length);
  console.log('Total mem:', humanBytes(os.totalmem()));
  console.log('Free mem:', humanBytes(os.freemem()));
  console.table({
    loadavg: os.loadavg().map(n => n.toFixed(2))
  });
}

const id = setInterval(printStats, 2000);

process.on('SIGINT', () => {
  console.log('\nMonitor detenido (CTRL+C).');
  clearInterval(id);
  process.exit(0);
});
