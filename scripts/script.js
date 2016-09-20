alert('hello, world');

// Jquery goes here
$(function(){
  
  $('#s').click(function(){
    $(this).text('SOCIAL TEXT');
  });
  $('#p').click(function(){
    $(this).text('POLITICAL TEXT');
  });
  $('#r').click(function(){
    $(this).text('RELIGOUS TEXT');
  });
  $('#i1').click(function(){
    $(this).text('INTELLECTUAL TEXT');
  });
  $('#i2').click(function(){
    $(this).text('INTERRELATIONAL TEXT');
  });
  $('#e').click(function(){
    $(this).text('ECONOMIC TEXT');
  });
});
