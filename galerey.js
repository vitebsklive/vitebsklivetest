var mas = ["Marshall/s1.jpg","Marshall/s2.jpg","Marshall/s3.jpg","Marshall/s4.jpg","Marshall/s5.jpg","Marshall/s6.jpg","Marshall/s7.jpg","Marshall/s8.jpg","Marshall/s9.jpg","Marshall/s10.jpg","Marshall/s11.jpg","Marshall/s12.jpg"]
var to = 0;
function L()
{
    var tes = document.getElementById("img").style.opacity="0";
    var tes1 = document.getElementById("img").style.transition="0.7s";
setTimeout("left()", 700);
}
function R()
{
    var tes = document.getElementById("img").style.opacity="0";
    var tes1 = document.getElementById("img").style.transition="0.7s";
setTimeout("right()", 700);
}
function right()
{
 var obj = document.getElementById("img");
  if (to < mas.length-1)  to++
   else
     to = 0;
     obj.src = mas[to];
	 var tes = document.getElementById("img").style.opacity="1";
	 var tes1 = document.getElementById("img").style.transition="0.7s";
}

function left()
{
 var obj = document.getElementById("img");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];
	var tes = document.getElementById("img").style.opacity="1";
	var tes1 = document.getElementById("img").style.transition="0.7s";
}
function s1()
{
 var obj = document.getElementById("img");
     to = 0;
     obj.src = mas[to];
}
function s2()
{
 var obj = document.getElementById("img");
     to = 1;
     obj.src = mas[to];
}
function s3()
{
 var obj = document.getElementById("img");
     to = 2;
     obj.src = mas[to];
}
function s4()
{
 var obj = document.getElementById("img");
     to = 3;
     obj.src = mas[to];
}
function s5()
{
 var obj = document.getElementById("img");
     to = 4;
     obj.src = mas[to];
}
function s6()
{
 var obj = document.getElementById("img");
     to = 5;
     obj.src = mas[to];
}
function s7()
{
 var obj = document.getElementById("img");
     to = 6;
     obj.src = mas[to];
}function s8()
{
 var obj = document.getElementById("img");
     to = 7;
     obj.src = mas[to];
}
function s9()
{
 var obj = document.getElementById("img");
     to = 8;
     obj.src = mas[to];
}
function s10()
{
 var obj = document.getElementById("img");
     to = 9;
     obj.src = mas[to];
}
function s11()
{
 var obj = document.getElementById("img");
     to = 10;
     obj.src = mas[to];
}
function s12()
{
 var obj = document.getElementById("img");
     to = 11;
     obj.src = mas[to];
}
function a()
{
 var obj = document.getElementById("img");
     to = 0;
     obj.src = mas[to];
}
function b()
{
 var obj = document.getElementById("img");
     to = 4;
     obj.src = mas[to];
}