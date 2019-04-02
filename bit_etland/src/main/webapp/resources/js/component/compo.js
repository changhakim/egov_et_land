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
		

		+'   <label for="name"><b>Password</b></label>'
		+'    <input type="text" placeholder="이름을 입력하세요" id="name" name="name" value="김경민" required>'
		        
		+'    <button type="submit" id="access_btn">access</button>'
		+'    <button type="submit" id="name_btn">name</button>'
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
		
	},
	carousel :()=>{
		return '<div class="container">'
		  +'<h2>Carousel Example</h2>'
		  +'<div id="myCarousel" class="carousel slide" data-ride="carousel">'
		    +'<!-- Indicators -->'
		    +'<ol class="carousel-indicators">'
		      +'<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
		      +'<li data-target="#myCarousel" data-slide-to="1"></li>'
		      +'<li data-target="#myCarousel" data-slide-to="2"></li>'
		    +'</ol>'

		    +'<!-- Wrapper for slides -->'
		    +'<div class="carousel-inner">'

		      +'<div class="item active">'
		        +'<img id="im1" src="la.jpg" alt="Los Angeles" style="width:100%;">'
		        +'<div class="carousel-caption">'
		          +'<h3>Los Angeles</h3>'
		          +'<p>LA is always so much fun!</p>'
		        +'</div>'
		      +'</div>'

		      +'<div class="item">'
		        +'<img id="im2" src="chicago.jpg" alt="Chicago" style="width:100%;">'
		        +'<div class="carousel-caption">'
		          +'<h3>Chicago</h3>'
		          +'<p>Thank you, Chicago!</p>'
		        +'</div>'
		      +'</div>'
		    +''
		      +'<div class="item">'
		        +'<img id="im3" src="ny.jpg" alt="New York" style="width:100%;">'
		        +'<div class="carousel-caption">'
		          +'<h3>New York</h3>'
		          +'<p>We love the Big Apple!</p>'
		        +'</div>'
		      +'</div>'
		  +''
		    +'</div>'

		    +'<!-- Left and right controls -->'
		    +'<a class="left carousel-control" href="#myCarousel" data-slide="prev">'
		      +'<span class="glyphicon glyphicon-chevron-left"></span>'
		      +'<span class="sr-only">Previous</span>'
		    +'</a>'
		    +'<a class="right carousel-control" href="#myCarousel" data-slide="next">'
		      +'<span class="glyphicon glyphicon-chevron-right"></span>'
		      +'<span class="sr-only">Next</span>'
		    +'</a>'
		  +'</div>'
		+'</div>'
	},
	prod_post:()=>{
		return '<div class="col-md-8 order-md-1">'
		+'          <h4 class="mb-3">Billing address</h4>'
		+'          <form class="needs-validation" novalidate="">'
		+'            <div class="row">'
		+'              <div class="col-md-6 mb-3">'
		+'                <label for="firstName">First name</label>'
		+'                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">'
		+'                <div class="invalid-feedback">'
		+'                  Valid first name is required.'
		+'                </div>'
		+'              </div>'
		+'              <div class="col-md-6 mb-3">'
		+'                <label for="lastName">Last name</label>'
		+'                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">'
		+'                <div class="invalid-feedback">'
		+'                  Valid last name is required.'
		+'                </div>'
		+'              </div>'
		+'            </div>'
		+''
		+'            <div class="mb-3">'
		+'              <label for="username">Username</label>'
		+'              <div class="input-group">'
		+'                <div class="input-group-prepend">'
		+'                  <span class="input-group-text">@</span>'
		+'                </div>'
		+'                <input type="text" class="form-control" id="username" placeholder="Username" required="">'
		+'                <div class="invalid-feedback" style="width: 100%;">'
		+'                  Your username is required.'
		+'                </div>'
		+'              </div>'
		+'            </div>'
		+''
		+'            <div class="mb-3">'
		+'              <label for="email">Email <span class="text-muted">(Optional)</span></label>'
		+'              <input type="email" class="form-control" id="email" placeholder="you@example.com">'
		+'              <div class="invalid-feedback">'
		+'                Please enter a valid email address for shipping updates.'
		+'              </div>'
		+'            </div>'
		+''
		+'            <div class="mb-3">'
		+'              <label for="address">Address</label>'
		+'              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'
		+'              <div class="invalid-feedback">'
		+'                Please enter your shipping address.'
		+'              </div>'
		+'            </div>'
		+''
		+'            <div class="mb-3">'
		+'              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'
		+'              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'
		+'            </div>'
		+''
		+'            <div class="row">'
		+'              <div class="col-md-5 mb-3">'
		+'                <label for="country">Country</label>'
		+'                <select class="custom-select d-block w-100" id="country" required="">'
		+'                  <option value="">Choose...</option>'
		+'                  <option>United States</option>'
		+'                </select>'
		+'                <div class="invalid-feedback">'
		+'                  Please select a valid country.'
		+'                </div>'
		+'              </div>'
		+'              <div class="col-md-4 mb-3">'
		+'                <label for="state">State</label>'
		+'                <select class="custom-select d-block w-100" id="state" required="">'
		+'                  <option value="">Choose...</option>'
		+'                  <option>California</option>'
		+'                </select>'
		+'                <div class="invalid-feedback">'
		+'                  Please provide a valid state.'
		+'                </div>'
		+'              </div>'
		+'              <div class="col-md-3 mb-3">'
		+'                <label for="zip">Zip</label>'
		+'                <input type="text" class="form-control" id="zip" placeholder="" required="">'
		+'                <div class="invalid-feedback">'
		+'                  Zip code required.'
		+'                </div>'
		+'              </div>'
		+'            </div>'
		+'            <hr class="mb-4">'
		+'            <div class="custom-control custom-checkbox">'
		+'              <input type="checkbox" class="custom-control-input" id="same-address">'
		+'              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'
		+'            </div>'
		+'            <div class="custom-control custom-checkbox">'
		+'              <input type="checkbox" class="custom-control-input" id="save-info">'
		+'              <label class="custom-control-label" for="save-info">Save this information for next time</label>'
		+'            </div>'
		+'            <hr class="mb-4">'
		+''
		+'            <h4 class="mb-3">Payment</h4>'
		+''
		+'            <div class="d-block my-3">'
		+'              <div class="custom-control custom-radio">'
		+'                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'
		+'                <label class="custom-control-label" for="credit">Credit card</label>'
		+'              </div>'
		+'              <div class="custom-control custom-radio">'
		+'                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'
		+'                <label class="custom-control-label" for="debit">Debit card</label>'
		+'              </div>'
		+'              <div class="custom-control custom-radio">'
		+'                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'
		+'                <label class="custom-control-label" for="paypal">PayPal</label>'
		+'              </div>'
		+'            </div>'
		+'            <div class="row">'
		+'              <div class="col-md-6 mb-3">'
		+'                <label for="cc-name">Name on card</label>'
		+'                <input type="text" class="form-control" id="cc-name" placeholder="" required="">'
		+'                <small class="text-muted">Full name as displayed on card</small>'
		+'                <div class="invalid-feedback">'
		+'                  Name on card is required'
		+'                </div>'
		+'              </div>'
		+'              <div class="col-md-6 mb-3">'
		+'                <label for="cc-number">Credit card number</label>'
		+'                <input type="text" class="form-control" id="cc-number" placeholder="" required="">'
		+'                <div class="invalid-feedback">'
		+'                  Credit card number is required'
		+'                </div>'
		+'              </div>'
		+'            </div>'
		+'            <div class="row">'
		+'              <div class="col-md-3 mb-3">'
		+'                <label for="cc-expiration">Expiration</label>'
		+'                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'
		+'                <div class="invalid-feedback">'
		+'                  Expiration date required'
		+'                </div>'
		+'              </div>'
		+'              <div class="col-md-3 mb-3">'
		+'                <label for="cc-cvv">CVV</label>'
		+'                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'
		+'                <div class="invalid-feedback">'
		+'                  Security code required'
		+'                </div>'
		+'              </div>'
		+'            </div>'
		+'            <hr class="mb-4">'
		+'            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
		+'          </form>'
		+'        </div>'
		
	},
	prd_post :()=>{
		return '<div class="form-group">'
		+'  <label for="productName">상품명:</label>'
		+'  <input type="text" class="form-control" id="productName" name="productName">'
		+'</div>'
		+'<div class="form-group">'
		+'  <label for="price">가격:</label>'
		+'  <input type="text" class="form-control" id="price" name="price">'
		+'</div>'
		+'<h3> 색상 </h3>'
		+'<div class="checkbox">'
		+'  <label><input type="checkbox" value="">Black</label>'
		+'</div>'
		+'<div class="checkbox">'
		+'  <label><input type="checkbox" value="">White</label>'
		+'</div>'
		+'<div class="checkbox disabled">'
		+'  <label><input type="checkbox" value="" disabled>Option 3</label>'
		+'</div>'
		+'<div class="radio">'
		+'  <label><input type="radio" name="supplierID" checked>삼성전자</label>'
		+'</div>'
		+'<div class="radio">'
		+'  <label><input type="radio" name="optradio">Option 2</label>'
		+'</div>'
		+'<div class="radio disabled">'
		+'  <label><input type="radio" name="optradio" disabled>Option 3</label>'
		+'</div>'
		+'<div class="form-group">'
		+'  <label for="sel1">카테고리:</label>'
		+'  <select class="form-control" id="sel1">'
		+'    <option>1</option>'
		+'    <option>2</option>'
		+'    <option>3</option>'
		+'    <option>4</option>'
		+'  </select>'
		+'</div>'
		+'<p> 생산 년월일: <input type="text" id="datepicker"></p>'
		+'<div class="form-group">'
		+'  <label for="comment">상세설명:</label>'
		+'  <textarea class="form-control" rows="5" id="comment"></textarea>'
		+'</div>'
	},
	cust_list:()=>{
		return '<div class="container">'
		+'  <table id="alltable" style="margin:auto">'
		+'  <tr>'
		+'    <th>NO.</th> '
		+'    <th>아이디</th> '
		+'    <th>이름</th>'
		+'    <th>생년월일</th>'
		+'    <th>성 별</th>'
		+'    <th>전화번호</th>'
		+'    <th>지번주소</th>'
		+'    <th>상세주소</th>'
		+'    <th>우편번호</th>'


		+'  </tr>'

		+'</table>'
		+'</div>'
		+'<div id="page">'
		+'  <ul class="pagination">'
		+'  </ul>'
		+'</div>'
	}
	
}

/*function common(){
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
	}*/