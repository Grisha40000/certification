const priceList = document.querySelector('.price_list');
const priceListItem = document.querySelectorAll(' .price-list_item');

priceListItem.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        priceListItem.forEach(el => {
            el.classList.remove('price-list_item_other');
            el.querySelector('.price-item_subtitle').classList.remove('price-item_other');
            el.querySelector('.price-item_user').classList.remove('price-item_user_other');
            el.querySelector('.price-item_title').classList.remove('price-item_other');
            el.querySelector('.price-item_title .price-item_currency').classList.remove('price-item_other');
            el.querySelector('.price-item_btn').classList.remove('price-item_btn_other');
        });

        item.classList.add('price-list_item_other');
        item.querySelector('.price-item_subtitle').classList.add('price-item_other');
        item.querySelector('.price-item_user').classList.add('price-item_user_other');
        item.querySelector('.price-item_title').classList.add('price-item_other');
        item.querySelector('.price-item_title .price-item_currency').classList.add('price-item_other');
        item.querySelector('.price-item_btn').classList.add('price-item_btn_other');
    });



});


const formInputPassword =document.querySelector('#form-input_password');
const formInputTypePassword =document.querySelector('#form-input_type-password');
const formEl = document.querySelector('.form');
const formBtn = document.querySelector('.form_btn');

formEl.addEventListener('submit', function (e) {
    if(formInputPassword.value === formInputTypePassword.value) {
        e.preventDefault();
        formInputPassword.style.border = '2px solid green';
        formInputTypePassword.style.border = '2px solid green';
    } else {
        e.preventDefault();
        formInputPassword.style.border = '2px solid red';
        formInputTypePassword.style.border = '2px solid red';
        formInputPassword.setCustomValidity('Пароль неверный');
        formInputPassword.reportValidity()
        formInputTypePassword.setCustomValidity('Пароль неверный');
        formInputTypePassword.reportValidity()
    }
});



const images = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__list');
const pointer = document.querySelectorAll('.pointer');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }

    
    rollSlider();
});

document.querySelector('.slider__prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
