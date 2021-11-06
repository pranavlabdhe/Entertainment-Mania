import {React,Component} from "react";
import './App.css';
import MainComponent from "./MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
   constructor(props){
     super(props)

   }
   render(){
     return(
       <div>
        <MainComponent/>
       </div>

     )
   }
  
}
export default App;
