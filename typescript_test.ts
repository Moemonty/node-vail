function varLetFunction(){
  var myStringValue = "varStringValue";
  let myStringValueLet = "letStringValue";

  if(true){
    // Let gets lexical scoping
    var myStringValue = 'stillString';
    let myStringValueLet = 12345;
  }
}

varLetFunction();
