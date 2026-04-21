console.log("js running");
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    //conditions

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid Number ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid Number ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        //show the result
        result.innerHTML = `${bmi}`
    }
});
