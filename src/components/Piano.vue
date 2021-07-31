<template>
  <div>
    <button @click="test">play</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {piano_preset} from "../assets/instruments/piano"

export default defineComponent({
  name: "piano",
  setup() {

		let test = ()=>{
		console.log(piano_preset.zones)
		}

    return {
			test
		};
  },
});
</script>

<style scoped>
</style>