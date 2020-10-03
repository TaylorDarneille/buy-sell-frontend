import React, { useState, useEffect } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Results = (props) => {
    console.log(props)

    const [listings, setListings] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    
    
    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/listings/results`)
        .then(response => {
            setListings(response.data)
            console.log("response", response.data[23])
            // console.log(category)
            // filteredList = setListings.filter(listing => listing == {category})
        })
        .catch(err => console.log(err))

    }, [])

    const listingInfo = listings.map((listing, idx) => {

        return (
            <div className="itemList">
                
                <div key={idx}>
                    <h3>{listing.title}</h3>
                    <p>{listing.description}</p>
                    <h5>{listing.location}</h5>
                    <h5>{listing.category}</h5>
                    {/* <h3> <Link className="viewDetailLink" to= {{pathname: `/results/${props.results.id}`}}> View this results </Link></h3> */}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h1>Results</h1>
            {listingInfo}
        </div>
    )
    
}

export default Results;