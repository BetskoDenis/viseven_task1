function search() {
    if (search_input.classList.contains('active')) {
        search_input.classList.remove('active');
        form.classList.remove('active');
        var width = window.innerWidth;

        if (width > 750) {
            setTimeout(function () {
                sign.style.display = 'flex';
            }, 500)
        } else {
            sign.style.display = 'none';
        }
    } else {
        form.classList.add('active');
        search_input.classList.add('active')
        sign.style.display = 'none';
    }
}

search_img.onclick = function () {
    search();
}

function burgerButton() {
    if (burger_menu_button.classList.contains('click')) {
        burger_menu_button.classList.remove('click');
    } else {
        burger_menu_button.classList.add('click');
    }
}


function openMenu() {
    if (header_menu.classList.contains('mobile')) {
        header_menu.classList.remove('mobile');
        top_menu.classList.remove('mobile');
    } else {
        top_menu.classList.add('mobile');
        header_menu.classList.add('mobile');
    }
}

burger_menu_button.onclick = function () {
    burgerButton()
    openMenu()
}

function openSubMenu() {
    if (header_menu.classList.contains('mobile')) {

        if (submenu.classList.contains('open')) {
            submenu.classList.remove('open')

        } else {
            submenu.classList.add('open')
        }
    }
}

open_menu.onclick = function () {
    openSubMenu()
}
video_head.addEventListener('pause', function () {
    this.src = this.src;
})

function playVideo() {
    if (video_head.classList.contains('play')) {
        video_head.pause();
        video_head.classList.remove('play');
    } else {
        video_head.play();
        video_head.classList.add('play');


    }
}

play_button.onclick = function () {
    playVideo()
}
video_head.onclick = function () {
    playVideo()
}


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

