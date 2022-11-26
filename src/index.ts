import './styles.css';

const app = document.getElementById('app');

(() => {
    if(!app) return
    app.innerHTML = `<h1>Hello World!</h1>`
})()

