/*首页文字*/
var ruidCore = function(){
	var list = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/system',
		dataType: 'json',
		async: false,
		success: function(data){
			list = data[0];
			console.log(data.length);
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list	
}
/*田字格*/
var land = function(types){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/showinfo',
		data:{
			type:types
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data;
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list
}
