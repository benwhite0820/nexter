import './features.style.scss';
import { featureMockData } from '@/data/featureMockData';
import Heading from '../heading/heading.component';

const Features = () => {
  return (
    <div className="features">
      {featureMockData.map(({ title, content, logo }, index) => (
        <div className="feature" key={index}>
          {logo}
          <Heading headingLevel="h4" color="dark">
            {title}
          </Heading>
          <p className="feature__text">{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
