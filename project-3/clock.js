


const clocks = document.querySelector('#clock')
const dates = document.querySelector('#date')

// const clock = document.getElementById('clock')

setInterval(()=>{
    const clock = new Date()
    // console.log(date.toLocaleTimeString());
    clocks.innerHTML = clock.toLocaleTimeString();
    },1000)

    const date = new Date()
    dates.innerHTML = date.toLocaleDateString();
    console.log(date.toLocaleDateString());
    



