let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let triangle = document.querySelector('.triangle-bottom-left');
let ds = document.getElementById('ds');
let bg = document.getElementById('bg');

function trianglesbm() {
    console.log(a.value);
    console.log(triangle);
    console.log(bg.value);

    triangle.style.borderBottom = a.value * 37 + "px solid " + bg.value;
    triangle.style.borderRight= b.value * 37 + "px solid transparent";
    let result = Math.floor(Math.sqrt(Math.pow(a.value, 2) + Math.pow(b.value, 2)));
    ds.innerHTML = "Гипотенуза равна: " + result;
}


let a2 = document.getElementById('a2');
let b2 = document.getElementById('b2');
let c2 = document.getElementById('c2');
let triangle2 = document.querySelector('.triangle-top2');
let bg2 = document.getElementById('bg2');

function trianglesbm2() {
    console.log(a2.value);
    console.log(triangle2);
    
    triangle2.style.borderLeft = a2.value * 37 + "px solid transparent";
    triangle2.style.borderRight = b2.value * 37 + "px solid transparent";
    triangle2.style.borderBottom = a2.value * 37 + "px solid " + bg2.value;
}
