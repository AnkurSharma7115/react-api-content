import React from 'react'
import './Nav.css'
import {Link, useRouteMatch} from "react-router-dom";
function SideBar(props) {
    let match = useRouteMatch()
    return (
       <div className="side-bar">
            <ul className="side-bar-list">
                <li><Link to={`${match.url}/category1`} className="side-bar-item">Category-1</Link></li>
                <li><Link to={`${match.url}/category2`} className="side-bar-item">Category-2</Link></li>
                <li><Link to={`${match.url}/category3`} className="side-bar-item">Category-3</Link></li>
                <li><Link to={`${match.url}/category4`} className="side-bar-item">Category-4</Link></li>
                <li><Link to={`${match.url}/category5`} className="side-bar-item">Category-5</Link></li>
            </ul>
           
       </div>
       
    )
}
export default SideBar
