// Feature 	        setTimeout	                                    setInterval
// Execution	    Runs the code once after the specified delay.	Runs the code repeatedly at fixed intervals.
// Clear Method	    clearTimeout(id).	                            clearInterval(id).
// Typical Use	    Delayed alerts, simple one-time UI changes.	    Real-time clocks, polling servers, or continuous animations.


//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
return color;
};

let intervalId;

const startCBC = function(){
    console.log(`start clicked `);
    
            if(!intervalId){
                intervalId = setInterval(changeBGColor, 1000);
            }

 function changeBGColor(){
    document.body.style.backgroundColor = randomColor();
 }
};

const stopCBC  = function(){
    console.log("stop clicked");

    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startCBC)
document.querySelector('#stop').addEventListener('click', stopCBC)







  