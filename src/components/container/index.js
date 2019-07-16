import Vue from 'vue'
import jsbView from './jsbView'
import jsbHeader from './jsbHeader'
import jsbFooter from './jsbFooter'
import jsbAdvisory from './jsbAdvisory'

Vue.use({install (Vue) {
  Vue.component('jsb-main', jsbView);
  Vue.component('jsb-header', jsbHeader);
  Vue.component('jsb-footer', jsbFooter);
  Vue.component('jsb-advisory', jsbAdvisory);
}});