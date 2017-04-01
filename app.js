
function getCurrency(base,source,val1,val2){


var xmlhttp = new XMLHttpRequest();
var url = "http://api.fixer.io/latest?base="+base+"&symbols="+source;

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
 var rates= myArr.rates;
 var cdate= myArr.date;
var cbase= myArr.base;
var rt = parseInt(rates[source]);
var calcu = rt*val1
document.getElementById('currentxt2').value = calcu;

var res = parseFloat(Math.round(calcu * 100) / 100).toFixed(2);
var htm = "";
htm = "<h3>"+val1+" "+cbase+"</h3> <h5> EQUALS </h5> <h1>"+res+" "+source+"</h1>";
document.getElementById('txt').innerHTML = htm;
    };
};



xmlhttp.open("GET", url, true);
xmlhttp.send();


}