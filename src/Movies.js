import {React,Component} from "react";
import {CardGroup,Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle,Button,CardDeck, Container} from 'reactstrap'
class Movies extends Component{
        constructor(props){
            super(props);
        
        }
        render(){
         return(
            <>
            <div className="movie_cards">
  {this.props.movies.map((p)=>(
  <CardDeck style={{display: 'flex', flexDirection: 'row',justifyContent: 'center' }}>
  <Card style={{flex: 1}}>
    <CardImg
      alt={p.Title}
      src={p.Poster}
      top
      width="100%" className="movie_card_img"
    />
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
      <Button>
        Button
      </Button>
    </CardBody>
    </Card>
    </CardDeck>
    ))}               
          </div>
            </>
         )   
        }
}
export default Movies