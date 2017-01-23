$("#beach").on("click", function(event) {
            var $img = $("<img>");
            $img
                .attr("src", "https://www.kasandbox.org/programming-images/avatars/leafers-seedling.png")
                .css("position", "absolute")
                .css("top", event.pageY + "px")
                .css("left", event.pageX + "px")
                .appendTo("#beach");
        });
        
        $("#leafers").on("click", function() {
            $newDiv = $("<div>");
            $newDiv
                .text("My name is Leafer!")
                .css("color", "blue")
                .css("font-family", "cursive")
                .css("position", "absolute")
                .css("top", "150"  + "px")
                .css('left', "250" + "px");
            $newDiv.appendTo("body");
            
        });