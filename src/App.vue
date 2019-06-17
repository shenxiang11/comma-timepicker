<template>
  <div id="app">
    <time-picker
      format="HH:mm"
      :value="time"
      :disabled="false"
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
  data() {
    return {
      time: '00:15',
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 200px;
}
</style>
