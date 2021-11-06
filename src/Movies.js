import {React,Component} from "react";
import {CardGroup,Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle,Button,CardDeck, Container} from 'reactstrap'
import { FadeTransform } from 'react-animation-components';
class Movies extends Component{
        constructor(props){
            super(props);
           this.state ={
             fallback:"https://i.pinimg.com/originals/25/04/d4/2504d4e845449303c72c8ccdd9ddc62f.jpg",
             image_error:false
           }
           this.movieError=this.movieError.bind(this)
        }
        movieError(){
           this.setState({
             image_error:true
           })
        }
        render(){
         return(
            <>  
            <FadeTransform in  transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <div className="movie_cards">
  {this.props.movies.map((p)=>(
 <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
<Card>
{p.Poster === "N/A" ? <CardImg 
  top
   width="100%" className="movie_card_img"
onError={this.movieError} src='https://i.pinimg.com/originals/25/04/d4/2504d4e845449303c72c8ccdd9ddc62f.jpg'></CardImg>: 
  <CardImg
    onerror="this.style.display='none'"
      alt={p.Title}
      src={p.Poster}
      top
      width="100%" className="movie_card_img"
    />
    }
    
    {p.Poster!== "N/A" ?
    <CardBody>
      <CardTitle tag="h5">
        {p.Title} 
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        <h3>{p.Year}</h3>
      </CardSubtitle>
      <Button className="watch" onClick={() => {this.props.showDetail((p.imdbID))}} key={p.imdbID} >
        WATCH
      </Button>
    </CardBody>  :
    <CardBody>
<CardTitle>
    <h5>Nothing to see here</h5>
  </CardTitle>
  <CardSubtitle
    className="mb-2 text-muted"
  >
    <h6>Please Move Along</h6>
    </CardSubtitle>
    <Button className="watch">
    Void
      </Button>
</CardBody>}
    </Card>
    </CardDeck>
    ))}      
    </div>   
    </FadeTransform>      
            </>
         )   
        }
}
export default Movies