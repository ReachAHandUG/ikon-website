import React from 'react'
import styled from 'styled-components'

const Box = styled.section`
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

const Ele = ({ url }) => {
    let videoID = '';
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }
    if (url) {
        videoID = youtube_parser(url)
    }
    return (
        <Box>
            <iframe src={'https://www.youtube-nocookie.com/embed/' + videoID + '?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Box>
    )
}
export default Ele