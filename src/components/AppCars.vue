<template>
    <div>
        <h1>Cars</h1>
        <div v-for="car in cars" :key="car.id">
            <h3>{{ car.brand }}</h3>
            <router-link :to="{ name: 'edit-car', params: {id: car.id}}" class="btn btn-primary">Edit</router-link>
            <button @click="deleteCar(car)" class="btn btn-danger">Delete</button>
            
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
    methods: {
        deleteCar(car){
            cars
            .delete(car.id)
            .then(response => {
                let carIndex = this.cars.findIndex(c => c.id === car.id)
                if (confirm('Do you want to delete this car?')) { 
                    this.cars.splice(carIndex, 1)
                }
            })
            .catch(err => console.log(err))
            
        }
    }

}
</script>

<style>
button {
    margin-left: 0.5rem;
}
</style>