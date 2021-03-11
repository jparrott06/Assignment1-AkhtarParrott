function Verifyonclick() {

    return document.getElementById("signup").onclick = function() {
        location.href = "https://jparrott06.github.io/Assignment1-AkhtarParrott/verify.html";
    }
}

function ValidateForm()
{
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var errorr = document.querySelector("#passerror");
    var valid = true;

    if (pass1 != pass2)
    {
        errorr.classList.remove("invisible");
        errorr.innerHTML = "The Date of Birth cannot be empty."
        document.getElementById('txtdob').style.backgroundColor="yellow";
        valid=false;
    }
    return valid;
}