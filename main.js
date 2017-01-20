    $(document).ready(function () {
        $('header nav').mouseenter(function() {
            $("header nav").fadeTo('fast', 1);
        });
        $('header nav').mouseleave(function() {
            $("header nav").fadeTo('fast', 0.4)
          });
        });
