import React from 'react';
import { Link } from 'react-router-dom';
import UserEdit from './UserEdit';
import UserListings from './UserListings';

const Profile = (props) => {
    console.log("props", props.user);

    const userData = props.user ? 
    (<div className="pageTitle">
        <h1>{props.user.name}'s Listings</h1> 
    </div>) : (
        <h4>Loading...</h4>
    );

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    return (
        <div>
            <div>
            <UserEdit user={props.user} />
            { props.user ? userData : errorDiv() }
            <UserListings user={props.user} />
            </div>
        </div>
    ); 

}

export default Profile;