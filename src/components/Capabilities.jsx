const capabilities = [
  {
    title: "NFC Integration",
    description:
      "NFC chips add a smart layer to physical products, turning tags, branded pieces, and custom objects into interactive tools that can instantly open links, profiles, contact details, or digital experiences.",
    image: "/nfc_logo.svg",
    alt: "NFC logo",
    label: "Smart function",
  },
  {
    title: "Designed In Blender",
    description:
      "Every concept is designed, modeled, and presented in Blender before production, giving each product a clear visual direction and a more refined final result before anything goes to print.",
    image: "/blender_logo.svg",
    alt: "Blender logo",
    label: "In-house visuals",
  },
  {
    title: "Custom From Start To Finish",
    description:
      "From the first sketch to the finished piece, the workflow stays flexible for prototypes, one-off builds, and small custom batches where function, shape, and identity all matter.",
    image: "/workflow_icon.svg",
    alt: "Workflow icon",
    label: "Full process",
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities-section content-section" id="capabilities">
      <div className="capabilities-section__header">
        <p className="capabilities-section__eyebrow">How we build</p>
        <h2>More Than Printing</h2>
        <p className="capabilities-section__lead">
          Custom pieces are not only printed here. They are planned, modeled, visualized, and
          shaped into something that feels considered before production even starts.
        </p>
        <p>
          Lucky Studio combines digital design, Blender-based presentation, and practical
          fabrication into one process built for distinctive, personalized products.
        </p>
      </div>

      <div className="capabilities-section__grid">
        {capabilities.map((capability) => (
          <article key={capability.title} className="capabilities-section__card">
            <p className="capabilities-section__label">{capability.label}</p>

            {capability.image ? (
              <div className="capabilities-section__icon-wrap">
                <img
                  src={capability.image}
                  alt={capability.alt}
                  className="capabilities-section__icon"
                />
              </div>
            ) : null}

            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
