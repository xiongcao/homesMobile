var inithead = function(){
	var list = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/menu/0',
		dataType: 'json',
		async: false,
		success: function(data){
			$.each(data,function(i,v){
				$.ajax({
					type: 'post',
					url: pubUrl + '/menu/' + v.id,
					dataType: 'json',
					async: false,
					success: function(data){
						v.child = data
					},
				    error: function(err){
				     	console.log(err)
				    }					
				})
			});
			list.data = data;
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list
}

var getId = function(m){
	var list = inithead().data;
	for(var i = 0; i < list.length; i++){
		if(i == m){
			return list[i].id
		}
	}
}

/*轮播*/
var loops = function(id){
	var list;
	$.ajax({
		type: 'post',
		url: pubUrl + '/newbanner',
		data:{
			'type': 1,
			'id': id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			list = data;
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return list
}

/*详情的轮播*/
var loopsOne = function(id){
	var list;
	$.ajax({
		type: 'post',
		url: pubUrl + '/banner/'+id,
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

/*案例*/

var cases = function(type,page){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/calist',
		data:{
			type:type,
			page:page
		},
		dataType: 'json',
		async: false,
		success: function(data){
			list = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});		
	return list
}

/*案例设计师*/
var casedetail = function(id){
	var content;
	$.ajax({
		type: 'get',
		url: pubUrl + '/case/'+id,
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			content = data;
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return content
}

/*案例列表*/
var caseList = function(id){
	var list={};
	$.ajax({
		type: 'post',
		url: pubUrl + '/casecategory',
		data: {
			'caseid': id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list.data = data;
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list
}

/*其他案例*/
var caseOther = function(){
	$.ajax({
		type: 'post',
		url: pubUrl + '/case/getother',
		data: {
			'id': 1
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data2);
		},
	    error: function(err){
	     	console.log(err)
	    }
	})		
}

/*楼盘*/
var build = function(page){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/house',
		data:{
			page:page
		},
		dataType: 'json',
		async: false,
		success: function(data){
			list = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});		
	return list	
}

/*楼盘列表详情*/

var buildlist = function(id){
	var content = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/house/detail',
		data:{
			hid:id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			content = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});	
	return content
}

/*楼盘详情轮播*/
var buildLoop = function(id,position){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/house/type/images',
		data: {
			'tid': id,
			'position': position
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list
}

/*楼盘户型*/
var buildcate = function(id,page){
	var content = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/house/type',
		data:{
			hid:id,
			page:page
		},
		dataType: 'json',
		async: false,
		success: function(data){
			content = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});	
	return content
}

/*楼盘详情内容*/
var buildcontent = function(id){
	var content = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/house/type/detail',
		data:{
			tid:id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			content = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});	
	return content
}

var buildPlane = function(id,floor){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/house/type/plane',
		data: {
			'tid': id,
			'floor': floor
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list
}

var aboutCase = function(id){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/case/getother',
		data: {
			id: id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list	
}

var aboutDesigner = function(page,id){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/house/type/designer?page='+page,
		data: {
			did: id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list	
}

var aboutNew = function(){
	var contents = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/index/indexjoinus',
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			contents = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return contents
}

/*设计师*/
var designer = function(id){
	var list = [];
	$.ajax({
        type: 'post',
        url: pubUrl + '/getdesigner',
        data:{
          id:id
        },
        dataType: 'json',
        async: false,
        success: function(data){
            console.log(data);
            list = data
        },
        error: function(err){
            console.log(err)
        }
    });
    return list
}

/*设计师详情*/
var designerDetail = function(id){
	var content = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/designerinfor',
		data: {
			'id': id,
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			content = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return content
}

/*业务领域*/
var areas = function(){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/domain',
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);	
			list = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});
	return list
}

/*睿帝实力--设计观点*/
var ruid = function(m){
	var list = inithead().data;
	for(var i = 0; i < list.length; i++){
		if(i == m){
			return list[i].child
		}
	}	
}

/*睿帝实力列表--设计观点列表*/
var ruidList =function(id){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/menu/' + id,
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return list
}
/*睿缔数据*/
var ruiddata = function(m){
	var list = [];
	$.ajax({
		type: 'get',
		url: pubUrl + '/index/indexpower',
		data:{
			typeid:m
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});	
	return list
}

/*睿缔详情*/
var ruidetail = function(id){
	var content;
	$.ajax({
		type: 'get',
		url: pubUrl + '/index/powerdetail',
		data:{
			id:id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			content =data.data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return content
}

var ruidother = function(x,y,z){
	var content;
	$.ajax({
		type: 'get',
		url: pubUrl + '/index/powerrelated',
		data:{
			typeid:x,
			id:y,
			page:z
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			content =data.data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return content
}

/*企业文化*/
var aboutCul = function(){
	var content;
	$.ajax({
		type: 'post',
		url: pubUrl + '/index/indexculture',
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data.data[0]);
			content = data.data[0]
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return content
}

/*个人中心*/
var personInfor = function(id){
	var content = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/center/user',
		data:{
			uid: id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			content = data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return content	
}

/*礼券*/
var personGift = function(id,status){
	var list = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/center/gift',
		data:{
			uid: id,
			status: status
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list.data = data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return list	
}

/*消息*/
var personNews = function(id){
	var list = {};
	$.ajax({
		type: 'post',
		url: pubUrl + '/center/message',
		data:{
			uid: id
		},
		dataType: 'json',
		async: false,
		success: function(data){
			console.log(data);
			list.data = data
		},
	    error: function(err){
	     	console.log(err)
	    }					
	});
	return list	
}

/*底部*/
var initfooter = function(){
	var list = [];
	$.ajax({
		type: 'post',
		url: pubUrl + '/adver/bottom',
		dataType: 'json',
		async: false,
		success: function(data){
			list = data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});	
	return list
}

var footerImg = function(){
	var $dom = $('body').find('.category');
	if($dom != undefined){
		$.each(initfooter(),function(i,v){
			var html = '<div class="category-cell">'
				+'<span class="category-title">'+v.typeid+'</span>'
				+'<a href="'+v.url+'"><img src="'+pubUrl+v.img+'"></a>'
			'</div> ';
			$dom.append(html)
		})
	}
}

/*心愿单*/
var heartTip = function(x,y){
	$.ajax({
		type:"post",
		url:pubUrl+"/case/collect",
		async:true,
		data:{
			'caseid': x,
			'cid': y
		},
        headers: { 
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrZW4iLCJpYXQiOjE1Mzc1NTQzMDksImRhdGEiOnsidXNlcm5hbWUiOiJ4dXRvbmdiYW8iLCJpc19zdXBlcnVzZXIiOjEsImlkIjoxNywibG9naW5fdGltZSI6MTUzNzU1NDMwOX0sImV4cCI6MTUzODE1NDMwOX0.32Lys4hjjY2XRpM2r9YSmpYA798u821m_M5Tzb6wxIU",
            'Content-Type': 'application/x-www-form-urlencoded'  //multipart/form-data;boundary=--xxxxxxx   application/json
        }, 
		success: function(data){
			console.log(data);					
		},
	    error: function(err){
	     	console.log(err)
	    }								
	});	
}

/*楼盘心愿单*/
var house_collect = function(x){
	$.ajax({
		type:"post",
		url:pubUrl+"/center/house_collect_list",
		async:true,
		data:{
			'uid': x
		},
		success: function(data){
			console.log(data);					
		},
	    error: function(err){
	     	console.log(err)
	    }								
	});	
}
