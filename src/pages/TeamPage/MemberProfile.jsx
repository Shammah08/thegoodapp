import { team } from '../../resources/database'
import Footer from "../../components/Footer/Footer";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const MemberProfile = () => {
  const { userid } = useParams();
  const userProfile = team.filter((user) => {
    return user.userid === parseInt(userid);
  });
  return (
    <section className="user-profile-wrapper">
      <Link to="/team" className="btn">
        Go Back
      </Link>
      {userProfile.map((user) => {
        return (
          <section className="user-profile" key={user.userid}>
            <div className="user-bio">
              <h2>{user.fullName}</h2>
              <h5>{user.title} at The Good Co.</h5>
              <p>
                {user.bio
                  ? user.bio
                  : "Which is more important,asked Big Panda, 'The journey or the destination?' 'The Company.' said " +
                    user.username}
              </p>
            </div>
            <div className="profile">
              <img src={user.image} alt={user.fullName} />
              <h3>{user.username}</h3>
              <span>
                {user.social.instagram ? (
                  <a
                    href={`https://www.instagram.com/${user.social.instagram} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icon" />
                  </a>
                ) : (
                  ""
                )}

                {user.social.linkedin ? (
                  <a
                    href={`https://www.linkedin.com/in/${user.social.linkedin} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="icon" />
                  </a>
                ) : (
                  ""
                )}
                {user.social.twitter ? (
                  <a
                    href={`https://www.twitter.com/${user.social.twitter} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="icon" />
                  </a>
                ) : (
                  ""
                )}

                {user.social.facebook ? (
                  <a
                    href={`https://www.facebook.com/${user.social.facebook} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="icon" />
                  </a>
                ) : (
                  ""
                )}

                {user.social.github ? (
                  <a
                    href={`https://www.github.com/${user.social.github} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icon" />
                  </a>
                ) : (
                  ""
                )}
              </span>
            </div>
          </section>
        );
      })}

      <Footer />
    </section>
  );
};

export default MemberProfile;
