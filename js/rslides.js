  $(function() { 
     $(".rslides").responsiveSlides({ 
       auto: true,
       speed: 500,
       timeout: 4000,
       pager: false,
       nav: false,
       random: false,
       pause: false,
       pauseControls: true,
       prevText: "Previous",
       nextText: "Next",
       maxwidth: "",
       navContainer: "",
       manualControls: "",
       namespace: "rslides",
       before: function(){},
       after: function(){}
   }); 
 });
