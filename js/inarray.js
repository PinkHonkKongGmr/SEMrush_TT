var hatefulEight = document.querySelectorAll('.example');
var he = document.getElementsByClassName('example');
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
      console.log(false);
    }
  }
};



// console.log([1, 2, 3].inArray(100));

function bind(method, context) {
  var args = [].slice.call(arguments, 2);

  return function() {
    var a = args.concat([].slice.call(arguments, 0));
    return method.apply(context, a);
  }
}

function test(ok) {
  this.forEach(function(elem) {
    elem.innerHTML = ok;
  })
}


var p = bind([].inArray, he, he[3]);
console.log(p());
