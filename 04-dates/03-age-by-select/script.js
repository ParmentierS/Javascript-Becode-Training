/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const giveage = function(event)
    {
        const selectYear = document.getElementById("dob-year");
        const selectMonth = document.getElementById("dob-month");
        const selectDay = document.getElementById("dob-day");
        const birthDay =selectDay.options[selectDay.selectedIndex].value
        const birthMonth =selectMonth.options[selectMonth.selectedIndex].value
        const birthYear=selectYear.options[selectYear.selectedIndex].value
        console.log(birthDay," ",birthMonth," ",birthYear)
        const date = new Date();
        const currentDay = date.getDate();
        const currentMonth=date.getMonth()+1;//getMonth return 0 for january but we want 1
        const currentYear=date.getFullYear();
        console.log(currentDay," ",currentMonth," ",currentYear)
        if(currentMonth >= birthMonth && currentDay>= birthDay)
        {
            //si on a dépassé la date d'anniversaire cette année alors l'age est la différence des années
            alert("Votre age est de "+ (currentYear-birthYear)+ " ans");
        }
        else
        {
            alert("Votre age est de "+(currentYear-birthYear-1)+" ans");
        }
    }
    document.getElementById("run").addEventListener("click",giveage)
})();

/*little help
var val = "Fish";
var sel = document.getElementById('sel');
document.getElementById('btn').onclick = function() {
  var opts = sel.options;
  for (var opt, j = 0; opt = opts[j]; j++) {
    if (opt.value == val) {
      sel.selectedIndex = j;
      break;
    }
  }
}

<select id="sel">
    <option>Cat</option>
    <option>Dog</option>
    <option>Fish</option>
</select>
<button id="btn">Select Fish</button>*/