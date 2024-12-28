$(document).ready(function () {

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
    