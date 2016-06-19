$(function() {
  const conts = $(".container");
  const body  = $("body");

  $(window).resize(function() {
    conts.width(body.outerWidth());
  }).resize();

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

  $('#space img').load(function() {
    const space  = $('#space');
    const cont   = $("#stars");

    const square = 20;
    const gap    = 40;
    const chance = 0.2;

    const width  = space.outerWidth() - square;
    const height = space.outerHeight() - square;

    cont.height(space.outerHeight());

    grid(width, height, square, gap, gap, chance, cont, function() {
      return $('<div class="star"></div>');
    });
  });

  (function() {
    const sky     = $("#upper-sky");
    const cont    = $("#clouds");

    const square  = 50;
    const xGap    = 200;
    const yGap    = 100;
    const chance  = 0.4;

    const width   = sky.outerWidth() - square;
    const height  = sky.outerHeight() - yGap;

    cont.height(sky.outerHeight());

    const clouds = grid(width, height, square, xGap, yGap, chance, cont,
      function() {
        return $('<img class="cloud" src="/images/cloud.png"/>');
      });

    $.each(clouds, function() {
      const cloud = $(this);
      animate();

      function animate() {
        setTimeout(function() {
          const moveBy = Math.random() > 0.5 ? 1 : -1;
          cloud.css('left', cloud.position().left + moveBy + 'px');
          animate();
        }, Math.random() * 6000 + 4000);
      }
    });
  })();
});
