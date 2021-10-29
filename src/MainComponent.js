import {React,Component} from 'react'
import { baseUrl } from './baseUrl';
import { Input,Form,Button, Container} from 'reactstrap';
import HomePage from './HomePage';
import Movies from './Movies';
import MovieCarousel from './MoviesCarousel';
class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputVal:'harry potter',
            movies:[],
            trending:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.show = this.show.bind(this);
        this.show2 = this.show2.bind(this);
    }
    handleInputChange(event){
        const target =event.target;
        const value =target.value;
        const name = target.name

        this.setState({
            inputVal:value
        });
    }
    handleSubmit(event){   
        // console.log(JSON.stringify(this.state));
        event.preventDefault();
        this.show();
        
    }
    async show(){
        const url = baseUrl + this.state.inputVal;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            movies:data.Search
        })
        console.log(data);
    }
    async show2(){
        const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=90e073658be625bb25af58d553173fcc`;
        const response = await fetch(trending);
        const trending_data = await response.json();
        this.setState({
            trending:trending_data.results
        })
        console.log(trending_data);
    }
    componentDidMount(){
        this.show();
        this.show2();
    }

    render() {
        return (
            <>
            <HomePage />
            <Form onSubmit={this.handleSubmit}>
            <Input type="text" id="inputVal" name="inputVal" placeholder={this.state.inputVal} value={this.state.inputVal} onChange={this.handleInputChange} className="text-center" />
            <Button color="primary" className="mt-2">Search</Button>
            </Form>
            <MovieCarousel movies={this.state.movies} trending={this.state.trending}/>
            <Movies movies={this.state.movies}  />
              
            </>
        );
    }
}
export default MainComponent