function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = 
        "If you deposit 1000000,<br>" +
        "at an interest rate of 3.5%.<br>" +
        "You will receive an amount of 175000,<br>" +
        "in the year 2025";
}


function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        