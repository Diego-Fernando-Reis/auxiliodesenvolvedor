const { ok } = require('assert');
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
        temp = armazenarPropriedades[i-1];
        armazenarPropriedades[i-1] = armazenarPropriedades[i];
        armazenarPropriedades[i] = temp;
      }else{
        armazenarPropriedades[i] = armazenarPropriedades[i];
      }
    }
    console.log(armazenarPropriedades.join(''))
    rl.close;
  }else{
    armazenarPropriedades.push(`${age}\n`); 
    rl.setPrompt('Insira a propriedade css: ');
    rl.prompt()
  }
});