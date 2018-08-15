import axios from 'axios'

export default class Cars {
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll(){
        return axios.get('cars');
    }

    add(car){
        return axios.post('cars', car)
    }
    
    get(id){
        return axios.get(`cars/${id}`)
    }

    edit(car, id){
        return axios.put(`cars/${car.id}`, car )
    }

   
}

export const cars = new Cars();
