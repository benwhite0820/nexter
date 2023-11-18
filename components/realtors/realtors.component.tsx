import Heading from '../heading/heading.component';
import './realtors.style.scss';

const Realtors = () => {
  return (
    <div className="realtors">
      <Heading headingLevel="h3">Top 3 Realtors</Heading>
      <div className="realtors__list">
        <img src="/realtor-1.jpeg" alt="Realtor 1" className="realtors__img" />
        <div className="realtors__details">
          <Heading headingLevel="h4" color="light">
            Erik Feinman
          </Heading>
          <p className="realtors__sold">245 houses sold</p>
        </div>
        <img src="/realtor-2.jpeg" alt="Realtor 2" className="realtors__img" />
        <div className="realtors__details">
          <Heading headingLevel="h4" color="light">
            Kim Brown
          </Heading>
          <p className="realtors__sold">212 houses sold</p>
        </div>
        <img src="/realtor-3.jpeg" alt="Realtor 3" className="realtors__img" />
        <div className="realtors__details">
          <Heading headingLevel="h4" color="light">
            Toby Ramsey
          </Heading>
          <p className="realtors__sold">198 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
