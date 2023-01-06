// test 1

var bottle = function (x) {
  if ((x < 100) & (x > 10000000)) {
    return "x should be 100 < X < 10000000";
  }
  arr = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  a = arr[Math.floor(Math.random() * arr.length)];
  arr = arr.filter(function (item) {
    return item !== a;
  });
  b = arr[Math.floor(Math.random() * arr.length)];
  arr = arr.filter(function (item) {
    return item !== a;
  });
  c = arr[Math.floor(Math.random() * arr.length)];
  arr = arr.filter(function (item) {
    return item !== a;
  });
};

bottle();
