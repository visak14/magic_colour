const randomColour = function(){
    const hex = '0123456789ABCDEF'
    let colur  = '#'
    for(let i = 0;i<6; i++){
         colur += hex[Math.floor(Math.random() * 16)]
    }
    return colur;
}
let interverId
const startChangingColour = function(){
     if(!interverId){
        interverId = setInterval(changeBgColour,1000)
     }
   function changeBgColour(){
    document.body.style.backgroundColor = randomColour()
   }
}

const stopChangingColour = function(){
  clearInterval(interverId);
  interverId = null
}
document.querySelector('#ss').addEventListener('click', startChangingColour)

document.querySelector('#st').addEventListener('click', stopChangingColour)


