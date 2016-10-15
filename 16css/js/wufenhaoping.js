//star
$(document).ready(function(){
    var stepW = 24;
    var stars = $("#star > li");
    $("#showb").css("width",0);
    stars.each(function(i){
        $(stars[i]).click(function(){
            var n = i+1;
//          nÎª·ÖÊý
			console.log(n);
            $("#showb").css({"width":stepW*n});
            $(this).find('a').blur();
        });
    });
});

