$(function(){
//上へ戻るボタンを作って隠しておく
$('.container').before('<p id="gotop">gotop</p>');

//ナビゲーションスクーロル固定のための必要な値を取得しておく
var header_height=$('#global_header').innerHeight();
var nav_height=$('#nav').innerHeight();
    //スクロールきっかけの世界
    $(window).scroll(function(){
    //メインナビゲーションがスクロールで隠れそうになったら固定作戦
        //どれだけスクロールしたかを取得
        var s_top=$('body,html').scrollTop();
        
        if(s_top>header_height+nav_height){
            $('#nav').css({top:s_top-header_height-nav_height});
        }else{
            $('#nav').css({top:0});
        }
    //ある程度スクロールしたら「上へ戻る」ボタン出現作戦
        if(s_top>800){
            $('#gotop').fadeIn(300);
        
        }else{
            $('#gotop').fadeOut(300);
        }
    });//End scrollきっかけの世界
    //gotopをクリックした世界
    $('#gotop').click(function(){
        $('body,html').animate({scrollTop:'0px'},1000,'swing');
    
    });//END gotop click


$('#newslist li').css('opacity',0);
$('#newslist li').each(function(i){
		$(this).delay(300*i).animate({opacity:1},300);
});

var news_li=$('#newslist').find('li');
news_li.click(function(event){
	var clicked_id = $(event.target).attr('id');
	$('.container').after('<div class="modal_wrapp"><div class="modal_box"><p><span id="close">&times;</span></p></div></div>');
	$('#close').click(function(){
		$('.modal_wrapp').fadeOut(500,function(){
			$(this).remove();
		
		});
	});
	
	
});//End news_li click

    
    
    
    
});//End Jquery