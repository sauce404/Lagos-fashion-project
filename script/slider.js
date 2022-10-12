const image = document.querySelector(".inner-container img");
const leftBtn = document.querySelector(".fa-chevron-left");
const rightBtn = document.querySelector(".fa-chevron-right");
const h2 = document.querySelector(".slider .container h2");
const p = document.querySelector(".slider .container p");

const models = [
    {
        name: "Promise Oke",
        text: "With so many camera phones backstage at shoots and runway shows sometimes someone will try and capture models at times when they may not want to be photographed. I personally had a shoot for a prominent magazine and whilst the other models and I were getting changed there was a dodgy guy taking pictures with hidden cameras. Not cool.",
        url: ".\\images\\model1.jpg" 
    },
    {
        name: "Vera Micheal",
        text: "Whereas in reality many models (apart from supermodels) find it tricky getting regular bookings. There can often be periods of time with nothing but castings before work starts coming in.",
        url: ".\\images\\model2.jpg" 
    },
    {
        name: "Kenny Ransom",
        text: "There can be the rare occasions whereby a model can apply for, or turn up at a shoot, expecting one thing (e.g. a fashion shoot) and find that the photographer wants to try and change it to a topless or nude shoot.",
        url: ".\\images\\model3.jpg" 
    }
]

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);

let index = 0;

function prev(){
    if(index <= 0){
        index = 2;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }else{
        index = index - 1;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }
}

function next(){
    if(index > 2){
        index = 0;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }else{
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
        index = index + 1;
    }
}

