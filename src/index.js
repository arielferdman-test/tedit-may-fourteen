import { Doc, Let } from './doc-model';

window.doc = new Doc();

window.acorn = require('acorn');

window.editor = null;
window.suggester = null;
window.displayer = null;

function suggest() {
    generate_selectors();
}

function handle_keypress(e) {
    console.clear();
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
    if (e.key === 'd') {
        let msg = 'let x = 5';
        console.log(msg);
        console.log(doc);
        print_editor(msg);
    }
}

function print_editor(msg) {
    editor.innerHTML = msg;
}

function print_suggest(msg) {
    suggester.innerHTML += msg;
}

window.onload = () => {
    editor = document.querySelector('.editor');
    suggester = document.querySelector('.suggester');
    displayer = document.querySelector('.displayer');

    editor.addEventListener('keypress', (e) => {
        handle_keypress(e);
    })

    print_suggest('<div style="margin-left: 30%; margin-top: 10px; font-size: 40px;">Statement Mode</div>');
    let div_open = '<div';
    let div_rbracket = '>';
    let div_close = '</div>';
    suggester.innerHTML += '<span class="marker">d</span>';
    suggester.innerHTML += '<span style="margin-left: 20px;">let</span>';
    editor.focus();
}
// 1px 1px 20px 6px yellow