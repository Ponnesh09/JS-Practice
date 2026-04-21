console.log("js running");

const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')

btn.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        body.style.backgroundColor = e.target.id;

        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'orange'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'pink'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'green') {
        //     body.style.backgroundColor = e.target.id 
        // }
        
    
});

});