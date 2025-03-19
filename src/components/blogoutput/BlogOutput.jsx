import React from 'react';
import "./blogoutput.css"

const BlogOutput = ({ content }) => {
  if (!content) {
    return <p>No content generated yet. Please enter details and click Generate.</p>;
  }

  return (
    <div className="blog-output">
      <h2>Generated Blog Content:</h2>
      <div className="content-box">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogOutput;
