var hatefulEight = document.querySelectorAll('.example');

function inArray(arr, el) {
  for (let element of arr) {
    if (element == el) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log(inArray([1, 2, 3], 1));

Array.prototype.inArray = function(el) {
  for (let element of this) {
    if (element == el) {
      return true;
    } else {
      return function() {
        return false
      }
    }
  }
};


// console.log([1, 2, 3].inArray(1));

function bind(method, context) {
  var args = Array.prototype.slice.call(arguments, 2);

  return function() {
    var a = args.concat(Array.prototype.slice.call(arguments, 0));
    return method.apply(context, a);
  }
}

function test(arr) {
  this.forEach(function (elem) {
    console.log(elem);
  })
}
var p = bind(test, hatefulEight);

p();
