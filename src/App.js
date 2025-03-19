import React, { useState } from 'react';
import InputForm from './components/inputform/InputForm.jsx';
import BlogOutput from './components/blogoutput/BlogOutput.jsx';
import axios from 'axios';
import './App.css'; // Optional for styling

function App() {
  const [content, setContent] = useState('');

  // Function to call OpenAI API
  const handleGenerate = async (topic, keywords, tone) => {
    try {
      const prompt = `
        Write a blog post about "${topic}" using the following keywords: ${keywords}. The tone should be ${tone}.
      `;

      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003', // You can use any available OpenAI model
          prompt: prompt,
          max_tokens: 500, // Controls the length of the output
          temperature: 0.7, // Controls creativity (0.7 is good for blog posts)
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedContent = response.data.choices[0].text.trim();
      setContent(generatedContent);

    } catch (error) {
      console.error('Error generating blog post:', error);
      setContent('Error generating content. Please try again later.');
    }
  };

  return (
    <div className="app-container">
      <h1>AI-Powered Blog Post Generator 🚀</h1>
      <InputForm onGenerate={handleGenerate} />
      <BlogOutput content={content} />
    </div>
  );
  console.log(process.env.REACT_APP_OPENAI_API_KEY);

}

export default App;
