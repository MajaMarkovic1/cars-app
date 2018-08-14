<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
          <div class="form-group row">
            <label for="brand" class="col-4 col-form-label">Brand</label>
            <div class="col-8">
              <div class="input-group">
                <input id="brand" name="brand" type="text" required="required" class="form-control here" v-model="car.brand">
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="model" class="col-4 col-form-label">Model</label>
            <div class="col-8">
              <div class="input-group">
                <input id="model" name="model" type="text" required="required" class="form-control here" v-model="car.model">
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="year" class="col-4 col-form-label">Year</label>
            <div class="col-8">
                <select class="input-group" v-model="car.year" >
                    <option v-for="year in years" :key="year" :value="year" class="form-control here">{{ year }}</option>
                </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="maxSpeed" class="col-4 col-form-label">Max speed</label>
            <div class="col-8">
              <div class="input-group">
                <input id="maxSpeed" name="maxSpeed" type="number" required="required" class="form-control here" v-model="car.maxSpeed">
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="numOfDoors" class="col-4 col-form-label">Number of doors</label>
            <div class="col-8">
              <div class="input-group">
                <input id="numOfDoors" name="numOfDoors" type="number" required="required" class="form-control here" v-model="car.numberOfDoors">
              </div>
            </div>
          </div>
          <div class="form-group row">
                <label for="engine" class="col-4 col-form-label">Engine</label>
              <div class="col-8"> 
                <div class="radio">
                    <div class="radio">
                        <label><input type="radio" name="optradio" v-model="car.engine" value="diesel">diesel</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="optradio" v-model="car.engine" value="petrol">petrol</label>
                    </div>
                    <div class="radio disabled">
                        <label><input type="radio" name="optradio" v-model="car.engine" value="electric">electric</label>
                    </div>
                    <div class="radio disabled">
                        <label><input type="radio" name="optradio" v-model="car.engine" value="hybrid">hybrid</label>
                    </div>
                </div>
                </div>
            </div>
          <div class="form-group row">
            <div class="checkbox">
                <label><input type="checkbox" value="true" v-model="car.isAutomatic">  Automatic</label>
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-4 col-8">
              <button name="submit" type="submit" class="btn btn-primary">Submit</button>
              <button name="submit" type="submit" class="btn btn-primary">Reset</button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    name: 'AddCar',
    data(){
        return {
            car: {
                brand: '',
                model: '',
                year: null,
                maxSpeed: null,
                isAutomatic: false,
                engine: '',
                numberOfDoors: null
            },
           
        }
    },
    computed: {
        years: function(){
            let years = []
            for(let i = 1990; i <= 2018; i++){
                years.push(i);  
            }
            return years  
        }
    },
    methods: {
        onSubmit(){
            this.$route.params.id ? this.editCar() : this.addCar();
           //ako ima id onda edit ako ne onda add
        },
        addCar(){
            cars
            .add(this.car)
            .then(response => {
                this.$router.push('/cars')
            })
            .catch(err => console.log(err))
        },
        editCar(){
            cars
            .edit(this.car)
            .then(response => {
                
                this.$router.push('/add')
            })
            .catch(err => console.log(err))
        }
            
            
        }
    
    
}
</script>

<style>
.checkbox{
    margin-left: 1rem;
}
form {
    margin-top: 1rem;
}

</style>