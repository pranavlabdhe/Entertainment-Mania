import {React,Component} from 'react'
import { baseUrl } from './baseUrl';
import { Input,Form,Button, Container} from 'reactstrap';
import HomePage from './HomePage';
import Movies from './Movies';
import MovieCarousel from './MoviesCarousel';
import Snackbar from '@material-ui/core/Snackbar';
import Details from './Detail';
class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputVal:'harry potter',
            movies:[],
            trending:[],
            showHideMovieCarousel:true,
            detailbool:false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.show = this.show.bind(this);
        this.show2 = this.show2.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.funsetdetailbool = this.funsetdetailbool.bind(this);  
        
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
        this.setState({
            showHideMovieCarousel:false
        })
        if(this.state.inputVal === null){
            alert("no result found")
        }
        this.show();    
    
    }
    showDetail(i){
        this.setState({
            detailbool:true,
            inputVal:i
        })
    }
    funsetdetailbool(){
        this.setState({
            detailbool:false
        })
    }
    // handleErr(err){
    //     console.warn(err);
    //     let resp = new Response(
    //         alert(JSON.stringify({
    //             code:400,
    //             message:"network err"
    //         })
    //     ));
    //     return resp
    // }
    async show(){
        try{
        const url = baseUrl + this.state.inputVal;
        const response = await fetch(url)
        const data = await response.json();
       this.setState({
            movies:data.Search
        })
        console.log(data);
    }catch(err){
      alert("Movie Not Found");
      window.location.reload("localhost:3000")
    }
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

           <Form onSubmit={this.handleSubmit}
            >
            <Input type="text" id="inputVal" name="inputVal" onChange={this.handleInputChange} className="text-center" />
            <Button color="primary" className="mt-2">Search</Button>
            </Form>
            {this.state.showHideMovieCarousel?
            <MovieCarousel movies={this.state.movies} trending={this.state.trending}/>:null}
            <Movies movies={this.state.movies} showDetail={this.showDetail} />
            {this.state.detailbool?(
                <Details funsetdetailbool={this.funsetdetailbool}
               inputVal={this.state.inputVal}/>
            ):null}
            
            </>
        );
    }
}
export default MainComponent