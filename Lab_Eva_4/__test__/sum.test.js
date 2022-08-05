//es el archivo q queiroe q elas es un modulo que necesita exportarlo

const { TestWatcher } = require('jest');

const suma = require('./sum.js');

test('sumar 5 + 3 es igual a 8', ()=>{
    //esta de toBe es propio de Jest
    expect(suma(5,3)).toBe(8);
});


