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
		$.getScript(compojs)
		/*$.getScript($.js()+'/customer/cust.js')*/
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
			$('form button[type=submit]').click(e=>{
				e.preventDefault();
				join();
			})
				
				 
				
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
				  url: $.ctx()+'/users/cust/'+data.customerID,
				  type:'post',
				  data : JSON.stringify(data),
				  dataType :'json',
				  contentType:'application/json',
				  success:d=>{
					  if(d.customerID!==''){
						  alert('성공'+d.customerID);
						  $('#right_content').html(compo.cust_mypage())
						  $('#customerID').append(d.customerID);
						  $('#customerName').append(d.customerName);
						  $('#ssn').append(d.ssn);
						  $('#phone').append(d.phone);
						  $('#city').append(d.city);
						  $('#address').append(d.address);
						  $('#postalCode').append(d.postalCode);
						  $('.ubdatebtn').click(()=>{
							  $('#right_content').html(compo.cust_mypage());
							  $('#customerID').append(d.customerID);
							  $('#customerName').append(d.customerName);
							  $('#ssn').append(d.ssn);
							  $('#phone').html('<label for="phone"><b>phone</b></label></br><input type="text" value="'+d.phone+'" name="phone" "required"></br>');
							  $('#city').html('<label for="city"><b>city</b></label></br><input type="text" value="'+d.city+'" name="city" "required"></br>');
							  $('#address').html('<label for="address"><b>address</b></label></br><input type="text" value="'+d.address+'" name="address" "required"></br>');
							  $('#postalCode').html('<label for="postalCode"><b>postalCode</b></label></br><input type="text" value="'+d.postalCode+'" name="postalCode" "required"></br>');
							  $('#postalCode').after('<p id="password"><label for="password"><b>password</b></label></br><input type="text" value="'+d.password+'" name="password" "required"></br></p>')
							  $('.ubdatebtn').attr('id','confirmbtn').text('확인')
						
							  $('#confirmbtn').click(()=>{
								  update(d.customerID);
							  })
						  
						  })
						 
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
			 url:$.ctx()+'/users/cust/',
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
			alert('로그인들어옴')
			 
			  let data = {
			   employeeID:$('form input[name=employeeID]').val(),
			   name:$('form input[name=name]').val()
			   }
			  $.ajax({
				  url: $.ctx()+'/users/emp/'+data.customerID,
				  type:'post',
				  data : JSON.stringify(data),
				  dataType :'json',
				  contentType:'application/json',
				  success:d=>{
					  if(d.customerID!==''){
						  alert('성공'+d.customerID);
						  $('#right_content').html(compo.cust_mypage())
						  $('#customerID').append(d.customerID);
						  $('#customerName').append(d.customerName);
						  $('#ssn').append(d.ssn);
						  $('#phone').append(d.phone);
						  $('#city').append(d.city);
						  $('#address').append(d.address);
						  $('#postalCode').append(d.postalCode);
						  $('.ubdatebtn').click(()=>{
							  $('#right_content').html(compo.cust_mypage());
							  $('#customerID').append(d.customerID);
							  $('#customerName').append(d.customerName);
							  $('#ssn').append(d.ssn);
							  $('#phone').html('<label for="phone"><b>phone</b></label></br><input type="text" value="'+d.phone+'" name="phone" "required"></br>');
							  $('#city').html('<label for="city"><b>city</b></label></br><input type="text" value="'+d.city+'" name="city" "required"></br>');
							  $('#address').html('<label for="address"><b>address</b></label></br><input type="text" value="'+d.address+'" name="address" "required"></br>');
							  $('#postalCode').html('<label for="postalCode"><b>postalCode</b></label></br><input type="text" value="'+d.postalCode+'" name="postalCode" "required"></br>');
							  $('#postalCode').after('<p id="password"><label for="password"><b>password</b></label></br><input type="text" value="'+d.password+'" name="password" "required"></br></p>')
							  $('.ubdatebtn').attr('id','confirmbtn').text('확인')
						
							  $('#confirmbtn').click(()=>{
								  update(d.customerID);
							  })
						  
						  })
						 
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
	 let update=x=>{
		 alert(x)
		  let data={phone:$('#phone input[name=phone]').val(),
				  city:$('#city input[name=city]').val(),
				  address:$('#address input[name=address]').val(),
				  postalCode:$('#postalCode input[name=postalCode]').val(),
				  password:$('#password input[name=password]').val(),
				  customerID:x}
		 alert(data.postalCode)
		  $.ajax({
			  url:$.ctx()+'/users/cust/'+x,
			  type:'put',
			  data:JSON.stringify(data),
			  dataType:'json',
			  contentType:'application/json',
			  success:d=>{
				  alert('업데이트성공')
			  },
			  error:e=>{
				  alert('업데이트 실패')
			  }
			  
		  })
	 }
     

	 return {init:init}
})();