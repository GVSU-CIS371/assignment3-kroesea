<template>
  <div>
    <Beverage :isIced="store.currentTemp === 'Cold'" />
    
    <input v-model="store.currentBeverageName" type="text" placeholder="Name" />
    <button @click="store.makeBeverage()">Make Beverage</button>

    <div id="beverage-container">
      <label v-for="beverage in store.savedBeverages" :key="beverage.name">
        <input type="radio" name="saved" @click="store.showBeverage(beverage)" />
        {{ beverage.name }}
      </label>
    </div>

    <ul>
      <li>
        <label v-for="temp in store.temps" :key="temp">
          <input type="radio" name="temperature" :value="temp" v-model="store.currentTemp" />
          {{ temp }}
        </label>
      </li>
      <li>
        <label v-for="beverage in store.bases" :key="beverage.id">
          <input type="radio" name="base" :value="beverage" v-model="store.currentBase" />
          {{ beverage.name }}
        </label>
      </li>
      <li>
        <label v-for="cream in store.creamers" :key="cream.id">
          <input type="radio" name="creamer" :value="cream" v-model="store.currentCreamer" />
          {{ cream.name }}
        </label>
      </li>
      <li>
        <label v-for="syrup in store.syrups" :key="syrup.id">
          <input type="radio" name="syrup" :value="syrup" v-model="store.currentSyrup" />
          {{ syrup.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const store = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>