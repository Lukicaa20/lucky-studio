const Story = () => {
  return (
    <section className="story-section content-section" id="story">
      <div className="story-section__header">
        <p className="story-section__eyebrow">About the studio</p>
        <h2>Story</h2>
      </div>

      <div className="story-section__body">
        <div className="story-section__copy">
          <p>
            Lucky Studio started from a simple decision - to stop thinking and start building.
          </p>
          <p>
            There was no clear plan in the beginning, just a goal to create something real. Step
            by step, through trial and error, things started to take shape. Early work was not
            perfect, but each iteration improved the process and the results.
          </p>
          <p>
            Over time, Lucky Studio became more than just an idea - it turned into a consistent
            workflow focused on learning, refining, and delivering better outcomes.
          </p>
          <p>It is still evolving, project by project.</p>
        </div>

        <div className="story-section__media">
          <img src="/Hero3.png" alt="Lucky Studio story visual" className="story-section__image" />
        </div>
      </div>
    </section>
  );
};

export default Story;
