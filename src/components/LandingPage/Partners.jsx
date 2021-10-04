import amaize from "../images/amaize.webp";
import apa from "../images/apa.webp";
import safaricom from "../images/safaricom.webp";
import ciroc from "../images/ciroc.webp";
import artcaffe from "../images/artcaffe.webp";
import prudential from "../images/prudential.webp";
import stanbic from "../images/stanbic.webp";
import ikigai from "../images/ikigai.webp";
import ohcha from "../images/ohcha.webp";
import redbull from "../images/redbull.webp";


function Partners() {
  // const partnerImg = []
  const partnersList = [
    {url: amaize,   title: "AMAIZE",},
    { url: apa, title: "APA INSURANCE" },
    { url: safaricom, title: "SAFARICOM PLC" },
    { url: ciroc, title: "CIROC" },
    { url: artcaffe, title: "ARTCAFFE" },
    { url: prudential, title: "PRUDENTIAL" },
    { url: stanbic, title: "STANBIC BANK" },
    { url: ikigai, title: "IKIGAI" },
    { url: ohcha, title: "OHCHA NOODLES BAR" },
    { url: redbull, title: "REDBULL" },
  ];
  const partners = partnersList.map((partner) => {
    return <img src={partner.url} alt={partner} title={partner.title} key={partner.title} />;
  });
  return (
    <section className="partners-container">
      <div className="partners">{partners}</div>
    </section>
  );
}

export default Partners;
