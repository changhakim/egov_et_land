var cust = cust || {}

cust = (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =x=>{
		_ = $.ctx();
        js = $.js();
        compojs = $.js()+'/component/compo.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
        
		onCreate(x);
	}
	let onCreate=x=>{
		setContentView(x);
	}
	let setContentView=x=>{
		$.when(
		$.getScript(compojs)		
		).done(()=>{
			$(l_cnt+' ul.nav').empty()
			let aa=[{name:'cusupdate',txt:'정보수정'},
				{name:'withdrawal',txt:'회원탈퇴'},
				{name:'shopping',txt:'쇼핑몰'},
				{name:'purchase',txt:'구매내역'},
				{name:'basket',txt:'장바구니'},
				{name:'mypage',txt:'마이페이지'}
			   ]
       
       $.each(aa,(i,j)=>{
			$('<li><a href="#">'+j.txt+'</a></li>')
			.appendTo(l_cnt+' ul.nav')
			.attr('name',j.name)
			.click(function(){
			$('#right_content').empty();
			let that = $(this).attr('name')
			$(this).addClass('active')
			$(this).siblings().removeClass('active');
			switch(that){
			case'mypage':
				
			break;	
			case 'cusupdate':
	
			 
			break;
			case 'withdrawal':
			
				break;
			case 'shopping': 
				$.getScript($.js()+'/product/prod.js',()=>{
					prod.init();	
				}).fail(()=>{})
				
				
				break;
			case 'purchase': 
				
				break;
			case 'basket':
				
			break;
			}
		
		 })
		
	});//네비끝
			
			
			
			//마이페이지시작
			  $('#right_content').html(compo.cust_mypage())
			  $('#customerID').append(x.customerID);
			  $('#customerName').append(x.customerName);
			  $('#ssn').append(x.ssn);
			  $('#phone').append(x.phone);
			  $('#city').append(x.city);
			  $('#address').append(x.address);
			  $('#postalCode').append(x.postalCode);
			  $('.ubdatebtn').click(()=>{
				  $('#right_content').html(compo.cust_mypage());
				  $('#customerID').append(x.customerID);
				  $('#customerName').append(x.customerName);
				  $('#ssn').append(x.ssn);
				  $('#phone').html('<label for="phone"><b>phone</b></label></br><input type="text" value="'+x.phone+'" name="phone" "required"></br>');
				  $('#city').html('<label for="city"><b>city</b></label></br><input type="text" value="'+x.city+'" name="city" "required"></br>');
				  $('#address').html('<label for="address"><b>address</b></label></br><input type="text" value="'+x.address+'" name="address" "required"></br>');
				  $('#postalCode').html('<label for="postalCode"><b>postalCode</b></label></br><input type="text" value="'+x.postalCode+'" name="postalCode" "required"></br>');
				  $('#postalCode').after('<p id="password"><label for="password"><b>password</b></label></br><input type="text" value="'+x.password+'" name="password" "required"></br></p>')
				  $('.ubdatebtn').attr('id','confirmbtn').text('확인')
			
				  $('#confirmbtn').click(()=>{
					  update(x.customerID);
				  })
			  
			  })
			
		})
	}
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
			  url:$.ctx()+'/customers/'+x,
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
	return{init:init}
	
})();