var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth = 2;
ctx.arc(275,300,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth = 2;
ctx.arc(375,300,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth = 2;
ctx.arc(325,350,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth = 2;
ctx.arc(430,350,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 2;
ctx.arc(475,300,40,0,2*Math.PI)
ctx.stroke();