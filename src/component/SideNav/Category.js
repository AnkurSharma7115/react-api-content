import React from "react";
import { useParams } from "react-router-dom";

function Category(props) {
    let { topicId } = useParams();
    return (
        <div className="home">
            
            {props.reelImages.map((data) => (
                <div key={data.id} className="responsive">
                Home {topicId}
                    <div className="gallery">
                        <a href={data.url} target="blank">
                            <img src={data.download_url} alt={data.author} />
                        </a>
                        <div className="desc">
                                <div>{`Author : ${data.author}`}</div>
                                <div>{`Height : ${data.height}`}</div>
                                <div>{`Width : ${data.width}`}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Category;
