import React from 'react';

const Card = ({ asset }) => {
  const getPtagClass = (platform) => {
    if (platform === 'After Effects') return 'ae';
    if (platform === 'Final Cut Pro') return 'fcpx';
    return '';
  };

  return (
    <div className={`card ${asset.bgClass}`}>
      {asset.hasDots && <div className="dots-bg"></div>}
      {asset.isAi && <div className="ai-tag">AI</div>}
      {asset.content}
      <span className={`ptag ${getPtagClass(asset.platform)}`}>{asset.platform}</span>
      <div className="hover-veil">
        <span className="card-name">{asset.name}</span>
      </div>
    </div>
  );
};

export default Card;
