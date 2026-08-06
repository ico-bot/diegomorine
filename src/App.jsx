import ImageTopoDiegoMorine from "./assets/image-topo-diegomorine.png";
import LinkImage1 from "./assets/imagensLinks/1.png";
import LinkImage2 from "./assets/imagensLinks/2.png";
import LinkImage3 from "./assets/imagensLinks/3.png";
import LinkImage4 from "./assets/imagensLinks/4.png";
import LinkImage5 from "./assets/imagensLinks/5.png";

export default function App() {
  const galleryImages = [
    LinkImage1,
    LinkImage2,
    LinkImage3,
    LinkImage4,
    LinkImage5,
  ];

  return (
    <div className="page-shell">
      <section className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-image-frame">
            <img
              className="top-bar-image"
              src={ImageTopoDiegoMorine}
              alt="Diego Morine"
            />
          </div>
        </div>
      </section>

      <div className="top-bar-gallery">
        {galleryImages.map((src, index) => (
          <div className="top-bar-gallery-item" key={index}>
            <img
              className="top-bar-gallery-image"
              src={src}
              alt={`Imagem extra ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <main>
      </main>
    </div>
  );
}
