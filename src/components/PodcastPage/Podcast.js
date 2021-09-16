// import Loader from "../Loader";
import "./Podcast.css";
import RecentVideo from "./RecentVideo";
import ChannelContainer from "./ChannelContainer";
import { useState, useEffect } from 'react';
import { shows, videosData } from '../database';
import {TopButton} from '../Button'

function Podcast() {
    // const apiKey = "AIzaSyCCUi3ewXd7ZVuj8_sOaRiprmTq6hBlGac";
const apiKey = "AIzaSyDlZRxHYzY6frk2ilDYClj3vV5Ry6iw1T0";
const channelID = "UC7h4tUtdH0L06sDZVmBMc4Q";    //TGC
// const channelID = "UC6yW44UGJJBvYTlfC7CRg2Q";     //ManU
const videoCount = 100;

const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${videoCount}`;

  const [allVideos, setAllVideos] = useState([])
  const [displayVideos, setDisplayVideos] = useState([])

  useEffect(() => {
      console.log('FETCHING DATA')
      fetchData().catch((error) =>{
        console.log('The Following Error Occurred', error.message)
        setAllVideos(videosData)
        setDisplayVideos(videosData)
        return
    
       })
      return () => {
          console.log('DATA FETCH COMPLETE')
      }
  },[ ])

  const fetchData = async () => {
    let response = await fetch(url)
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }
      const data = await response.json()
    setAllVideos(data.items)
    setDisplayVideos(allVideos)
    // console.log('State', displayVideos)
  }

  const handleClick = (e) => {
    setDisplayVideos(allVideos)
    const name = e.target.alt.slice(0,5)
    let filteredVideos;
    if(!allVideos === []){
      filteredVideos = allVideos.filter(episode =>{
        const title = episode.snippet.title.slice(0,10)
        return title.includes(name) 
      })
    }else{
      filteredVideos = [ ]
      return filteredVideos
    }
    console.log(  'FILTERED VIDEOS', filteredVideos)
    setDisplayVideos(filteredVideos)
  }


  return (
    <main id="#">
      <ChannelContainer shows={shows}  onClick={handleClick}/>
      <RecentVideo  videos={displayVideos}/>
      <TopButton />
    </main>
  );
}




export default Podcast;
