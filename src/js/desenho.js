var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Cabeça do Creeper
ctx.fillStyle = "forestgreen";
ctx.fillRect(160, 40, 160, 160);
ctx.lineWidth = 8;
ctx.strokeStyle = "black";
ctx.strokeRect(160, 40, 160, 160);

// Olhos
ctx.fillStyle = "black";
ctx.fillRect(180, 80, 40, 40);
ctx.fillRect(260, 80, 40, 40);

// Nariz
ctx.fillRect(220, 120, 40, 60);

// Boca
ctx.fillRect(200, 140, 20, 60);
ctx.fillRect(260, 140, 20, 60);

// Corpo do Creeper
ctx.fillStyle = "forestgreen";
ctx.fillRect(180, 200, 120, 240);
ctx.lineWidth = 8;
ctx.strokeStyle = "black";
ctx.strokeRect(180, 200, 120, 240);

// Pés do Creeper
ctx.fillRect(152, 440, 176, 160);
ctx.fillStyle = "saddlebrown";
ctx.fillRect(152, 544, 176, 56);
ctx.lineWidth = 8;
ctx.strokeStyle = "black";
ctx.strokeRect(152, 440, 176, 160);

// Linha Divisória nos Pés do Creeper
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 440);
ctx.lineTo(canvas.width / 2, 600);
ctx.lineWidth = 8;
ctx.strokeStyle = "black";
ctx.stroke();

// Linha Horizontal nos Pés do Creeper
ctx.beginPath();
ctx.moveTo(152, 544);
ctx.lineTo(328, 544);
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();