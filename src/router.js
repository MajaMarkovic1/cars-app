import Vue from 'vue'
import Router from 'vue-router'
import AppCars from './components/AppCars.vue'
import AddCar from './components/AddCar.vue'
import VeeValidate from 'vee-validate';


Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: 'cars'},
        { path: '/cars', component: AppCars},
        { path: '/add', component: AddCar},
        { path: '/edit/:id', component: AddCar, name: 'edit-car'},
        
        
    ]
})