import { partners } from "../database";

function Partners() {
  return (
    <section className='partners-container'>
      <div className='partners'>
        {partners.map((partner) => {
          return (
            <img
              src={partner.url}
              alt={partner}
              title={partner.title}
              key={partner.title}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Partners;
