function getProfile() {

    let name = document.getElementById('name').value;
    let gender =document.getElementById('gender').value;
    let w = document.getElementById('weight').value;
    let h = document.getElementById('height').value;
    let BMI = (w/(h*h)).toFixed(2);
    let type ;
    if (BMI < 18.5) {
        type= "underweight";
    } else if (18.5<= BMI < 25) {
        type= "normal";
    }else if (25<=BMI < 30) {
        type= "overweight";
    }else if (30<=BMI) {
        type= "obese";
    }else {
        alert("error.check the fields input");
    }
    console.log (`${name} | ${gender} | BMI : ${BMI} | ${type}`);
    document.getElementById("profile").innerHTML = `${name} | ${gender} | BMI : ${BMI} | ${type}`;
    }
    
    function oneToTwenty() {
        let list =[];
        for(let i=1;i<=20;i++) {
            list.push(i);
        }
        document.getElementById("numOneToTwenty").innerHTML = `${list}`;
    }
    
    function oneToTwentyOdds() {
        let oddsList =[];
        for(let i=1;i<=20;i++) {
            if (i%2 == 1) {
                oddsList.push(i);
            }
        }
        document.getElementById("oddsOneToTwenty").innerHTML = `${oddsList}`;
    }