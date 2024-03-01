    console.log(document.getElementById('username'));
    //vars username
    document.getElementById('username').addEventListener('input', 
    function(ev) {
        let usernameElement = ev.target;
        console.log(usernameElement);
        var username = usernameElement.value;

        var alp = /^[a-z0-9]+$/;
        if (username == "") {
            document.getElementById("u_errormsg").style.color = 'red';
            document.getElementById("u_errormsg").innerHTML= "**Username must start with aA-zZ**"
        }
        else if (("a" > username[0] || username[0] > "z") && ("A" > username[0] || username[0] > "Z")) {
            document.getElementById("u_errormsg").style.color = 'red';
            document.getElementById("u_errormsg").innerHTML= "**Username must start with aA-zZ**"
        } else {
            document.getElementById("u_errormsg").style.color = 'green';
            document.getElementById("u_errormsg").innerHTML= "**Username must start with aA-zZ**";
        }
        
        if(username == "") {
            document.getElementById("alp_errormsg").style.color = 'red';
            document.getElementById("alp_errormsg").innerHTML= "**Username must include Alphanumeric Characters**";
        }
        else if(alp.test(username)) {
            document.getElementById("alp_errormsg").style.color = 'red';
            document.getElementById("alp_errormsg").innerHTML= "**Username must include Alphanumeric Characters**";
        } else {
            document.getElementById("alp_errormsg").style.color = 'green';
            document.getElementById("alp_errormsg").innerHTML= "**Username must include Alphanumeric Characters**";
        }


        console.log(ev.target.value.length > 3 );
        if(username.length > 3) {
            usernameElement.classList.add('valid-text');
            usernameElement.classList.add('invalid-text');
        }
        else {
            usernameElement.classList.add('invalid-text');
            usernameElement.classList.remove('valid-text');
        }
    });
    //var password
    console.log(document.getElementById('password'));
    document.getElementById('password').addEventListener('input',
    function(e1) {
        let passwordElement = e1.target;
        console.log(passwordElement);
        var password = passwordElement.value;

        var pattern1= /^\S*[A-Z]\S*$/;
    
        if (pattern1.test(password)) {
            document.getElementById("1up_errormsg").style.color = 'green';
            document.getElementById("1up_errormsg").innerHTML= "**Has at least 1 Uppercase**";
        } else {
            document.getElementById("1up_errormsg").style.color = 'red';
            document.getElementById("1up_errormsg").innerHTML= "**Has at least 1 Uppercase**";
        }

        var pattern2 = /(?=.*\d).+$/;
        if (pattern2.test(password)) {
            document.getElementById("1num_errormsg").style.color = 'green';
            document.getElementById("1num_errormsg").innerHTML= "**Has at least 1 Number**";
        } else {
            document.getElementById("1num_errormsg").style.color = 'red';
            document.getElementById("1num_errormsg").innerHTML= "**Has at least 1 Number**";
        }

        var pattern3 = /^(?=[^!-/:-@[-{-~]*[!-\/:-@[-{-~])/;
        if (pattern3.test(password)) {
            document.getElementById("1spe_errormsg").style.color = 'green';
            document.getElementById("1spe_errormsg").innerHTML= "**Has at least 1 Special Character**";
        } else {
            document.getElementById("1spe_errormsg").style.color = 'red';
            document.getElementById("1spe_errormsg").innerHTML= "**Has at least 1 Special Character**";
        }

        console.log(e1.target.length < 8);
        if(password == "") {
            passwordElement.classList.add('invalid-text');
            document.getElementById("errormsg").innerHTML= "** Fill the Password please! **";
            return false;
        }
        else if(password.length < 8) {
            passwordElement.classList.add('invalid-text');
            passwordElement.classList.remove('valid-text');
            document.getElementById("errormsg").innerHTML= "**Password must be at least 8 characters.**<br>";
            
        }
        else {
            passwordElement.classList.add('valid-text');
            passwordElement.classList.add('invalid-text');
            document.getElementById("errormsg").innerHTML= "";
        }

    });

    /* tried a function call with all the regrex but didnt work as intended causes original function and this function to cause a
    toggle effect
    **/
    /*
    function check_password() {
        var password1 = document.getElementById('password').value;
        var password2 = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8}$/;
        if(password1 != password2) {
            document.getElementById("errormsg").innerHTML= "Password must contain at least 1 upper case letter AND 1 number and 1 of the following special characters: / * - + ! @ # $ ^ & ~ [ ]";
            document.getElementById("errormsg").style.color = 'red';
        }
    }
    **/

    //Email validation || checks if email is valid meaning "(@, .)"
    console.log(document.getElementById('email'));
    document.getElementById('email').addEventListener('input',
    function(e2) {
        let emailElement = e2.target;
        console.log(emailElement);
        var email = emailElement.value;

        var emailValidation = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
        if (emailValidation.test(email)) {
            document.getElementById("e_validation").style.color = 'green';
            document.getElementById("e_validation").innerHTML= "**Email is valid**";
        } else {
            document.getElementById("e_validation").style.color = 'red';
            document.getElementById("e_validation").innerHTML= "**Email is valid**";
        }
    });

   //checks if password == confirmPassword
     function pass_check() {
       var password = document.getElementById('password').value;
       var confirmPassword = document.getElementById('confirmPassword').value;
       if(confirmPassword == "") {
        document.getElementById("re_errormsg").innerHTML= "";
       } else if(password != confirmPassword) {
            document.getElementById("re_errormsg").innerHTML= "**Password must match confirmPassword**";
            document.getElementById("re_errormsg").style.color = 'red';
        } else  {
            document.getElementById("re_errormsg").innerHTML= "matching";
            document.getElementById("re_errormsg").style.color = 'green';
        }
     } 

     

     //earlier implementation of password == confirmPassword using alerts but ultimately didn't work how I wanted it to work.
    /*
    function matchPassword() {
        var password = document.getElementById("password");
        var confirmPassword = document.getElementById("confirmPassword");
        if(password == "") {
            alert("**Field can't be empty.**")
        } else if(password != confirmPassword) {
            alert("Password did not match try again");
            return false;
        } else {
            alert("Password match!");
        } return true;
        }
      
      **/
    


