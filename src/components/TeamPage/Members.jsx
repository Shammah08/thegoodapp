import "./Team.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Members({ team }) {
  return (
    <section className="team-container">
      {team.map((member) => {
        return (
          <Link to={"team/" + member.userid}>
            <figure className="team-member" key={member.userid}>
              <div className="member-image">
                <img src={member.image} alt={member.fullName + "image"} />
              </div>
              <figcaption>
                <h2>{member.fullName}</h2>
                <h5>{member.title ? member.title : "Good Company"}</h5>
                <span>
                  <a
                    href={
                      member.social.instagram
                        ? `https://www.instagram.com/${member.social.instagram} `
                        : "#"
                    }
                    target="_blank"
                  >
                    <FaInstagram className="icon" />
                  </a>
                  <a
                    href={
                      member.social.likedin
                        ? `https://www.linkedin.com/${member.social.linkedin} `
                        : "#"
                    }
                  >
                    <FaLinkedinIn className="icon" />
                  </a>
                  <a
                    href={
                      member.social.twitter
                        ? `https://www.twitter.com/${member.social.twitter} `
                        : "#"
                    }
                    target="_blank"
                  >
                    <FaTwitter className="icon" />
                  </a>
                  <a
                    href={
                      member.social.facebook
                        ? `https://www.facebook.com/${member.social.facebook} `
                        : "#"
                    }
                    target="_blank"
                  >
                    <FaFacebookF className="icon" />
                  </a>

                  {member.social.github ? (
                    <a href={`https://www.github.com/${member.social.github} `}>
                      <FaGithub className="icon" />
                    </a>
                  ) : (
                    ""
                  )}
                </span>
                
              </figcaption>
            </figure>
          </Link>
        );
      })}
    </section>
  );
}
export default Members;
