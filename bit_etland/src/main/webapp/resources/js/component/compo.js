var compo = compo||{};

compo = {
	cust_login_form : ()=>{
		
		return '<h2>Login Form</h2>'

		+'<form>'
		+'  <div class="imgcontainer">'
		+'   <img id="loimg" src="img_avatar2.png" alt="Avatar" class="avatar">'
		+'  </div>'

		+'  <div class="container">'
		+'  <label for="uname"><b>Username</b></label></br>'
		+'    <input type="text" placeholder="Enter Username" name="uname" required></br>'

		+'   <label for="psw"><b>Password</b></label></br>'
		+'    <input type="password" placeholder="Enter Password" name="psw" required></br>'
		        
		+'    <button type="submit">Login</button></br>'
		+'    <label>'
		+'    <input type="checkbox" checked="checked" name="remember"> Remember me</br>'
		+'    </label>'
		+'    </div>'

		+'    <div class="container" style="background-color:#f1f1f1">'
		+'    <button type="button" class="cancelbtn">Cancel</button></br>'
		+'    <span class="psw">Forgot <a href="#">password?</a></span></br>'
		+'    </div>'
		+'</form>';
	},
	emp_access_form : ()=>{
		
		return '<h2>Login Form</h2>'

		+'<form>'
		+'  <div class="imgcontainer">'
		+'   <img id="loimg" src="img_avatar2.png" alt="Avatar" class="avatar">'
		+'  </div>'

		+'  <div class="container">'
		+'  <label for="uname"><b>Username</b></label>'
		+'    <input type="text" placeholder="Enter Username" name="uname" required>'

		+'   <label for="psw"><b>Password</b></label>'
		+'    <input type="password" placeholder="Enter Password" name="psw" required>'
		        
		+'    <button type="submit">Login</button>'
		+'    <label>'
		+'    <input type="checkbox" checked="checked" name="remember"> Remember me'
		+'    </label>'
		+'    </div>'

		+'    <div class="container" style="background-color:#f1f1f1">'
		+'    <button type="button" class="cancelbtn">Cancel</button>'
		+'    <span class="psw">Forgot <a href="#">password?</a></span>'
		+'    </div>'
		+'</form>';
	},
	cust_join_form :()=>{
		return '<form style="border:1px solid #ccc">'
		+'  <div class="container">'
		+'    <h1>Sign Up</h1>'
		+'    <p>Please fill in this form to create an account.</p>'
		+'    <hr>'

		+'    <label for="email"><b>Email</b></label></br>'
		+'    <input type="text" placeholder="Enter Email" name="email" "required"></br>'
		+''
		+'    <label for="psw"><b>Password</b></label></br>'
		+'    <input type="password" placeholder="Enter Password" name="psw" "required"></br>'
		+''
		+'    <label for="psw-repeat"><b>Repeat Password</b></label></br>'
		+'    <input type="password" placeholder="Repeat Password" name="psw-repeat" "required"></br>'
		 
		+'    <label>'
		+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</br>'
		+'    </label>'
		   
		+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p></br>'
		+''
		+'    <div class="clearfix">'
		+'      <button type="button" class="cancelbtn">Cancel</button>'
		+'      <button type="submit" class="signupbtn">Sign Up</button>'
		+'    </div>'
		+'  </div>'
		+'</form>'

	},
	emp_join_form :()=>{
		return '<form style="border:1px solid #ccc">'
		+'  <div class="container">'
		+'    <h1>Sign Up</h1>'
		+'    <p>Please fill in this form to create an account.</p>'
		+'    <hr>'

		+'    <label for="email"><b>Email</b></label></br>'
		+'    <input type="text" placeholder="Enter Email" name="email" "required"></br>'
		+''
		+'    <label for="psw"><b>Password</b></label></br>'
		+'    <input type="password" placeholder="Enter Password" name="psw" "required"></br>'
		+''
		+'    <label for="psw-repeat"><b>Repeat Password</b></label></br>'
		+'    <input type="password" placeholder="Repeat Password" name="psw-repeat" "required"></br>'
		 
		+'    <label>'
		+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</br>'
		+'    </label>'
		   
		+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
		+''
		+'    <div class="clearfix">'
		+'      <button type="button" class="cancelbtn">Cancel</button>'
		+'      <button type="submit" class="signupbtn">Sign Up</button>'
		+'    </div>'
		+'  </div>'
		+'</form>'

	}
	
}

function common(){
	_common.nav();
	
}
function act(){
	_common.active();
}

	var _common={
			nav:()=>{
				$('#left_content ul.nav').remove();
				$('#nav').children().eq(0).html('<a id="login" href="#">로그인</a>');
				$('#nav').children().eq(1).html('<a id="join" href="#">회원가입</a>');
				$('#nav').children().eq(2).html('<a id="regist" href="#">사원등록</a>');
				$('#nav').children().eq(3).html('<a id="access" href="#">사원접속</a>');
				$('#nav').append('<li></li>').children().eq(4).html('<a id="question" href="#">고객문의</a>');
				
			},
			active:()=>{
				$('#nav').children().eq(0).attr('class','a');
				$('#nav').children().eq(1).attr('class','a');
				$('#nav').children().eq(2).attr('class','a');
				$('#nav').children().eq(3).attr('class','a');
				$('#nav').children().eq(4).attr('class','a');
			}
	}