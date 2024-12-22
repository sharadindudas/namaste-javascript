function a() {
  // a is lexically inside the global scope
  b();
  function b() {
    // b is lexically inside a
    console.log(x);
  }
}
a();
