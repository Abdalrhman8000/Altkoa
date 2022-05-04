//---------Set-Variables-To-Hadiths--------------------->
let hadith_Content         = document.querySelector('.hadith_content');
let next                   = document.querySelector('.next');
let pref                   = document.querySelector('.pref');
let controll_Span          = document.querySelector('.control span');
let indux_2                = 0;


//---------Set-Hadiths-Load-Event-To-Set-Data--------------------->
fetch('data.json')
.then(respond => respond.json())
.then(data => {
    let hadith = data.data.hadiths;

//--------To-Give-Next-Hadith-Functin--------->
    next.addEventListener('click',() => {
        indux_2 === 299 ? indux_2 = 0 : indux_2++;
        addTextData()
    })
//--------To-Give-Prev-Hadith-Functin--------->
    pref.addEventListener('click',() => {
        indux_2 === 0 ? indux_2 = 0 : indux_2--;
        addTextData()//---Add-Data-Function----->
    })
//--------To-Add-Data-Function---------> 
    function addTextData(){
     hadith_Content.innerText = hadith[indux_2].arab;
     controll_Span.innerText = `300/${indux_2 + 1}`
    }
    addTextData()//---Add-Data-Function----->
})