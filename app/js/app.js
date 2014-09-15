'use strict';
$( document ).ready(function() {
  $('#info').click(function () {
      $('html, body').animate({
          scrollTop: $('#aboutme').offset().top -95
      }, 2000);
  });
  $('#tech').click(function () {
      $('html, body').animate({
          scrollTop: $('#experience').offset().top -95
      }, 2000);
  });
  $('#edu').click(function () {
      $('html, body').animate({
          scrollTop: $('#education').offset().top -95
      }, 2000);
  });
  $('#folder').click(function () {
      $('html, body').animate({
          scrollTop: $('#portfolio').offset().top -100
      }, 2000);
  });
  $('#commentquotes').click(function () {
      $('html, body').animate({
          scrollTop: $('#contact').offset().top
      }, 2000);
  });
});

