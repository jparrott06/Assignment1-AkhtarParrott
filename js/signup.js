function Verifyonclick() {

    return document.getElementById("signup").onclick = function() {
        location.href = "https://jparrott06.github.io/Assignment1-AkhtarParrott/verify.html";
    }
}

function ValidateForm(form)
{
     var pass1 = form.pass1.value;
     var pass2 = form.pass2.value;
     var error1 = document.querySelector("#txtpasserror1");
     var error2 = document.querySelector("#txtpasserror2");
     var valid = true;

     if (pass1 != pass2)
     {
        error2.classList.remove("invisible");
        error2.innerHTML = "The passwords do not match.";
        alert(form.pass2.classList)
        form.pass2.classList.add("hasError");
        alert(form.pass2.classList)
        // document.getElementById('pass2').style.backgroundColor="yellow";
         //alert("Error");
    //     document.getElementById('txtdob').style.backgroundColor="yellow";
    //alert ("\nPassword did not match: Please try again...")
         valid=false;
     }
     else
     {
        alert("else statement has run");
        error2.classList.add("invisible");
        form.pass2.classList.remove("hasError");
        valid=true;
     }
     alert("end of passwords match check[x]");

     //Validate that password contains at least 1: lower-case letter, capital letter and number//

     var pass_regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
     if(pass1.match(pass_regex)) {
         console.log(pass1 + "passed regex");
         
         valid = true;
     }
     else {
         console.log(pass1 + " did not pass regex")

         error1.classList.remove("invisible");
         error1.innerHTML = "Error - password must contain at least one: lower-case letter, upper-case letter, and number."
         form.pass1.classList.add("hasError");

         valid = false;
     }

     // Check for invalid input chars //

     var bad_input = ['<', '>', '#', '-', '{', '}', '(', ')', "'", '"', '`'];

     alert(bad_input);

     var elements = document.getElementsByTagName("input");

     for (let i = 0; i < elements.length; i++) {
         
        if(elements[i].type == 'password' || elements[i].type == 'text' || elements[i].type == 'email')
         {

            console.log(elements[i].type);

            for (let j = 0; j < bad_input.length; j++) {
                
                if (elements[i].value.indexOf(bad_input[j]) != -1){
                    console.log(elements[i].type + " contains bad input");
                    console.log(elements[i].value);
                }
                
            }


             
        }

    }





     return valid;

}

function func()
{
$(document).ready(function(){
    $('#ddSecurityQuestion').on('change', function() {
        if(this.value == 'What was your high school mascot?')
        {
            $("#txtAnswer").show();
        }
        else if (this.value == 'Who is your favorite author?')
        {
            $("#txtAnswer").show();
        }
        else if (this.value == "What is your mother's maiden name?")
        {
            $("#txtAnswer").show();
        }
        else
        {
            $("#txtAnswer").hide();
        }

    });
});
}