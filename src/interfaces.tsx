import * as React from 'react';


export interface IReactInstaStoryBanners {
    stories : IStory[],

}


export interface IStory {
    id: string | number,
    type: string,
    thumbnail : string,
    videoPoster ?: string,
    contentUrl : string,
    duration : number,
    title ?: string,
    subTitle ?: string,
    textColor ?: string,
    link ?: string
}


export interface Header {
    heading: string;
    subheading: string;
    profileImage: string
}