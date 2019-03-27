var auth = auth||{}
auth = (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
        _ = $.ctx();
        js = $.js();
        compojs = $.js()+'/component/compo.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
         
        onCreate();
   };
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		
		$.getScript(compojs)
		.done(()=>{
			$(r_cnt).empty();
		    $(compo.cust_login_form())
		    .appendTo(r_cnt); 
			
		    $('form button[type=submit]').click(e=>{
			e.preventDefault();
			login(); 
			});
       // 왼쪽 네비게이션
       $(l_cnt+' ul.nav').empty()
		
		let aa=[{name:'cuslogin',txt:'회원로그인'},
				{name:'cusjoin',txt:'회원가입'},
				{name:'empregist',txt:'사원등록'},
				{name:'empaccess',txt:'사원접속'}
			   ]
       
       $.each(aa,(i,j)=>{
			$('<li><a href="#">'+j.txt+'</a></li>')
			.appendTo(l_cnt+' ul.nav')
			.attr('name',j.name)
			.click(function(){
			$('#right_content').empty();
			switch($(this).attr('name')){
			case 'cuslogin':
			$(compo.cust_login_form()).appendTo('#right_content');
			 $('form button[type=submit]').click(e=>{
					e.preventDefault();
					login(); 
			 });
			break;
			case 'cusjoin':
				 $(compo.cust_join_form())
                 .appendTo(r_cnt);
				
				break;
			case 'empregist': 
				 $(compo.emp_access_form())
                 .appendTo(r_cnt);
				break;
			case 'empaccess': 
				$(compo.emp_register_form())
                .appendTo(r_cnt);
				break;
			}
		
		 })
		
	});
})
.fail(()=>{
	 alert('component/compo.js 못찾았다 창하야 정신차려라')
})
};
	let login =()=>{	
			alert('로그인들어옴')
			 
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
					  if(d.customerID!==''){
						  alert('성공'+d.customerID);
						  $('#right_content').html(compo.cust_mypage())
					  }else{
						  alert('실패')
					  }
					  
				  },
				  error:(request,status,error)=>{
					  alert("code = "+ request.status + " message = " + request.responseText + " error = " + error);

					 	  alert('실패')
			   }
			})
	     
	 };
	 let join =()=>{};
     let register =()=>{};
     let access =()=>{};
	 return {init:init}
})();