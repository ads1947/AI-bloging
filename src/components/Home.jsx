import React from 'react';
import './css/Home.css';

const Home = () => {
  const sections = [
    {
      title: '1. What is Artificial Intelligence?',
      content: `Artificial Intelligence (AI) refers to the ability of machines to perform tasks that typically require human intelligence. This includes activities like understanding natural language, recognizing patterns, making decisions, and learning from data. AI systems are designed to simulate cognitive functions such as learning and problem-solving. As technology evolves, AI continues to grow in capability and relevance across industries ranging from healthcare to finance.`
    },
    {
      title: '2. History of AI',
      content: `The roots of AI can be traced back to the 1950s when computer scientists began exploring the concept of machines thinking like humans. Alan Turing proposed the Turing Test to evaluate a machine’s ability to exhibit intelligent behavior. Since then, the field has seen several waves of growth, including the rise of expert systems in the 1980s and the emergence of deep learning in the 2010s. Today, AI is driven by big data, powerful computing, and advanced algorithms.`
    },
    {
      title: '3. Types of AI',
      content: `AI can be categorized into three main types: Narrow AI, General AI, and Superintelligent AI. Narrow AI, or Weak AI, is designed for specific tasks—like voice assistants or recommendation systems. General AI, still theoretical, would perform any intellectual task that a human can. Superintelligent AI would surpass human intelligence and capabilities. Most of today's AI systems are narrow, but research is ongoing to achieve higher levels of intelligence.`
    },
    {
      title: '4. Machine Learning & Deep Learning',
      content: `Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve over time without being explicitly programmed. Deep Learning is a further subset that uses neural networks with many layers to model complex patterns. These technologies are the foundation of many AI applications today, from image recognition and language translation to medical diagnostics and self-driving cars.`
    },
    {
      title: '5. Natural Language Processing (NLP)',
      content: `Natural Language Processing allows machines to understand, interpret, and generate human language. It powers applications like chatbots, voice assistants, and automatic translation tools. With advances in NLP, machines can now process unstructured language data from books, articles, or social media and extract meaningful insights. This helps businesses automate communication and personalize user experiences.`
    },
    {
      title: '6. AI in Everyday Life',
      content: `AI is all around us—whether we notice it or not. It powers search engines, email spam filters, virtual assistants like Alexa and Siri, personalized shopping recommendations, and even smart thermostats. In smartphones, AI helps optimize battery life, enhance camera quality, and assist with voice-to-text transcription. The average person interacts with AI dozens of times a day without realizing it.`
    },
    {
      title: '7. Benefits of AI',
      content: `The benefits of AI are vast and growing. It can automate repetitive tasks, boost productivity, enhance decision-making with data-driven insights, and increase operational efficiency. In healthcare, AI assists with early diagnosis; in finance, it detects fraud; in logistics, it optimizes supply chains. For individuals, AI can enhance accessibility, support mental health apps, and enable personalized education.`
    },
    {
      title: '8. AI in Industry',
      content: `AI is transforming industries globally. In healthcare, it aids in disease detection and robotic surgery. In finance, it predicts market trends and automates trading. In manufacturing, AI-powered robots streamline production lines. In agriculture, AI helps monitor crop health using drones and sensors. Businesses that adopt AI gain competitive advantages through efficiency, innovation, and customer personalization.`
    },
    {
      title: '9. Ethical Considerations',
      content: `With great power comes great responsibility. AI raises concerns about privacy, surveillance, algorithmic bias, and job displacement. Ethical AI development requires transparency, accountability, and inclusivity. Developers and organizations must consider the societal impacts of their AI systems and strive for fairness, especially when decisions affect people’s lives, such as hiring or medical diagnoses.`
    },
    {
      title: '10. How to Learn AI',
      content: `Anyone can learn AI today thanks to accessible online resources. Start by learning Python, a beginner-friendly language widely used in AI. Explore free or paid courses on platforms like Coursera, Udemy, or edX. Study key libraries such as TensorFlow, PyTorch, Scikit-learn, and OpenCV. Apply your knowledge by building projects like a chatbot, image classifier, or recommendation system.`
    },
    {
      title: '11. AI Myths Busted',
      content: `Many myths about AI create unnecessary fear. One common myth is that AI will take over the world, which is far from the current reality. AI is not sentient or self-aware—it is a tool created and controlled by humans. Another myth is that AI will steal all jobs; while some roles may be automated, AI is more likely to augment jobs and create new opportunities in tech, data science, and robotics.`
    },
    {
      title: '12. The Future of AI',
      content: `The future of AI is promising and powerful. As it continues to evolve, we’ll see breakthroughs in healthcare, climate change solutions, space exploration, and personalized education. AI will increasingly become a collaborator for humans rather than a replacement. The key lies in creating AI systems that are safe, transparent, and beneficial to humanity. Embracing AI responsibly will lead to a smarter, more connected world.`
    }
  ];

  return (
    <div className="home-wrapper">
      <div className="container py-5">
        <header className="mb-5 text-center">
          <h1 className="display-5 fw-bold">Welcome to AI Blogger</h1>
          <p className="lead text-muted container">Explore the full world of Artificial Intelligence — from basic concepts to future predictions — all written for readers and Google Ads alike.</p>
        </header>

        {sections.map((sec, index) => (
          <section key={index} className="home-section mb-4 p-4">
            <h2 className="section-title">{sec.title}</h2>
            <p className="section-content">{sec.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
