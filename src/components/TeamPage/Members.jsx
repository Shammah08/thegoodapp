import './Team.css'
import {
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
  } from "react-icons/fa";
  


function Members({team}) {
    const teamMembers = team.map(member => {
        return <figure className='team-member' key={member.userid}>
            <div className='member-image'>
                <img src={member.image} alt={member.fullName + 'image'} />
            </div>
            <figcaption>
                <h2>{member.fullName}</h2>
                <h5>{member.title? member.title: 'Good Company'}</h5>
                <span>
                <FaInstagram  className='icon' />
                <FaLinkedinIn  className='icon' />
                <FaTwitter  className='icon'/>
                <FaFacebookF  className='icon'/>
                 </span>
                <p>{member.bio? member.bio: "Which is more important,asked Big Panda, 'The journey or the destination?' 'The Company.' said "+ member.fullName }</p>
            </figcaption>
        </figure>
    })
    return (
        <section className='team-container'>
            {teamMembers}
        </section>
    )

    }
export default Members
