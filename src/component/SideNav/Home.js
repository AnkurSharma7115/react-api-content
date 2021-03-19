import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Nav.css";
import SideBar from "./SideBar";
function Home(props) {
    const items = () => {
        return (
            <div className="home">
                {props.images.map((data) => (
                    <div key={data.id} className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                                <img src={data.url} alt={data.title} />
                            </a>
                            <div className="desc">
                                <div>{`Album-ID : ${data.albumId}`}</div>
                                <div>{`Title : ${data.title}`}</div>
                                <div>{`URL : ${data.url}`}</div>
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
                <Route path="/category1" component={items} />
            </Switch>
        </div>
    );
}

export default Home;
