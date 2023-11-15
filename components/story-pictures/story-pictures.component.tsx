import './story-pictures.style.scss';

const StoryPictures = () => {
  return (
    <div className="story__pictures">
      <img
        src="/story-1.jpeg"
        className="story__img--1"
        alt="Couple with new house"
      />

      <img src="/story-2.jpeg" className="story__img--2" alt="New house" />
    </div>
  );
};

export default StoryPictures;
