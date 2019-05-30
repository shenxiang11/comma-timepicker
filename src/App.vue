<template>
  <div id="app">
    <time-picker
      :minuteInterval="5"></time-picker>
  </div>
</template>

<script>
import TimePicker from '@/components/TimePicker';

export default {
  name: 'app',
  components: {
    TimePicker,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 200px;
}
</style>
