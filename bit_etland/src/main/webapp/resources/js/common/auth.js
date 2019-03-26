var auth = auth||{}
auth.permission = (()=>{

	let init=()=>{
	
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		
	}; 
	let login =()=>{
		
		 $.getScript($.js()+'/component/compo.js')
		 .done(()=>{
			 $('#right_content').html(compo.cust_login_form())
			 $('#left_content > .nav').empty();
				let aa=[{name:'cuslogin',txt:'회원로그인'},
					 	 {name:'cusjoin',txt:'회원가입'},
					 	 {name:'empregist',txt:'사원등록'},
					 	 {name:'empaccess',txt:'사원접속'}
					 ]
			
			 $('form button[type=submit]').click(()=>{
			  let data = {
			   customerID:$('form input[name=uname]').val(),
			   password:$('form input[name=psw]').val()
			   }
			  $.ajax({
				  url: $.ctx()+'/cust/login',
				  type:'post',
				  data : JSON.stringify(data),
				  dataType :'json',
				  contentType:'application/json',
				  success:d=>{
					  alert('성공')
				  },
				  error:(request,status,error)=>{
					  alert("code = "+ request.status + " message = " + request.responseText + " error = " + error);

					 	  alert('실패')
				  }
			  })
			 }); 
			 $.each(aa,(i,j)=>{
					$('<li><a href="#">'+j.txt+'</a></li>')
					.appendTo('#left_content > .nav')
					.attr('name',j.name)
					.click(function(){
						$('#right_content').empty();
					switch($(this).attr('name')){
					case 'cuslogin':$(compo.cust_login_form()).appendTo('#right_content'); 
					$('form button[type=submit]').click(()=>{
						 let data = {
								   customerID:$('form input[name=uname]').val(),
								   password:$('form input[name=psw]').val()
								   }
						$.ajax({
							  url: $.ctx()+'/cust/login/',
							  type:'post',
							  data : JSON.stringify(data),
							  dataType :'json',
							  contentType:'application/json',
							  success:d=>{
								  alert('성공')
							  },
							  error:e=>{
								 alert('실패')
							  }
						  })
						  
					 });
					break;
					case 'cusjoin':$(compo.cust_join_form()).appendTo('#right_content'); break;
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
})();