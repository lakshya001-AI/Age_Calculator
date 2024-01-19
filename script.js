
document.getElementById("para").style.display = "none";
function calculateAge(){
    var dob = new Date(document.getElementById('datainput').value);
    var currentDate = new Date();

    var ageInMilliseconds = currentDate - dob;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.44;
    var ageInYears = ageInMonths / 12;

    document.getElementById("para").innerHTML = `<p id="para">You are <span style="color: #ffff76;">${Math.floor(ageInYears)}</span> Years , <span style="color: #ffff76;">${Math.floor(ageInMonths%12)}</span> months and <span style="color: #ffff76;">${Math.floor(ageInDays%30.44)}</span> days old</p>`;
    document.getElementById("para").style.display = "block";
    
}


