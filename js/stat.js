'use strict';

window.renderStatistics = function (ctx, names, times) {


  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура, вы победили!', 120, 50);

  ctx.font = '16px PT Mono';
  ctx.strokeText('Список результатов:', 120, 70);

  var max = -1;
  var maxIndex = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var histogramWeight = 40;
  var step = histogramHeight / max;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 90);
  var indent = 50;
  var initialY = 105;
  var initialX = 120;


  for (var y = 0; y < times.length; y++) {
    if (names[y] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + indent * y, initialY + histogramHeight - times[y] * step, histogramWeight, step * times[y]);
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(names[y], initialX + indent * y, initialY + histogramHeight);

  }
};
