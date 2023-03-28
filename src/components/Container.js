import React, { useEffect, useState } from "react";

import Gallery from "./Gallery";
import axios from "axios";
import { apiKey } from "../api/config";
import Loader from "./Loader";

const Container = (props) => {
    const { searchTerm } = props
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
            )
            .then(response => {
                setImages(response.data.photos.photo);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
        // eslint-disable-next-line
    }, [searchTerm]);

    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} />}
        </div>
    );
};

export default Container;
