import React, { useState } from 'react';

const InputForm = ({ onGenerate }) => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('informative');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic || !keywords) {
      alert('Please enter a topic and keywords!');
      return;
    }
    onGenerate(topic, keywords, tone);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Blog Topic:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter blog topic"
          required
        />
      </div>

      <div className="form-group">
        <label>Keywords:</label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter keywords (comma-separated)"
          required
        />
      </div>

      <div className="form-group">
        <label>Tone:</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="informative">Informative</option>
          <option value="casual">Casual</option>
          <option value="persuasive">Persuasive</option>
          <option value="friendly">Friendly</option>
        </select>
      </div>

      <button type="submit">Generate Blog Post</button>
    </form>
  );
};

export default InputForm;
