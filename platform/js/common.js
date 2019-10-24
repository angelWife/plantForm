$(function() {
  $(".head_nav li").hover(function() {
    var line = $(this).find('.line');
    var more = $(this).find('.more_list');
    if (line.length > 0) {
      line.stop().animate({
        opacity: 1
      })
    } else if (more.length > 0) {
      more.show().stop().animate({
        opacity: 1
      }, 200)
    }
  }, function() {
    var line = $(this).find('.line');
    var more = $(this).find('.more_list');
    if (line.length > 0) {
      line.stop().animate({
        opacity: 0
      })
    } else if (more.length > 0) {
      more.stop().animate({
        opacity: 0
      }, 200).hide();
    }
  })
});