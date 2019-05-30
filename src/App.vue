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
  width: 200px;
}
</style>
