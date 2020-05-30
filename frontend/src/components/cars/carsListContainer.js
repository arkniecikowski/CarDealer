import * as React from 'react'
import CarsList from './carsList'
import CarsTable from "./carsTable";

export default class CarsListContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        console.log("123")
        fetch('http://localhost:4000/cars')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }
    render() {
        return <CarsTable items={this.state.items}/>
    }
}