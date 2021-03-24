import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./Nav.css";
import SideBar from "./SideBar";
import Category from "./Category";
function Home(props) {
    let match = useRouteMatch();
    
    const [image, setImage] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        Promise.all([fetch(" https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=263a26ec36bcbc6698026735c6c21aff&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"),
                      fetch("https://picsum.photos/v2/list") ])
        
        .then(([response1, response2]) => {
            return Promise.all([response1.json(), response2.json()])
        })
        .then(([data1, data2]) => {
                    data1.photos.photo.map((item) => {
                       return item.urlw ="https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg"
                       
                    })
                    setImage(data1.photos.photo)
                    setCategory(data2)
            });
    }, []);
    
    const items = () => {
        return (
            <div className="home">{console.log(image)}
                {image.map((data) => (
                    <div key={data.id} className="responsive">
                        <div className="gallery">
                            <a href={data.urlw} target="blank">
                                <img
                                    src={data.urlw}
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
