import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Pattern from '../../images/elements/pattern-unit-d.svg'

const Box = styled.div`
    position: relative;
    padding-bottom: 10rem; 

    @media screen and (max-width: 766px){
        padding-top: 10rem; 
        padding-bottom: 4rem; 
    }
`

const Wrap = styled.div`
    width: 75%; 
    margin: 0 auto; 
    position: relative;
    z-index: 1;

    @media screen and (max-width: 766px){
        width: 80%;
    }
`

const Video = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    max-width: 100%;
    height: auto;
    background-color: #000; 

    iframe,object, embed{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const Strip = styled.div`
    height: 10%;
    background-image: url('${Pattern}');
    background-size: 1.75rem; 
    width: 100%;
    position: absolute;
    top:30%; 
    z-index: 0;

    @media screen and (max-width: 766px){
        height: 20%;
        top: 50%;
    }
`

const Ele = () => {

    let videoID = '';
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }

    if (VideoData()) {
        videoID = youtube_parser(VideoData())

        console.log(VideoData())
    }


    return (
        <Box>
            <Wrap>
                <Video>
                    <iframe width="560" height="315" src={'https://www.youtube.com/watch?v=luOIpkj21w4' + videoID + '?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Video>
            </Wrap>
            <Strip />
        </Box>
    )
}
export default Ele


export const VideoData = () => {
    const data = useStaticQuery(
        graphql`
            query FeaturedVideoQuery {
            prismicIkonPage {
                data {
                featured_videos {
                    video {
                    document {
                        ... on PrismicVideo {
                        id
                        data {
                            url {
                            embed_url
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        `
    )

    return data.prismicIkonPage.data.featured_videos[0].video.document.data.url.embed_url
}
