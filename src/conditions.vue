

<template>
  <div class="condition">
    <div class="fundamental"><select v-on:change="swap()" class="commonFields filterSelect">
      <option value="Text field">Text field</option>
      <option value="Number field">Number field</option>
      </select></div>
  <div class="optionalText" v-show='textShow'><select v-bind:id="optionalTextSelectId" class="commonFields filterSelect">
      <option value="Containing">Containing</option>
      <option value="Exactly matching">Exactly matching</option>
      <option value="Begins with">Begins with</option>
      <option value="Ends with">Ends with</option>
    </select><input type="text"  v-bind:id="inputTextId" class="commonFields"></div>
  <div class="optionalNumber" v-show='numberShow'><select v-bind:id="optionalNumberSelectId" class="commonFields filterSelect">
      <option value="Equal">Equal</option>
      <option value="Greater than">Greater than</option>
      <option value="Less than">Less than</option>
    </select><input type="number"  v-bind:id="inputNumberId"  class="commonFields"></div>
  </div>
</template>

<script>
export default{
  props: ['vueTitle'],
  data(){
    return{
      textShow:true,
      numberShow:false,
      optionalTextSelectId:this.getId(),
      optionalNumberSelectId:this.getId(),
      inputTextId:this.getId(),
      inputNumberId:this.getId(),
      idCollection:[],
      optionalTextDefault:'Containing',
      optionalNumberDefault:'Equal',
      defaultCollection:[]
    }
  },
  methods:{
    textNumberSwap(){
      this.textShow?(this.textShow=false,this.numberShow=true):(this.textShow=true,this.numberShow=false);
    },
    getId(){
      let id = Symbol();
      id="idConditions"+Math.round(0 - 2000 + Math.random() * 6000000)+"e"+Math.round(0 - 20 + Math.random() * 900)+"rr"+Math.round(0 - 900000 + Math.random() * 7000);
      return id;
    },
    swap() {
      this.textNumberSwap();
      this.idCollection=[this.optionalTextSelectId,this.optionalNumberSelectId,this.inputTextId,this.inputNumberId];
      this.defaultCollection=[this.optionalTextDefault,this.optionalNumberDefault,"",""];
      for (let index in this.idCollection) {
        document.getElementById(this.idCollection[index]).value = this.defaultCollection[index];
      }
    }
  }
}
</script>
<style>
  .condition {
    display: flex;
    margin-bottom: 14px;
  }

  .condition div {
    display: flex;
  }

</style>
