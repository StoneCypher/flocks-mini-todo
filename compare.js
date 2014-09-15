'use strict';

function undefComp(X,Y) {

  return (X === undefined)? (
    ( (Y === undefined)?  0 : 1       )
  ) : (
    ( (Y === undefined)? -1 : ((X === Y)? 0 : ((X < Y)? -1 : 1)) )
  );

}



function undefDescComp(X,Y) {

  return (X === undefined)? (
    ( (Y === undefined)?  0 : 1       )
  ) : (
    ( (Y === undefined)? -1 : ((X === Y)? 0 : ((X < Y)? 1 : -1)) )
  );

}
