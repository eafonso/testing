const fs = require('fs');

const dict = {
    '0' : ['A','K','U','4'],
    '1' : ['B','L','V','5'],
    '2' : ['C','M','W','6'],
    '3' : ['D','N','X','7'],
    '4' : ['E','O','Y','8'],
    '5' : ['F','P','Z','9'],
    '6' : ['G','Q','0','N'],
    '7' : ['H','R','1','E'],
    '8' : ['I','S','2','R'],
    '9' : ['J','T','3','O']
}

function gerarHash(cpf){
    let stringGeral = ''
    for(let i = 0; i < 5000; i++){
        let str = '';
        for(number in cpf){
            const numberEnviado = Math.floor((Math.random() * 4));
            str += dict[cpf[number]][numberEnviado]
        }
        stringGeral += str + '\n';
    }
    fs.writeFile('arquivo.txt', stringGeral, (err) => {
        if (err) throw err;
      console.log('O arquivo foi criado!');
    });
}

gerarHash('07216218566')