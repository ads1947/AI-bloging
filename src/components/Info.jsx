import React from 'react';
import './css/Info.css';

const infoSections = [
  {
    title: '1. What is Artificial Intelligence?',
    content: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, reason, learn, and problem-solve. AI systems are designed to perform tasks that traditionally required human intelligence, such as recognizing speech, understanding natural language, playing games, and making decisions. AI is the driving force behind modern technologies like chatbots, autonomous vehicles, and recommendation systems.`
  },
  {
    title: '2. Types of AI',
    content: `AI can be categorized into three types: 
      - **Artificial Narrow Intelligence (ANI)**: This is the most common form of AI today, specialized in performing specific tasks such as language translation or image recognition.
      - **Artificial General Intelligence (AGI)**: AGI refers to machines that can perform any cognitive task a human can. We are still far from achieving AGI.
      - **Artificial Superintelligence (ASI)**: ASI is a hypothetical AI that surpasses human intelligence in every aspect, including creativity, problem-solving, and decision-making.`
  },
  {
    title: '3. History of AI Development',
    content: `The development of AI can be traced back to ancient mythology, but the formal field of AI research began in the 1950s. Pioneers like Alan Turing, John McCarthy, and Marvin Minsky laid the foundation for AI, which evolved through the years from rule-based systems to deep learning and neural networks. Breakthroughs in computing power and the availability of large datasets have accelerated AI advancements.`
  },
  {
    title: '4. AI Technologies and Techniques',
    content: `AI encompasses a range of technologies and techniques including:
      - **Machine Learning (ML)**: Algorithms that enable machines to learn from data.
      - **Natural Language Processing (NLP)**: AI that understands, interprets, and generates human language.
      - **Computer Vision**: AI that enables computers to interpret and make decisions based on visual inputs.
      - **Reinforcement Learning**: A technique where machines learn to make decisions through trial and error.`
  },
  {
    title: '5. AI Ethics and Challenges',
    content: `As AI systems become more sophisticated, ethical questions arise, such as:
      - **Bias in AI models**: Ensuring that AI doesn't reinforce discrimination.
      - **Privacy concerns**: Handling sensitive data responsibly.
      - **Job displacement**: The impact of automation on the workforce.
      Addressing these challenges is essential to ensure AI benefits society without harmful consequences.`
  }
];

const Info = () => {
  return (
    <div className="info-wrapper">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">AI Information and Overview</h1>
          <p className="lead text-muted">A deep dive into what AI is, its development, technologies, and its challenges.</p>
        </header>

        {infoSections.map((section, idx) => (
          <section key={idx} className="info-section mb-4 p-4">
            <h2 className="info-title">{section.title}</h2>
            <p className="info-content">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Info;
