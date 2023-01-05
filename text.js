// function click_scroll() {
    // var scroll_offset = $("#pos").offset();  //得到pos这个div层的offset，包含两个值，top和left
    // $("body,html").animate({
    // scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动 
    // },0);
//}

//按下超連結回頁首  
function click_scroll() {
    var scroll_offset = $("#profile").offset();  
    $("body,html").animate({
     scrollTop:scroll_offset.top  
     },1500);
}
function click_scroll1() {
    var scroll_offset1 = $("#my").offset();  
    $("body,html").animate({
     scrollTop:scroll_offset1.top  
     },1500);
}
function click_scroll2() {
    var scroll_offset2 = $("#my1").offset();  
    $("body,html").animate({
     scrollTop:scroll_offset2.top  
     },2000);
}
function click_scroll3() {
    var scroll_offset3 = $("#link1").offset();  
    $("body,html").animate({
     scrollTop:scroll_offset3.top  
     },2000);
}
function click_scroll4() {
    var scroll_offset4 = $("#b").offset();  
    $("body,html").animate({
     scrollTop:scroll_offset4.top  
     },2000);
}

//刷新頁面回首頁
$("body,html").animate({
    scrollTop : 0,
    screenLeft:0,
},200);