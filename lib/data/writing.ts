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
    title: 'Starting Guldasta: Building a Pipecleaner Floral Brand Before MBA',
    source: 'Guldasta Venture',
    type: 'ARTICLE',
    frameColor: 'pink',
    description:
      'I started Guldasta in Jan 2026 with my brother Gursimran. ₹20k+ revenue, 30+ custom bouquets & pots, 56–66% margins, and selling out at the 20,000-footfall Kala Gali exhibition.',
    contentHtml: `
      <p>I started Guldasta in January 2026. I always thought: <em>why gift an ordinary bouquet to someone on special occasions when it withers away in a few days?</em></p>
      <p>Searching deeper into alternative floral art forms, I found out that everlasting flowers could be made with the help of pipecleaners. I started this venture with my brother, <strong>Gursimran</strong>.</p>
      <p>The business did well and was profitable from the start. Key highlights from our 5-month journey:</p>
      <ul>
        <li><strong>Kala Gali Exhibition Sell-Out:</strong> We put up a stall at Kala Gali &mdash; an exhibition specially curated for young artists in Ludhiana with a footfall of ~20,000 people &mdash; and we completely sold out our inventory.</li>
        <li><strong>Financials &amp; Scale:</strong> We generated &#8377;20k+ in total revenue, selling 30+ customized bouquets and decorative flower pots within 5 months.</li>
        <li><strong>Strong Unit Margins:</strong> We maintained profit margins of 56%&ndash;66% per order, despite raw materials not being cheap or easily accessible in the market. Gursimran helped source quality supplies from wholesale markets at low rates.</li>
        <li><strong>PAN-India Reach:</strong> We popularized Guldasta on Instagram (@guldasta.inn) and within 3 months expanded to delivering across India. Our audience was primarily Gen Z and young couples, though the craft was also loved by many parents.</li>
      </ul>
      <p>The reason behind closing Guldasta was practical: I had to move to Ahmedabad for my MBA at Deakin University, and operating remotely meant I wouldn't have my brother's on-ground help sourcing materials. Guldasta proved that hands-on execution and commercial instinct are the greatest preparation for business school.</p>
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
