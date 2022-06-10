import "./team.scss";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Members = ({ team }) => {
  return (
    <section className="team-container">
      {team.map((member) => {
        return (
          <figure className="team-member" key={member.userid}>
            <Link to={`/team/${member.userid}`}>
              <div className="member-image">
                <img src={member.image} alt={member.fullName + "image"} />
              </div>
            </Link>
            <figcaption>
              <h2>{member.fullName}</h2>
              <h5>{member.title ? member.title : "Good Company"}</h5>
              <span>
                {member.social.instagram ? (
                  <a
                    href={`https://www.instagram.com/${member.social.instagram} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icon" />
                  </a>
                ) : (
                  ""
                )}

                {member.social.linkedin ? (
                  <a
                    href={`https://www.linkedin.com/in/${member.social.linkedin} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="icon" />
                  </a>
                ) : (
                  ""
                )}
                {member.social.twitter ? (
                  <a
                    href={`https://www.twitter.com/${member.social.twitter} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="icon" />
                  </a>
                ) : (
                  ""
                )}

                {member.social.facebook ? (
                  <a
                    href={`https://www.facebook.com/${member.social.facebook} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="icon" />
                  </a>
                ) : (
                  ""
                )}

                {member.social.github ? (
                  <a
                    href={`https://www.github.com/${member.social.github} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icon" />
                  </a>
                ) : (
                  ""
                )}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};
export default Members;
