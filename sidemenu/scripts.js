


//
//
//$(function() {
//    $(".edit").click(function() {
//       $("#edit_hidden").fadeToggle();
//           $('.active').removeClass('active');
//           
//       $('#games_hidden').fadeToggle();    
//       $(this).toggleClass("active");
//       return false;
//    });
//    
//    $(".games").click(function() {
//       $("#games_hidden").fadeToggle();
//           $('.active').removeClass('active');
//           
//       $('#edit_hidden').fadeToggle();    
//       $(this).toggleClass("active");
//       return false;
//    });
//
//    
//});



$(function() {
   
    /*
    $(".edit").click(function() {
       $("#edit_hidden").fadeToggle();
           $('.active').removeClass('active');
       return false;
    });
    
    $(".games").click(function() {
       $("#games_hidden").fadeToggle();
           $('.active').removeClass('active');
       return false;
    });
    
    $(".groups").click(function() {
       $("#groups_hidden").fadeToggle();
           $('.active').removeClass('active');
       return false;
    });
    */

    $(".side_navigation").click(function(){
        var name = $(this).attr("class")+"_hidden";
       $("#"+name).fadeToggle();
        console.log($(this).parent().closest( "div" ));
       $(this).parent().closest( "div" ).fadeToggle();

    });
    
 });





