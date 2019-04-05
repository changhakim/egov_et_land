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
			
		    })
		    $('#search_btn').on('click',e=>{
						e.preventDefault();
						let searchword=$('#search_input').val();
						let dd = {searchword:searchword,
								  firstno : '1'};
						search(dd);
				
			});//네비끝
			mypage(x);
			$('#srch_grp').show();
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
				$('<li class="page-item disabled"><a id="previous" class="page-link" href="#">Previous</a></li>').appendTo('.pagination')
			}
			
			let i=0;
			for(i=d.pxy.startpage;i<=d.pxy.endpage;i++){
				if(d.pxy.pageNum === i){
					$('<li class="page-item"><a class="pages page-link active">'+i+'</a></li>')
					.attr('href','/customers/page/'+i)
					.appendTo('.pagination')
					.click(function(){
						
						
						list($(this).text());
					})
					
					
				}else{
					$('<li class="page-item"><a class="pages page-link">'+i+'</a></li>')
					.attr('href','/customers/page/'+i)
					.appendTo('.pagination')
					.click(function(){
						
						
						list($(this).text());
					})
					
				}
			}
			if(d.pxy.existNext){
				$('<li class="page-item"><a id="next"class="page-link" href="#">Next</a></li>').appendTo('.pagination')
			}
			$('#previous').click(()=>{
				list(d.pxy.prevBlock)
			})
			$('#next').click(()=>{
				list(d.pxy.nextBlock)
			})
/*			$('.pages').each(function(i){
				$(this).click(function(){
					list($(this).text());
				})
			})*/
			
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
  let search =x=>{
	  $(r_cnt).html('<div class="container">'
			    +' <h1><font id="srch_tit" style="font-size:20px;margin:auto"></h1>'
			  	+' <button id="grid_btn">그리드로보기</button>'
				+'  <table id="alltable" style="margin:auto">'
				+'  <tr>'
				+'    <th>NO</th> '
				+'    <th>상품NO</th> '
				+'    <th>상품명</th> '
				+'    <th>제조사이름</th>'
				+'    <th>카테고리명</th>'
				+'    <th>수량</th>'
				+'    <th>가격</th>'
				+'  </tr>'
				+'</table>'
				+'</div>'
				+'<div id="page">'
				+'  <ul class="pagination">'
				+'  </ul>'
				+'</div>')
	  $.getJSON(_+'/trans/'+x.searchword+"/"+x.firstno,d=>{
		  $.each(d.ls,(x,y)=>{
			  $('<tr class="oneList">'
					  	+'<td class="productID">'+y.color+'</td>'
						+'<td class="productID">'+y.productID+'</td>'
						+'<td class="productName">'+y.productName+'</td>'
						+'<td class="supplierID">'+y.supplierID+'</a></td>'
						+'<td class="categoryID">'+y.categoryID+'</td>'
						+'<td class="unit">'+y.unit+'</td>'
						+'<td class="price">'+y.price+'</td>'
						+'</tr>')
					.appendTo('#alltable')
		 });/*each끝*/
		  if(d.pxy.existPrev){
				$('<li class="page-item disabled"><a id="previous" class="page-link">Previous</a></li>').appendTo('.pagination')
			}
			
			let i=0;
			for(i=d.pxy.startpage;i<=d.pxy.endpage;i++){
				if(d.pxy.pageNum === i){
					$('<li class="page-item"><a class="pages page-link active">'+i+'</a></li>')
					.appendTo('.pagination')
					.click(function(){
						
						let abc1 = {firstno:$(this).text(),
								  searchword:x.searchword}
						search(abc1);
					})
					}else{
					$('<li class="page-item"><a class="pages page-link">'+i+'</a></li>')
					.appendTo('.pagination')
					.click(function(){
						
						let abc2 = {firstno:$(this).text(),
								  searchword:x.searchword}
						search(abc2);
						
					})
					
				}
			}
			if(d.pxy.existNext){
				$('<li class="page-item"><a id="next"class="page-link">Next</a></li>').appendTo('.pagination')
			}
			$('#previous').click(()=>{
				let abc4 = {firstno:d.pxy.prevBlock,
						  searchword:x.searchword}
				search(abc4)
			})
			$('#next').click(()=>{
				
				let abc5 = {firstno:d.pxy.nextBlock,
						  searchword:x.searchword}
				search(abc5)
			})
			$('#grid_btn').click(e=>{
				let abc6 = {firstno:1,
						  searchword:x.searchword} 
				gridgo(abc6)
			
			}) /*grid_btn버튼끝*/ 
		  
	 });/*getJSON끝*/
	 
	  
}
  let gridgo=x=>{
	  $(r_cnt).html('<div class="row progrid">'
			   +'<button id="list_btn">리스트로보기</button>'
			   +'</div>')
	let url = _+'/trans/'+x.searchword+'/grid/'+x.firstno;
	  $('#list_btn').click(()=>{
		  let listgo = {firstno:1,
				  searchword:x.searchword}
		  search(listgo);
	  })
	$.getJSON(url,d=>{
			$.each(d.ls,(x,y)=>{
				$('<div class="col-md-4">'
					      +'<div class="thumbnail">'
					        +'<a href="#" target="_blank">'
					          +'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanydDprvV35nlbHP2RwvjdyPrYgOgjevy7W_efJ2tTEVZvKKF" alt="Lights" style="width:100%">'
					          +'<div class="caption">'
					            +'<p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>'
					          +'</div>'
					        +'</a>'
					      +'</div>'
					    +'</div>').appendTo('.progrid')
			})
			$('<div id="page">'
				+'  <ul class="pagination">'
				+'  </ul>'
				+'</div>').appendTo('.progrid')
			if(d.pxy.existPrev){
				$('<li class="page-item disabled"><a id="previous" class="page-link">Previous</a></li>').appendTo('.pagination')
			}
			
			let i=0;
			for(i=d.pxy.startpage;i<=d.pxy.endpage;i++){
				if(d.pxy.pageNum === i){
					$('<li class="page-item"><a class="pages page-link active">'+i+'</a></li>')
					.appendTo('.pagination')
					.click(function(){
						
						let abc1 = {firstno:$(this).text(),
								  searchword:x.searchword}
						gridgo(abc1);
					})
					}else{
					$('<li class="page-item"><a class="pages page-link">'+i+'</a></li>')
					.appendTo('.pagination')
					.click(function(){
						
						let abc2 = {firstno:$(this).text(),
								  searchword:x.searchword}
						gridgo(abc2);
						
					})
					
				}
			}
			if(d.pxy.existNext){
				$('<li class="page-item"><a id="next"class="page-link">Next</a></li>').appendTo('.pagination')
			}
			$('#previous').click(()=>{
				let abc4 = {firstno:d.pxy.prevBlock,
						  searchword:x.searchword}
				gridgo(abc4)
			})
			$('#next').click(()=>{
				alert(d.pxy.nextBlock)
				let abc5 = {firstno:d.pxy.nextBlock,
						  searchword:x.searchword}
				gridgo(abc5)
			})
		
		
		
	})		  
	}	   
	return{init:init,
		  list:list}
	
})();