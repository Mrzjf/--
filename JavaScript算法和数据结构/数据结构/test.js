function* f() {
    for(var i = 0; true; i++) {
      var reset = yield i;
      console.log(reset)
      if(reset) { i = -1; }
    }
  }
  
  var g = f();
  
  console.log(g.next())
  console.log(g.next())
  console.log(g.next())
  console.log(g.next())
    // { value: 0, done: false }
    // { value: 1, done: false }
    // { value: 1, done: false }