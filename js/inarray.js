// Переменные для теста bind специально двух типов. querySelectorAll работает с forEach, getElementsByClassName - нет.

var hatefulEight = document.querySelectorAll('.example');
var he = document.getElementsByClassName('example');

 // общий inArray. Возвращает true принахождении совпадения и сообщает о несовпадении
function inArray(arr, el) {
  for (let element of arr) {
    if (element == el) {
      return true;
    } else {
      console.log(false);
    }
  }
};

// вывод// console.log(inArray([1, 2, 3], 1));


// inArray дополняющий прототип Array. Можно вызывать через точку. Его удалось запустить через bind
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

// реализация bind
function bind(method, context) {
  var args = [].slice.call(arguments, 2);

  return function() {
    var a = args.concat([].slice.call(arguments, 0));
    return method.apply(context, a);
  }
}

// тестовый метод, можно вызвать через bind
function test(ok) {
  this.forEach(function(elem) {
    elem.innerHTML = ok;
  })
}

// обработка массивоподобного объекта методом массива с использованием bind запуск forEach c getElementsByClassName
var fn =function (elem) {
  console.log(elem);
}
var p = bind([].forEach, he, fn);

console.log(p());
