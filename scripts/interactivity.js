$(document).ready(function () {

    /* HAMBURGER MENU */
    
      if (window.matchMedia("(max-width: 768px)").matches) {
        $("#hamburger-menu").removeClass("hidden");
        $("#nav-bar").addClass("hidden");
      } else {
        $("#hamburger-menu").addClass("hidden");
        $("#nav-bar").removeClass("hidden");
      }
    
      $(window).on("resize", function () {
        if (window.matchMedia("(max-width: 768px)").matches) {
          $("#hamburger-menu").removeClass("hidden");
          $("#nav-bar").addClass("hidden");
        } else {
          $("#hamburger-menu").addClass("hidden");
          $("#nav-bar").removeClass("hidden");
          $("#hamburger-dropdown").addClass("hidden");
        }
      });
    
      $("#hamburger-button").on("click", function () {
        if ($("#hamburger-dropdown").hasClass("hidden")) {
          $("#hamburger-dropdown").removeClass("hidden");
        } else {
          $("#hamburger-dropdown").addClass("hidden");
        }
      });
    
    /* MODALS */
    
    $("#learn-more-debut").on("click", function() {
        $("#modal-debut").removeClass("hidden");
    });
    
    $("#modal-debut-close").on("click", function() {
        $("#modal-debut").addClass("hidden");
    });
    
    $("#learn-more-urban").on("click", function() {
        $("#modal-urban").removeClass("hidden");
    });
    
    $("#modal-urban-close").on("click", function() {
        $("#modal-urban").addClass("hidden");
    });
    
    $("#learn-more-research").on("click", function() {
      $("#modal-research").removeClass("hidden");
    });
    
    $("#modal-research-close").on("click", function() {
      $("#modal-research").addClass("hidden");
    });
    
    });
    