var prod = prod||{};

prod=(()=>{
	let init=()=>{
		onCreate();
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
	let post=()=>{
		
	};
	let get=()=>{
		
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	
	
	return{init:init}
	
	
	
	
	
})();