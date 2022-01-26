import React from 'react';
import ReactDOM from 'react-dom';
import {IReactInstaStoryBanners, IStory} from "./interfaces";
import styled from "styled-components";
import StoryList from "./components/StoryList";


const Wrap = styled.section`
  display: flex;
  width: 100%;
  height: auto;
`


const Presentation = styled.ul`

`


const StoryBanner: React.FC<IReactInstaStoryBanners> =
    ({
         stories
     }) => {

        return (
            <Wrap>
                {
                    stories.map((story: IStory) => {
                        return (
                            <Presentation>
                                <StoryList key={story.id} {...story}/>
                            </Presentation>
                        )
                    })
                }
            </Wrap>
        );
    };

export default StoryBanner;

const previewData = [
    {
        "id": 1,
        "type": 'video',
        "thumbnail": "http://www.dbbottle.co.kr/cart/data/item/1353562072_l1",
        "contentUrl": "https://img.thesaracen.com/banner/7b1fae3acded969db245e3aa5d306f20.mp4",
        "duration": 15000,
        "title": "2022 임인년 호랑이 아트",
        "subTitle": "캐미젤 호박 네일 시럽젤 보러오호랑",
        "textColor": "yellow",
        "link": "https://www.naver.com"
    },
    {
        "id": 2,
        "type": 'image',
        "thumbnail": "http://www.dbbottle.co.kr/cart/data/item/1353562072_l1",
        "contentUrl": "https://img.thesaracen.com/banner/447096b3edca09e9336c84d681b02c7c.jpg",
        "duration": 10000,
        "title": "2022 임인년 호랑이 아트",
        "subTitle": "캐미젤 호박 네일 시럽젤 보러오호랑",
        "textColor": "red",
        "link": "https://www.naver.com"
    }
]


ReactDOM.render(<StoryBanner stories={previewData}/>, document.getElementById('app'));







