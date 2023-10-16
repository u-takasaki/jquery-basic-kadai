'use strict';
$(window).on('load', function(){
  $('#addClass').on('click', function(){
    $('#target').addClass('heading');
  });
  $('#removeClass').on('click', function(){
    $('#target').removeClass('heading');
  });
  $('#toggleClass').on('click', function(){
    $('#target').toggleClass('heading');
  });
  $('#hasClass').on('click', function(){
    const confirm = $('#target').hasClass('heading');
    if(confirm){
      console.log('クラスが適用されてます');
    } else{
      console.log('クラスは適用されていません');
    };
  });
});