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
	let reset=()=>{
		_ = $.ctx();
        js = $.js();
        compojs = $.js()+'/component/compo.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
	}
	let onCreate=x=>{
		$.when(
			$.getScript(compojs),
			$.getScript($.js()+'/employee/emp.js')
			).done(()=>{
				setContentView(x);
				
			})
		
	}
	let setContentView=x=>{
			$(l_cnt+' ul.nav').empty()
			$('#navtit').text(x.customerName+'님의 마이페이지');
			$.each(custnav(),(i,j)=>{
				   reset();
				   $('<li><a href="#">'+j.txt+'</a></li>')
					.appendTo(l_cnt+' ul.nav')
					.attr('name',j.name)
					.click(function(){
					$('#navtit').text(x.customerName+'님의 '+j.txt);		
					$('#right_content').empty();
					let that = $(this).attr('name')
					$(this).addClass('active')
					$(this).siblings().removeClass('active');
					switch(that){
					case 'mypage':
						mypage(x);
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
					};
				
				 });
				
			});//네비끝
			mypage(x);
	}
	
	let mypage=x=>{
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
			  
		  });
	 };
	let list =x=>{
		reset();
		emp.empnav();
		$(r_cnt).empty();
		$(r_cnt).html(compo.cust_list())
		$.getJSON(_+'/customers/page/'+x,d=>{
			
			$.each(d.ls,(x,y)=>{
			$('<tr class="oneList">'
				+'<td class="no">'+y.no+'</td>'
				+'<td class="customerID">'+y.customerID+'</td>'
				+'<td class="customerName">'+y.customerName+'</a></td>'
				+'<td class="ssn">'+y.ssn+'</td>'
				+'<td class="gender">남</td>'
				+'<td class="phone">'+y.phone+'</td>'
				+'<td class="city">'+y.city+'</td>'
				+'<td class="address">'+y.address+'</td>'
				+'<td class="postalCode">'+y.postalCode+'</td>'
				+'</tr>')
			.appendTo('#alltable')
			});
			if(d.pxy.existPrev){
				$('<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>').appendTo('.pagination')
			}
			for(let i=d.pxy.startpage;i<=d.pxy.endpage;i++){
				if(d.pxy.pageNum === i){
					$('<li class="page-item"><a class="page-link active" href="#">'+i+'</a></li>').appendTo('.pagination')
					
					
				}else{
					$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>').appendTo('.pagination')
					
				}
			}
			if(d.pxy.existNext){
				$('<li class="page-item"><a class="page-link" href="#">Next</a></li>').appendTo('.pagination')
			}
			$('.page-link').each(function(i){
				$(this).click(function(){
					list(i+1);
				})
			})
			
		});
	 };
	let custnav=()=>{
		
		return [{name:'cusupdate',txt:'정보수정'},
			{name:'withdrawal',txt:'회원탈퇴'},
			{name:'shopping',txt:'쇼핑몰'},
			{name:'purchase',txt:'구매내역'},
			{name:'basket',txt:'장바구니'},
			{name:'mypage',txt:'마이페이지'}
		   ]
   
  
$('#cuslogin').addClass('active')
	} 
	return{init:init,
		  list:list}
	
})();