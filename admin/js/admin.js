$(function(){
	$('#allpost').on('click','.del',function(event){
		var target=$(event.target);
		var del_id=target.attr('id');
		$.ajax({
			type:'POST',
			url:'./delete_ajax.php',
			data:{
				id:del_id			
			},
			success:function(){
				target.parent().parent().fadeOut(1000,function(){
											target.parent().parent().remove();
											});	
			}
		});

	});//End del click
	
	$('#post_submit').click(function(){
		$.ajax({
			type:$('#pf').attr('method'),
			url:$('#pf').attr('action'),
			data:{
				title:$('#title').val(),
				content:$('#content').val()
			},
			success:function(data){
			  $('#allpost').find('tbody').prepend(data);
			  $('#allpost').find('tbody').find('tr:first-of-type').hide().fadeIn(1000);	
			
			}
			
		
		});
		return false;//form送信機能off
		
	});
	


});//End jQuery


