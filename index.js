function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction(){
  return function aNamedFunction(){
    return 'a';
  };
}

function returnsAnAnonymousFunction() {
  return function(){
    'b';
  }
}