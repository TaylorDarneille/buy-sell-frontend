import React, {useEffect, useState} from 'react';
import axios from 'axios'
import ItemCard from './ItemCard';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const ListId = (props) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/listings/listid/${props.match.params.id}`)
        .then(data => setResult(data.data))
        .catch(console.error)
    }, [props])
    
    return(
        <div>
            <ItemCard listing={result} />
            
        </div>
    )

}



export default ListId;