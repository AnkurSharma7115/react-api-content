import React from "react";
import { useParams } from "react-router-dom";

function Category(props) {
    let {topicId}=useParams()
    return (
        <div className="home">Home {topicId}
            {props.reelImages.map((data) => (
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
}
export default Category