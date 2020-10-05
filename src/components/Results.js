import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemCard from './ItemCard';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const Results = (props) => {
    const classes = useStyles();

    const [listings, setListings] = useState([]);
    const [listFilter, setListFilter] = useState("");
    let listingInfo


    console.log("Results-category", props.category)
    console.log("The list filter", listFilter)
 
        
    useEffect(() => {
        
        const getListings = async () => {
            if(props.category === undefined){
                setListFilter("all")
            }
            else {
                setListFilter(props.category)
            }
    
            await axios.get(`${REACT_APP_SERVER_URL}/api/listings/results`)
            .then(response => {
                var filterData = response.data
                if(listFilter !== "all" && listFilter !== ""){
                    filterData = response.data.filter(function (fd) {
                        return fd.category === listFilter
                    })
                    
                } 
                setListings(filterData)
                props.handleResultsData(filterData)
            })
            .catch(err => console.log(err))
        }
        getListings();

    }, [listFilter, props.category])

    console.log("last check", listings)
    console.log("props.resultsData", props.resultsData)


    if(props.category){
        listingInfo = listings.map((listing, idx) => {
    
            return (
                <div key={idx} className="itemList">
                    <ItemCard listing={listing} showLink />
                </div>
            );
        });

    } 
    else if (listFilter === "all"){
        listingInfo = listings.map((listing, idx) => {
    
            return (
                <div className="itemList">
                    
                    <div key={idx}>
                        {/* <h3>{listing.title}</h3>
                        <h5>{listing.description}</h5>
                        <p>{listing.location}</p>
                        <p>{listing.category}</p>
                        {/* <ListId resultsData={props.resultsData[idx]} /> */}
                        {/* <h3> <Link className="viewDetailLink" onClick={() => {listing=listing}} to= {{pathname: `/listid/${listing._id}`}}> View this result </Link></h3> */}

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
                                {listing.location}
                                {listing.category}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link 
                            className="viewDetailLink" 
                            onClick={() => {listing=listing}} to= {{pathname: `/listid/${listing._id}`}}> 
                            View this Item 
                            </Link>
                            {/* <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button> */}
                        </CardActions>
                    </Card>
                    </div>
                </div>
            );
        });

    }
      

    return (
        <div>
            <h1>Results for {listFilter}</h1>
            {listingInfo}
        </div>
    )
    
}

export default Results;