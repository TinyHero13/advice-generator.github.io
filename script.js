function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const AdviceObj = data.slip;
        show(AdviceObj);
    })
    
}

function show(AdviceObj){
    const adviceText = document.getElementById("advice");
    const number = document.getElementById("number");
    number.innerHTML = AdviceObj.id;
    adviceText.innerHTML = AdviceObj.advice;

}

window.onload = () => {
    getAdvice();
};