import React from 'react';
import {IStory} from "../interfaces";
import styled from "styled-components";


const ListCircle = styled.li`

`



const StoryList = (story: IStory) => {
    return (
        <ListCircle>
            <img src={story.thumbnail} alt={story.title}/>
        </ListCircle>
    )
}

export default StoryList