// src/app.js
import { info, warn, error, table } from './logger.js';

info('Iniciando logger-cli');
table([{ id:1, name:'Ana'}, {id:2, name:'Beto'}]);
warn('Espacio en disco bajo (simulado)');
error('Error simulado en el proceso');
