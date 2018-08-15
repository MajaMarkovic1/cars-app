<template>
    <div class="container">
        <form @submit.prevent="onSubmit" @reset="reset" id="form">
            <!-- <div class="alert alert-warning" v-if="error.length" >
                {{ error }}
            </div> -->
          <div class="form-group row">
            <label for="brand" class="col-4 col-form-label">Brand</label>
            <div class="col-8">
              <div class="input-group">
                <input v-validate="'required'" id="brand" name="brand" type="text" class="form-control here" 
                    minlength="2" v-model="car.brand">
              </div>
                <div v-show="errors.has('brand')" class="alert alert-warning">{{ errors.first('brand')}}</div>
            </div>
          </div>

          <div class="form-group row">
            <label for="model" class="col-4 col-form-label">Model</label>
            <div class="col-8">
              <div class="input-group">
                <input  v-validate="'required'" id="model" name="model" type="text" class="form-control here" 
                    minlength="2" v-model="car.model">
              </div>
                <div v-show="errors.has('model')" class="alert alert-warning">{{ errors.first("model")}}</div>
            </div>
          </div>

          <div class="form-group row">
            <label for="year" class="col-4 col-form-label">Year</label>
            <div class="col-8">
                <select name="year" class="input-group" v-model="car.year">
                    <option v-validate="'required'" v-for="year in years" :key="year" :value="year" class="form-control here">
                        {{ year }}
                    </option>  
                <div v-show="errors.has('year')" class="alert alert-warning">{{ errors.first("year")}}</div>
                                      
                </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="maxSpeed" class="col-4 col-form-label">Max speed</label>
            <div class="col-8">
              <div class="input-group">
                <input id="maxSpeed" name="maxSpeed" type="number" class="form-control here" v-model="car.maxSpeed">
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="numOfDoors" class="col-4 col-form-label">Number of doors</label>
            <div class="col-8">
              <div class="input-group">
                <input v-validate="'required'" id="numOfDoors" name="numberOfDoors" type="number" class="form-control here" v-model="car.numberOfDoors">
              </div>
                <div v-show="errors.has('numberOfDoors')" class="alert alert-warning">{{ errors.first("numberOfDoors")}}</div>
            </div>
          </div>

          <div class="form-group row">
                <label for="engine" class="col-4 col-form-label">Engine</label>
              <div class="col-8"> 
                <div  class="radio">
                    <div class="radio">
                        <label><input v-validate="'required'" type="radio" name="engine" v-model="car.engine" value="diesel">
                            diesel
                        </label>
                    </div>
                    <div class="radio">
                        <label><input v-validate="'required'" type="radio" name="engine"  v-model="car.engine" value="petrol">
                            petrol
                        </label>
                    </div>
                    <div class="radio">
                        <label><input v-validate="'required'" type="radio" name="engine" v-model="car.engine" value="electric">
                            electric
                        </label>
                    </div>
                    <div class="radio">
                        <label><input v-validate="'required'" type="radio" name="engine" v-model="car.engine" value="hybrid">
                            hybrid
                        </label>
                    </div>
                    <div v-show="errors.has('engine')" class="alert alert-warning">{{ errors.first("engine")}}</div>
                </div>
                </div>
            </div>
          <div class="form-group row">
            <div class="checkbox">
                <label><input name="isAutomatic" type="checkbox" value="true" v-model="car.isAutomatic">  Automatic</label>
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-4 col-8">
              <button name="submit" type="submit" class="btn btn-primary">Submit</button>
              <button name="submit" type="reset" class="btn btn-danger">Reset</button>
              <button name="submit" @click="preview()" class="btn btn-primary">Preview</button>
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
            error: '',
            car: {
                brand: '',
                model: '',
                year: '',
                maxSpeed: '',
                isAutomatic: false,
                engine: '',
                numberOfDoors: ''
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
    created(){
        if (this.$route.params.id){
            cars
            .get(this.$route.params.id)
            .then(response => {
                (this.car = response.data)
            })
            .catch(err => console.log(err))
        }
    },

    methods: {
        onSubmit(){

            this.$validator.validateAll()
            .then(() => {
                this.$route.params.id ? this.editCar() : this.addCar()

            })
            //validation
            // if(this.brand && this.model && this.year && this.numberOfDoors && this.engine){

            //     return true
                
            //  } else {
            //      this.error = 'You must fill all the fields!'
            //  }
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
            .edit(this.car, this.car.id)
            .then(response => {
                this.$router.push('/cars')
            })
            .catch(err => console.log(err))
        },
       
        reset(){
           this.car = {}
        },

        preview(){
            alert(`
            Brand: ${this.car.brand}, 
            Model: ${this.car.model},
            Year: ${this.car.year},
            Max speed: ${this.car.maxSpeed},
            Automatic: ${this.car.isAutomatic},
            Engine: ${this.car.engine},
            Number of doors: ${this.car.numberOfDoors}`
            )
            
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
button {
    margin-right: 0.5rem;
}

</style>