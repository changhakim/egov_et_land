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
		+'  <label for="employeeID"><b>employeeID</b></label>'
		+'    <input type="text" placeholder="아이디를 입력하세요" name="employeeID" required>'

		+'   <label for="name"><b>Password</b></label>'
		+'    <input type="name" placeholder="이름을 입력하세요" name="name" required>'
		        
		+'    <button type="submit">access</button>'
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

		+'    <label for="customerID"><b>ID</b></label></br>'
		+'    <input type="text" placeholder="Enter Email" name="customerID" "required"></br>'
		+''
		+'    <label for="psw"><b>Password</b></label></br>'
		+'    <input type="password" placeholder="Enter Password" name="password" "required"></br>'
		+'    <label for="customerName"><b>이름</b></label></br>'
		+'    <input type="text" placeholder="customerName" name="customerName" "required"></br>'
		+'    <label for="ssn"><b>주민등록번호</b></label></br>'
		+'    <input type="text" placeholder="주민등록번호를 입력하세요" name="ssn" "required"></br>'
		+'    <label for="phone"><b>Phone</b></label></br>'
		+'    <input type="text" placeholder="phone" name="phone" "required"></br>'
		+'    <label for="city"><b>주소</b></label></br>'
		+'    <input type="text" placeholder="주소를입력하세요" name="city" "required"></br>'
		+'    <label for="address"><b>상세주소</b></label></br>'
		+'    <input type="text" placeholder="상세주소를입력하세요" name="address" "required"></br>'
		+'    <label for="postalcode"><b>postalcode</b></label></br>'
		+'    <input type="text" placeholder="우편번호를입력하세요" name="postalCode" "required"></br>'
		 
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
	emp_register_form :()=>{
		return '<form style="border:1px solid #ccc">'
		+'  <div class="container">'
		+'    <h1>Sign Up</h1>'
		+'    <p>Please fill in this form to create an account.</p>'
		+'    <hr>'

		+'    <label for="employeeID"><b>ID</b></label></br>'
		+'    <input type="text" placeholder="아이디를입력하세요" name="employeeID" "required"></br>'
		+'    <label for="manager"><b>매니져</b></label></br>'
		+'    <input type="text" placeholder="매니져 이름" name="manager" "required"></br>'
		+'    <label for="name"><b>이름</b></label></br>'
		+'    <input type="text" placeholder="이름을입력하세요" name="name" "required"></br>'
		+'    <label for="birthDate"><b>생년월일</b></label></br>'
		+'    <input type="text" placeholder="birthDate" name="birthDate" "required"></br>'
		+'    <label for="notes"><b>상세</b></label></br>'
		+'    <input type="text" placeholder="상세입력" name="notes" "required"></br>'
		 
		+'    <label>'
		+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</br>'
		+'    </label>'
		   
		+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
		+''
		+'    <div class="clearfix">'
		+'      <button type="button" class="cancelbtn">Cancel</button>'
		+'      <button type="submit" class="registerbtn">Register</button>'
		+'    </div>'
		+'  </div>'
		+'</form>'

	},
	cust_mypage:()=>{
		return '<div class="w3-light-grey">'
        
        +'<!-- Page Container -->'
        +'<div class="w3-content w3-margin-top" style="max-width:1400px;">'
       
          +'<!-- The Grid -->'
          +'<div class="w3-row-padding">'
       
            +'<!-- Left Column -->'
            +'<div class="w3-third">'
            
              +'<div class="w3-white w3-text-grey w3-card-4">'
                +'<div class="w3-display-container">'
                  +'<img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">'
                  +'<div class="w3-display-bottomleft w3-container w3-text-black">'
                    +'<h2>Jane Doe</h2>'
                  +'</div>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<p id="customerID"><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<p id="customerName"><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<p id="ssn"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<p id="phone"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<p id="city"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<p id="address"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<p id="postalCode"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i></p>'
                  +'<button type="submit" class="ubdatebtn">update</button>'
                  +'<hr>'
        
                  +'<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>'
                  +'<p>Adobe Photoshop</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>'
                  +'</div>'
                  +'<p>Photography</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">'
                      +'<div class="w3-center w3-text-white">80%</div>'
                    +'</div>'
                  +'</div>'
                  +'<p>Illustrator</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>'
                  +'</div>'
                  +'<p>Media</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>'
                  +'</div>'
                  +'<br>'
                  +'<p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>"Languages"</b></p>'
                  +'<p>English</p>'
                  +'<div class="w3-light-grey w3-round-xlarge">'
                    +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>'
                  +'</div>'
                  +'<p>Spanish</p>'
                  +'<div class="w3-light-grey w3-round-xlarge">'
                    +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>'
                  +'</div>'
                  +'<p>German</p>'
                  +'<div class="w3-light-grey w3-round-xlarge">'
                    +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>'
                  +'</div>'
                  +'<br>'
                +'</div>'
              +'</div><br>'
        
            +'<!-- End Left Column -->'
            +'</div>'
       
            +'<!-- Right Column -->'
            +'<div class="w3-twothird">'
              +'<div class="w3-container w3-card w3-white w3-margin-bottom">'
              +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>'
                  +' <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>'
                  +'  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>'
                  +' <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>'
                  +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>'
                +'</div>'
              +'</div>'
        
              +'<div class="w3-container w3-card w3-white">'
              +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>W3Schools.com</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>'
                  +'<p>Web Development! All I need to know in one place</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>London Business School</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>'
                  +'<p>Master Degree</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>School of Coding</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>'
                  +'<p>Bachelor Degree</p><br>'
                +'</div>'
              +'</div>'
        
            +'<!-- End Right Column -->'
            +'</div>'
        
          +'<!-- End Grid -->'
          +'</div>'
        
          +'<!-- End Page Container -->'
        +'</div>'
        +''
        +'<footer class="w3-container w3-teal w3-center w3-margin-top">'
          +'<p>Find me on social media.</p>'
          +'<i class="fa fa-facebook-official w3-hover-opacity"></i>'
          +'<i class="fa fa-instagram w3-hover-opacity"></i>'
          +'<i class="fa fa-snapchat w3-hover-opacity"></i>'
          +'<i class="fa fa-pinterest-p w3-hover-opacity"></i>'
          +'<i class="fa fa-twitter w3-hover-opacity"></i>'
          +'<i class="fa fa-linkedin w3-hover-opacity"></i>'
          +'<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>'
        +'</footer>'
        
        +'</div>'
		
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