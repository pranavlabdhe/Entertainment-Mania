import {React,Component} from 'react'
import { baseUrl } from './baseUrl';
class HomePage extends Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        // fetch(baseUrl + )
    }
    render() {
        return (
             <h1>ENTERTAINMENT MANIA</h1>
        );
    }
}
export default HomePage