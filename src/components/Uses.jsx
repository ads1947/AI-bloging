import React from 'react';
import './css/Uses.css';

const usesSections = [
  {
    title: '1. Healthcare Diagnosis',
    content: `AI algorithms are used in radiology, pathology, and patient data analysis to assist doctors in early diagnosis and treatment planning. AI-powered systems can detect diseases such as cancer, cardiovascular issues, and even mental health conditions earlier than human doctors.`
  },
  {
    title: '2. Financial Services',
    content: `AI is revolutionizing the financial industry with applications such as fraud detection, credit scoring, automated trading, and financial advisory tools. Machine learning models help identify irregular transactions, predict market movements, and provide personalized financial advice to clients.`
  },
  {
    title: '3. E-commerce and Retail',
    content: `AI helps personalize shopping experiences by recommending products, optimizing inventory, and providing dynamic pricing. Additionally, AI-driven chatbots enhance customer service and enable businesses to manage logistics and distribution more efficiently.`
  },
  {
    title: '4. Transportation and Logistics',
    content: `Self-driving vehicles, powered by AI, are set to transform transportation. AI is also used for route optimization, predictive maintenance, and demand forecasting in logistics, helping companies lower operational costs and improve service delivery times.`
  },
  {
    title: '5. Customer Support',
    content: `AI chatbots and virtual agents are increasingly used in customer support. They handle queries, process transactions, and resolve issues 24/7, reducing wait times and improving customer satisfaction. These systems use natural language processing (NLP) to understand and respond to customer needs efficiently.`
  },
  {
    title: '6. Education and Learning',
    content: `AI is transforming education by providing personalized learning experiences, adaptive testing, and smart tutoring. With AI, educators can identify areas where students struggle, enabling them to provide tailored assistance and helping students learn at their own pace.`
  },
  {
    title: '7. Smart Homes and IoT',
    content: `AI powers smart home devices like voice assistants (e.g., Alexa, Google Assistant), which control lights, temperature, security systems, and more. It also enhances Internet of Things (IoT) devices, making them smarter by enabling them to learn and adapt to the habits and preferences of users.`
  },
  {
    title: '8. Agriculture',
    content: `AI is revolutionizing agriculture by enabling farmers to optimize crop yields, detect diseases, and analyze soil conditions. Machine learning models predict the best time for planting, harvesting, and applying fertilizers, helping to increase food production sustainably.`
  },
  {
    title: '9. Entertainment and Media',
    content: `AI is used extensively in entertainment to recommend music, movies, and TV shows based on user preferences. Additionally, AI is used in gaming, content creation (e.g., music composition, video editing), and even generating art using deep learning models.`
  },
  {
    title: '10. Manufacturing',
    content: `AI is making waves in manufacturing through predictive maintenance, quality control, and robotic automation. AI systems predict machinery failures before they happen, ensuring higher uptime and improved product quality. AI-driven robots are also used for assembly lines, reducing human error.`
  }
];

const Uses = () => {
  return (
    <div className="uses-wrapper">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold">Uses of Artificial Intelligence</h1>
          <p className="lead text-muted">AI is already transforming industries. Let's explore its uses across different sectors.</p>
        </header>

        {usesSections.map((section, idx) => (
          <section key={idx} className="uses-section mb-4 p-4">
            <h2 className="uses-title">{section.title}</h2>
            <p className="uses-content">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Uses;
