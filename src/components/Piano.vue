<template>
  <div>
    <button @click="test_play">play</button>
    <button @click="test_stop">stop</button>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import * as Tone from "tone";
import {useStore} from "vuex"

export default defineComponent({
  name: "piano",
  setup() {
    const store = useStore()
    let bindings = computed(() => {
      return store.state.bindings;
    }).value

    return {
      DEV: true, // dev mode
      enableBlackKey: false, // black key status
      lastKeyCode: null, // the last key pressed
      keyLock: false, // ?

      now: null,
      synth: new Tone.Synth().toDestination(),

      bindings
    };
  },
  mounted() {
    this.bindKeyBoradEvent();
  },
  methods: {
    test_play() {
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      const now = Tone.now();
      synth.triggerAttack("D4", now);
      synth.triggerAttack("F4", now + 0.5);
      synth.triggerAttack("A4", now + 1);
      synth.triggerAttack("C4", now + 1.5);
      synth.triggerAttack("E4", now + 2);
      synth.triggerRelease(["D4", "F4", "A4", "C4", "E4"], now + 4);
    },

    test_stop() {},

    initInstrument() {},
    bindKeyBoradEvent() {
      const ShiftKeyCode = 16;
      document.addEventListener(
        "keydown",
        (e) => {
          let keyCode = e.keyCode;
          if (this.DEV) console.log("keydown", keyCode);

          // combination key
          if (keyCode == ShiftKeyCode) {
            this.enableBlackKey = true;
          }
          if (this.enableBlackKey) keyCode = "b" + keyCode;

          this.playByKey(keyCode);
          this.lastKeyCode = keyCode;
        },
        false
      );

      document.addEventListener(
        "keyup",
        (e) => {
          console.log("keyup");
          if (e.keyCode == ShiftKeyCode) {
            this.enableBlackKey = false;
          }
          // $(`.wkey`).removeClass("wkey-active");
          // $(`.bkey`).removeClass("bkey-active");
        },
        false
      );
    },

    playByKey(keyCode) {
      this.synth.triggerAttackRelease(this.bindings[keyCode], "8n");
    },
  },
});
</script>

<style scoped>
</style>