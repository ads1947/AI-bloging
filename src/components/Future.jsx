import './css/Future.css';

const Future = () => {
  return (
    <div className="future-container">
      <div className="future-header text-center">
        <h1 className="future-title">The Future of Artificial Intelligence</h1>
        <p className="future-subtitle">Discover how AI will shape the world in the years to come.</p>
      </div>

      <div className="future-content">
        {/* Section 1 */}
        <section className="future-section">
          <h2 className="future-section-title">AI in Healthcare</h2>
          <p className="future-section-description">
            AI will revolutionize healthcare by improving diagnosis accuracy, enabling personalized treatments, and optimizing patient care.
          </p>
        </section>

        {/* Section 2 */}
        <section className="future-section">
          <h2 className="future-section-title">AI in Transportation</h2>
          <p className="future-section-description">
            Autonomous vehicles and optimized transportation systems will make travel safer, more efficient, and eco-friendly.
          </p>
        </section>

        {/* Section 3 */}
        <section className="future-section">
          <h2 className="future-section-title">AI in Business</h2>
          <p className="future-section-description">
            AI will enhance business decision-making, improve customer personalization, and automate tasks for greater efficiency.
          </p>
        </section>

        {/* Section 4 */}
        <section className="future-section">
          <h2 className="future-section-title">AI in Education</h2>
          <p className="future-section-description">
            AI will help create personalized learning experiences, assist educators, and provide students with smart tutoring systems.
          </p>
        </section>

        {/* Section 5 */}
        <section className="future-section">
          <h2 className="future-section-title">AI and Ethics</h2>
          <p className="future-section-description">
            As AI becomes more prevalent, it raises important ethical questions regarding privacy, fairness, and accountability.
          </p>
        </section>

        {/* Section 6 */}
        <section className="future-section">
          <h2 className="future-section-title">AI in Creativity</h2>
          <p className="future-section-description">
            AI will transform creative industries, assisting in art, music, and content creation, pushing human creativity to new limits.
          </p>
        </section>

        {/* Section 7 */}
        <section className="future-section">
          <h2 className="future-section-title">AI and Society</h2>
          <p className="future-section-description">
            AI will have profound impacts on social structures, work, and human interaction, demanding responsible planning and management.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Future;
