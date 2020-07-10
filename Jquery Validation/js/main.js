$(document).ready(function () {
    
    alert("this Js code is about that General Form Validation");
    
     
    
    var errormessage;

    //check to e mail format
    function isMail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
        //if that is email format is correct return  will be true 

    }


    $("#btn").click(() => {
        if ($("#email").val() === "") {
            $(".error").show("slow");


        };

        if (isMail($("#email").val()) == false) {
            $(".emailError").show("slow");// control of email
        }

        if ($("#phone").val() === "") {
            $(".error").show("slow"); // control of phone number


        };
        if ($.isNumeric($("#phone").val()) == false) {
            $(".phoneError").show("slow");//control of phone number is numeric


        };
        
        if ($("#password").val() === "") {
            $(".error").show("slow");// control of password


        };
        if ($("#password").val() != $("#repassword").val()) {
            $(".passwordError").show("slow"); //control of password again


        };





    });






});
