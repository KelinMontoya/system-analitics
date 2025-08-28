// practica1/registro-sistema.js
const users = [
  { id: 1, name: 'Ana', role: 'admin' },
  { id: 2, name: 'Carlos', role: 'user' },
  { id: 3, name: 'María', role: 'user' }
];

console.time('proceso-registro');

users.forEach(user => {
  console.count('accesos'); // cuenta llamadas
  if (user.role === 'admin') console.warn(`Acceso elevado: ${user.name}`);
});

console.table(users); // tabla legible en consola

console.error('Simulación: hubo un error en el registro del usuario id 5');

console.timeEnd('proceso-registro');
