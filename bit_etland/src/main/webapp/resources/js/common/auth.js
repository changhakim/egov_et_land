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
		
		$.when(
		$.getScript(compojs),
		$.getScript($.js()+'/customer/cust.js'),
		$.getScript($.js()+'/employee/emp.js')
		)
		.done(()=>{
			$(r_cnt).html(compo.cust_login_form());
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
			$('<li id="'+j.name+'"><a href="#">'+j.txt+'</a></li>')
			.appendTo(l_cnt+' ul.nav')
			.attr('name',j.name)
			.click(function(){
			$('#right_content').empty();
			let that = $(this).attr('name')
			$(this).addClass('active')
			$(this).siblings().removeClass('active');
			switch(that){
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
			$('form button[type=submit]').click(e=>{
				e.preventDefault();
				join();
			})
				
				 
				
				break;
			case 'empregist': 
				$(compo.emp_register_form())
                .appendTo(r_cnt);
				break;
			case 'empaccess': 
				$(compo.emp_access_form())
                 .appendTo(r_cnt);
				$('#access_btn').click(e=>{
					e.preventDefault();
					access();
				});
				break;
			}
		
		 })
		
	});
      $('#cuslogin').addClass('active') 
       
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
				  url: $.ctx()+'/customers/'+data.customerID,
				  type:'post',
				  data : JSON.stringify(data),
				  dataType :'json',
				  contentType:'application/json',
				  success:d=>{
					  if(d.customerID!==''){
						  alert('성공'+d.customerID);
						  cust.init(d);
						 
						 
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
let join =()=>{
		 let data={customerID:$('form input[name=customerID]').val(),
				 customerName:$('form input[name=customerName]').val(),
				 password:$('form input[name=password]').val(),
				 ssn:$('form input[name=ssn]').val(),
				 phone:$('form input[name=phone]').val(),
				 city:$('form input[name=city]').val(),
				 address:$('form input[name=address]').val(),
				 postalCode:$('form input[name=postalCode]').val()};
		 $.ajax({
			 url:$.ctx()+'/customers',
			 type:'post',
			 data:JSON.stringify(data),
			 dataType:'json',
			 contentType:'application/json',
			 success:d=>{
				 if(d.s==='s'){
					 alert('성공')
					 $('#right_content').html(compo.cust_login_form());
					 $('form button[type=submit]').click(e=>{
							e.preventDefault();
							login();
							 
					 });
					 
				 }
				 else{
				alert('회원가입실패')
				$(compo.cust_join_form())
                 .appendTo(r_cnt);
			   $('form button[type=submit]').click(e=>{
				e.preventDefault();
				join();
			})
				 }
				 
			 },
			 error:e=>{
				 alert('에러')
				 alert("code = "+ request.status + " message = " + request.responseText + " error = " + error);
			 }
			 
		 })
	 };
let access =()=>{	
			  let ok = confirm('사원입니까?')
			  if(ok){
				  let emp_id = prompt('사원번호 입력하세요');
				  $.getJSON($.ctx()+'/emp',d=>{
						  if(d.employeeID===emp_id){
							  alert('사원인증');
							  $('#name_btn').click(e=>{
								  e.preventDefault();
								  let emp_name =  $('#name').val();
								  if(d.name===emp_name){
									 alert('이름인증')
									 cust.list();
								  }else{
									  alert('이름이 일치하지않습니다')
								  }  
							  })
							
						  }else{
							  alert('사원번호가 일치하지 않습니다')
							  //사원번호가 일치하지 않습니다.
						  }
						  
					  
					  
				})
			  }else{
				  alert('사원전용페이지입니다 돌아가주세요')
				  //사원전용페이지입니다 돌아가주세요
			  }
			  /*let data = {
			   employeeID:$('form input[name=employeeID]').val(),
			   name:$('form input[name=name]').val()
			   }
			  */
	     
	 };	 
let register =()=>{
		
		 let data={employeeID:$('form input[name=employeeID]').val(),
				 manager:$('form input[name=manager]').val(),
				 name:$('form input[name=name]').val(),
				 birthDate:$('form input[name=birthDate]').val(),
				 notes:$('form input[name=notes]').val()
				 };
		 $.ajax({
			 url:$.ctx()+'/users/emp/',
			 type:'post',
			 data:JSON.stringify(data),
			 dataType:'json',
			 contentType:'application/json',
			 success:d=>{
				 if(d.s==='s'){
					 alert('성공')
					 $('#right_content').html(compo.emp_register_form());
					 $('form button[type=submit]').click(e=>{
							e.preventDefault();
							login();
							 
					 });
					 
				 }
				 else{
				alert('회원가입실패')
				$(compo.cust_join_form())
                 .appendTo(r_cnt);
			   $('form button[type=submit]').click(e=>{
				e.preventDefault();
				join();
			})
				 }
				 
			 },
			 error:e=>{
				 alert('에러')
				 alert("code = "+ request.status + " message = " + request.responseText + " error = " + error);
			 }
			 
		 })
	 };

     

	 return {init:init}
})();