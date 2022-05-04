//--------------Fetch_Prey_Data_Api_To_Draw_Them-------------------->
fetch('data5.json')
.then(respond => respond.json())
.then(data => {
    let main        = document.querySelector('main');
    let time_icon   = document.querySelector('.time_icon');
    let times       = data.data.timings;
    main.innerHTML = '';
    for(let time in times ){
        main.innerHTML += 
        `
        <div class="title">${times[time]}</div>
        <div class="time_content">
            <div class="time_cont">
                <div class="crecle">${time}</div>
            </div>
        </div>
        `
    }
    main.insertAdjacentHTML('afterbegin','<i class="fa fa-close"></i>')
    let main_close  = document.querySelector('main i');
    time_icon.addEventListener('click',() => {
        main.classList.add('active_time');
    })
    main_close.onclick = () => {
        main.classList.remove('active_time');
    }
})