// Running update rate al load of page to show the real value of the slider
window.onload = updateRate;

function compute()
{
    // reading values of the form into variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Check if principal is greater than zero
    if(principal <= 0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    // Compute the interest earned in the period given
    var interest = principal * years * rate / 100;

    // Adding the actual year plus the period to get the year in the future
    var year = new Date().getFullYear() + parseInt(years);

    // Generate the output text with the highlighting required by the customer
    document.getElementById("result").innerHTML = 
        "If you deposit <mark>" + principal + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
        "in the year <mark>" + year + "</mark>";
}

// Updates de value of the text besides the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
