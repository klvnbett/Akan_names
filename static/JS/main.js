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
    }
}