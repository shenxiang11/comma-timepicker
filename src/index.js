import TimePicker from './components/TimePicker.vue';

// eslint-disable-next-line func-names
TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;
