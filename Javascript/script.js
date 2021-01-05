        // $ means you're going to start some Jquery
        // this function "ready method" tells the broweser whenever it is done loading a page it runs this code block
        $(function() {
            // This sets the carousel's speed at 2000 miliseconds per slide
            $(".carousel").carousel({interval: 2000});
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play");
                } else {
                    $(".carousel").carousel("cycle");
                    $("#carouselButton").children("i").removeClass("fa-play");
                    $("#carouselButton").children("i").addClass("fa-pause");
                }
            });
        }); 


        $(function(){
            $("#loginButton").click(function(){
                $("#loginModal").modal("show");
            });
        });

        $(function(){
            $(".close").click(function(){
                $("#loginModal").modal("hide");
            });
        });
        // This function opens the reserve modal on click

        $(function(){
            $("#reserveButton").click(function(){
                $("#reserveModal").modal("show");
            });
        });

        // This function closes the reserve modal on click
        $(function(){
            $("#se").click(function(){
                $("#reserveModal").modal("hide");
            });
        });


