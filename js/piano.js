let aButton = document.querySelector('#a');
let bButton = document.querySelector('#b');
let cButton = document.querySelector('#c');
let dButton = document.querySelector('#d');
let eButton = document.querySelector('#e');
let fButton = document.querySelector('#f');
let gButton = document.querySelector('#g');

let aAudio = new Audio("audio/piano-a_A_major.wav");
let bAudio = new Audio("audio/piano-b_B_major.wav");
let cAudio = new Audio("audio/piano-c_C_major.wav");
let dAudio = new Audio("audio/piano-d_D_major.wav");
let eAudio = new Audio("audio/piano-e_E_major.wav");
let fAudio = new Audio("audio/piano-f_F_major.wav");
let gAudio = new Audio("audio/piano-g_G_major.wav");

aAudio.volume = 0.3;
bAudio.volume = 0.3;
cAudio.volume = 0.3;
dAudio.volume = 0.3;
eAudio.volume = 0.3;
fAudio.volume = 0.3;
gAudio.volume = 0.3;

aButton.addEventListener( "mousedown", function(){
    aAudio.pause();
    aAudio.currentTime = 0;
    aAudio.play();
} );

bButton.addEventListener( "mousedown", function(){
    bAudio.pause();
    bAudio.currentTime = 0;
    bAudio.play();
} );

cButton.addEventListener( "mousedown", function(){
    cAudio.pause();
    cAudio.currentTime = 0;
    cAudio.play();
} );

dButton.addEventListener( "mousedown", function(){
    dAudio.pause();
    dAudio.currentTime = 0;
    dAudio.play();
} );

eButton.addEventListener( "mousedown", function(){
    eAudio.pause();
    eAudio.currentTime = 0;
    eAudio.play();
} );

fButton.addEventListener( "mousedown", function(){
    fAudio.pause();
    fAudio.currentTime = 0;
    fAudio.play();
} );

gButton.addEventListener( "mousedown", function(){
    gAudio.pause();
    gAudio.currentTime = 0;
    gAudio.play();
} );
