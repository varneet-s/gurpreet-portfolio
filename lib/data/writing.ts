export interface Article {
  slug: string;
  num: string;
  date: string;
  title: string;
  source: string;
  type: string;
  frameColor: 'cyan' | 'pink' | 'orange' | 'purple';
  description: string;
  contentHtml: string;
  externalLink?: {
    label: string;
    url: string;
  };
}

export const articles: Article[] = [
  {
    slug: 'starting-guldasta-brand-before-mba',
    num: '#04',
    date: 'JUN 2026',
    title: 'Starting Guldasta: Building a Brand Before Business School',
    source: 'Guldasta Startup',
    type: 'ARTICLE',
    frameColor: 'pink',
    description:
      'We launched with handcrafted velvet flowers, zero paid ads, and our own savings. 100+ orders later, here is what retail reality taught me.',
    contentHtml: `
      <p>I grew up knowing I wanted to build something of my own. Before finishing my undergraduate degree, my brother and I co-founded <em>Guldasta</em> — a handcrafted velvet floral brand.</p>
      <p>We ran it lean, made it work, and nearly sold out our inventory at our very first public exhibition stall at Kala Gali, Ludhiana.</p>
      <p>Here are three lessons that no textbook could have taught me:</p>
      <ul>
        <li><strong>Customer trust is earned in execution, not planning:</strong> People don't buy ideas; they buy finished craftsmanship, reliable packaging, and immediate attentiveness.</li>
        <li><strong>Cash flow discipline from Day One:</strong> Managing raw materials, unit economics, and margins with our own hard-earned money forced strict accountability.</li>
        <li><strong>Direct feedback changes everything:</strong> Standing at our market stall and watching customers touch the velvet petals taught us more about product appeal in 3 hours than weeks of speculation.</li>
      </ul>
      <p>When my brother moved for college, we closed this chapter. But Guldasta gave me definitive proof: I loved understanding how businesses scale.</p>
    `,
    externalLink: {
      label: 'View Guldasta on Instagram ↗',
      url: 'https://www.instagram.com/guldasta.inn',
    },
  },
  {
    slug: 'hands-on-execution-beats-theory',
    num: '#03',
    date: 'MAY 2026',
    title: 'Why Hands-On Execution Beats Theory in Marketing',
    source: 'Marketing Insight',
    type: 'ARTICLE',
    frameColor: 'cyan',
    description:
      'Studying marketing at S.A.C.C.M gave me the vocabulary. Bootstrapping a retail brand gave me the reality.',
    contentHtml: `
      <p>During my BCOM (Hons) in Marketing under Panjab University, we studied the classic frameworks: the 4Ps, STP, consumer journey maps, and channel distributions.</p>
      <p>They are essential mental models. But the gap between understanding a framework on paper and testing it in the wild is immense.</p>
      <p>When you have to decide whether to invest in branded packaging boxes or velvet ribbon varieties, every rupee has immediate consequences.</p>
      <p>That is why I believe every aspiring business strategist should sell something real before stepping into graduate school.</p>
    `,
    externalLink: {
      label: 'View LinkedIn Profile ↗',
      url: 'https://www.linkedin.com/in/gurpreet-kaur-168303215/',
    },
  },
  {
    slug: 'event-operations-for-1000-attendees',
    num: '#02',
    date: 'APR 2026',
    title: 'Event Operations Under Pressure: Coordinating Convocation',
    source: 'College Operations',
    type: 'ARTICLE',
    frameColor: 'orange',
    description:
      'Managing guest flows, VIP registrations, and stage timing for a 1,000+ attendee university ceremony.',
    contentHtml: `
      <p>Being on the Convocation Ceremony Committee and the Mettle Flagship event team at S.A.C.C.M tested operations under real pressure.</p>
      <p>When you coordinate logistics for over a thousand attendees, small friction points multiply quickly:</p>
      <ul>
        <li>Choke points at check-in desks create cascading delays across the entire event schedule.</li>
        <li>Cross-functional communication between on-ground volunteers and stage coordinators requires simple, clear channels.</li>
        <li>Buffer time and contingency planning are not optional — they are the difference between chaos and smooth delivery.</li>
      </ul>
    `,
  },
  {
    slug: 'from-commerce-to-mba-in-business-analytics',
    num: '#01',
    date: 'MAR 2026',
    title: 'From Commerce to an MBA in Business Analytics',
    source: 'Deakin University',
    type: 'ARTICLE',
    frameColor: 'purple',
    description:
      'Why I chose to pursue an MBA at Deakin University, Ahmedabad — bridging qualitative market intuition with quantitative analytics.',
    contentHtml: `
      <p>After graduating in commerce and running a startup, I wanted to build the strategic and analytical layer on top of my operational foundation.</p>
      <p>Modern businesses don't just rely on intuition; they run on data models, inventory forecasting, and quantitative market research.</p>
      <p>Joining the MBA program at Deakin University in GIFT City, Ahmedabad gives me the environment to sharpen analytical frameworks while staying close to practical business strategy.</p>
    `,
  },
];
