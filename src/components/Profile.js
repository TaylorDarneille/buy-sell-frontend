import React from 'react';
import { Link } from 'react-router-dom';
import UserEdit from './UserEdit';
// import ListItem from './ListItem';

const Profile = (props) => {
    console.log("props", props.user);

    // let [currentForm, setForm] = useState('Edit User');
	// let [user, setUser] = useState('');
	// let [userId, setUserId] = useState('');

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


    // const getUserData = async () => {
	// 	// console.log(props.user.id);
	// 	try {
	// 		const res = await axios.post(
	// 			`${REACT_APP_SERVER_URL}/api/users/profile/get`,
	// 			{ _id: props.user.id }
	// 		);
	// 		setUser(res.data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// useEffect(() => {
	// 	getUserData();
	// }, [props.user.id]);

    
    return (
        <div>
            { props.user ? userData : errorDiv() }
            <div>
            <UserEdit user={props.user} />
            </div>
        </div>
    ); 

}

export default Profile;