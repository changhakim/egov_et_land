var cust = cust || {}

cust = (()=>{
	let init =()=>{
		onCreate();
	}
	let onCreate=()=>{
		setContentView();
	}
	let setContentView=()=>{
		$.when(
		$.getScript($.js()+'/component/compo.js')		
		).done(()=>{
			
		})
	}
	return{init:init}
	
})();