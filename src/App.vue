<template>
<div id="conditions">
  <div class='item'>
    <appConditions v-show="startCondition"></appConditions>
    <i v-show="closerShow&&startCondition" class="fas fa-times" @click="startConditionRemove()"></i>
  </div>
  <div class="items" v-for="(item, index) in items" :key="item.id">
    <div class='item'>
      <appConditions></appConditions>
      <i v-show="closerShow" class="fas fa-times" @click="deleteItem(index)"></i>
    </div>
  </div>

  <button @click="addItem" class='apply'><i class="fas fa-plus"></i>add condition</button>
 <div class='filtercomands'>  <button @click="makeProtocol">Apply</button>
   <button @click="refresh" class="clearFilter">clear filter</button></div>
</div>
</template>

<script>
import Condition from './conditions.vue'
export default {
  name: 'conditions',
  data() {
    return {
      startCondition: true,
      items: [],
      closerShow: false
    }
  },

  methods: {
    closerToShow() {
      if (this.startCondition) {
        this.items.length > 0 ? this.closerShow = true : this.closerShow = false;
      } else {
        this.items.length > 1 ? this.closerShow = true : this.closerShow = false;
      }
    },
    addItem() {
      if (this.items.length<10) {
        this.items.push({
          toRender: true,
          id:Math.round(0 - 2000 + Math.random() * 6000)+"e"+Math.round(0 - 20 + Math.random() * 90)
        })
        this.closerToShow();
      } else {
        alert("slishkom mnogo")
      }
    },
    deleteItem(index) {
      this.items.splice(index,1);
      this.closerToShow();
    },
    startConditionRemove() {
      if (this.startCondition) {
        this.startCondition=false;
        document.getElementById('conditions').removeChild(document.querySelector('.item'));
      }
    },
    protocolMaker(filter, protocol) {
      for (let sel of filter) {
        if (sel.style.display != "none") {
          let operation;
          let value;
          for (let node of sel.childNodes) {
            node.type == 'select-one' ? operation = node.value : value = node.value;
          }
          protocol.push({
            operation: operation,
            value: value
          })
        }
      }
    },
    makeProtocol() {
      let filterProtocol = {
        text: [],
        number: []
      }
      let optionalTextContent = document.querySelectorAll('.optionalText');
      this.protocolMaker(optionalTextContent, filterProtocol.text)
      let optionalNumberContent = document.querySelectorAll('.optionalNumber');
      this.protocolMaker(optionalNumberContent, filterProtocol.number)
      console.log(filterProtocol);
    },
    refresh() {
      this.startConditionRemove();
      this.items=[];
      this.addItem();
      this.closerToShow();
    }
  },
  components: {
    appConditions: Condition
  }
}
</script>

<style>
.item {
  display: flex;
  align-items: center;
}
.commonFields {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 150px;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: .5em;
}

.filterSelect {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
  margin-right: 21px;
}

.filterSelect::-ms-expand {
  display: none;
}

.filterSelect:hover {
  border-color: #888;
}

.filterSelect:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.filterSelect option {
  font-weight: normal;
}
.filtercomands {
  margin-top: 24px;
  width: 490px;
  border-top: 1px solid rgba(130, 130, 130, 0.25);
  border-radius: 3px;
  padding-top: 14px;
}

.filtercomands button {
  border-radius: 4px;
  font-size: 22px;
  font-family: sans-serif;
  padding: 6px 12px;
  cursor: pointer;
}

.apply {
  border: none;
  border: 1px solid #00bfff;
  background: #00bfff;
  color: white;
  margin-right: 13px;
}

.clearFilter {
  border: 1px solid rgba(130, 130, 130, 0.9);
  background: none;
  color: rgba(130, 130, 130, 1);
}


</style>
