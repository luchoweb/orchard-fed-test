import { images } from "../../assets/components/BodyNeeds";

import "../../styles/components/BodyNeeds.scss";

export default function BodyNeeds() {
  return (
    <section className="body-needs container">
      <div className="body-needs__grid">
        <div className="grid-col__gallery">
          {images.map((image, index) => (
            <picture className="gallery__image" key={`image-${index}`}>
              <img src={image.x1} srcSet={`${images.x2} 2x`} />
            </picture>
          ))}
        </div>

        <div className="grid-col__content">
          <h2 className="ft-norma body-needs__title">
            Answer your body's needs
          </h2>
          <hr />
          <p>The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavorings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.</p>

          <h3 className="body-needs__subhead">Be mindful</h3>
          <p className="body-needs__accent-text">Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.</p>
        </div>
      </div>
    </section>
  );
}
