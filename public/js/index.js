/* 초기설정 */
var headerListIndex = 0; 
var bannerInterval;
/* 사용자함수 */
function headerBanner(){
	$(".header-wrapper").find(".banner").css({"opacity" : 0 , "transform" : "scale(1.3)"});	
	$(".header-wrapper").find(".banner").eq(headerListIndex).css({"opacity" : 1 , "transform" : "scale(1)"});	
	$(".header-wrapper").find(".list").removeClass("active");
	$(".header-wrapper").find(".list").eq(headerListIndex).addClass("active");
}

/* 이벤트콜백 */
function onScroll(){
	var sct = $(this).scrollTop()
	if (sct > 10) $(".banner-frame").css("border-width","20px");
	else $(".banner-frame").css("border-width",0);
}

function onResize(){

}

function onListOver(){
	headerListIndex = $(this).index();
	headerBanner();
	clearInterval(bannerInterval);
}

function onListLeave(){
	bannerInterval = setInterval(onBannerInterval, 8000);
}

function onBannerInterval(){
	if(headerListIndex == 3){
		headerListIndex = 0;
	} else { headerListIndex ++;}
	headerBanner();
}

/* 이벤트등록 */
$(window).scroll(onScroll);

$(window).resize(onResize).trigger("resize");

$(".header-wrapper").find(".list").hover(onListOver, onListLeave);

bannerInterval = setInterval(onBannerInterval, 8000);
