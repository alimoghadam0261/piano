const pinaoKeys = document.querySelectorAll('.key')


function playSound(newUrl){
    console.log(newUrl)
    new Audio(newUrl).play();
}



pinaoKeys.forEach((pianoKey,i)=>{
    const number = i < 9 ? '0' + (i+1) : (i+1)
    const newUrl = 'music/1/key' + number +'.mp3'
    const white = document.querySelectorAll('.white-key')
    const black = document.querySelectorAll('.black-key')
    pianoKey.addEventListener('click',()=>{
        playSound(newUrl)
    black.style.opacity='0.5'
        white.style.opacity='0.5'
    })
 })
