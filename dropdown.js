function dropmenu(){
$(".dropmenu").css({"top":"125px","transition":"300ms"})
if($(".dropmenu").css("top") =="125px"){
$(".dropmenu").css({"top":"-250px","transition":"300ms"})    
}
}

$(window).resize(function(){
    if($("body").width() > 825){
        $(".dropmenu").css({"top":"-250px","transition":"300ms"})    
    }

}
)
