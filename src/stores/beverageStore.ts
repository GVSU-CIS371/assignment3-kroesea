import { defineStore } from "pinia";
import temps from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

type Beverage = {
  name: string;
  temp: string;
  base: any;
  creamer: any;
  syrup: any;
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temps,
    bases: bases,
    creamers: creamers,
    syrups: syrups,
    currentTemp: temps[1],
    currentBase: bases[2],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],
    currentBeverageName: "",
    savedBeverages: [] as Beverage[],
  }),
  actions: {
    makeBeverage() {
      if (!this.currentBeverageName.trim()) return;
      const newBeverage: Beverage = {
        name: this.currentBeverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.savedBeverages.push(newBeverage);
      this.currentBeverageName = "";
    },
    showBeverage(beverage: Beverage) {
      this.currentBeverageName = beverage.name;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
  persist: true,
});