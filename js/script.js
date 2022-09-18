window.addEventListener('load', function () {

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show')
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1)

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0)
            tabContent[b].classList.remove('hide'),
                tabContent[b].classList.add('show')
        }
    }


    info.addEventListener('click', function (e) {
        let target = e.target

        if (target.classList == 'info-header-tab') {
            for (i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i)
                }
            }
        }
    })

    //Timer

    let deadline = '2022-10-18'

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date())
        seconds = Math.floor((t / 1000) % 60)
        minutes = Math.floor((t / 1000 / 60) % 60)
        hours = Math.floor((t / (1000 * 60 * 60)))

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }


    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updatedClock() {
            let t = getTimeRemaining(endTime);
            hours.innerHTML = t.hours
            minutes.innerHTML = t.minutes
            seconds.innerHTML = t.seconds

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }

        updatedClock()
        let timeInterval = setInterval(updatedClock, 1000)
    }

    setClock('timer', deadline)

    //modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description_btn = document.querySelectorAll('.description-btn');





    more.addEventListener('click', function () {
        this.classList.add('more-splash')
        overlay.style.display = 'block'
        document.body.style.overflow = 'hidden'
    })

    close.addEventListener('click', function () {
        overlay.style.display = 'none'
        more.classList.remove('more-splash')
        document.body.style.overflow = ''
    })


    for (let i = 0; i < description_btn.length; i++) {
        description_btn[i].addEventListener('click', function () {
            overlay.style.display = 'block'
            document.body.style.overflow = 'hidden'
        })
    }

    //form 
    let message = new Object();
    message.loading = 'Загрузка...';
    message.succes = 'Спасибо, скоро мы с вами свяжемся';
    message.failure = 'Что-то пошло не так...';


    let form = document.getElementsByClassName('main-form')[0],
        input = document.getElementById('input'),
        status_message = document.createElement('div');

    status_message.classList.add('status');


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.appendChild(status_message)


        //ajax

        //  let request = new XMLHttpRequest()

        //  request.open('POSRT', 'server.php')

        //  request.setRequestHeader("Content-Type", "application/x-www-form-erlencoded");

        //  let formData = new FormData(form)

        //  request.send(formData)

        //  request.onreadystatechange = function () {
        //      if (request.readyState < 4) {
        //          status_message.innerHTML = message.loading
        //      } else if (request.readyState === 4) {
        //          if (request.status == 200 && request.status < 300) {
        //              status_message.innerHTML = message.succes
        //              // добовляем контент на страницу
        //          }

        //          else {
        //              status_message.innerHTML = message.failure
        //          }
        //      }
        // }


        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            // Очищаем поля ввода
        }





    })


    // slider

    let slideIndex = 1,
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrapp = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSliders(slideIndex)

    function showSliders(n) {
        if (n > sliders.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = sliders.length
        }

        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.display = 'none'
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active')
        }

        sliders[slideIndex - 1].style.display = 'block'
        dots[slideIndex - 1].classList.add('dot-active')
    }

    function plusSliders(n) {
        showSliders(slideIndex += n)
    }

    function currentSlider(n) {
        showSliders(slideIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSliders(-1)
    })

    next.addEventListener('click', function () {
        plusSliders(1)
    })

    dotsWrapp.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlider(i)
            }
        }
    })

})