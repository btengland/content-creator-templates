import React from 'react';

const ActiveFilters = ({ platform, setPlatform, categories, toggleCategory, clearAll }) => {
  const hasFilters = platform !== 'all' || categories.size > 0;

  if (!hasFilters) return null;

  return (
    <div className="active-filters visible">
      {platform !== 'all' && (
        <div className="filter-pill" onClick={() => setPlatform('all')}>
          {platform} <span className="x">×</span>
        </div>
      )}
      {Array.from(categories).map(cat => (
        <div key={cat} className="filter-pill" onClick={() => toggleCategory(cat)}>
          {cat} <span className="x">×</span>
        </div>
      ))}
      <span className="clear-all" onClick={clearAll}>Clear all</span>
    </div>
  );
};

export default ActiveFilters;
