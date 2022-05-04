//---------Set-Variables-To-Koran--------------------->
let koran           = document.querySelector('.koran');
let main_koran      = document.querySelector('.main_koran');
let body            = document.querySelector('body');
//---------Set-Koran-Functions-To-Set-Data-Sounds--------------------->
fetch('data2.json')
.then(respond => respond.json())
.then(data => {
    for(let i =0;i<5;i++){
        koran.insertAdjacentHTML('beforeend',
        `
        <div class = 'main_koran'></div>
        `
        )
    }
   let main_koran      = document.querySelectorAll('.main_koran');//-----To-Append-Data-Ui----->
  //----Loop-To-Append-Data-Ui-Start----->
   for(let i =0; i < 10;i++){
   main_koran.forEach( s => s.insertAdjacentHTML('beforeend',
    `
    <div class = 'koran_container'>
        <audio></audio>
            <span>
                <p>الكهف</p>
            </span>
            <div class = "sounds">
                <i class = "fa fa-volume-off"></i>
                <i class = "fa fa-book"></i>
           </div> 
    </div>
    `
   ))
   }
  //----Loop-To-Append-Data-Ui-End----->
//---------Set-Variables-To-Add-Data-Values--------------------->
   let koran_container_p     = document.querySelectorAll('.koran_container span p');
   let koran_container_audio = document.querySelectorAll('.koran_container audio');
   let sounds_Play = document.querySelectorAll('.sounds .fa-volume-off');
  //----Loop-To-Append-Data-Values-Start----->
   for(let i = 0; i < data.length;i++){
       koran_container_p[i].innerText = `${data[i].name}`;//-----ADD-Names-Of-Koran--------->
       koran_container_audio[i].src = `${data[i].link}`;//-----ADD-Src-Of-Audios-From-Api------>
   }
  //----Loop-To-Append-Data-Values-End----->

  //----Audio-Controls-Start----->
  sounds_Play.forEach(s => s.addEventListener('click',(e) => {
       e.target.classList.toggle('play');//------To-Add-Sens------------->
       let play = document.querySelector('.play');//-----Control-Sanse-To-If-Condition--------->
       if(e.target.className === 'fa fa-volume-off play'){
           play.parentNode.previousElementSibling.previousElementSibling.play()//-----To-Play-Function------->
           s.className = 'fa fa-volume-up';//------------TO-Add-Play-Sound-->
       }else{
          s.parentNode.previousElementSibling.previousElementSibling.pause()//-----To-Stop-Function------->
          s.className = 'fa fa-volume-off';//------------TO-Add-Delet-Sound-->
       }
   }))
  //----Audio-Controls-End----->



//   ---------Set-Koran-Functions-To-Set-Data-To-Reads-Start--------------------->
    let books_icons = document.querySelectorAll('.sounds .fa-book');

       books_icons.forEach((item,indux) => item.addEventListener('click',() => {
        body.classList.add('hides');
        fetch(`https://api.alquran.cloud/v1/surah/${indux + 1}`)
        .then(respond => respond.json())
        .then(data => {
           let dataAyat                        = data.data.ayahs;
           let koran_text                      = document.querySelector('.koran_text');
           let koran_container_read            = document.querySelector('.koran_container_read');
           let koran_container_read_close_Icon = document.querySelector('.koran_container_read  i')
           let sattic_title                    = document.querySelector('.sattic_title');
           dataAyat.forEach(s => {
               koran_container_read.classList.add('active');
               koran_text.innerHTML += 
               `
               <p><span>${s.number}</span> ${s.text}</p>
               `
           })
           koran_container_read_close_Icon.addEventListener('click',() => {
                 koran_container_read.classList.remove('active');
                 body.classList.remove('hides');
           })
           koran_text.addEventListener('mousewheel',(e) => {
               e.deltaY > 0 ? sattic_title.style.display = "none":sattic_title.style.display = "inline-block";
           })
        })
    }))
//   ---------Set-Koran-Functions-To-Set-Data-To-Reads-End--------------------->


})



