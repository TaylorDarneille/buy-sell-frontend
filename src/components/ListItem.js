import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../App.css';
import Cloudinary from './Cloudinary';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ListItem = (props) => {
    console.log("this", props.user.id)
    let [category, setCategory] = useState('');
    let [description, setDescription] = useState('');
    let [title, setTitle] = useState('');
    let [location, setLocation] = useState('');
    // let [image, setImage] = useState('');
    let [redirect, setRedirect] = useState(false);
    let [contact, setContact] = useState("")
    let seller = props.user.id

    const handleDescription = (e) =>{
        setDescription(e.target.value);
    }
    const handleLocation = (e) =>{
        setLocation(e.target.value);
    }
    const handleTitle = (e) =>{
        setTitle(e.target.value);
    }
    const handleContact = (e) =>{
        setContact(e.target.value);
    }
    // const handleImage = (e) =>{
    //     setImage(e.target.value);
    // }
    const handleCategory = (e) =>{
        setCategory(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        const updateInfo = { title, description, location, category, contact, seller} // add image
        console.log("listitem", updateInfo)
        
        axios.post(`${REACT_APP_SERVER_URL}/api/listings/list`, updateInfo)
        console.log("inside axios listing post")
        setRedirect(true);
    } 
    console.log("redirect", redirect)
    if(redirect === true) {
        return <Redirect to="/profile" user={props.user}/>
    }


    
        return(
            <div className='sell-form'>
                <h3>List item to sell</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Title">Title:</label>
                        <br></br>
                        <input name="Title" value={title} onChange={handleTitle} required/>
                    </div>
                    <div>
                        <label htmlFor="Description">Description:</label>
                        <br></br>
                        <input name="Description" value={description} onChange={handleDescription} required/>
                    </div>
                    <div>
                        <label htmlFor="Location">Location:</label>
                        <br></br>
                        <input name="Location" value={location} onChange={handleLocation} required/>
                    </div>
                    <div>
                        <label htmlFor="Contact">Contact Info:</label>
                        <br></br>
                        <input name="Contact" value={contact} onChange={handleContact} required/>
                    </div>

                    <div className="input-group mb-3">
                    <div className="mx-auto">
                        {/* <Cloudinary /> */}
                    </div>
                    </div>

                    <div className="radio-form">
                        <label htmlFor="category" name="category">Clothing</label>
                        <input type="radio" name="category" value="clothing" onClick={handleCategory} />
                        <label htmlFor="category" name="category">Electronics</label>
                        <input type="radio" name="category" value="electronics" onClick={handleCategory} />
                        <br></br>
                        <label htmlFor="category" name="category">Furniture</label>
                        <input type="radio" name="category" value="furniture" onClick={handleCategory} />
                        <label htmlFor="category" name="category">Sports</label>
                        <input type="radio" name="category" value="sports" onClick={handleCategory} />
                        <br></br>
                        <label htmlFor="category" name="category">Movies, Books, Music</label>
                        <input type="radio" name="category" value="movies-books-music" onClick={handleCategory} />
                        <br></br>
                        <label htmlFor="category" name="category">Tools</label>
                        <input type="radio" name="category" value="tools" onClick={handleCategory} />
                        <label htmlFor="category" name="category">Other</label>
                        <input type="radio" name="category" value="other" onClick={handleCategory} />
                    </div>


                        <input type="hidden" name="seller" value={props.user.id} />
                    <button type="submit">List</button>

                </form>
            </div>
        )


}

export default ListItem;