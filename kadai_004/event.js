'use strict';
$(window).on('load', function() {
  console.log('loadイベントが発生');
  $(window).on('scroll', function(){
    console.log('スクロールを検知');
  });
});