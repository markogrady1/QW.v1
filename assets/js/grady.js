/*
|============================================================
|------------------------------------------------------------
|	Form Generation Code
|------------------------------------------------------------
|============================================================
|	Login forms
|============================================================
*/
// standard login forms
var defaultform = document.getElementById('gen-login');
var emailForm = document.getElementById('email-gen-login');
var usernameForm = document.getElementById('username-gen-login');

//forms for remember me checkbox
var defaultRememberform = document.getElementById('gen-login-r');
var emailRememberForm = document.getElementById('email-gen-login-r');
var usernameRememberForm = document.getElementById('username-gen-login-r');

if(defaultform!=null) {
	createLoginForm(defaultform);
}else{
	//some code
}

if(emailForm!=null) {
	createEmailLoginForm(emailForm);
}else{
	//some code	
}

if(usernameForm!=null) {
	createUsernameLoginForm(usernameForm);
}else{
	//some code	
}

if(emailRememberForm!=null) {
	createEmailRememberForm(emailRememberForm);
}else{
	//some code	
}

if(usernameRememberForm!=null) {
	createUsernameRememberForm(usernameRememberForm);
}else{
	//some code	
}

if(defaultRememberform!=null) {
	createDefaultRememberForm(defaultRememberform);
}else{
	//some code	
}

