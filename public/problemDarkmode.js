const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')



toggle.addEventListener('click', function () {

    this.classList.toggle('fa-sun')

    if (this.classList.toggle('fa-moon')) {

        const nav = document.querySelector('.navbar')
        nav.style.background = 'white'
        nav.transition = '1.5s'

        const mainContainer = document.querySelector('.main_container')
        mainContainer.style.background = 'linear-gradient(to bottom, #49A74C, #2AF598, #fecf7e, #f7e167, #fff)'
        mainContainer.style.color = 'black'
        mainContainer.transition = '1.5s'

        const links = document.querySelectorAll('.nav-link')
        links.forEach(e => e.style.color = "black")

        const foot = document.querySelector('.footer_section')
        foot.style.background = 'white'
        foot.style.color = 'black'
        foot.transition = '1.5s'

        const sliderSpans = document.querySelectorAll('.slider')
        sliderSpans.forEach((e) => e.classList.remove('modify'))

        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1.5s'
    }

    else {
        const nav = document.querySelector('.navbar')
        nav.style.background = '#180c40'
        nav.transition = '1.5s'

        const mainContainer = document.querySelector('.main_container')
        mainContainer.style.background = 'linear-gradient(to bottom, #180c40, #1a0561, #5dffff, #80ffff, #180c40)'
        mainContainer.transition = '1.5s'

        const links = document.querySelectorAll('.nav-link')
        links.forEach(e => e.style.color = "white")

        const foot = document.querySelector('.footer_section')
        foot.style.background = '#180c40'
        foot.style.color = 'white'
        foot.transition = '1.5s'

        const sliderSpans = document.querySelectorAll('.slider')
        sliderSpans.forEach((e) => e.classList.add('modify'))

        body.style.background = 'black'
        body.style.color = 'white'
        body.style.transition = '1.5s';
    }
});