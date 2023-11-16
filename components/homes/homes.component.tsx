import { homeCardData } from '@/data/homeCardData';
import HomeCard from '../home-card/home-card.component';
import './homes.style.scss';

const Homes = () => {
  return (
    <div className="homes">
      {homeCardData.map((item) => (
        <HomeCard {...item} key={item.alt} />
      ))}
    </div>
  );
};

export default Homes;
