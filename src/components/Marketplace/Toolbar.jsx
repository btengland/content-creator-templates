import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ id, label, icon, items, selectedValue, onSelect, multiSelect = false, hasFilter = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dd-wrap" ref={dropdownRef}>
      <div
        className={`dd-btn ${isOpen ? 'open' : ''} ${hasFilter ? 'has-filter' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span>{label}</span>
        <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <div className={`dd-menu ${isOpen ? 'open' : ''}`} style={multiSelect ? { minWidth: '200px' } : {}}>
        {items.map((item, index) => {
          if (item.type === 'divider') return <div key={index} className="dd-divider" />;

          const isSelected = multiSelect
            ? selectedValue.has(item.value)
            : selectedValue === item.value;

          return (
            <div
              key={item.value}
              className={`dd-item ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                onSelect(item.value);
                if (!multiSelect) setIsOpen(false);
              }}
            >
              {multiSelect ? <span className="dd-check" /> : <span className="dd-radio" />}
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Toolbar = ({
  search, setSearch,
  platform, setPlatform,
  categories, toggleCategory,
  sort, setSort,
  count
}) => {
  const platforms = [
    { label: 'All Platforms', value: 'all' },
    { type: 'divider' },
    { label: 'Premiere Pro', value: 'Premiere Pro' },
    { label: 'After Effects', value: 'After Effects' },
    { label: 'DaVinci Resolve', value: 'DaVinci Resolve' },
    { label: 'Final Cut Pro', value: 'Final Cut Pro' },
    { label: 'CapCut', value: 'CapCut' },
  ];

  const categoryItems = [
    'Backgrounds', 'Effects', 'Generator', 'Infographics', 'Intros',
    'Logos', 'Lower Thirds', 'Mockups', 'Motion Graphics', 'Overlays',
    'Titles', 'Transitions'
  ].map(cat => ({ label: cat, value: cat }));

  const sortItems = [
    { label: 'Newest', value: 'newest' },
    { label: 'Most Popular', value: 'popular' },
    { label: 'A → Z', value: 'az' },
    { label: 'AI Tools First', value: 'ai' },
  ];

  const currentSortLabel = sortItems.find(i => i.value === sort)?.label || 'Newest';

  return (
    <div className="toolbar">
      <div className="search-wrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search video assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Dropdown
        label={platform === 'all' ? 'Platform' : platform}
        icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
        items={platforms}
        selectedValue={platform}
        onSelect={setPlatform}
        hasFilter={platform !== 'all'}
      />

      <Dropdown
        label={categories.size ? `Category (${categories.size})` : 'Category'}
        icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>}
        items={categoryItems}
        selectedValue={categories}
        onSelect={toggleCategory}
        multiSelect={true}
        hasFilter={categories.size > 0}
      />

      <Dropdown
        label={currentSortLabel}
        icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M7 12h10M11 18h2"/></svg>}
        items={sortItems}
        selectedValue={sort}
        onSelect={setSort}
      />

      <span className="count"><strong>{count}</strong> assets</span>
    </div>
  );
};

export default Toolbar;
