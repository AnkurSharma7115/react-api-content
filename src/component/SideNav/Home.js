import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./Nav.css";
import SideBar from "./SideBar";
import Category from "./Category";
import axios from "axios";
function Home(props) {
    let match = useRouteMatch();
    
    const [image, setImage] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const urlImage = "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=263a26ec36bcbc6698026735c6c21aff&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"
        const urlCategory = "https://picsum.photos/v2/list"
        
        Promise.all([axios.get(urlImage), axios.get(urlCategory)])
            .then(([response1, response2]) => {
               
                response1.data.photos.photo.map((item) => {
                    return (item.urlWWW ="https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id +"_" +item.secret +".jpg");
                });

                setImage(response1.data.photos.photo);
                setCategory(response2.data);
            })
            .catch((errors) => {
                console.error(errors);
            });
        // Promise.all([fetch(" https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=263a26ec36bcbc6698026735c6c21aff&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"),
        //               fetch("https://picsum.photos/v2/list") ])
        
        // .then(([response1, response2]) => {
        //     return Promise.all([response1.json(), response2.json()])
        // })
        // .then(([data1, data2]) => {
        //             data1.photos.photo.map((item) => {
        //                return item.urlw ="https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg"
                       
        //             })
        //             setImage(data1.photos.photo)
        //             setCategory(data2)
    }, []);
    
    const items = () => {
        return (
            <div className="home">
                {image.map((data) => (
                    <div key={data.id} className="responsive">
                        <div className="gallery">
                            <a href={data.urlWWW} target="blank">
                                <img
                                    src={data.urlWWW}
                                    alt={data.title}
                                />
                            </a>
                            <div className="desc">
                                <div>{`Owner : ${data.owner}`}</div>
                                <div>{`Title : ${data.title}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="content">
            <SideBar />
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Category reelImages={category} />
                </Route>
                <Route path={match.path} component={items}></Route>
            </Switch>
        </div>
    );
}

export default Home;
