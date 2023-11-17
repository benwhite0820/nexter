import './gallery.style.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src="/gal-1.jpeg" alt="gallery image 1" className="gallery__img" />
      </figure>
      <img src="/gal-2.jpeg" alt="gallery image 2" className="gallery__img" />
    </div>
  );
};

export default Gallery;

<div className="gallery">
  <figure className="gallery__item gallery__item--1">
    <img src="/gal-1.jpeg" alt="gallery image 1" className="gallery__img" />
  </figure>
  <img src="/gal-2.jpeg" alt="gallery image 2" className="gallery__img" />
</div>;
