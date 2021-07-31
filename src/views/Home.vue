<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <piano></piano>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent} from 'vue'
import piano from '../components/Piano'

export default defineComponent({
  name: 'Home',
  components: {
    piano
  }
})
</script>
