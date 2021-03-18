import React from 'react'
import { Switch, Route } from "react-router-dom";
import './Nav.css'
import SideBar from './SideBar'
function Home(props) {
      
    const items = () => {
        return (
            <div className="home">
                {props.images.map((data) => (
                    <div key={data.id} style={{ margin: "30px" }}>
                        <div>{`Album-ID: ${data.albumId}`}</div>
                        <div>{`Title: ${data.title}`}</div>
                        <div>{`URL: ${data.url}`}</div>
                        <img src={data.url} alt={data.titile}/>
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

export default Home
