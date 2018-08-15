<template>
    <div>
        <h1>Cars</h1>
        <div v-for="car in cars" :key="car.id">
            <h3>{{ car.brand }}</h3>
            <router-link :to="{ name: 'edit-car', params: {id: car.id}}" class="btn btn-primary">Edit</router-link>
            <div>Model: {{ car.model }}</div>
            <div>Year: {{ car.year }}</div>
            <div>Mx speed: {{ car.maxSpeed }}</div>
            <div>Automatic: {{ car.isAutomatic }}</div>
            <div>Engine: {{ car.engine }}</div>
            <div>NUmber of doors: {{ car.numberOfDoors }}</div>
            
        </div>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    name: 'AppCars',
    props: ['edit-car'],
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