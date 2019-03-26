/*var cust = cust || {}
cust.permission = (()=>{
	
	
	let compojs = $.js()+'/component/compo.js';
	let rightContent = $('#right_content');
	let init=()=>{
	
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		
	};
	
	let login =()=>{
		 $('#left_content > .nav').empty();
			let aa=[{name:'cuslogin',txt:'회원로그인'},
				 	 {name:'cusjoin',txt:'회원가입'},
				 	 {name:'empregist',txt:'사원등록'},
				 	 {name:'empaccess',txt:'사원접속'}
				 ]
		 $.getScript(compojs)
		 .done(()=>{
			 $('#right_content').html(compo.cust_login_form())
			 $.each(aa,(i,j)=>{
					$('<li><a href="#">'+j.txt+'</a></li>')
					.appendTo('#left_content > .nav')
					.attr('name',j.name)
					.click(function(){
					switch($(this).attr('name')){
					case 'cuslogin':$('#right_content').html(compo.cust_login_form()); break;
					case 'cusjoin':$('#right_content').html(cust.permission.join()); break;
					case 'empregist': break;
					case 'empaccess': break;
					}
					})
				 }) 
			 
			 })
		 .fail(()=>{
			 alert('component/compo.js 못찾았다 창하야 정신차려라')
		 })
	 }
	 let join =()=>{
		 
		 $.getScript($.js()+'/component/compo.js')
		 .done(()=>{
			 
			 $('#right_content').html(compo.cust_join_form());
			 
			 
		 })
		 .fail(()=>{
			 alert('compo.cust_join_form() 못찾았다 창하야 정신차려라')
		 })
		
	 }
	 let mypage =()=>{}
	 return {
		 login: login,
		 join : join,
	   mypage : mypage
	 }
})();*/