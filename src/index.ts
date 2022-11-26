import './styles.css';

const app = document.getElementById('app');

function init() {
    if(!app) {
        console.log("No app present.")
        return
    }

    app.innerHTML = `<h1>Hello World!</h1>`
}

init();
