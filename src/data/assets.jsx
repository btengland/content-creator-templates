export const assets = [
  {
    id: 1,
    name: "Liquid Matrix — Motion Pack",
    platform: "After Effects",
    category: "Motion Graphics",
    sortDate: 9,
    isAi: false,
    bgClass: "bg-liquid",
    content: (
      <div className="cc">
        <div className="lm-eye">HYBRID REALM</div>
        <div className="lm-h">LIQUID<br />MATRIX</div>
        <div className="lm-foot">CHROME DRIFT</div>
      </div>
    )
  },
  {
    id: 2,
    name: "Colorful Animated Letters Pack",
    platform: "Premiere Pro",
    category: "Titles",
    sortDate: 8,
    isAi: false,
    bgClass: "bg-colorful",
    content: (
      <div className="cc">
        <div className="cft">
          <div className="r1">COLORFUL</div>
          <div className="r2">ANIMATED</div>
          <div className="r3">&lt;57&gt; LETTERS</div>
          <div className="r4">+ NUMBERS (0–9)</div>
          <div className="r5">+ CHARACTERS</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    name: "Network Collage Template",
    platform: "Premiere Pro",
    category: "Backgrounds",
    sortDate: 7,
    isAi: false,
    bgClass: "bg-network",
    hasDots: true,
    content: (
      <div className="cc">
        <div className="col-g">
          <div className="col-c"></div><div className="col-c"></div>
          <div className="col-c"></div><div className="col-c"></div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    name: "Portrait Collage Template",
    platform: "Premiere Pro",
    category: "Mockups",
    sortDate: 6,
    isAi: false,
    bgClass: "bg-collage",
    hasDots: true,
    content: (
      <div className="cc" style={{ flexDirection: 'row', gap: '6px' }}>
        <div style={{ width: '38%', height: '74%', display: 'flex', flexDirection: 'column', gap: '3px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 6px 22px rgba(0,0,0,.65)' }}>
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#5a7a5a,#3a5a3a)' }}></div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#8a7060,#5a4a3a)' }}></div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#3a6a8a,#1a4a6a)' }}></div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: "Gold 3D Number Reveal",
    platform: "Premiere Pro",
    category: "Motion Graphics",
    sortDate: 5,
    isAi: false,
    bgClass: "bg-gold",
    content: (
      <div className="cc"><div className="gold-n">5</div></div>
    )
  },
  {
    id: 6,
    name: "Minimalistic Titles Pack",
    platform: "Premiere Pro",
    category: "Titles",
    sortDate: 4,
    isAi: false,
    bgClass: "bg-typo",
    content: (
      <div className="cc">
        <div className="tg">
          <div className="tc" style={{ borderColor: 'rgba(255,255,255,.2)', color: '#ccc' }}>MODERN</div>
          <div className="tc">MOTION<br />DESIGN</div>
          <div className="tc" style={{ color: '#bbb' }}>ANIMATED<br />DESIGN</div>
          <div className="tc">CREATIVE</div>
          <div className="tc" style={{ color: '#4d88ff', borderColor: 'rgba(77,136,255,.22)' }}>MINIMALISM</div>
          <div className="tc">DELIVER</div>
          <div className="tc">CLEAN</div>
          <div className="tc" style={{ color: '#ccc' }}>TYPOGRAPHY</div>
          <div className="tc">UNIVERSAL</div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    name: "Modern Motion Design Kit",
    platform: "Premiere Pro",
    category: "Intros",
    sortDate: 3,
    isAi: false,
    bgClass: "bg-dark",
    content: (
      <div className="cc">
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <div style={{ border: '1px solid rgba(255,255,255,.17)', borderRadius: '5px', padding: '7px 11px', fontFamily: "'Syne',sans-serif", fontSize: '10px', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>MODERN<br /><span style={{ fontSize: '6px', color: '#555', fontWeight: 400, letterSpacing: '.05em' }}>MOTION DESIGN</span></div>
          <div style={{ border: '1px solid rgba(255,255,255,.07)', borderRadius: '5px', padding: '7px 10px', fontFamily: "'Syne',sans-serif", fontSize: '8px', fontWeight: 600, color: '#444', lineHeight: 1.4 }}>MODERN<br />ANIMATED<br />DESIGN</div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    name: "Machines — AI Tool",
    platform: "Final Cut Pro",
    category: "Generator",
    sortDate: 2,
    isAi: true,
    bgClass: "bg-pink1",
    content: (
      <div className="cc">
        <div className="mach" style={{ color: '#fff', textShadow: '0 4px 22px rgba(255,255,255,.22)' }}>MACHINES</div>
      </div>
    )
  },
  {
    id: 9,
    name: "Machines — AI Tool (PP)",
    platform: "Premiere Pro",
    category: "Generator",
    sortDate: 1,
    isAi: true,
    bgClass: "bg-pink2",
    content: (
      <div className="cc">
        <div className="mach" style={{ color: '#ffd090', textShadow: '0 4px 18px rgba(200,140,60,.42)' }}>MACHINES</div>
      </div>
    )
  }
];
