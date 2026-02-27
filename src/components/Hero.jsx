import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"></span>
          Marketplace now live — 1,200+ assets &amp; growing
        </div>
        <h1>Save hours with pro<br /><span>video editing templates</span><br />&amp; pay-per-use AI tools</h1>
        <p>Browse thousands of ready-to-use templates for Premiere Pro, After Effects, DaVinci Resolve &amp; more — plus powerful AI tools you only pay for when you need them.</p>
        <div className="hero-ctas">
          <button className="hero-cta-primary">Browse the Marketplace</button>
          <button className="hero-cta-ghost">Become a Contributor →</button>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat"><div className="stat-num">1,240+</div><div className="stat-label">Video Assets</div></div>
        <div className="stat-div"></div>
        <div className="stat"><div className="stat-num">6</div><div className="stat-label">Platforms</div></div>
        <div className="stat-div"></div>
        <div className="stat"><div className="stat-num">Pay-per-use</div><div className="stat-label">AI Tools</div></div>
      </div>
    </div>
  );
};

export default Hero;
