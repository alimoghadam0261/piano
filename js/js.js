let $=document;

let doo=$.querySelector('.do');
let re=$.querySelector('.re');
let me=$.querySelector('.me');
let fa=$.querySelector('.fa');
let sol=$.querySelector('.sol');
let la=$.querySelector('.la');
let ci=$.querySelector('.ci');


let music=$.querySelector('.music');
let musicr=$.querySelector('.musicr');
let musicme=$.querySelector('.musicme');
let musicfa=$.querySelector('.musicfa');
let musicsol=$.querySelector('.musicsol');
let musicla=$.querySelector('.musicla');
let musicci=$.querySelector('.musicci');

// doo.addEventListener('mousedown', ()=>{
//         music.play();
// })

document.addEventListener('keydown',(e)=>{
       if(e.key == 'z'){
               music.play();
       }
        if(e.key == 'x'){
                musicr.play();
        }
        if(e.key == 'c'){
                musicme.play();
        }
        if(e.key == 'v'){
                musicfa.play();
        }
        if(e.key == 'b'){
                musicsol.play();
        }
        if(e.key == 'n'){
                musicla.play();
        }
        if(e.key == 'm'){
                musicci.play();
        }
})


re.addEventListener('mousedown',()=>{
        musicr.play();
})
me.addEventListener('mousedown',()=>{
        musicme.play();
})
fa.addEventListener('mousedown',()=>{
        musicfa.play();
})
sol.addEventListener('mousedown',()=>{
        musicsol.play();
})
la.addEventListener('mousedown',()=>{
        musicla.play();
})
ci.addEventListener('mousedown',()=>{
        musicci.play();
})
