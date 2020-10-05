import React, {Component} from 'react';
// import React, { useState } from 'react';
// import {CloudinaryContext, Transformation} from 'cloudinary-react';
// import { Image } from 'cloudinary-react';
import '../App.css';
// import {Cloudinary} from 'cloudinary-core';

// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'slbendak'});

// const Cloudinary = () => {

//     const SampleImg = () => (
//         <img src={cloudinaryCore.url('sample')} />
//     );

//     render () {
//         return(

//             <div>
//                 <Image cloudName="slbendak" publicId="sample" width="300" crop="scale" />
//                 {/* <CloudinaryContext cloudName="slbendak">
//                     <Image publicId="items">
//                         <Transformation width="200" crop="scale" angle="10"/>
//                     </Image>
//                 </CloudinaryContext> */}
//             </div>
//         )
//     }
// }

class Cloudinary extends Component{
    // state = {
    //     imageUrl: null,
    //     imageAlt: null,
    // }

    render() {
        // const { imageUrl, imageAlt } = this.state;

        // const handleImageUpload = () => {

        //     const { files } = document.querySelector('input[type="file"]')
        //     const formData = new FormData();
        //     formData.append('file', files[0]);
        //     // replace this with your upload preset name
        //     formData.append('ml_default', 'qv5rfbwg');
        //     const options = {
        //     method: 'POST',
        //     body: formData,
        //     };

        //     return fetch('https://api.Cloudinary.com/v1_1/:slbendak/image/upload', options)
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));

        //     //   // get the first input element with the type of file,
        //     // const imageFile = document.querySelector('input[type="file"]')
        //     // // destructure the files array from the resulting object
        //     // const files = imageFile.files
        //     // // log the result to the console
        //     // console.log('Image file', files[0])
        // }


        return (

            <div className="image-form">
                
                    <input type="file"/>
                    {/* <button type="button" className="btn" onClick={handleImageUpload}>Submit</button> */}
                
            </div>
        )
    }
}

export default Cloudinary;
