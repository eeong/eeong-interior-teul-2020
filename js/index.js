/* 초기설정 */

/* 사용자함수 */

/* 이벤트콜백 */
function onScroll(){
	var sct = $(this).scrollTop()
	if (sct > 10) $(".banner-frame").css("border-width","20px");
	else $(".banner-frame").css("border-width",0);
}
/* 이벤트등록 */
$(window).scroll(onScroll);

