import { team } from '../../resources/database'
import Members from "./Members";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';

const Team = () => {
  return (
        <div style={{ backgroundColor: 'grey', position: 'relative' }} >
          <Header />
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
      </div>
  );
};

export default Team;
