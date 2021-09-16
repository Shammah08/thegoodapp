import Youtube from './Youtube'

function RecentVideo({videos, onClick}) {
  // console.log('VIDEOS ON CLICK',  videos)
  return <section className="recent-pod" onClick={onClick}>
    {!videos.length===false?<Youtube videos={videos} /> :  <h1 className='redirect-title'>VISIT  <a href="https://www.youtube.com/user/TheGMONEYTV" target='_blank' rel="noreferrer"> THE GOOD COMPANY KE</a> YOUTUBE CHANNEL FOR MORE.</h1>}
  </section>;
}


export default RecentVideo;
