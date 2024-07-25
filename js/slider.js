let point = document.querySelectorAll('.navigation__item')
let imageSlider = document.querySelectorAll('.img__pict')
let textOfImg = document.querySelectorAll('.img__text')
let buttonOfImg = document.querySelectorAll('.img__button')

point[0].classList.add('active-point')
imageSlider[0].classList.add('active')
textOfImg[0].classList.add('active')
buttonOfImg[0].classList.add('active')

let counter = 0;

for(let i=0; i<textOfImg.length; i++){
    textOfImg[i].addEventListener('click',()=>{
        for(let k = 0; k<textOfImg.length; k++){
            textOfImg[k].classList.remove('active')
            point[k].classList.remove('active-point')
            buttonOfImg[k].classList.remove('active')
            imageSlider[k].classList.remove('active')
        }
        counter = i;
        textOfImg[counter].classList.add('active');
        buttonOfImg[counter].classList.add('active')
        imageSlider[counter].classList.add('active');
        point[counter].classList.add('active-point');
    })
}

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            textOfImg[k].classList.remove('active')
            point[k].classList.remove('active-point')
            buttonOfImg[k].classList.remove('active')
            imageSlider[k].classList.remove('active')
        }
        counter = i;
        textOfImg[counter].classList.add('active');
        buttonOfImg[counter].classList.add('active')
        imageSlider[counter].classList.add('active');
        point[counter].classList.add('active-point');
    })
}

leftBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        textOfImg[k].classList.remove('name-active')
        point[k].classList.remove('active-point')
        buttonOfImg[k].classList.remove('text-active')
        imageSlider[k].classList.remove('active')
    }
    counter--
    if (counter <0){
        counter = imageSlider.length-1
    }
    textOfImg[counter].classList.add('name-active');
    buttonOfImg[counter].classList.add('text-active')
    imageSlider[counter].classList.add('active');
    point[counter].classList.add('active-point');
})

rightBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        textOfImg[k].classList.remove('name-active')
        point[k].classList.remove('active-point')
        buttonOfImg[k].classList.remove('active')
        imageSlider[k].classList.remove('active')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    textOfImg[counter].classList.add('name-active');
    buttonOfImg[counter].classList.add('text-active')
    imageSlider[counter].classList.add('active');
    point[counter].classList.add('active-point');
})

