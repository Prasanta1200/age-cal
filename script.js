function Age() {
    var D1 = (document.getElementById("Dat").value);
    console.log(typeof(D1))
    let M1 = (document.getElementById("Month").value);
   // console.log(M1);
    let Y1 = parseInt(document.getElementById("Year").value);
   // console.log(Y1)
    let date = new Date();
    let D2 = date.getDate();
    let M2 = 1 + date.getMonth();
    let Y2 = date.getFullYear();
    let Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //console.log(Month)
    if (D1 > D2) {
        D2 = D2 + Month[M2 - 1];
        M2 = M2 - 1;
    }
    if (M1 > M2) {
        M2 = M2 + 12;
        Y2 = Y2 - 1;
    }
    let D = parseInt(D2 - D1);
    let M = parseInt(M2 - M1);
    let Y = parseInt(Y2 - Y1);
    console.log(typeof(D));
    if(D1 !== Number && M1 !== Number && Y1 !== Number){
        document.getElementById("Age").innerHTML =
        "Please Input Valid data for Month Field, Year Field or Date Field"
    }else{
    document.getElementById("Age").innerHTML =
        "Your Age Is " + Y + " Years " + M + " Months " + D + " Days";
    }
    document.getElementById("Age").innerHTML =
         "Your Age Is " + Y + " Years " + M + " Months " + D + " Days";
}