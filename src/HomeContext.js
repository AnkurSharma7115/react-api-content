import axios from "axios";
import { createContext, useEffect, useState } from "react";

const HomeContext = createContext();

const HomeProvider = (props) => {
    const [image, setImage] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const urlImage =
            "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=263a26ec36bcbc6698026735c6c21aff&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1";
        const urlCategory = "https://picsum.photos/v2/list";

        Promise.all([axios.get(urlImage), axios.get(urlCategory)])
            .then(([response1, response2]) => {
                response1.data.photos.photo.map((item) => {
                    return (item.urlWWW =
                        "https://farm" +
                        item.farm +
                        ".staticflickr.com/" +
                        item.server +
                        "/" +
                        item.id +
                        "_" +
                        item.secret +
                        ".jpg");
                });

                setImage(response1.data.photos.photo);
                setCategory(response2.data);
            })
            .catch((errors) => {
                console.error(errors);
            });
    }, []);

    return (
        <HomeContext.Provider value={{ image, category }}>
            {props.children}
        </HomeContext.Provider>
    );
};
export { HomeProvider, HomeContext };
