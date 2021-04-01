import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./Nav.css";
import SideBar from "./SideBar";
import Category from "./Category";
import { HomeContext } from "../../HomeContext";
function Home(props) {
    const match = useRouteMatch();
    const home = useContext(HomeContext);
    const { image, category } = home;
    const items = () => {
        return (
            <div className="home">
                {image.map((data) => (
                    <div key={data.id} className="responsive">
                        <div className="gallery">
                            <a href={data.urlWWW} target="blank">
                                <img src={data.urlWWW} alt={data.title} />
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
