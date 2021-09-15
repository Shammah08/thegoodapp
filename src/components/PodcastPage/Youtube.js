import { useState, useEffect } from 'react';
// import { episodes } from './database';
// import videosData from './videoJson'
import Container from './Container'


// const apiKey = "AIzaSyCCUi3ewXd7ZVuj8_sOaRiprmTq6hBlGac";
const apiKey = "AIzaSyDlZRxHYzY6frk2ilDYClj3vV5Ry6iw1T0";
const channelID = "UC7h4tUtdH0L06sDZVmBMc4Q";    //TGC
// const channelID = "UC6yW44UGJJBvYTlfC7CRg2Q";     //ManU
const videoCount = 150;

const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

function Youtube() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        console.log('FETCHING DATA')
        fetchData()
        return () => {
            console.log('DATA FETCH COMPLETE')
        }
    },[])


    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setVideos(data.items)
      console.log('State', videos)
    }

  return  < >
    {videos.map(episode =>{
      return <Container episode={episode}  key={episode.id.videoId}/>
    })}
</>;


}

export default Youtube;
