var d = document.body; 

console.log(d);

var h = document.head;
console.log(h);
var p = d.firstElementChild;
console.log("first element child: " + p);
var l = document.links;
console.log("links: " + l);
var c = d.children;
console.log(c);
//document.getElementById("about").innerHTML = "Wiggs!";
//document.getElementById("sport").innerHTML = "Softball";
//document.getElementById("time1").innerHTML = "3 years";
//var c2 = document.getElementsByClassName("time");
//c2[0].innerHTML = "3 years";
//c2[1].innerHTML = "5 years";
//c2[2].innerHTML = "1 year";

//index3
var sports = document.getElementById("sports");
console.log("sports children: " + sports.childNodes);


var p2 = document.getElementById("pet");
//p2.innerHTML = "Gecko";
//document.getElementById("time2").innerHTML = "3 years";

var about = document.getElementById("about");
//console.log(about);
//about.style.backgroundColor = "blue";
//about.style.margin="20px";
//about.style.border="thick dashed yellow";

var s = document.getElementById("sports").firstElementChild;
console.log(s);
