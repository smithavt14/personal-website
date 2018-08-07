//= require jquery
//= require bootstrap
//= require_tree .
//= require typed.js

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

loadDynamicBannerText();
