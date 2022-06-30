// Движение курсора

$(document).mousemove(function(e) {
  $('.cursor').css({
    left:e.pageX-4,
    top:e.pageY-4
  });
// Переход на главную
  $(".logo").click(function () {
  document.location.href = "./index.html";
  });
// Анимация курсора при наведении на активный объект
  $(".activeelement").mouseover(function(){
    $(".cursor").css("transform", "scale(0.4)", 0.5)
    });
  $(".activeelement").mouseleave(function(){
    $(".cursor").css("transform", "none", 0.5)
      });

// Скролл ко второму слайду при нажатии на кнопку «Начать»

$(document).ready(function () {
  $('.buttonnachat').click(function() {
    $('html, body').animate({
      scrollTop: $(".secondslide").offset().top
    }, 1000);
  });
});

// Баблы с текстом через TypeIt

$(document).ready(function(){
$('#d2bubble1text').typeIt({
   strings: 'Меня научили менять цвет, прямо как хамелеон!',
   speed: 60,
   autoStart: false
});
});

$(document).ready(function(){
$('#d2bubble2text').typeIt({
   strings: 'Мифические существа могли менять форму. Этому научили и меня!',
   speed: 60,
   autoStart: false
});
});

$(document).ready(function(){
$('#d2bubble3text').typeIt({
   strings: 'Я, кстати, умею менять эмоции!',
   speed: 60,
   autoStart: false
});
});

$(document).ready(function(){
$('#d2bubble4text').typeIt({
   strings: 'А я умею менять и цвет, и форму одновременно!',
   speed: 60,
   autoStart: false
});
});

$(document).ready(function(){
$('#d2bubble4text').typeIt({
   strings: 'А я умею менять и цвет, и форму одновременно!',
   speed: 60,
   autoStart: false
});
});

// Изменение цвета зайчика

$(document).ready(function(){
  $(".d2rabbit").click(function(){
    if ($(".d2rabbit").hasClass("rv1")){
      $(".d2rabbit").addClass("rv2");
      setTimeout(function(){
        $(".d2rabbit").removeClass("rv1");
      }, 100);
    } else if ( $(".d2rabbit").hasClass("rv2")){
      $(".d2rabbit").addClass("rv3");
      setTimeout(function(){
        $(".d2rabbit").removeClass("rv2");
      }, 100);
    } else if ( $(".d2rabbit").hasClass("rv3")){
      $(".d2rabbit").addClass("rv1");
      setTimeout(function(){
        $(".d2rabbit").removeClass("rv3");
      }, 100);
    };
  });
});

// Изменение формы утки

$(document).ready(function(){
  $(".d2duck").click(function(){
    if ($(".d2duck").hasClass("dv1")){
      $(".d2duck").addClass("dv2");
      setTimeout(function(){
        $(".d2duck").removeClass("dv1");
      }, 100);
    } else if ( $(".d2duck").hasClass("dv2")){
      $(".d2duck").addClass("dv3");
      setTimeout(function(){
        $(".d2duck").removeClass("dv2");
      }, 100);
    } else if ( $(".d2duck").hasClass("dv3")){
      $(".d2duck").addClass("dv1");
      setTimeout(function(){
        $(".d2duck").removeClass("dv3");
      }, 100);
    };
  });
});

// Изменение эмоций ёжика

$(document).ready(function(){
  $(".d2hadgehog").click(function(){
    if ($(".d2hadgehog").hasClass("hv1")){
      $(".d2hadgehog").addClass("hv2");
      setTimeout(function(){
        $(".d2hadgehog").removeClass("hv1");
      }, 100);
    } else if ( $(".d2hadgehog").hasClass("hv2")){
      $(".d2hadgehog").addClass("hv3");
      setTimeout(function(){
        $(".d2hadgehog").removeClass("hv2");
      }, 100);
    } else if ( $(".d2hadgehog").hasClass("hv3")){
      $(".d2hadgehog").addClass("hv1");
      setTimeout(function(){
        $(".d2hadgehog").removeClass("hv3");
      }, 100);
    };
  });
});

// Изменение формы и цвета мишки

$(document).ready(function(){
  $(".d2bear").click(function(){
    if ($(".d2bear").hasClass("bv1")){
      $(".d2bear").addClass("bv2");
      setTimeout(function(){
        $(".d2bear").removeClass("bv1");
      }, 100);
    } else if ( $(".d2bear").hasClass("bv2")){
      $(".d2bear").addClass("bv3");
      setTimeout(function(){
        $(".d2bear").removeClass("bv2");
      }, 100);
    } else if ( $(".d2bear").hasClass("bv3")){
      $(".d2bear").addClass("bv1");
      setTimeout(function(){
        $(".d2bear").removeClass("bv3");
      }, 100);
    };
  });
});

// Меняются ребристые персонажи

$(document).ready(function(){
  $(".d3pers").click(function(){
    if ($(".d3pers").hasClass("d3bv1")){
      $(".d3pers").addClass("d3rv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv1")){
      $(".d3pers").addClass("d3hv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv1")){
      $(".d3pers").addClass("d3dv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3dv1")){
      $(".d3pers").addClass("d3bv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv1");
      }, 100);
    };
  });
});

