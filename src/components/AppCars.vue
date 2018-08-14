<template>
    <div>
        <h1>Cars</h1>
        <router-link
            class="list-group-item list-group-item-action"
            v-for="car in cars" 
            :key="car.id"
            :to="{name: 'car-list', params: {id: car.id}}">
            {{ car.brand }}
        </router-link>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    name: 'AppCars',
    data(){
        return {
            cars: []
        }
    },
    beforeRouteEnter(to, from, next){
        cars.getAll()
        .then(response => {
        next(vm => {
            vm.cars = response.data 
        })
        })
        .catch(err => console.log(err))
    },

}
</script>