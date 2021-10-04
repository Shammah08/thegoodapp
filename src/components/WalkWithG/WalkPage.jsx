import Form from './Form';
import IntroText from './IntroText';
import forest from './images/forest.webp';
// import forestChild from './images/forest-child.jpg';
import "./Walk.css";
import {FaAngleDoubleDown} from 'react-icons/fa';


function WalkPage() {
    return (
        <section className='walking-page'>
            <div className='forest-image' style= {imageStyle}>
                <a href='#intro-text'>< FaAngleDoubleDown className='icon arrow-down' /></a>
            </div>
            <IntroText />
            <Form />
        </section>
    )
}

const imageStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0, 0.9), rgba(0,0,0, 0.6)),url(${forest}) `,
}

export default WalkPage
