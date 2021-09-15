import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  const footerDetails = [
    {
      id: 1,
      title: "Let's Talk About Your Project",
      text: " What are your hopes for your project? What are your fears? How do you move from concept to actuality? We are here to help you with that. Whether your brand needs a spring clean or an overhaul. Let us do the heavy lifting.",
    },
    {
      id: 2,
      title: "Have Any Query?",
      text: "  Our dedicated staff are always ready to help. We appreciate your business and want you to bring us loads more! We welcome you to contact us for more information about any of our products or services.",
    },
    {
      id: 3,
      title: "Where We Are Located",
      text: " Second Floor, 90 JGO James Gichuru Road Lavington Nairobi, KE",
    },
  ];

  return (
    <footer id="contacts">
      <div className="footer-text">
        <h1>Get Connected.</h1>
        <hr />
        <p>
          We welcome you to contact us for more information about any of our
          products or services.
        </p>
      </div>
      <section>
        {footerDetails.map((detail) => {
          return (
            <div key={detail.id} className="footer-detail">
              <h3> {detail.title}</h3>
              <p>{detail.text}</p>
            </div>
          );
        })}
      </section>
      <div className="social-links-container">
        <ul className="social-links">
          <a
            href="https://www.youtube.com/channel/UC7h4tUtdH0L06sDZVmBMc4Q"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon" />
          </a>
          <a
            href="https://ke.linkedin.com/company/the-good-company-ke"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
          <a
            href="https://www.instagram.com/thegoodcompanyke/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a href="/#">
            <FaTwitter className="icon" />
          </a>
          <a href="/#">
            <FaFacebookF className="icon" />
          </a>
        </ul>
      </div>
      <span>
        <h2>CALL: 0710-766-224</h2>
        <h3>info@thegoodcompany.co.ke</h3>
      </span>
    </footer>
  );
}

export default Footer;
