/**
 * Created by NourEddine on 11/25/2017.
 */


$(document).ready(function(){
  "use strict"
    // setup nicescroll in my page
    $("body").niceScroll();
    //hide the navbar
    $('.myNavbar').hide();


    // navbar toggle
    $('#sidebar-toggle').click(function(){
      $('.myNavbar').hide();
      $('.nav-profile').fadeIn(1000);
    });

    $('#nav-toggle').click(function(){
      $('.myNavbar').fadeIn(1000);
      $('.nav-profile').hide();
    });

    // end navbar toggle

    var typed = new Typed('.welcome-typed', {
      strings: [  "Welcome In Our Portfolio We are Happy",
                  "Enjoy  your visit",
                  "We are a team for web development ",
                  "we have a lot of scripts ",
                  "can you follow us at github or bitbucket "
    ],
      cursorChar: '__',
      typeSpeed: 50,
      loop:true,
      smartBackspace: false,

    });
});
