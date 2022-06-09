const receivesAFunction = callBack => callBack();

function returnsANamedFunction() {
    return function named() {
      console.log("Named fuction returned!");
    };
  }

  function returnsAnAnonymousFunction() {
    return () => console.log("Anonymous function");
  }