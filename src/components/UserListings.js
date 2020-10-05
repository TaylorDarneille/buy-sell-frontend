import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const UserListings = (props) => {
    let listingInfo
    let [userItems, setUserItems] = useState([]);

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/listings/userlistings`)
        .then(response => {
            var userListings = response.data.filter(function (ul) {
                return ul.seller === props.user.id
            })
            setUserItems(userListings)

        })
        .catch(console.error)
    }, [props.user.id])
    console.log("UI", userItems)

    listingInfo = userItems.map((listing, idx) => {
        return(
            <div key={idx}>
            <ItemCard listing={listing} />
            </div>
        )
    })

    return(
        <div>
            <h1>Your Listings</h1>
            {listingInfo}
        </div>
    )

}

export default UserListings;