import React, { useState } from "react";
import Postername from './Postername'
import './Poster.css'

const Poster = (props) => {
const [story, setStory] = useState(props.story);

    const storyChange =()=> {
        setStory('I\'m billioner! I\'m onwner of huge mansion in Spain and my own designed tesla model X');
        console.log(story);
}

    return (
    <div className="post-item">
        <Postername name = {props.name} surname={props.surname} age={props.age}/>
        <div className="post-item__story">{story}</div>
        <button onClick={storyChange}>Change Title</button>
        
    </div>
    );
}
export default Poster;