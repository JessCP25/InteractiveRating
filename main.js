const submit = document.getElementById('submit');


submit.addEventListener('click', points);

function points(){
    const point = document.querySelector('input[name="points"]:checked');
    console.log('hola');
    if(point){
        window.location.href = "./thankyou.html?point=" + encodeURIComponent(point.value);
    }else{
        window.location.href = "./index.html";
    }
}