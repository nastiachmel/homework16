// function openNav(){
//   document.getElementsByClassName("navigation")[0].style.width = "200px";
//   document.getElementsByClassName("wrap-all-content")[0].style.marginRight = "200px";
// }

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
     
    });
      });
})(jQuery);
// function closeNav(){
//   document.getElementsByClassName("navigation")[0].style.width = "-200px";
//   document.getElementsByClassName("wrap-all-content")[0].style.marginRight = "-200px";
// }


