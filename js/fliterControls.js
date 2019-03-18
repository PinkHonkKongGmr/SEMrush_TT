var add = document.querySelector('.add');
var filterField = document.querySelector('.filterField');
var clearFilter = document.querySelector('.clearFilter');
var apply = document.querySelector('.apply');

var filterProtocol = {
  text: [],
  number: []
}

class Item {
  constructor(parent) {
    this.parent = parent;
    this.item;
    this.closer;
    this.icon;
    this.fundamental;
    this.commonFields;
    this.optionalText;
    this.optionalNumber;
    this.fundamentalSelector;
    this.optionalTextSelector;
    this.optionalNumberSelector;
    this.fundamentalArray = ['Text field', 'Number field'];
    this.optionalTextArray = ['Containing', 'Exactly matching', 'Begins with', 'Ends with'];
    this.optionalNumberArray = ['Equal', 'Greater than', 'Less than'];
    this.inputs = [];
    this.textDefault = this.optionalTextArray[0];
    this.numberDefault = this.optionalNumberArray[0];
  }

  itemСreate() {
    this.item = document.createElement('div');
    this.item.classList.add('item');
    this.parent.appendChild(this.item);
  }

  closer() {
    this.closer = document.createElement('div');
    this.closer.classList.add('closer');
    this.icon = document.createElement('i');
    this.icon.classList.add('fas', 'fa-times');
    this.closer.appendChild(this.icon)
    return this.closer;
  }
  closerControl() {
    let closers = document.querySelectorAll('.closer');
    if (filterField.childNodes.length < 2) {
      for (let closer of closers) {
        closer.classList.add('hide');
      }
    } else {
      for (let closer of closers) {
        closer.classList.remove('hide');
      }
    }
  }

  itemFilling() {
    this.fundamental = document.createElement('div');
    this.fundamental.classList.add('fundamental');
    this.optionalText = document.createElement('div');
    this.optionalText.classList.add('optionalText');
    this.optionalNumber = document.createElement('div');
    this.optionalNumber.classList.add('optionalNumber', 'hide');
    this.item.appendChild(this.fundamental);
    this.item.appendChild(this.optionalText);
    this.item.appendChild(this.optionalNumber);
    this.item.appendChild(this.closer());
  }

  selectorCreator(element, array) {
    let selector = document.createElement("select");
    selector.classList.add('commonFields', 'filterSelect');
    for (let optionBody of array) {
      var option = document.createElement("option");
      option.value = optionBody;
      option.text = optionBody;
      selector.appendChild(option);
    }
    element.appendChild(selector);
    return selector;
  }

  inputCreator(element, type) {
    let input = document.createElement("input");
    this.inputs.push(input);
    input.type = type;
    input.classList.add('commonFields');
    element.appendChild(input);
  }

  fieldsCreates() {
    this.fundamentalSelector = this.selectorCreator(this.fundamental, this.fundamentalArray);
    this.optionalTextSelector = this.selectorCreator(this.optionalText, this.optionalTextArray);
    this.inputCreator(this.optionalText, 'text');
    this.optionalNumberSelector = this.selectorCreator(this.optionalNumber, this.optionalNumberArray);
    this.inputCreator(this.optionalNumber, 'number');
  }

  reset() {
    for (let input of this.inputs) {
      input.value = '';
    }
  }

  getDefault(context) {
    context.optionalTextSelector.value = context.textDefault;
    context.optionalNumberSelector.value = context.numberDefault;
  }

  itsatext(context) {
    console.log(context.optionalNumberSelector);
    context.optionalNumber.classList.add('hide');
    context.optionalText.classList.remove('hide');
    context.getDefault(context);
  }

  itsaNumber(context) {
    context.optionalText.classList.add('hide');
    context.optionalNumber.classList.remove('hide');
    context.getDefault(context);
  }

  eventMaker() {
    let context = this;
    this.fundamentalSelector.onchange = function() {
      if (this.value == "Text field") {
        context.itsatext(context);
        context.reset();
      } else {
        context.itsaNumber(context);
        context.reset();
      }
    }
    this.icon.onclick = function() {
      context.parent.removeChild(context.item)
      context.closerControl();
    }
  }
}

function buildTheItem() {
  let item = new Item(filterField);
  item.itemСreate();
  item.itemFilling();
  item.fieldsCreates();
  item.eventMaker();
  item.closerControl();
}
add.onclick = function() {
  buildTheItem();
}
window.onload = function() {
  buildTheItem();
}

clearFilter.onclick = function() {
  filterField.innerHTML = '';
  buildTheItem();
}

function protocolMaker(filter, protocol) {
  for (let sel of filter) {
    if (!sel.classList.contains('hide')) {
      let operation;
      let value;
      for (node of sel.childNodes) {
        if (node.type == 'select-one') {
          operation = node.value;
        }
        if (node.type == 'text'||node.type == 'number') {
          value = node.value;
        }
      }
      protocol.push({
        operation: operation,
        value: value
      })
    }
  }
}
apply.onclick = function() {
  filterProtocol.text = [];
  filterProtocol.number = [];
  let optoinalTextContent = document.querySelectorAll('.optionalText');
  protocolMaker(optoinalTextContent, filterProtocol.text)
  let optoinalNumberContent = document.querySelectorAll('.optionalNumber');
  protocolMaker(optoinalNumberContent, filterProtocol.number)
  console.log(filterProtocol);
}
