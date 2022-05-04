//---------Set-Variables-To-Landing-Page--------------------->
let landing_Nav        = document.querySelector('.landing nav');
let landing_Links      = document.querySelectorAll('.landing nav ul li a');
let icons              = document.querySelectorAll('.icons i');
let time_icon          = document.querySelector('.time_icon');
//---------Set-Nav-Scroll-Event-To-Landing-Page--------------------->
window.addEventListener('scroll',activeNav);
//---------Set-Nav-Scroll-Function-To-Landing-Page--------------------->
function activeNav(){
    scrollY !== 0 ? landing_Nav.classList.add('active_nav'):landing_Nav.classList.remove('active_nav');
    scrollY !== 0 ? icons.forEach(s => s.style.color = '#000'):icons.forEach(s => s.style.color = '#fff');
    scrollY !== 0 ? time_icon.style.color = "#000" : time_icon.style.color = "#fff";
}


//---------Set-Links-Click-Event-To-Landing-Page--------------------->
landing_Links.forEach(s => s.addEventListener('click',activeLinks));

//---------Set-Links-Click-Event-Function-To-Landing-Page--------------------->
function activeLinks(){
    landing_Links.forEach(s => s.classList.remove('active'));
    this.classList.add('active');
}


//---------Set-Variables-To-Type-Animation--------------------->
let type_Text         = document.querySelector('.type h1');
let insert_Text       = 
['اذا اعجبك الموقع ارجو الدعوه'
,'مرحبا بك في موقع التقوي و الايمان',
'ستجد في الموقع الكثير من الاشياء القيمه',
];
let letter            = [''];
let word              = [''];
let indux             = 0;
let start             = 0;
//---------Set-Links-Load-Event-To-Landing-Page--------------------->

//---------Set-Links-Load-Event-Function-To-Landing-Page------------->
function typeText(){
    if(start == insert_Text.length){
        start = 0;
    }

    word    = insert_Text[start];
    letter  = word.slice(0,indux++);

    type_Text.innerText = letter;
    
    if(word.length == letter.length){
        start++;
        indux = 0;
    }
    setTimeout(typeText,200);
}
typeText()

//---------Set-Variables-To-Landing-Animation--------------------->
let landing            = document.querySelector('.landing');
let back_Images_Data   = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'];
let indin              = 0;

//---------Set-Links-Load-Event-To-Landing-Page-Animation--------------------->
slideImages()
//---------Set-Links-Load-Event-Function-To-Landing-Page-Animation------------->
function slideImages(){
    indin === back_Images_Data.length-1 ? indin = 0 : indin++;
    landing.style.backgroundImage = `url(${back_Images_Data[indin]})`;

    setTimeout(slideImages,5000);
}


//---------Set-Variables-To-Small-Media-------------------->
let landing_List      = document.querySelector('.landing nav ul');
//---------Set-Links-Click-Event-To-Small-Media---------------------->
icons[0].addEventListener('click',() => {
    icons[0].classList.remove('active_icon');
    icons[1].classList.add('active_icon');
    landing_List.style.right = '0';
})
icons[1].addEventListener('click',() => {
    icons[1].classList.remove('active_icon');
    icons[0].classList.add('active_icon');
    landing_List.style.right = '-100%';
})