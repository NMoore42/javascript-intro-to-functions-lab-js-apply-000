function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
<<<<<<< HEAD
  if (string == "I love you, Grandma."){
    return "I love you, too."
  } else if (string !== string.toUpperCase()){
    return "I can't hear you!"
=======
  if (string !== string.toUpperCase()){
    return "I can't hear you!"
  } else if (string == "I love you, Grandma."){
    return "I love you, too."
>>>>>>> 869c06c970b31eebeb1d01cd27e700dc06da3de1
  } else {
    return "YES INDEED!"
  }
}