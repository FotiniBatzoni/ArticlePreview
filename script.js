$(function(){
    var person=$("#person");
    var shareSection=$("#shareSection");
    var width = $(window).width();

    if(width<1000){
        console.log("small screen");
        console.log(screen.width);
        person.on("click",function(){
            person.hide();
            shareSection.show();
        });
        shareSection.on("click",function(){
            shareSection.hide();
            person.show();
        });
    }
    else{
        console.log("big screen");
        console.log(screen.width);
        person.on("click",function(){
            shareSection.show();
        });
        shareSection.on("click",function(){
            shareSection.hide();
        });
    }
 
});