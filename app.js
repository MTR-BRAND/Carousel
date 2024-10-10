let nextButton = document.getElementById("next");
let pervButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHtml = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelector(".seeMore");
let backButton = document.querySelector("back");


nextButton.onclick = function(){
    showSilder("next");
}

pervButton.onclick = function(){
    showSilder("prev");
}

let unAcceppClick;

const showSilder = (type) =>{
    nextButton.style.pointerEvents = 'none';
    pervButton.style.pointerEvents = 'none';

    carousel.classList.remove('next' , 'prev');
    let items = document.querySelectorAll(".carousel .list .item")
    if(type === 'next'){
        listHtml.appendChild(items[0])
        carousel.classList.add('next');
    }else{
        listHtml.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
    }

    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        pervButton.style.pointerEvents = 'auto';
    }, 2000)
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next' , 'prev');
        carousel.classList.add('showDetail');
    }
});

backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}


