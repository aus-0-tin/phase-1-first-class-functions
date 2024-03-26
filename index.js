function receivesAFunction(callback) {
    callback();
  }

  function youTuber() {
    return("Welcome to my YouTube channel.");
  }

  function introMessage() {
    youTuber();
  }

  receivesAFunction(introMessage);


function returnsANamedFunction(xFm){
    console.log (xFm);
    return function singAlongSong(){
            return ("Breakeven by The Script");
    }
}


function returnsAnAnonymousFunction(ghosts){
    console.log (ghosts);
    return function (){
            return ("Breakeven by The Script");
    }
}