/////////////////////////////////////
// Old Artwork Insertion (jquery) //
///////////////////////////////////
$(function() {
  const conts = $(".art-container");
  const body  = $("body");

  function grid(width, height, variation, xGap, yGap, chance, cont, make) {
    const els = [];

    var x, y, left, top, el;

    for (x = -xGap; x < width + xGap; x += xGap * Math.random() + xGap) {
      for (y = variation; y < height; y += yGap * Math.random() + yGap) {
        if (Math.random() < chance) {
          el = make();

          left = parseInt(x + Math.random() * variation, 10);
          top  = parseInt(y + Math.random() * variation, 10);

          el.css({ left: left, top: top });
          cont.append(el);

          els.push(el);
        }
      }
    }

    return els;
  }

  (function() {
    const space  = $('#stars');

    console.log('Doing Stars');

    const square = 20;
    const gap    = 40;
    const chance = 0.2;

    const width  = space.outerWidth() - square;
    const height = space.outerHeight() - square;

    grid(width, height, square, gap, gap, chance, space, function() {
      return $('<div class="star"></div>');
    });
  })();

  (function() {
    const sky    = $("#clouds");

    const square = 10;
    const xGap   = 220;
    const yGap   = 100;
    const chance = 0.25;

    const width  = sky.outerWidth() - square;
    const height = sky.outerHeight() - yGap;

    const clouds = grid(width, height, square, xGap, yGap, chance, sky,
      function() {
        return $('<div class="cloud"></div>');
      });

    $.each(clouds, function() {
      const cloud = $(this);
      animate();

      function animate() {
        setTimeout(function() {
          const moveBy = Math.random() > 0.75 ? 1 : -2;
          cloud.css('left', cloud.position().left + moveBy + 'px');
          animate();
        }, Math.random() * 1800 + 800);
      }
    });
  })();

  (function() {
    const sky   = $("#home");
    const fly   = $("#fly");
    const kite  = $("#kite");
    const line  = $("#line");
    const flyer = $("#flyer");

    const kiteOffsetX = 24;
    const kiteOffsetY = 64;

    var flyerOffsetX = 60;
    var flyerOffsetY = 40;
    var reeled = false;

    function newLinePixel() {
      const pixel = $('<div class="kite-line"></div>');
      line.append(pixel);
      return pixel;
    }

    var width = sky.width() / 10 + Math.random() * 50 - 25;
        width -= width % 4;
    var height = (sky.height() * 0.55) - kite.height() - Math.random() * 100;
        height -= height % 4;

    var flyerX = 50 + flyerOffsetX;
    var kiteX  = width + flyerX + kiteOffsetX;
    var kiteY  = height + kiteOffsetY;

    function placeKite() {
      kite.css('right', kiteX - kiteOffsetX - 2);
      kite.css('bottom', kiteY - kiteOffsetY + 4);
    }

    placeKite();
    flyer.css('right', flyerX - flyerOffsetX + 2);
    flyer.css('bottom', 0);

    const pixels = [];
    const pixelCount = 1000;
    for (var i = pixelCount - 1; i >= 0; i--) {
      pixels.push(newLinePixel());
    }

    function alignPixels() {
      const xdiff = (kiteX - flyerX) / pixelCount;
      const ydiff = (kiteY - flyerOffsetY) / pixelCount;

      for (var i = 0; i < pixelCount; i++) {
        var pixel = pixels[i];

        var x = kiteX - i * xdiff;
        var y = kiteY - i * ydiff;
        x -= x % 4;
        y -= y % 4;

        pixel.x = x;
        pixel.y = y;
        pixel.css('right', x);
        pixel.css('bottom', y);
      }

      var hidden = false;
      var prev, next;
      for (var i = 0; i < pixelCount; i++) {
        var pixel = pixels[i];

        if (i < pixelCount - 1) {
          var next = pixels[i + 1];

          if (next.x == pixel.x && next.y == pixel.y) {
            pixel.hide();
            continue;
          }

          if (i > 0 && (pixel.x == prev.x || pixel.y == prev.y) &&
              (pixel.x == next.x || pixel.y == next.y) &&
              next.x != prev.x && next.y != prev.y) {
            pixel.hide();
            continue;
          }

          pixel.show();
          prev = pixel;
        }
      }
    }

    kite.show();
    flyer.show();
    alignPixels();

    setInterval(function() {
      if (Math.random() > 0.5) {
        kiteX += Math.random() > 0.5 ? 4 : -4;
      } else {
        kiteY += Math.random() > 0.5 ? 4 : -4;
      }
      placeKite();
      alignPixels();
    }, 2000);
  })();
});