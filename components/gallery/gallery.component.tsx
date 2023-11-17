import { galleryData } from '@/data/galleryData';
import './gallery.style.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      {galleryData.map(({ img }, index) => (
        <figure
          className={`gallery__item gallery__item--${index + 1}`}
          key={img}
        >
          <img
            src={img}
            alt={`gallery image ${index + 1}`}
            className="gallery__img"
          />
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
