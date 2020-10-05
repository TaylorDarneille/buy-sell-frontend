import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const ItemCard = ({listing, showLink}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {listing.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {listing.description}
                    <br></br>
                    {listing.location}
                    <br></br>
                    {listing.category}
                    <br></br>
                    {listing.contact}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {showLink ?
                    (<Link 
                        className="viewDetailLink" 
                        onClick={() => {listing=listing}} to={{pathname: `/listid/${listing._id}`}}> 
                        View this result 
                    </Link>)
                :
                    null
                }
            </CardActions>
        </Card>
    );
}

export default ItemCard;