// current year
const ele = document.querySelectorAll('.curr-year')
if (ele?.length) {
    const date = new Date()
    const fullyear = date.getFullYear()
    for (let i = 0; i < ele.length; i++) {
        ele[i].innerHTML = fullyear
    }
}

// Header scroll
window.onscroll = function () {
    setOnScroll();
};

const setOnScroll = () => {
    let scrollpos = window.scrollY;
    if (scrollpos > 0) {
        document.getElementById('scrollToTopBtn')?.classList.remove('hidden');
        document.getElementById('top-header')?.classList.add('sticky-header');
    } else {
        document.getElementById('scrollToTopBtn')?.classList.add('hidden');
        document.getElementById('top-header')?.classList.remove('sticky-header');
    }
};
setOnScroll();

// contact menu btn
const toggleContactMenu = () => {
    const menu = document.querySelector('.contact-menu')
    const overlay = document.querySelector('.contact-overlay')
    menu.classList.toggle('open')
    overlay.classList.toggle('hidden')
}

//Select box
document.addEventListener('alpine:init', () => {
    Alpine.data('select', () => ({
        open: false,
        contact: '',

        toggle() {
            this.open = !this.open
        },

        setContact(val) {
            this.contact = val
            this.open = false
        },
    }))
})

// tabs
let allTabs = [...document.querySelectorAll('.tab')]
let allTabContent = [...document.querySelectorAll('.tab-content')]
const handleTab = (evt) => {
    allTabContent.forEach((tc) => (tc.style.display = 'none'))
    document.querySelector(`#${evt.target.dataset.linkid}`).style.display =
        'block'
    allTabs.forEach((t) =>
        t === evt.target
            ? t.classList.add('active-tab')
            : t.classList.remove('active-tab'),
    )
}
allTabs.forEach((t) => t.addEventListener('click', handleTab))

// Scroll js
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header')
    if (window.scrollY > 50) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

// Reservation model
const appointmentModel = () => {
    const appointmentModel = document.getElementById('appointment-modal')
    const videoOverlay = document.querySelector('.appointment-overlay')
    appointmentModel.classList.toggle('hidden')
    videoOverlay.classList.toggle('hidden')
}



// Accordion
var acc = document.getElementsByClassName('accordion-trigger')
var i

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        //variables
        var content = this.nextElementSibling
        var accordionContent =
            document.getElementsByClassName('accordion-content')
        var accordionTriggerActive = document.getElementsByClassName(
            'accordion-trigger active',
        )
        if (content.style.maxHeight) {
            content.style.maxHeight = null
            this.classList.remove('active')
        } else {
            for (var ii = 0; ii < accordionTriggerActive.length; ii++) {
                accordionTriggerActive[ii].classList.remove('active')
            }
            for (var iii = 0; iii < accordionContent.length; iii++) {
                this.classList.remove('active')
                accordionContent[iii].style.maxHeight = null
            }
            content.style.maxHeight = content.scrollHeight + 'px'
            this.classList.add('active')
        }
    }
}

// Scroll to top progress-cricle
document.addEventListener('DOMContentLoaded', function () {
    const progressCircle = document.getElementById('progress-circle');
    const backToTopButton = document.getElementById('back-to-top');

    const circleLength = 2 * Math.PI * 45;
    window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        const offset = circleLength - (scrollPercentage / 100) * circleLength;
        progressCircle.style.strokeDashoffset = offset;
        if (scrollTop > 200) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };
});

// Scroll to top
const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};


// loader
const screenLoader = document.getElementsByClassName('screen-loader')
if (screenLoader?.length) {
    setTimeout(() => {
        document.body.removeChild(screenLoader[0])
    }, 2500)
}