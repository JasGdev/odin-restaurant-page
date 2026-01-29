// src/index.js
import "./styles.css";
import {loadHomePage} from './home-page.js'
import {loadMenuPage } from './menu-page.js'
import {loadAboutPage } from './about-page.js'

let tabSwitchingHandler = (function() {
    const display = document.querySelector('#content');
    const homeBtn = document.querySelector('.homeBtn')
    const menuBtn = document.querySelector('.menuBtn')
    const aboutBtn = document.querySelector('.aboutBtn')

    homeBtn.addEventListener('click', function(){
        display.innerHTML = '';
        loadHomePage();
    })

    menuBtn.addEventListener('click', function () {
        display.innerHTML = '';
        display.style.backgroundImage = 'none';
        loadMenuPage();
    })

    aboutBtn.addEventListener('click', function () {
        display.innerHTML = '';
        display.style.backgroundImage = 'none';
        loadAboutPage();
    })

})();