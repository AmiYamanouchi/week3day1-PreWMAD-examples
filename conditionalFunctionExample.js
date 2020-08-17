const conditionalFunction = function(bool) {

  if (bool) {
    console.log("it was truthy")
  } else {
    console.log("it was falsey")
  }

}

conditionalFunction(true);
conditionalFunction(false);
conditionalFunction("Aidan");
conditionalFunction("undefined");
conditionalFunction(null);