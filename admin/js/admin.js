$(function(){
	$('.del').click(function(event){
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
		/*
		target.parent().parent().fadeOut(1000,function(){
											target.parent().parent().remove();
											});
		*/
		
		
		
	
	});


});


