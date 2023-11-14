import './features.style.scss';
import { featureMockData } from '@/data/featureMockData';

const Features = () => {
  return (
    <div className="features">
      {featureMockData.map(({ title, content, logo }, index) => (
        <div className="feature" key={index}>
          {logo}
          <h4 className="heading-4 heading-4--dark">{title}</h4>
          <p className="feature__text">{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
