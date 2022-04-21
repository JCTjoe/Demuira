var terms = [
    "Dispatch with 24 Hours",
    "Free Shipping",
    "New Stainless Steel components",
    "Buy 5 pieces and save 30%",
  ];
  
  function rotateTerm() {
    var ct = $("#rotate").data("term") || 0;
    $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn(800)
      .delay(4000).fadeOut(400, rotateTerm);
  }
  $(rotateTerm);