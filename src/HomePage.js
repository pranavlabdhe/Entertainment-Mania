import {React,Component} from 'react'

import {Switch,Route,Redirect} from 'react-router-dom'
import MainComponent from './MainComponent';
import { Link } from 'react-router-dom';
class HomePage extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // fetch(baseUrl + )
    }
    render() {
        return (
            <>
        <h1>ENTERTAIMENT MANIA</h1>
    </>
        );
    }
}
export default HomePage