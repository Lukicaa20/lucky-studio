const featuredProduct = {
  tag: "Everyday custom",
  index: "01",
  title: "Custom keychain/magnet",
  image: "/keychain.png",
  alt: "Custom 3D printed keychain and magnet",
  description:
    "Custom keychains and magnets are one of the most practical ways to turn an idea, logo, or memory into something small, useful, and easy to keep close.",
  details:
    "Each piece can be adjusted in shape, text, and color direction so it feels more personal, whether it is made as a gift, a branded item, or a simple custom detail.",
};

const products = [
  {
    tag: "Functional detail",
    title: "Moto Protective Light Mask",
    image: "/protective_mask.png",
    alt: "3D printed moto protective light mask",
    description:
      "A durable custom cover designed to protect the front light area while giving the bike a sharper, more distinctive look.",
  },
  {
    tag: "Terrain display",
    title: "Custom 3D route maps",
    image: "/3dTrail_grabovaca.png",
    alt: "3D printed trail map of Grabovaca",
    description:
      "Layered 3D trail maps turn real routes into a clean display piece with terrain, path flow, and location detail. The map shown in the image features Grabovaca.",
  },
  {
    tag: "Custom hardware",
    title: "Custom Door Handles",
    image: "/door_handle.png",
    alt: "Custom 3D printed door handle",
    description:
      "Custom door handles combine practical everyday use with a tailored shape, fit, and look, making them a strong option for replacements, upgrades, or unique custom builds.",
  },
];

const Products = () => {
  return (
    <section className="products-section content-section" id="products">
      <div className="products-section__header">
        <p className="products-section__eyebrow">What we make</p>
        <h2>Products</h2>
        <p>
          Lucky Studio currently focuses on personalized and practical
          3D-printed products that combine detail, function, and idea.
        </p>
      </div>

      <article className="products-section__feature">
        <div className="products-section__feature-media">
          <img
            src={featuredProduct.image}
            alt={featuredProduct.alt}
            className="products-section__feature-image"
          />
        </div>

        <div className="products-section__feature-copy">
          <p className="products-section__card-tag">{featuredProduct.tag}</p>
          <span className="products-section__card-index">{featuredProduct.index}</span>
          <h3>{featuredProduct.title}</h3>
          <p>{featuredProduct.description}</p>
          <p>{featuredProduct.details}</p>
        </div>
      </article>

      <div className="products-section__grid">
        {products.map((product, index) => (
          <article key={product.title} className="products-section__card">
            {product.image ? (
              <div className="products-section__card-media">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="products-section__card-image"
                />
              </div>
            ) : null}

            <div className="products-section__card-copy">
              <p className="products-section__card-tag">{product.tag}</p>
              <div className="products-section__card-headline">
                <span className="products-section__card-index">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <h3>{product.title}</h3>
              </div>
              {product.description ? <p>{product.description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
