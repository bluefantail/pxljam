window.onload = function() {
  set_players();
  insert_player_feilds();
}

// Forms
var playerElements = document.querySelectorAll('#player-select>label');
var players = document.querySelector('#players');
var teamMessage = document.querySelector('#team-message');

var contactForm = document.querySelector('#contact-form');

// FUNCTIONS
// Events
function handle_click(event) {
  playerNum = event.currentTarget.getAttribute("id");
  console.log(playerNum + " players selected");
  set_players(playerNum);
  insert_player_feilds(playerNum);
  message(playerNum);
  document.querySelector('#team-submit').removeAttribute('disabled');
}

// Handle team submissions (adapted from cloudstitch 'Magic Forms' examples)
function handle_entry(event) {
  event.stopPropagation();
  event.preventDefault();
  
  var entryForm = document.getElementById("entry-form");
  var entryFormErrors = document.getElementById("entry-errors");
  var xhr = new XMLHttpRequest();
  xhr.open(entryForm.getAttribute('method'), entryForm.getAttribute('action'));
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = function() {
    data = JSON.parse(xhr.responseText);

    console.log("data:", data);

    [].forEach.call(document.querySelectorAll(".entry-error"), function(el) {
      console.log("el:", el, el.parentNode);
      
      if(el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    if(data.success) {
      entryForm.insertAdjacentHTML('beforebegin', '<div id="entry-confirmation">Thanks for registering, we will send all players a confirmation closer to the event.</div>');
      entryForm.setAttribute('style', 'display: none');
    } else {
      entryFormErrors.insertAdjacentHTML('afterbegin', '<div class="entry-error">' + data.message + '</div>');
    }
  }

  var inputs = document.querySelectorAll('.player-info');
  
  var data = {
    team_name: document.getElementById("team-name").value,
    players: []
  };

  for (var i = 0; i < inputs.length; i++) {
    var section = inputs[i];
    console.log("section: ", section);
    var idx = section.getAttribute("data-player-n");
    var player = {
      email:       section.querySelector("[name='email']").value,
      player_name: section.querySelector("[name='name']").value,
      vec:         section.querySelector("[name='vec']").checked
    };
    data.players.push(player);
  }
  
  console.log("Sending: ", data);
  xhr.send(JSON.stringify(data));
}


function handle_contact(event){
  event.stopPropagation();
  event.preventDefault();

  // Only jquery dep
  $.ajax({
      // url: "//formspree.io/mattfannin@acidic.co.nz",
      url: "//formspree.io/joshua.scott.132@gmail.com",
      method: "POST",
      data: $('#contact-form').serialize(),
      dataType: "json"
  });

  document.querySelector('#contact').insertAdjacentHTML('beforeend', '<div id="contact-message"><div>Thanks! A human will get back to you shortly.</div></div>')
}
// DOM Manipulation
function set_players(playerCount) {
  var count = playerCount;
  Array.prototype.forEach.call(playerElements, function(element) {
    element.setAttribute('class', '');
    if (count > 0) {
      element.setAttribute('class', 'set');
    }
    count -= 1;
  })
}

function insert_player_feilds(playerCount){
  for(var i = 1; i <= 5; i++) {
    var defaultEl = document.getElementById("player-email-default");
    var selector = "#player-" + i + "-container";
    var el = document.querySelector(selector);
    
    if(i <= playerCount) {
      if(el) continue;
      var newEl = defaultEl.cloneNode(true);
        newEl.id = "player-" + i + "-container";
        newEl.setAttribute("style", "display: block;");
        newEl.setAttribute("data-player-n", i);
        newEl.className = 'player-info';
        
        nameEl = newEl.querySelector('[name="name"]');
        nameEl.placeholder = 'Player ' + i + ' Name';
        nameEl.setAttribute ('required', 'true');

        emailEl = newEl.querySelector('[name="email"]');
        emailEl.setAttribute ('required', 'true');

        newEl.querySelector('[name="vec"]').id = 'player-' + i + '-vec';
        newEl.querySelector('[for="vec"]').setAttribute('for', 'player-' + i + '-vec');
      
      document.getElementById("player-fields").appendChild(newEl);
    } else if(el) {
      document.getElementById("player-fields").removeChild(el);
    }
  }
}

function message(playerCount){
  var message = "";
  switch (playerCount) {
    case '1':
      message = "<div>Lone Wolf.</div>";
      break;
    case '2':
      message = "<div>Dynamic Duo.</div>";
      break;
    case '3':
      message = "<div>Musketeers.</div>";
      break;
    case '4':
      message = "<div>Camping!</div>";
      break;
    case '5':
      message = "<div>Perfect Prime.</div>";
      break;
  }
  teamMessage.innerHTML = message;
}
// END FUNCTIONS

// LISTENERS
Array.prototype.forEach.call(playerElements, function(element) {
  element.addEventListener("click", handle_click);
});

document.querySelector('#entry-form').addEventListener('submit', handle_entry);
document.querySelector('#contact-form').addEventListener('submit', handle_contact);
// END LISTENERS

// Disable Hover events on mobile devices
if ('createTouch' in document) {
  try {
    var ignore = /:hover\b/;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
        var rule = sheet.cssRules[j];
        if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
          sheet.deleteRule(j);
        }
      }
    }
  } catch (e) {}
}

// Initialise Smooth Scroll and Gumshoe for Navigation
smoothScroll.init({
  speed: 560, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  updateURL: true, // Boolean. If true, update the URL hash on scroll
});
gumshoe.init({
  offset: 3 // Integer. How far to offset the scrolling anchor location in pixels
});

/////////////////////////////////////
// Old Artwork Insertion (jquery) //
///////////////////////////////////
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
          el = make;

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

  $('.space').load(function() {
    const space  = $('.space');
    const cont   = $(".stars");

    console.log(space);

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
    const sky     = $("header");
    // const cont    = $(".clouds");

    const square  = 50;
    const xGap    = 200;
    const yGap    = 100;
    const chance  = 0.4;

    const width   = sky.outerWidth() - square;
    const height  = sky.outerHeight() - yGap;

    // cont.height(sky.outerHeight());

    const clouds = grid(width, height, square, xGap, yGap, chance,
      function() {
        return $('<div class="cloud"></div>');
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

// Logs
console.log('Forms');
console.log('-------------------------------------------------');
console.log('Players Object:');
console.table(gumshoe);
console.log(playerElements);
console.log('-------------------------------------------------');