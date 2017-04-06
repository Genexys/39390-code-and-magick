'use strict';

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, color, fontStyle, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = fontStyle;
  ctx.strokeText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {

  drawRect(ctx, 120, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  drawRect(ctx, 100, 10, 420, 270, 'white');

  drawText(ctx, '#000', '16px PT Mono', 'Ура, вы победили!', 120, 50);

  drawText(ctx, '#000', '16px PT Mono', 'Список результатов:', 120, 70);

  var maxScore = function () {
    var max = -1;
    var maxIndex = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
        maxIndex = i;
      }
    }
    return max;
  };

  var max = maxScore();
  var histogramHeight = 150;
  var histogramWeight = 40;
  var step = histogramHeight / max;
  var indent = 50;
  var initialY = 105;
  var initialX = 120;


  for (var y = 0; y < times.length; y++) {
    if (names[y] === 'Вы') {
      drawText(ctx, '#000', '16px PT Mono', Math.floor(times[y]), initialX + indent * y, initialY + histogramHeight - times[y] * step - 7);
      drawRect(ctx, initialX + indent * y, initialY + histogramHeight - times[y] * step, histogramWeight, step * times[y], 'rgba(255, 0, 0, 1)');
    } else {
      drawText(ctx, '#000', '16px PT Mono', Math.floor(times[y]), initialX + indent * y, initialY + histogramHeight - times[y] * step - 7);
      drawRect(ctx, initialX + indent * y, initialY + histogramHeight - times[y] * step, histogramWeight, step * times[y], 'rgba(0, 0, 255, ' + Math.random() + ')');
      ctx.textBaseline = 'top';
      drawText(ctx, '#000', '16px PT Mono', names[y], initialX + indent * y, initialY + histogramHeight);
    }

  }
};
