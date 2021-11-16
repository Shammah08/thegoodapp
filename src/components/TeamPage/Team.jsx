import { team } from "../database";
import Members from "./Members";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <section className='team-section'>
      <div className='team-text'>
        <h1>All-Star Team</h1>
        <p>
          Our talented & experienced team delivers amazing results. We have a
          can-do attitude backed up by years of experience delivering high-end,
          creative solutions on time and on budget.
        </p>
      </div>

      <Members team={team} />
      <Footer />
    </section>
  );
};

export default Team;
