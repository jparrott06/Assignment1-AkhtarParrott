function Verifyonclick() {

    return document.getElementById("signup").onclick = function() {
        location.href = "https://jparrott06.github.io/Assignment1-AkhtarParrott/verify.html";
    }
}

function ValidateForm(form)
{
     pass1 = form.pass1.value;
     pass2 = form.pass2.value;
     var errorr = document.querySelector("#txtpasserror");
     var valid = true;

     if (pass1 != pass2)
     {
        errorr.classList.remove("invisible");
         errorr.innerHTML = "The passwords do not match.";
         pass2.classList.add("hasError");
         //document.getElementById('pass2').style.backgroundColor="yellow";
         //alert("Error");
    //     document.getElementById('txtdob').style.backgroundColor="yellow";
    //alert ("\nPassword did not match: Please try again...")
         valid=false;
     }
     else
     {
         valid=true;
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