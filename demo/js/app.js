/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 185,
      "density": {
        "enable": true,
        "value_area": 641.3648243462092
      }
    },
    "color": {
      "value": "#e3335c"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.6,
        "color": "#e3335c"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.03206824121731046,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.6496617698410762,
        "opacity_min": 0.06496617698410762,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 14.617389821424212,
        "size_min": 7.308694910712106,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 128.27296486924183,
      "color": "#945465",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 6333.477640418815,
        "rotateY": 9219.619349976756
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 121.81158184520176,
        "line_linked": {
          "opacity": 0.37018147118342937
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 73.08694910712106,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);