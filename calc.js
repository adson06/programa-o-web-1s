// Para criar a aplicação npm: 'npm init'
// Para instalar o express: 'npm install express@4.21.2'

// Carrega o módulo /util/calculadora.js na variável calc
const calc = require('./util/calculadora');

// Carrega módulo express
const express = require('express');
const calc = require('./calculadora');

// Cria uma aplicação do tipo express
const app = express();

// Define o comportamento da aplicação
// Para requisições na rota '/'
app.get('/', (req, res)=>{
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas disponíveis</h3>';
    html += '<p>/somar/:a/:b (<a href="/somar/2/3">somar/2/3</a>)</p>';
    html += '<p>/subtrair/:a/:b (<a href="/subtrair/2/3">subtrair/2/3</a>)</p>';
    html += '<p>/multiplicar/:a/:b (<a href="/multiplicar/2/3">multiplicar/2/3</a>)</p>';
    html += '<p>/dividir/:a/:b (<a href="/dividir/2/3">dividir/2/3</a>)</p>';
    html += '<h3>Rotas disponíveis:</h3>';
    html += '<p>/somar/:a/:b <a href="/somar/1/2">testar</a></p>';
    html += '<p>/subtrair/:a/:b <a href="/subtrair/1/2">testar</a></p>';
    html += '<p>/multiplicar/:a/:b <a href="/multiplicar/1/2">testar</a></p>';
    html += '<p>/dividir/:a/:b <a href="/dividir/1/2">testar</a></p>';
    res.send(html);
});

// Define o comportamento da aplicação
// Para requisições na rota '/somar/:a/:b'
app.get('/somar/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calc.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
    let b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${resultado}`);
    let b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${resultado}`);
    let b = Number(req.params.b);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calc.dividir(a, b);
    res.send(`${a} / ${b} = ${resultado}`);
    let b = Number(req.params.b);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);
});

// Declara porta 8080
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
    console.log(`app rodando na porta ${PORT}`);
});
