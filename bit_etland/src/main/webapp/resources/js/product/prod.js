var prod = prod||{};

prod=(()=>{
	let _,js,compojs,r_cnt,l_cnt,emp;
	let init=()=>{
		_ = $.ctx();
        js = $.js();
        compojs = $.js()+'/component/compo.js';
        emp = $.js()+'/employee/emp.js';
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
				$.js()+'/component/compo.js',
				$.js()+'/customer/cust.js'
		).done(()=>{
			$('#right_content').empty();
			 $('#right_content').html(compo.carousel());
			$('#im1').attr('src',$.img()+'/you.jpg')
			$('#im2').attr('src',$.img()+'/toy2.png')
			$('#im3').attr('src',$.img()+'/toy4.jpg')
		});
	};
	let regist=()=>{
		reset();
		$.when(
		$.getScript(compojs)		
		).done(()=>{
			$(r_cnt).html(compo.prod_post());
			
			
			$('.btn-primary').click(e=>{
				e.preventDefault();

				
				let freebies = [];
				 $(".checks:checked").each(function(i) {
					 freebies.push($(this).val());
				});
				
				if($.fn.nullCheker([$('#product_name').val(),$('#price').val(),$('#unit').val()])){
					alert('상품명을 입력해주세요')
				}
				 
				 
				let data = {categoryID:$('#category_name').val(),
							productName:$('#product_name').val(),
							price:$('#price').val(),
							unit:$('#unit').val(),
							supplierID:$('#supplier_name').val(),
							color:$('.radi:checked').val(),
							freebies:freebies,
							comment:$('#comment').val()};/*라디오에 클래스부여함*/ 
				$.ajax({
					url:_+'/phones',
					type:'post',
					data:JSON.stringify(data),
					dataType:'json',
					contentType:'application/json',
					success:d=>{
						list(1);	
					},
					error:e=>{
						alert('에러')
					}
				})/*ajax끝*/
			
			});
			
		})
		
	};
	let get=()=>{
		
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	let list=x=>{
		reset();
		$.when(
		$.getScript(compojs)
		).done(()=>{
			
			$(r_cnt).html('<div class="container">'
					+'  <table id="alltable" style="margin:auto">'
					+'  <tr>'
					+'    <th>상품NO</th> '
					+'    <th>상품명</th> '
					+'    <th>제공자NO</th>'
					+'    <th>카테고리NO</th>'
					+'    <th>수량</th>'
					+'    <th>가격</th>'
					+'  </tr>'
					+'</table>'
					+'</div>'
					+'<div id="page">'
					+'  <ul class="pagination">'
					+'  </ul>'
					+'</div>')
		  $.getJSON(_+'/phones/page/'+x,d=>{
			  $.each(d.ls,(x,y)=>{
				  $('<tr class="oneList">'
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
						.attr('href','/phones/page/'+i)
						.appendTo('.pagination')
						.click(function(){
							list($(this).text());
						})
						}else{
						$('<li class="page-item"><a class="pages page-link">'+i+'</a></li>')
						.attr('href','/phones/page/'+i)
						.appendTo('.pagination')
						.click(function(){
							list($(this).text());
						})
						
					}
				}
				if(d.pxy.existNext){
					$('<li class="page-item"><a id="next"class="page-link">Next</a></li>').appendTo('.pagination')
				}
				$('#previous').click(()=>{
					list(d.pxy.prevBlock)
				})
				$('#next').click(()=>{
					list(d.pxy.nextBlock)
				})
			  
		 });/*getJSON끝*/
		
	});/*DONE끝*/
	}
	
	
	return{init:init,
		  list:list,
		  regist:regist}
	
	
	
	
	
})();