// Меняются гладкие персонажи

$(document).ready(function(){
  $(".d3pers").click(function(){
    if ($(".d3pers").hasClass("d3bv2")){
      $(".d3pers").addClass("d3rv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv2")){
      $(".d3pers").addClass("d3hv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv2")){
      $(".d3pers").addClass("d3dv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3dv2")){
      $(".d3pers").addClass("d3bv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv2");
      }, 100);
    };
  });
});

// Меняются колючие персонажи

$(document).ready(function(){
  $(".d3pers").click(function(){
    if ($(".d3pers").hasClass("d3bv3")){
      $(".d3pers").addClass("d3rv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv3")){
      $(".d3pers").addClass("d3hv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv3")){
      $(".d3pers").addClass("d3dv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3dv3")){
      $(".d3pers").addClass("d3bv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv3");
      }, 100);
    };
  });
});

// При нажатии на гладкую ребристый становится гладким

$(document).ready(function(){
  $(".d3p1").click(function(){
    if ($(".d3pers").hasClass("d3dv1")){
      $(".d3pers").addClass("d3dv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv1")){
      $(".d3pers").addClass("d3rv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv1")){
      $(".d3pers").addClass("d3hv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3bv1")){
      $(".d3pers").addClass("d3bv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv1");
      }, 100);
    };
  });
});

// При нажатии на гладкую колючий становится гладким

$(document).ready(function(){
  $(".d3p1").click(function(){
    if ($(".d3pers").hasClass("d3dv3")){
      $(".d3pers").addClass("d3dv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv3")){
      $(".d3pers").addClass("d3rv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv3")){
      $(".d3pers").addClass("d3hv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3bv3")){
      $(".d3pers").addClass("d3bv2");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv3");
      }, 100);
    };
  });
});

// При нажатии на ребристую гладкий становится ребристым

$(document).ready(function(){
  $(".d3p2").click(function(){
    if ($(".d3pers").hasClass("d3dv2")){
      $(".d3pers").addClass("d3dv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv2")){
      $(".d3pers").addClass("d3rv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv2")){
      $(".d3pers").addClass("d3hv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3bv2")){
      $(".d3pers").addClass("d3bv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv2");
      }, 100);
    };
  });
});

// При нажатии на ребристую колючий становится ребристым

$(document).ready(function(){
  $(".d3p2").click(function(){
    if ($(".d3pers").hasClass("d3dv3")){
      $(".d3pers").addClass("d3dv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv3")){
      $(".d3pers").addClass("d3rv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv3")){
      $(".d3pers").addClass("d3hv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv3");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3bv3")){
      $(".d3pers").addClass("d3bv1");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv3");
      }, 100);
    };
  });
});

// При нажатии на ключий гладкий становится колючим

$(document).ready(function(){
  $(".d3p3").click(function(){
    if ($(".d3pers").hasClass("d3dv2")){
      $(".d3pers").addClass("d3dv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv2")){
      $(".d3pers").addClass("d3rv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv2")){
      $(".d3pers").addClass("d3hv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv2");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3bv2")){
      $(".d3pers").addClass("d3bv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv2");
      }, 100);
    };
  });
});

// При нажатии на ключий ребристый становится колючим

$(document).ready(function(){
  $(".d3p3").click(function(){
    if ($(".d3pers").hasClass("d3dv1")){
      $(".d3pers").addClass("d3dv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3dv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3rv1")){
      $(".d3pers").addClass("d3rv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3rv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3hv1")){
      $(".d3pers").addClass("d3hv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3hv1");
      }, 100);
    } else if ( $(".d3pers").hasClass("d3bv1")){
      $(".d3pers").addClass("d3bv3");
      setTimeout(function(){
        $(".d3pers").removeClass("d3bv1");
      }, 100);
    };
  });
});

// Алерт

$(document).ready(function(){
  $(function(){
    $('.buttonzabrat').bind('click', function(){
        alert('Проздравляем с приобретением!');
    });
  });
});
});