/*
|============================================================
|------------------------------------------------------------
|	Default login 
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createLoginForm(formElement) {
	
	//create name label	and append to form
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'name');
	var nameLabelValue = document.createTextNode('Name');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'name');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);
	
	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for','password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Login');
	formElement.appendChild(loginButton);
}
/*
|
|============================================================
|------------------------------------------------------------
|	Email/password login form
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createEmailLoginForm(formElement) {
	
	//create name label and append to form
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'email');
	var nameLabelValue = document.createTextNode('Email');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('type', 'email');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Email');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	//append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Login');
	formElement.appendChild(loginButton);
}
/*
|============================================================
|------------------------------------------------------------
|	Username/password login form
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createUsernameLoginForm(formElement) {
	
	//create name label and append to form
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'username');
	var nameLabelValue = document.createTextNode('Username');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'username');
	nameInput.setAttribute('id', 'username');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Username');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Login');
	formElement.appendChild(loginButton);
}

/*
|============================================================
|------------------------------------------------------------
|	Email/password login form with remember me checkbox
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createEmailRememberForm(formElement) {
	
	//create name label and append to form
	var emailLabel = document.createElement('label');
	emailLabel.setAttribute('for', 'email');
	var emailLabelValue = document.createTextNode('Email');
	emailLabel.appendChild(emailLabelValue);
	formElement.appendChild(emailLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var emailInput = document.createElement('input'); 
	emailInput.setAttribute('name', 'email');
	emailInput.setAttribute('id', 'email');
	emailInput.setAttribute('class', 'form-in');
	emailInput.setAttribute('placeholder', 'Email');
	var emailElement = lineBreak.appendChild(emailInput);
	formElement.appendChild(emailElement);

	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	//create checkbox element
	var checkbox = document.createElement('input');
	checkbox.setAttribute('name', 'remember');
	checkbox.setAttribute('id', 'remember');
	checkbox.setAttribute('value', 'remember');
	checkbox.setAttribute('type', 'checkbox');
	formElement.appendChild(checkbox);

	//create checkbox label and append
	var checkboxLabel = document.createElement('label');
	checkboxLabel.setAttribute('for', 'remember');
	var checkboxLabelValue = document.createTextNode('Remember Me');
	checkboxLabel.appendChild(checkboxLabelValue);
	
	 //append label to form element.
	formElement.appendChild(checkboxLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Login');
	formElement.appendChild(loginButton);
}

/*
|============================================================
|------------------------------------------------------------
|	Username/password login form with remember me checkbox
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/

function createUsernameRememberForm(formElement) {
	
	//create name label and append to form
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'username');
	var nameLabelValue = document.createTextNode('Username');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'username');
	nameInput.setAttribute('id', 'username');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Username');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);

	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create checkbox element
	var checkbox = document.createElement('input');
	checkbox.setAttribute('name', 'remember');
	checkbox.setAttribute('id', 'remember');
	checkbox.setAttribute('value', 'remember');
	checkbox.setAttribute('type', 'checkbox');
	formElement.appendChild(checkbox);
	
	//create checkbox label
	var checkboxLabel = document.createElement('label');
	checkboxLabel.setAttribute('for', 'remember');
	var checkboxLabelValue = document.createTextNode('Remember Me');
	checkboxLabel.appendChild(checkboxLabelValue);
	
	 //append label to form element.
	formElement.appendChild(checkboxLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Login');
	formElement.appendChild(loginButton);
}

/*
|============================================================
|------------------------------------------------------------
|	Default login form with remember me checkbox
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createDefaultRememberForm(formElement) {
	
	//create name label and append to form
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'name');
	var nameLabelValue = document.createTextNode('Name');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Name');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);

	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create checkbox element
	var checkbox = document.createElement('input');
	checkbox.setAttribute('name', 'remember');
	checkbox.setAttribute('id', 'remember');
	checkbox.setAttribute('value', 'remember');
	checkbox.setAttribute('type', 'checkbox');
	formElement.appendChild(checkbox);
	
	//create checkbox label
	var checkboxLabel = document.createElement('label');
	checkboxLabel.setAttribute('for', 'remember');
	var checkboxLabelValue = document.createTextNode('Remember Me');
	checkboxLabel.appendChild(checkboxLabelValue);
	
	 //append label to form element.
	formElement.appendChild(checkboxLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Login');
	formElement.appendChild(loginButton);
}

/*
|============================================================
|------------------------------------------------------------
|	Sign-up forms
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
// standard login forms
var defaultRegisterform = document.getElementById('gen-register');
var usernameRegisterform = document.getElementById('username-gen-register');
var fullRegisterform = document.getElementById('full-gen-register');

if(defaultRegisterform!=null) {
	createDefaultRegisterForm(defaultRegisterform);
}

if(usernameRegisterform!=null) {
	createUsernameRegisterForm(usernameRegisterform);
}

if(fullRegisterform!=null) {
	createFullRegisterForm(fullRegisterform);
}

/*
|============================================================
|------------------------------------------------------------
|	Default sign up form
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createDefaultRegisterForm(formElement) {
	
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'name');
	var nameLabelValue = document.createTextNode('Name');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Name');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	//create name label and append to form
	var emailLabel = document.createElement('label');
	emailLabel.setAttribute('for','email');
	var emailLabelValue = document.createTextNode('Email');
	emailLabel.appendChild(emailLabelValue);
	formElement.appendChild(emailLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var emailInput = document.createElement('input'); 
	emailInput.setAttribute('name', 'email');
	emailInput.setAttribute('id', 'email');
	emailInput.setAttribute('class', 'form-in');
	emailInput.setAttribute('placeholder', 'Email');
	var emailElement = lineBreak.appendChild(emailInput);
	formElement.appendChild(emailElement);

	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password-confirmation label
	var passwordConLabel = document.createElement('label');
	passwordConLabel.setAttribute('for','password_confirm');
	var passwordConLabelValue = document.createTextNode('Confirm Password');
	passwordConLabel.appendChild(passwordConLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordConLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password confirmation input field, set attributes and append
	var passwordConInput = document.createElement('input'); 
	passwordConInput.setAttribute('type', 'password');
	passwordConInput.setAttribute('name', 'password_confirm');
	passwordConInput.setAttribute('id', 'password_confirm');
	passwordConInput.setAttribute('class', 'form-in');
	formElement.appendChild(passwordConInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Sign Up');
	formElement.appendChild(loginButton);
}

/*
|============================================================
|------------------------------------------------------------
|	Username sign up form
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createUsernameRegisterForm(formElement) {
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for','username');
	var nameLabelValue = document.createTextNode('Username');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'username');
	nameInput.setAttribute('id', 'username');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Username');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	//create name label and append to form
	var emailLabel = document.createElement('label');
	emailLabel.setAttribute('for', 'email');
	var emailLabelValue = document.createTextNode('Email');
	emailLabel.appendChild(emailLabelValue);
	formElement.appendChild(emailLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var emailInput = document.createElement('input'); 
	emailInput.setAttribute('name', 'email');
	emailInput.setAttribute('id', 'email');
	emailInput.setAttribute('class', 'form-in');
	emailInput.setAttribute('placeholder', 'Email');
	var emailElement = lineBreak.appendChild(emailInput);
	formElement.appendChild(emailElement);

	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password-confirmation label
	var passwordConLabel = document.createElement('label');
	passwordConLabel.setAttribute('for', 'password_confirm');
	var passwordConLabelValue = document.createTextNode('Confirm Password');
	passwordConLabel.appendChild(passwordConLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordConLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password confirmation input field, set attributes and append
	var passwordConInput = document.createElement('input'); 
	passwordConInput.setAttribute('type', 'password');
	passwordConInput.setAttribute('name', 'password_confirm');
	passwordConInput.setAttribute('id', 'password_confirm');
	passwordConInput.setAttribute('class', 'form-in');
	formElement.appendChild(passwordConInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('name', 'submit');
	loginButton.setAttribute('value', 'Sign Up');
	formElement.appendChild(loginButton);
}

/*
|============================================================
|------------------------------------------------------------
|	Full features sign up form
|------------------------------------------------------------
|============================================================
|	
|============================================================
*/
function createFullRegisterForm(formElement) {
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'name');
	var nameLabelValue = document.createTextNode('Name');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Name');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	var nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'username');
	var nameLabelValue = document.createTextNode('Username');
	nameLabel.appendChild(nameLabelValue);
	formElement.appendChild(nameLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('name', 'username');
	nameInput.setAttribute('id', 'username');
	nameInput.setAttribute('class', 'form-in');
	nameInput.setAttribute('placeholder', 'Username');
	var name = lineBreak.appendChild(nameInput);
	formElement.appendChild(name);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);

	//create name label and append to form
	var emailLabel = document.createElement('label');
	emailLabel.setAttribute('for', 'email');
	var emailLabelValue = document.createTextNode('Email');
	emailLabel.appendChild(emailLabelValue);
	formElement.appendChild(emailLabel);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create name input field. Set attributes and append to form
	var emailInput = document.createElement('input'); 
	emailInput.setAttribute('name', 'email');
	emailInput.setAttribute('id', 'email');
	emailInput.setAttribute('class', 'form-in');
	emailInput.setAttribute('placeholder', 'Email');
	var emailElement = lineBreak.appendChild(emailInput);
	formElement.appendChild(emailElement);

	//create and append linebreak
	var lineBreak2 = document.createElement('br');
	formElement.appendChild(lineBreak2);

	//create password label
	var passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	var passwordLabelValue = document.createTextNode('Password');
	passwordLabel.appendChild(passwordLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password input field, set attributes and append
	var nameInput = document.createElement('input'); 
	nameInput.setAttribute('type', 'password');
	nameInput.setAttribute('name', 'password');
	nameInput.setAttribute('id', 'password');
	nameInput.setAttribute('class', 'form-in');
	formElement.appendChild(nameInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password-confirmation label
	var passwordConLabel = document.createElement('label');
	passwordConLabel.setAttribute('for', 'password_confirm');
	var passwordConLabelValue = document.createTextNode('Confirm Password');
	passwordConLabel.appendChild(passwordConLabelValue);
	
	 //append label to form element.
	formElement.appendChild(passwordConLabel);
	
	 //create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create password confirmation input field, set attributes and append
	var passwordConInput = document.createElement('input'); 
	passwordConInput.setAttribute('type', 'password');
	passwordConInput.setAttribute('name', 'password_confirm');
	passwordConInput.setAttribute('id', 'password_confirm');
	passwordConInput.setAttribute('class', 'form-in');
	formElement.appendChild(passwordConInput);
	
	//create and append linebreak
	var lineBreak = document.createElement('br');
	formElement.appendChild(lineBreak);
	
	//create submit button
	var loginButton = document.createElement('input');
	loginButton.setAttribute('type','submit');
	loginButton.setAttribute('name','submit');
	loginButton.setAttribute('value','Sign Up');
	formElement.appendChild(loginButton);
}

function displayMenu(menu) {
	var gui;
	if (menu.className.match(/\blook-feel\b/)) 
    	gui = true;

	if (menu.style.display == 'block') {
		menu.style.display = 'none';
		menu.removeAttribute('class', 'menu-anim');
		if (gui) menu.setAttribute('class', 'look-feel');
	}else{
		menu.style.display = 'block';
		if(gui)
		    menu.setAttribute('class', 'menu-anim look-feel');
		else
		    menu.setAttribute('class', 'menu-anim');
	}
}

window.onresize = function() {
	
   var w = window.innerWidth;
   var menu_list = document.getElementById('menu-list');
   var menu_list2 = document.getElementById('menu-list2');
   
   if(w>=601) {
	   menu_list.style.display='block';
	   menu_list2.style.display='block';
  }else{
 	menu_list.style.display='none';
	menu_list2.style.display='none';
  }
};

window.onload = function() {
	
	var menu = document.getElementById('menu-list');
	var bars = document.getElementById('bars-wrp');
	
	if(bars!=null) {
		bars.addEventListener("click", function() {
			displayMenu(menu);
		},false);
	}else{

	}
};
