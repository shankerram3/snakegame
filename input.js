let lastInputDirection ={ x:0, y:0 }
let inputDirection = { x:0 , y:0 }
export function getInputDirection(){
window.addEventListener('keydown',e =>{
switch (e.key){
    
      case 'ArrowUp':
         console.log(e.key)
          if(lastInputDirection.y == -1)break
         inputDirection = { x:0 , y : -1}
         
         break
      case 'ArrowDown':
        if(lastInputDirection.y  == -1)break
         inputDirection = { x:0 , y : 1}
         break
      case 'ArrowLeft':
        if(lastInputDirection.x  == -1)break
         inputDirection = { x:-1 , y : 0}
         break
      case 'ArrowRight':
        if(lastInputDirection.x  == -1)break
         inputDirection = { x:1 , y : 0}
         break
}          

})
lastInputDirection = inputDirection
return inputDirection

}