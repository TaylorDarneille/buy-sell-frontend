import React from 'react';
import { Link } from 'react-router-dom';
import UserEdit from './UserEdit';
import UserListings from './UserListings';

const Profile = (props) => {
    console.log("props", props.user);

    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>Location:</strong> {props.user.location}</p> 
        <p><strong>Phone Number:</strong> {props.user.phone}</p>
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
            { props.user ? userData : errorDiv() }
            <div>
            <UserEdit user={props.user} />
            <UserListings user={props.user} />
            </div>
        </div>
    ); 

}

export default Profile;