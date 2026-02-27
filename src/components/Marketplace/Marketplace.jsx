import React, { useState, useMemo } from 'react';
import Toolbar from './Toolbar';
import ActiveFilters from './ActiveFilters';
import Card from './Card';
import { assets } from '../../data/assets';

const Marketplace = () => {
  const [platform, setPlatform] = useState('all');
  const [categories, setCategories] = useState(new Set());
  const [sort, setSort] = useState('newest');
  const [search, setSearch] = useState('');

  const toggleCategory = (cat) => {
    const newCats = new Set(categories);
    if (newCats.has(cat)) newCats.delete(cat);
    else newCats.add(cat);
    setCategories(newCats);
  };

  const clearAll = () => {
    setPlatform('all');
    setCategories(new Set());
  };

  const filteredAndSortedAssets = useMemo(() => {
    let result = assets.filter(asset => {
      const pMatch = platform === 'all' || asset.platform === platform;
      const cMatch = categories.size === 0 || categories.has(asset.category);
      const sMatch = !search || asset.name.toLowerCase().includes(search.toLowerCase());
      return pMatch && cMatch && sMatch;
    });

    result.sort((a, b) => {
      if (sort === 'newest') return b.sortDate - a.sortDate;
      if (sort === 'popular') return a.sortDate - b.sortDate;
      if (sort === 'az') return a.name.localeCompare(b.name);
      if (sort === 'ai') return (b.isAi ? 1 : 0) - (a.isAi ? 1 : 0);
      return 0;
    });

    return result;
  }, [platform, categories, search, sort]);

  return (
    <div className="marketplace">
      <Toolbar
        search={search} setSearch={setSearch}
        platform={platform} setPlatform={setPlatform}
        categories={categories} toggleCategory={toggleCategory}
        sort={sort} setSort={setSort}
        count={filteredAndSortedAssets.length}
      />

      <ActiveFilters
        platform={platform} setPlatform={setPlatform}
        categories={categories} toggleCategory={toggleCategory}
        clearAll={clearAll}
      />

      <div className="grid">
        {filteredAndSortedAssets.map(asset => (
          <Card key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
