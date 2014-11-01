'use strict';

function undefComp(X,Y) {

  if (X === undefined) { X = 0; }
  if (Y === undefined) { Y = 0; }

  return ( (Y === undefined)? -1 : ((X === Y)? 0 : ((X < Y)? -1 : 1)) );

}



function undefDescComp(X,Y) {

  if (X === undefined) { X = 0; }
  if (Y === undefined) { Y = 0; }

  return ( (Y === undefined)? -1 : ((X === Y)? 0 : ((X < Y)? 1 : -1)) );

}
