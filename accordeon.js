$(".question-li").click(function() {
  $(this).find(".btn-plus span:last-child").toggleClass("active");

  $(this).find(".accord-p").slideToggle(300);
  $(".accord-p").not($(this).find(".accord-p")).slideUp(300);
  $(".btn-plus span:last-child").not($(this).find(".btn-plus span:last-child")).removeClass("active");
});

$(".question-li").click(function() {
  $(this).find(".btn-plus span:first-child").toggleClass("active");

  $(".btn-plus span:first-child").not($(this).find(".btn-plus span:first-child")).removeClass("active");
});




