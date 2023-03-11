const { ok } = require('assert');
const fs = require('fs')
const path = require('path')
let armazenarPropriedades = [];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Insira a propriedade css: ');
rl.prompt()
rl.on('line', (age) => {
  if(age == 'sair'){
    let temp = 'a';
    for(let i=1; i<armazenarPropriedades.length; i++){
      if(armazenarPropriedades[i] < armazenarPropriedades[i-1]){
        console.log(armazenarPropriedades[i])
        temp = armazenarPropriedades[i-1];
        armazenarPropriedades[i-1] = armazenarPropriedades[i];
        armazenarPropriedades[i] = temp;
      }else{
        armazenarPropriedades[i] = armazenarPropriedades[i];
      }
    }
    console.log(armazenarPropriedades);
    rl.close;
  }else{
    armazenarPropriedades += `${age}`; 
    rl.setPrompt('Insira a propriedade css: ');
    rl.prompt()
  }
});