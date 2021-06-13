//variable declaration
var CC, YY, MM, DD, d, dayValue;
//weekday and names of children as per the day born declared in an array
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "kofi", "kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function formValidate() {
    var gender = document.getElementById("gender");
    if (document.form.year.value = "" || document.form.year.length != 4 || document.form.year.value > 2100 || document.form.year.value <= 1900) {
        alert("kindly provide a valid year")
        document.form.year.focus();
        return false; //focu is used here to analyse the year
    } else if (document.form.month.value ==
        "" || isNaN(document.form.month.value) ||
        document.form.length != 2 || document.form.month.value > 12 || document.form.month.value <= 0) {
        alert("valid month should be entered");
        document.form.month.focus();
        return false;
    } else if (document.form.date.value == "" || isNAN(document.form.date.value) || document.form.date.value.length != 2 || document.form.date > 31 || document.form.date.value <= 0) {
        alert(" Enter valid Day");
        document.form.day.focus();
        return false;
    } else if (genders[0].checked == false && genders[1].checked == false) {
        alert("select Gender");
        return false;
    } else {
        return true;
    }
}

function calculateDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.sustring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * MM + 1) / 10)) + DD) % 7;
console.log(d);
return (Math.floor(d));
}