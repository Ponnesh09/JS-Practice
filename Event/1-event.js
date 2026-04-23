console.log("js running");


     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


// document.getElementById('owl').addEventListener('click',(e)=>{
//     console.log(e);
// },false)

// pointer Event
// [[Prototype]]: PointerEvent

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("Clicked inside an ul");
    
// },false)


// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
// },false)


// document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault()
//     e.stopPropagation
//     console.log("google clicked");
// },false)

document.querySelector('#images').addEventListener('click', (e)=>{
    // console.log(e.target.tagName);

    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let ids = e.target.id
        let remove = e.target.parentNode
        remove.remove()
        console.log(`removing parent Node (${ids})`);
        
    }
})



