/* 초기설정 */
new WOW({ offset : 300, animateClass:'wow-ani'}).init();

var headerListIndex = 0; 
var bannerInterval;

var prdListIdx = 0;
var prdInterval;
/* 사용자함수 */
function headerBanner(){
	$(".header-wrapper").find(".banner").css({"opacity" : 0 , "transform" : "scale(1.3)"});	
	$(".header-wrapper").find(".banner").eq(headerListIndex).css({"opacity" : 1 , "transform" : "scale(1)"});	
	$(".header-wrapper").find(".list").removeClass("active");
	$(".header-wrapper").find(".list").eq(headerListIndex).addClass("active");
}

function prdAni(prdListIdx){
	$(".prd-slide").find(".list")
	.css({"position" : "absolute"})
	.stop().animate({"opacity" : 0}, 500, function(){
		$(this).css({"display" : "none"});
	});
	$(".prd-slide").find(".list").eq(prdListIdx).css({"position" : "relative" , "display" : "block" , "z-index" : 2 }).stop().animate({"opacity" : 1}, 500);
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

function onPrdOver(){
	prdListIdx = 1;
	prdInterval = setInterval(function(){
		if (prdListIdx == 2 ) prdListIdx = 0;
		else prdListIdx++;
		prdAni(prdListIdx);
	},2000)
	prdAni(prdListIdx)
}

function onPrdLeave(){
	prdListIdx = 0; 
	clearInterval(prdInterval);
	prdAni(0)
}

function onPagerClick(){
	prdListIdx = $(this).index();
	prdAni(prdListIdx);
}

/* 이벤트등록 */
$(window).scroll(onScroll);

$(window).resize(onResize).trigger("resize");

$(".header-wrapper").find(".list").hover(onListOver, onListLeave);

bannerInterval = setInterval(onBannerInterval, 8000);

$(".prd-slide").hover(onPrdOver, onPrdLeave);
$(".pager").click(onPagerClick);
