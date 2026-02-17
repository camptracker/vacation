import { useState, useEffect } from 'react'
import './App.css'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'things-to-do', label: 'Things to Do' },
  { id: 'food', label: 'Food & Dining' },
  { id: 'reservations', label: 'Reservations' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'lodging', label: 'Lodging' },
  { id: 'weather', label: 'Weather' },
  { id: 'activities', label: 'Activities' },
  { id: 'getting-there', label: 'Getting There' },
  { id: 'schedules', label: 'Itineraries' },
  { id: 'hidden-gems', label: 'Hidden Gems' },
  { id: 'links', label: 'Links' },
]

function App() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🏄 日月湾</span>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-overlay">
          <h1>Riyue Bay 日月湾</h1>
          <p className="hero-sub">Sun & Moon Bay — Wanning, Hainan, China</p>
          <p className="hero-tagline">China's premier surf destination & tropical paradise</p>
          <button className="hero-cta" onClick={() => scrollTo('overview')}>Explore the Guide ↓</button>
        </div>
      </header>

      {/* Sections */}
      <main>
        <section id="overview" className="section">
          <h2>🌊 Overview</h2>
          <div className="card-grid">
            <div className="card">
              <h3>What is Riyue Bay?</h3>
              <p>Sun and Moon Bay (日月湾, Rì Yuè Wān) is a stunning 4.5 km crescent-shaped beach located approximately 25 km south of Wanning city on Hainan Island's east coast. It faces the South China Sea and has become known as the <strong>surfing capital of China</strong>.</p>
              <p>The bay has hosted numerous international surfing competitions including the ASP World Longboard Championships, the Hainan Wanning Riyue Bay International Surfing Festival, and ISA China Cup events, putting it firmly on the global surf map.</p>
            </div>
            <div className="card">
              <h3>Why Go?</h3>
              <ul>
                <li>🏄 Year-round surfing with consistent swells from the South China Sea</li>
                <li>🌴 Tropical climate — warm water (24-30°C) all year</li>
                <li>💰 Incredibly affordable compared to Bali or Hawaii</li>
                <li>🍜 Amazing Hainanese cuisine — seafood, coconut chicken, Wenchang chicken</li>
                <li>🏯 Rich culture — Buddhist temples, Southeast Asian heritage from overseas Chinese communities</li>
                <li>👥 Growing but still uncrowded — way less touristy than Sanya</li>
              </ul>
            </div>
            <div className="card">
              <h3>The Vibe</h3>
              <p>Riyue Bay has a laid-back, bohemian surf-town feel. Think early-days Canggu or a quieter Kuta. The area is a mix of local Hainanese fishing village culture and a growing international surf community. Surf camps line the beach, reggae drifts from beachfront bars, and the pace is deliberately slow.</p>
              <p>Wanning itself has been influenced by waves of Overseas Chinese who immigrated from Southeast Asia in the mid-20th century, especially in the Xinglong area. This gives the region a unique cultural blend — you'll find excellent coffee culture (Xinglong coffee is famous), tropical botanical gardens, and Southeast Asian-influenced cuisine alongside traditional Hainanese food.</p>
            </div>
          </div>
        </section>

        <section id="things-to-do" className="section alt">
          <h2>🎯 Things to Do</h2>
          <div className="card-grid">
            <div className="card">
              <h3>🏄 Surfing</h3>
              <p>The main draw. Multiple surf breaks along the bay cater to all levels. The main beach break is beginner-friendly, while the rocky left point break offers more challenge for intermediates and advanced surfers. Board rentals and lessons are available everywhere along the beach.</p>
            </div>
            <div className="card">
              <h3>🏖️ Beaches</h3>
              <p>Beyond the main surf beach, explore nearby <strong>Shimei Bay</strong> (石梅湾) — a pristine 6 km beach with crystal-clear water, and <strong>Nanwan Monkey Island</strong> (南湾猴岛) across the water in Lingshui, home to 2,500+ macaques. <strong>Shenzhou Peninsula</strong> (神州半岛) offers luxury resort beaches and the Kokomo Beach Club.</p>
            </div>
            <div className="card">
              <h3>🏯 Temples & Culture</h3>
              <p><strong>Dongshan Ridge</strong> (东山岭) — One of Hainan's sacred Buddhist mountains, with temples dating to the Song Dynasty including Chaoyin Temple. Entry ¥50. Take bus no. 2 from Wanning city. Features a ropeway and walking trails with panoramic views.</p>
            </div>
            <div className="card">
              <h3>🌿 Nature & Gardens</h3>
              <p><strong>Xinglong Tropical Botanical Garden</strong> (兴隆热带植物园) — 3,000+ species of tropical plants across a beautiful campus. Entry ¥40. Open 07:30-18:00. <strong>Xinglong Coffee Valley</strong> (兴隆咖啡谷) — Free entry, taste famous Xinglong coffee at the source. Multiple cafes on a working plantation.</p>
            </div>
            <div className="card">
              <h3>⛳ Golf</h3>
              <p><strong>The Dunes at Shenzhou Peninsula</strong> — 36-hole Tom Weiskopf-designed course. Green fees from ¥950 (hotel guests) to ¥2,480 (visitors). <strong>Kangle Garden Golf Club</strong> in Xinglong — three 18-hole courses, from ¥800.</p>
            </div>
            <div className="card">
              <h3>🌙 Nightlife</h3>
              <p>Low-key but fun. Beachfront bars at the surf camps serve cold Tsingtao and cocktails. Xinglong town has karaoke (KTV) and night market stalls. For bigger nightlife, Sanya is a 1.5-hour drive south. The surf camp scene is social — bonfires, BBQs, and meeting travelers from across China and beyond.</p>
            </div>
          </div>
        </section>

        <section id="food" className="section">
          <h2>🍜 Restaurants & Food</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Local Specialties</h3>
              <ul>
                <li><strong>Hele Crab</strong> (和乐蟹) — Wanning's most famous dish, a local freshwater crab. ¥80-150/plate</li>
                <li><strong>Dongshan Mutton</strong> (东山羊) — Free-range goat from Dongshan Ridge, braised or hotpot. ¥60-120</li>
                <li><strong>Wenchang Chicken</strong> (文昌鸡) — Hainan's signature dish, poached with ginger-scallion sauce. ¥40-80</li>
                <li><strong>Hainanese Coconut Chicken</strong> (椰子鸡) — Chicken hotpot in fresh coconut water. ¥80-120</li>
                <li><strong>Fresh Seafood</strong> — Pick your fish at the market, pay a restaurant to cook it. ¥50-200</li>
              </ul>
            </div>
            <div className="card">
              <h3>Where to Eat Near Riyue Bay</h3>
              <ul>
                <li><strong>Surf camp restaurants</strong> — Most camps have their own kitchen serving Chinese and Western food. Meals ¥25-60</li>
                <li><strong>Riyue Bay Village eateries</strong> — Small family-run restaurants along the main road. Authentic Hainanese home cooking ¥15-40/dish</li>
                <li><strong>Wanning city seafood street</strong> — Head to the seafood market area near Wanzhou Avenue for the freshest picks. Full meal ¥50-100/person</li>
                <li><strong>Xinglong night market</strong> — Street food stalls with BBQ skewers (¥1-3 each), noodles, dumplings, tropical fruit</li>
                <li><strong>Xinglong coffee shops</strong> — Famous locally-grown coffee from ¥15-30/cup. Try Xinglong Lao Shi Coffee (兴隆老市咖啡)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Budget Tips</h3>
              <p>Eating is very affordable. A full local meal is ¥15-30 ($2-4 USD). Surf camp meals run ¥30-60 ($4-8). Splurge on fresh seafood at ¥100-200 ($14-28) for a feast. Street food and fruit are dirt cheap — a whole coconut is ¥5-10, a plate of fried noodles ¥8-15.</p>
              <p><strong>Pro tip:</strong> Buy seafood at the market yourself and bring it to a nearby restaurant — they'll cook it for a small fee (¥10-20 per dish for preparation). This gets you the freshest food at the best price.</p>
            </div>
          </div>
        </section>

        <section id="reservations" className="section alt">
          <h2>📋 Reservations</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Book Ahead</h3>
              <ul>
                <li>✅ <strong>Flights</strong> — Book 2-4 weeks ahead for best prices, especially during Chinese holidays</li>
                <li>✅ <strong>Hotels during peak season</strong> (Oct-Feb, Chinese New Year, Golden Week) — Prices double and availability drops</li>
                <li>✅ <strong>Golf tee times</strong> at Shenzhou Peninsula — Book 1-2 days ahead</li>
                <li>✅ <strong>Nanwan Monkey Island</strong> cable car — Can get crowded on weekends</li>
              </ul>
            </div>
            <div className="card">
              <h3>Walk-In OK</h3>
              <ul>
                <li>🏄 <strong>Surf lessons</strong> — Available on the spot at any surf camp along the beach</li>
                <li>🍜 <strong>Restaurants</strong> — No reservations needed anywhere</li>
                <li>🏨 <strong>Budget hostels/surf camps</strong> off-peak — Usually have availability</li>
                <li>🏯 <strong>Dongshan Ridge temple</strong> — Buy tickets at the gate</li>
                <li>🌿 <strong>Botanical gardens</strong> — Walk-in anytime during hours</li>
              </ul>
            </div>
            <div className="card">
              <h3>Booking Platforms</h3>
              <ul>
                <li><strong>Flights:</strong> Trip.com, Google Flights, Skyscanner</li>
                <li><strong>Hotels:</strong> Booking.com, Trip.com, Agoda, Ctrip (携程)</li>
                <li><strong>Surf camps:</strong> Contact directly via WeChat or their websites</li>
                <li><strong>Train tickets:</strong> Trip.com or 12306.cn (China's official rail booking)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <h2>💰 Pricing Breakdown</h2>
          <div className="pricing-table">
            <div className="price-col budget">
              <h3>🎒 Budget</h3>
              <p className="price-range">¥150-300/day (~$20-40 USD)</p>
              <ul>
                <li>Dorm bed: ¥40-80/night ($6-11)</li>
                <li>Local meals: ¥15-30 each ($2-4)</li>
                <li>Board rental: ¥50-80/day ($7-11)</li>
                <li>Bus transport: ¥10-30 ($1-4)</li>
                <li>Street food & fruit: ¥10-20 ($1-3)</li>
              </ul>
              <p className="price-weekly">~$140-280/week</p>
            </div>
            <div className="price-col mid">
              <h3>🏖️ Mid-Range</h3>
              <p className="price-range">¥400-800/day (~$55-110 USD)</p>
              <ul>
                <li>Private room: ¥200-400/night ($28-55)</li>
                <li>Mixed dining: ¥50-100 each ($7-14)</li>
                <li>Surf lesson: ¥200-300/session ($28-42)</li>
                <li>Taxi/rides: ¥30-80 ($4-11)</li>
                <li>Attractions: ¥40-60 ($6-8)</li>
              </ul>
              <p className="price-weekly">~$385-770/week</p>
            </div>
            <div className="price-col luxury">
              <h3>🌟 Luxury</h3>
              <p className="price-range">¥1,500+/day (~$210+ USD)</p>
              <ul>
                <li>Resort hotel: ¥800-2,000+/night ($110-280+)</li>
                <li>Fine dining: ¥200-500 ($28-70)</li>
                <li>Private surf coach: ¥500+/session ($70+)</li>
                <li>Private car: ¥300-500/day ($42-70)</li>
                <li>Golf: ¥950-2,480/round ($130-345)</li>
              </ul>
              <p className="price-weekly">~$1,470+/week</p>
            </div>
          </div>
          <div className="card" style={{marginTop: '2rem'}}>
            <h3>Other Costs</h3>
            <ul>
              <li><strong>Flights (TPE → Haikou/Sanya):</strong> $150-400 round trip depending on season</li>
              <li><strong>High-speed train (Haikou/Sanya → Wanning):</strong> ¥80-120 ($11-17)</li>
              <li><strong>SIM card:</strong> ¥50-100 for a tourist data SIM ($7-14)</li>
              <li><strong>VPN service:</strong> $5-10/month (essential for accessing Google, Instagram, etc.)</li>
              <li><strong>Travel insurance:</strong> $30-60 for a week</li>
            </ul>
          </div>
        </section>

        <section id="lodging" className="section alt">
          <h2>🏨 Lodging</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Surf Camps & Hostels (¥40-200/night)</h3>
              <ul>
                <li><strong>Riyue Bay surf camp hostels</strong> — Dorm beds from ¥40-80/night. Multiple camps line the beachfront with shared facilities, board storage, and a social atmosphere</li>
                <li><strong>Budget guesthouses</strong> — Private rooms ¥100-200/night in the village behind the beach</li>
                <li>Most surf camps include board storage, common areas, and optional meal packages</li>
              </ul>
            </div>
            <div className="card">
              <h3>Mid-Range Hotels (¥200-600/night)</h3>
              <ul>
                <li><strong>Blossom Harbor Riyue Bay</strong> — Modern hotel right at the bay. Standard rooms from ~$65/night (¥460), mountain view doubles from ~$65/night</li>
                <li><strong>Hotels along the coast</strong> — Garden view rooms ¥300-500/night with balconies</li>
                <li><strong>Xinglong town hotels</strong> — Good mid-range options with hot spring access, ¥200-400/night</li>
              </ul>
            </div>
            <div className="card">
              <h3>Luxury Resorts (¥800+/night)</h3>
              <ul>
                <li><strong>Shenzhou Peninsula resorts</strong> — Luxury lagoon pool view rooms from ~$220/night (¥1,550). Golf course access included</li>
                <li><strong>Boutique villas</strong> — 1-bedroom villas with breakfast from ~$200/night (¥1,400)</li>
                <li><strong>Shimei Bay resorts</strong> — Several 5-star properties along the pristine neighboring beach</li>
                <li><strong>Apartment rentals</strong> — Full apartments from ¥150-500/night on Airbnb/Tujia (途家)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="weather" className="section">
          <h2>🌤️ Weather & Seasons</h2>
          <div className="card-grid">
            <div className="card wide">
              <h3>Monthly Overview</h3>
              <div className="weather-grid">
                {[
                  { m: 'Jan', t: '18-24°C', w: '🌊🌊', r: 'Low', note: 'Great surf, cool & dry' },
                  { m: 'Feb', t: '19-25°C', w: '🌊🌊', r: 'Low', note: 'Still good surf, warming up' },
                  { m: 'Mar', t: '21-27°C', w: '🌊', r: 'Low', note: 'Swells easing, pleasant' },
                  { m: 'Apr', t: '24-30°C', w: '🌊', r: 'Med', note: 'Getting warmer, smaller waves' },
                  { m: 'May', t: '26-32°C', w: '🌊', r: 'High', note: 'Rainy season starts' },
                  { m: 'Jun', t: '27-33°C', w: '🌊', r: 'High', note: 'Hot & humid, small surf' },
                  { m: 'Jul', t: '27-34°C', w: '🌊', r: 'High', note: 'Typhoon season begins' },
                  { m: 'Aug', t: '27-33°C', w: '🌊🌊', r: 'High', note: 'Typhoon swells = big waves' },
                  { m: 'Sep', t: '26-32°C', w: '🌊🌊🌊', r: 'High', note: 'Peak typhoon = epic surf' },
                  { m: 'Oct', t: '24-30°C', w: '🌊🌊🌊', r: 'Med', note: '★ Best month overall' },
                  { m: 'Nov', t: '22-28°C', w: '🌊🌊🌊', r: 'Low', note: '★ Excellent surf + weather' },
                  { m: 'Dec', t: '19-25°C', w: '🌊🌊', r: 'Low', note: 'Good surf, cool evenings' },
                ].map(({ m, t, w, r, note }) => (
                  <div key={m} className="weather-month">
                    <strong>{m}</strong>
                    <span>{t}</span>
                    <span>{w}</span>
                    <span className={`rain rain-${r.toLowerCase()}`}>{r} rain</span>
                    <em>{note}</em>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3>Best Time to Visit</h3>
              <p><strong>October–December</strong> is the sweet spot: great surf from northeast swells, comfortable temperatures (22-30°C), low rainfall, and fewer crowds than Chinese holidays.</p>
              <p><strong>For surfing:</strong> Sep-Nov for the biggest and most consistent waves. Typhoon swells in Aug-Oct can produce head-high+ waves.</p>
              <p><strong>Avoid:</strong> Chinese New Year (late Jan/Feb) and Golden Week (Oct 1-7) unless you book far ahead — prices surge and beaches get crowded.</p>
            </div>
            <div className="card">
              <h3>Water Temperature</h3>
              <p>Water stays warm year-round: <strong>24°C in winter, 29-30°C in summer</strong>. You can surf in boardshorts most of the year. A thin rashguard is enough Dec-Feb. No wetsuit needed.</p>
            </div>
          </div>
        </section>

        <section id="activities" className="section alt">
          <h2>🎿 Activities</h2>
          <div className="card-grid">
            <div className="card">
              <h3>🏄 Surfing — Beginner</h3>
              <p>Riyue Bay's main beach break is one of the best beginner spots in Asia. Sandy bottom, gentle whitewater, and warm water make it extremely forgiving. Lessons run ¥150-300 ($20-40) for 1-2 hours including board. Most surf camps offer multi-day packages at a discount.</p>
            </div>
            <div className="card">
              <h3>🏄 Surfing — Intermediate</h3>
              <p>The main left point break (known as "Rocky Left") offers a longer, more powerful wave breaking over a rocky reef. Best on NE swells. Further south along the bay, there are additional reef breaks that work on different swell directions. Board rental ¥50-80/day.</p>
            </div>
            <div className="card">
              <h3>🏄 Surfing — Advanced</h3>
              <p>During typhoon swells (Aug-Oct), Riyue Bay can produce powerful overhead+ waves at the point breaks. There are also secret spots along the coast that locals can point you to. The competition site for the ISA events is the main left — a fast, hollow wave on bigger days.</p>
            </div>
            <div className="card">
              <h3>🤿 Snorkeling & Diving</h3>
              <p>The rocky sections at either end of Riyue Bay have decent snorkeling with tropical fish. For better visibility and coral, head to <strong>Wuzhizhou Island</strong> (蜈支洲岛) near Sanya (2-hour drive) or the reefs around Shenzhou Peninsula. Snorkel gear rental ¥30-50.</p>
            </div>
            <div className="card">
              <h3>🥾 Hiking</h3>
              <p><strong>Dongshan Ridge</strong> — Sacred Buddhist mountain with temple walks, a ropeway, and hilltop views (2-3 hours). <strong>Xinglong tropical gardens</strong> — Leisurely walks through botanical wonderlands. For more serious hiking, <strong>Qixian Ridge</strong> (七仙岭) in nearby Baoting has hot springs and jungle trails.</p>
            </div>
            <div className="card">
              <h3>🎭 Cultural Experiences</h3>
              <p>Visit <strong>Xinglong's Southeast Asian community</strong> — descendants of overseas Chinese who returned from Indonesia, Malaysia, and Vietnam. Tour the <strong>Xinglong Coffee Valley</strong> to learn about the region's unique coffee heritage (free entry). Take a cooking class to learn Hainanese chicken rice from scratch.</p>
            </div>
          </div>
        </section>

        <section id="getting-there" className="section">
          <h2>✈️ How to Get There</h2>
          <div className="card-grid">
            <div className="card wide">
              <h3>From Taiwan (TPE) to Riyue Bay</h3>
              <div className="route-steps">
                <div className="step">
                  <span className="step-num">1</span>
                  <div>
                    <strong>Fly TPE → Haikou (HAK) or Sanya (SYX)</strong>
                    <p>No direct flights from Taipei to Hainan. Connect through a mainland Chinese city:</p>
                    <ul>
                      <li><strong>Via Hong Kong (HKG):</strong> TPE → HKG (1.5h) → HAK/SYX (1.5h). Total ~5-7h with layover. Often cheapest.</li>
                      <li><strong>Via Shenzhen (SZX):</strong> TPE → SZX (1.5h) → HAK (1.5h). Good connections.</li>
                      <li><strong>Via Guangzhou (CAN):</strong> TPE → CAN (2h) → HAK (1.5h). Many daily flights.</li>
                      <li><strong>Via Shanghai/Beijing:</strong> Longer but sometimes cheaper with budget carriers.</li>
                    </ul>
                    <p>Expect $150-400 round trip. Book on Trip.com, Skyscanner, or Google Flights.</p>
                    <p>⚠️ <strong>Visa note:</strong> Hainan has a <strong>30-day visa-free policy</strong> for citizens of 59 countries (including many passport holders). Check if your passport qualifies. Taiwan compatriots use a Taiwan Compatriot Entry Permit (台胞证).</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">2</span>
                  <div>
                    <strong>High-Speed Train to Wanning</strong>
                    <p>From <strong>Haikou East Station</strong>: Take the east ring high-speed rail → Wanning Station. ~1.5 hours, ¥80-120 ($11-17). Trains run every 20-30 minutes.</p>
                    <p>From <strong>Sanya Station</strong>: East ring line north → Wanning. ~1 hour, ¥60-90. Also frequent.</p>
                    <p>Book on <strong>12306.cn</strong> or <strong>Trip.com</strong>. Passport required for booking.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">3</span>
                  <div>
                    <strong>Wanning → Riyue Bay (25 km)</strong>
                    <p><strong>Taxi/Didi:</strong> ¥40-60 ($6-8), 25-30 minutes. Download Didi (China's Uber) before you go.</p>
                    <p><strong>Local bus:</strong> ¥5-10 from Wanning bus station, but infrequent (every 40-60 min). Ask for "Riyue Bay" (日月湾).</p>
                    <p><strong>Hotel pickup:</strong> Many surf camps and hotels offer free or cheap pickup from Wanning station if you book ahead.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>Leaving: Riyue Bay → SFO</h3>
              <p>Reverse the route:</p>
              <ol>
                <li><strong>Riyue Bay → Wanning Station</strong> — Taxi/Didi ¥40-60</li>
                <li><strong>Train → Haikou or Sanya</strong> — 1-1.5 hours</li>
                <li><strong>Fly to a hub city</strong> — Haikou/Sanya → HKG, CAN, PVG, or PEK</li>
                <li><strong>International flight → SFO</strong> — Direct flights from HKG, PVG, PEK to SFO (11-13 hours)</li>
              </ol>
              <p>Total transit time: 16-24 hours depending on connections. Budget $400-800 one-way for HAK → SFO routing.</p>
            </div>
            <div className="card">
              <h3>Essential Apps & Prep</h3>
              <ul>
                <li>📱 <strong>WeChat</strong> — Essential for payments, communication, everything in China</li>
                <li>🚕 <strong>Didi</strong> — Ride-hailing (China's Uber)</li>
                <li>🗺️ <strong>Baidu Maps</strong> or <strong>Amap (高德)</strong> — Google Maps doesn't work well in China</li>
                <li>🔐 <strong>VPN</strong> — Install before arriving (ExpressVPN, Astrill) for Google/Instagram/etc.</li>
                <li>💳 <strong>Alipay</strong> — Now supports international cards. Essential for mobile payments</li>
                <li>🚂 <strong>12306 app</strong> — China railway booking</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="schedules" className="section alt">
          <h2>📅 Example 1-Week Itineraries</h2>
          
          <div className="itinerary">
            <h3>🧘 Relaxed — "Surf, Eat, Repeat"</h3>
            <div className="schedule">
              {[
                { day: 'Day 1', title: 'Arrive & Settle', desc: 'Fly in to Haikou, train to Wanning, taxi to Riyue Bay. Check into surf camp. Evening beach walk, beachfront dinner, early sleep.' },
                { day: 'Day 2', title: 'First Surf', desc: 'Morning beginner surf lesson (2h). Lunch at camp. Afternoon nap or beach lounging. Sunset beers at a beachfront bar.' },
                { day: 'Day 3', title: 'Explore Local', desc: 'Morning free surf session. Afternoon visit Riyue Bay village, local lunch. Walk along the full length of the bay. Evening BBQ at camp.' },
                { day: 'Day 4', title: 'Xinglong Day', desc: 'Sleep in. Taxi to Xinglong. Coffee at Xinglong Coffee Valley (free). Stroll through Tropical Botanical Garden (¥40). Night market dinner.' },
                { day: 'Day 5', title: 'Surf & Chill', desc: 'Morning surf (you\'re improving!). Afternoon hammock + book on the beach. Try coconut chicken hotpot for dinner in town.' },
                { day: 'Day 6', title: 'Beach Day', desc: 'Day trip to Shimei Bay — pristine beach, swimming, snorkeling. Seafood lunch by the water. Back to Riyue Bay for sunset surf.' },
                { day: 'Day 7', title: 'Departure', desc: 'Final dawn surf session. Pack up. Hele crab farewell lunch. Taxi → Wanning Station → train → airport → home.' },
              ].map(({ day, title, desc }) => (
                <div key={day} className="schedule-day">
                  <span className="day-label">{day}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="itinerary">
            <h3>🏄‍♂️ Adventure — "Maximum Stoke"</h3>
            <div className="schedule">
              {[
                { day: 'Day 1', title: 'Arrive & Surf', desc: 'Early arrival. Drop bags, rent a board, hit the water immediately. Sunset session. Night: find the liveliest beach bar.' },
                { day: 'Day 2', title: 'Dawn Patrol + Temple', desc: 'Sunrise surf session (best waves, fewer people). After lunch, hike Dongshan Ridge (东山岭) — temples, ropeway, panoramic views. Evening: night surf if conditions allow.' },
                { day: 'Day 3', title: 'Point Break Day', desc: 'Full day surfing the Rocky Left point break. Pack lunch. Work on your turns. End-of-day session until dark. Seafood feast in Wanning city.' },
                { day: 'Day 4', title: 'Monkey Island + Coast', desc: 'Morning: Nanwan Monkey Island cable car & macaque encounters. Afternoon: explore Shenzhou Peninsula beaches and Kokomo Beach Club. Sunset surf back at Riyue Bay.' },
                { day: 'Day 5', title: 'Surf Safari', desc: 'Hire a local guide to show you secret spots up and down the coast. Explore reef breaks you won\'t find on any map. Bring lunch. Full day of waves.' },
                { day: 'Day 6', title: 'Sanya Day Trip', desc: 'Drive 1.5h south to Sanya. Snorkel at Wuzhizhou Island or check out Houhai surf village. Experience the bigger city scene. Back by evening.' },
                { day: 'Day 7', title: 'Last Session & Go', desc: 'Pre-dawn surf. Breakfast at camp. Quick trip to Xinglong for coffee souvenirs. Depart for airport with sand still in your hair.' },
              ].map(({ day, title, desc }) => (
                <div key={day} className="schedule-day">
                  <span className="day-label">{day}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="itinerary">
            <h3>⚖️ Balanced — "Best of Both Worlds"</h3>
            <div className="schedule">
              {[
                { day: 'Day 1', title: 'Arrive & Explore', desc: 'Arrive Haikou, train to Wanning. Check in at a mid-range hotel. Walk the beach, sunset dinner at a beachfront restaurant. Plan the week.' },
                { day: 'Day 2', title: 'Surf Intro + Village', desc: 'Morning: 2-hour surf lesson. Lunch at a local village restaurant (Hele crab!). Afternoon: beach walk, explore the bay. Evening: bonfire at surf camp.' },
                { day: 'Day 3', title: 'Culture Day', desc: 'Morning: Dongshan Ridge temples and hiking. Lunch: Dongshan mutton at a local spot. Afternoon: Xinglong Tropical Botanical Garden. Evening: Xinglong coffee + night market.' },
                { day: 'Day 4', title: 'Surf + Relax', desc: 'Morning free surf — practice what you learned. Afternoon: spa/massage (¥80-150 for 90 min). Coconut chicken hotpot dinner.' },
                { day: 'Day 5', title: 'Coastal Adventure', desc: 'Full day: Shimei Bay beach morning, Shenzhou Peninsula golf or Kokomo Beach Club afternoon. Sunset at Riyue Bay. Seafood street dinner in Wanning.' },
                { day: 'Day 6', title: 'Monkey Island + Surf', desc: 'Morning: Nanwan Monkey Island excursion. Afternoon: final surf sessions, try the point break if you\'re ready. Farewell dinner: all the local specialties.' },
                { day: 'Day 7', title: 'Morning & Depart', desc: 'Gentle morning surf or beach yoga. Pack up. Buy Xinglong coffee and local snacks as gifts. Train + flight home.' },
              ].map(({ day, title, desc }) => (
                <div key={day} className="schedule-day">
                  <span className="day-label">{day}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hidden-gems" className="section">
          <h2>💎 Hidden Gems</h2>
          <div className="card-grid">
            <div className="card">
              <h3>🗺️ Off the Beaten Path</h3>
              <ul>
                <li><strong>Xinglong's Indonesian quarter</strong> — The Overseas Chinese community brought back Southeast Asian recipes. Find authentic Indonesian and Malaysian food in small family restaurants around Xinglong that even most Chinese tourists miss</li>
                <li><strong>The "secret" left</strong> — Walk 20 minutes south past the main surf area to find a less-crowded left-hander breaking off rocks. Ask local surfers for directions</li>
                <li><strong>Coconut plantations</strong> — The roads between Riyue Bay and Shimei Bay wind through endless coconut palm groves. Rent a scooter and explore the backroads</li>
              </ul>
            </div>
            <div className="card">
              <h3>🤫 Local Secrets</h3>
              <ul>
                <li><strong>Morning fish market</strong> — Wake up at 5:30 AM and go to the small fishing village just south of Riyue Bay. Fishermen sell their night's catch directly. Unbeatable prices</li>
                <li><strong>Xinglong hot springs</strong> — Skip the expensive resort spas. There are natural hot spring spots near Xinglong that locals use for free. Ask around</li>
                <li><strong>Full moon parties</strong> — Some surf camps organize full moon beach gatherings. Not advertised — just be there at the right time</li>
                <li><strong>The name itself</strong> — "Riyue" (日月) means "Sun and Moon." Legend says the bay's crescent shape resembles a moon, and the sunrise over the South China Sea is so brilliant it seems to hold two celestial bodies at once</li>
              </ul>
            </div>
            <div className="card">
              <h3>💡 Tips & Tricks</h3>
              <ul>
                <li><strong>Learn basic Mandarin</strong> — Very little English spoken. "Duōshǎo qián?" (多少钱, how much?) and "Hǎo chī!" (好吃, delicious!) go a long way</li>
                <li><strong>Cash is king... sort of</strong> — WeChat Pay and Alipay are used everywhere, even tiny street stalls. Set up Alipay with your international card before going</li>
                <li><strong>Scooter rental</strong> — ¥50-80/day. Best way to get around the coastal area. No license usually required (gray area) but drive carefully</li>
                <li><strong>Bring reef shoes</strong> — The point breaks are rocky. Reef booties protect your feet</li>
                <li><strong>Mosquito prep</strong> — It's tropical. Bring repellent, especially for evenings. Mosquito coils available at every corner shop</li>
                <li><strong>Bargain at markets</strong> — First price quoted is always high. Aim for 50-70% of asking price</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="links" className="section alt">
          <h2>🔗 Useful Links</h2>
          <div className="card-grid">
            <div className="card">
              <h3>✈️ Flights & Transport</h3>
              <ul className="link-list">
                <li><a href="https://www.google.com/travel/flights" target="_blank" rel="noopener">Google Flights</a> — Search and compare flights</li>
                <li><a href="https://www.skyscanner.com" target="_blank" rel="noopener">Skyscanner</a> — Budget flight finder</li>
                <li><a href="https://www.trip.com" target="_blank" rel="noopener">Trip.com</a> — Flights, trains, hotels for China</li>
                <li><a href="https://www.12306.cn" target="_blank" rel="noopener">12306.cn</a> — Official China railway booking</li>
              </ul>
            </div>
            <div className="card">
              <h3>🏨 Accommodation</h3>
              <ul className="link-list">
                <li><a href="https://www.booking.com/searchresults.html?ss=Riyue+Bay+Wanning" target="_blank" rel="noopener">Booking.com — Riyue Bay</a></li>
                <li><a href="https://www.agoda.com" target="_blank" rel="noopener">Agoda</a> — Good for Asia hotels</li>
                <li><a href="https://www.airbnb.com" target="_blank" rel="noopener">Airbnb</a> — Apartments and villas</li>
              </ul>
            </div>
            <div className="card">
              <h3>🌊 Surf Resources</h3>
              <ul className="link-list">
                <li><a href="https://magicseaweed.com/Riyue-Wan-Main-Left-Surf-Report/4191/" target="_blank" rel="noopener">Magic Seaweed — Riyue Bay</a> — Surf forecast</li>
                <li><a href="https://www.surf-forecast.com/breaks/Riyue-Bay" target="_blank" rel="noopener">Surf-Forecast — Riyue Bay</a> — Wave predictions</li>
                <li><a href="https://www.windy.com/?18.548,110.212,10" target="_blank" rel="noopener">Windy.com</a> — Wind & swell maps</li>
              </ul>
            </div>
            <div className="card">
              <h3>📖 More Info</h3>
              <ul className="link-list">
                <li><a href="https://en.wikipedia.org/wiki/Sun_and_Moon_Bay" target="_blank" rel="noopener">Wikipedia — Sun and Moon Bay</a></li>
                <li><a href="https://en.wikivoyage.org/wiki/Wanning" target="_blank" rel="noopener">Wikivoyage — Wanning</a></li>
                <li><a href="https://www.xe.com/currencyconverter/convert/?From=CNY&To=USD" target="_blank" rel="noopener">XE Currency Converter (CNY → USD)</a></li>
              </ul>
            </div>
            <div className="card">
              <h3>📝 Blogs & Travel Guides</h3>
              <ul className="link-list">
                <li><a href="https://www.surfeconomics.com/surf-travel/surf-guide-hainan-china/" target="_blank" rel="noopener">Surf Economics — Surf Guide: Hainan, China</a> — Detailed wind, swell & spot breakdown</li>
                <li><a href="http://www.driftwoodrhythms.com/destinations/asia/china/riyue-bay-chinas-surfing-capital/" target="_blank" rel="noopener">Driftwood Rhythms — Riyue Bay: China's Surfing Capital</a> — Personal travel blog with vibes & tips</li>
                <li><a href="https://www.stormrider.surf/region/hainan" target="_blank" rel="noopener">Stormrider — Surfing in Hainan</a> — Local surf tips & guide</li>
                <li><a href="https://mybeautycravings.com/hainan-itinerary-10-days/" target="_blank" rel="noopener">MyBeautyCravings — 10-Day Hainan Itinerary</a> — Wanning, Riyue Bay & Shenzhou Peninsula</li>
                <li><a href="https://traveldayztravel.com/wanning-day-trip-itinerary/" target="_blank" rel="noopener">TravelDayz — Wanning Day Trip: Shimei Bay & Shenzhou</a> — Budget hotel recs & day plans</li>
                <li><a href="https://www.topchinatravel.com/china-attractions/riyue-bay-in-wanning.htm" target="_blank" rel="noopener">Top China Travel — Riyue Bay in Wanning</a> — Overview, scenery & activities</li>
                <li><a href="https://www.worldtravelguide.net/features/feature/learning-to-surf-at-the-gate-of-hell/" target="_blank" rel="noopener">World Travel Guide — Learning to Surf at the Gate of Hell</a> — Surfing story from Riyue Bay</li>
                <li><a href="https://www.battleface.com/blog/china-surfing-destination/" target="_blank" rel="noopener">Battleface — China: Surf's Up!</a> — Hainan as Asia's top surfing destination</li>
                <li><a href="https://wavepoolmag.com/cruz-dinofa-at-riyue-bay-wave-pool-in-china/" target="_blank" rel="noopener">Wave Pool Mag — Riyue Bay Wave Pool</a> — The new wave pool + restaurant/bar scene</li>
                <li><a href="https://www.longboardermagazine.com/2023/08/planting-the-seed/" target="_blank" rel="noopener">Longboarder Magazine — Planting the Seed</a> — Hainan's surf culture evolution</li>
                <li><a href="https://www.corona.com/en/beaches/riyue-bay" target="_blank" rel="noopener">Corona — Riyue Bay Beach</a> — Beach profile & stories</li>
                <li><a href="https://www.tripadvisor.com/Attraction_Review-g616021-d1859639-Reviews-Riyue_Bay-Wanning_Hainan.html" target="_blank" rel="noopener">TripAdvisor — Riyue Bay Reviews (2026)</a> — Traveler reviews & photos</li>
                <li><a href="https://www.chinadaily.com.cn/a/202509/25/WS68d4abc8a3108622abca2db2_4.html" target="_blank" rel="noopener">China Daily — Hainan Travel Guide</a> — Official guide featuring Riyue Bay</li>
              </ul>
            </div>
            <div className="card">
              <h3>📸 Instagram & Video</h3>
              <ul className="link-list">
                <li><a href="https://www.instagram.com/reel/C2sY84APupW/" target="_blank" rel="noopener">@si — China Surf Guide Reel</a> — Surf trip tips, Oct-Feb best season</li>
                <li><a href="https://www.instagram.com/explore/tags/riyuebay/" target="_blank" rel="noopener">#riyuebay on Instagram</a> — Browse tagged photos & reels</li>
                <li><a href="https://www.instagram.com/explore/tags/hainansurf/" target="_blank" rel="noopener">#hainansurf on Instagram</a> — Hainan surf community posts</li>
                <li><a href="https://www.instagram.com/explore/tags/日月湾/" target="_blank" rel="noopener">#日月湾 on Instagram</a> — Chinese-language posts (more local content)</li>
                <li><a href="https://www.youtube.com/results?search_query=riyue+bay+surfing+hainan" target="_blank" rel="noopener">YouTube — Riyue Bay Surfing</a> — Surf videos & vlogs</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>🏄 Riyue Bay Vacation Guide — Made with ☀️ and 🌙</p>
        <p>Prices are approximate and may vary by season. Last updated February 2026.</p>
      </footer>
    </div>
  )
}

export default App
