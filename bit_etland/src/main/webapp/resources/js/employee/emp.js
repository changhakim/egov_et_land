var emp= emp||{};

emp=(()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init=()=>{
		_ = $.ctx();
        js = $.js();
        compojs = $.js()+'/component/compo.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
		onCreate();
	}
	let reset=()=>{
		_ = $.ctx();
        js = $.js();
        compojs = $.js()+'/component/compo.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
	}
	let onCreate=()=>{
		setContentView();
	}
	let setContentView=()=>{
		$.when(
		$.getScript(compojs),
		$.getScript($.js()+'/customer/cust.js'),
		$.getScript($.js()+'/product/prod.js')
		).done(()=>{

		
		});
	}
	let empnav=()=>{
		reset();
		$(l_cnt+' ul.nav').empty()
		$('#navtit').text('관리자 회원리스트');
		let aa=[{name:'cuslist',txt:'회원리스트'},
			{name:'proregist',txt:'상품등록'},
			{name:'prolist',txt:'상품목록'},
			{name:'proupdate',txt:'상품수정'},
			{name:'prodelet',txt:'상품삭제'},
			{name:'statistics',txt:'상품통계'}
			
		   ]
		
   $.each(aa,(i,j)=>{
		$('<li><a href="#">'+j.txt+'</a></li>')
		.appendTo(l_cnt+' ul.nav')
		.attr('name',j.name)
		.click(function(){
		$('#navtit').text('관리자 '+j.txt);	
		$('#right_content').empty();
		let that = $(this).attr('name')
		$(this).addClass('active')
		$(this).siblings().removeClass('active');
		switch(that){
		case'cuslist':
			$.getScript($.js()+'/customer/cust.js',()=>{
			  cust.list("1");	
			})
		break;	
		case 'proregist':
			
			$.getScript($.js()+'/product/prod.js',()=>{
					prod.regist();	
			})
				
			break;
		case 'prolist':
			$.getScript($.js()+'/product/prod.js',()=>{
			 prod.list("1");	
			})
			break;
		case 'proupdate': 
			$.getScript($.js()+'/product/prod.js',()=>{
				prod.init();	
			}).fail(()=>{})
			
			
			break;
		case 'prodelet': 
	
			
			
			break;
		case 'statistics': 
			
			
			
			break;	
		
		};
	
	 });
	
});//네비끝
$('#cuslogin').addClass('active')
};
	return{init:init,
		   empnav:empnav}
	
	
})();