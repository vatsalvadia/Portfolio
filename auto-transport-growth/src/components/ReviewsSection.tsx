"use client";

import React from "react";
import { Star, TrendingUp } from "lucide-react";
import RevealSection from "./RevealSection";

interface Review {
  name: string;
  role: string;
  company: string;
  badge: string;
  testimonial: string;
}

const reviews: Review[] = [
  // ROW 1: 1-10
  {
    name: "Marcus Sterling",
    role: "CEO",
    company: "Sterling Auto Logistics",
    badge: "CA to FL Lane",
    testimonial: "Shared leads were destroying our margins—paying for lists sold to 5 other brokers. By moving to our own exclusive funnel, we bypassed Central Dispatch bidding and scaled CA to FL bookings by 180% at a 22% average gross margin.",
  },
  {
    name: "Elena Rostova",
    role: "Operations Director",
    company: "Prestige Exotics Transport",
    badge: "Enclosed Category",
    testimonial: "High-ticket exotic clients don't convert through generic forms. The custom landing pages and CRM automations they built established instant authority. We went from booking 8 enclosed multi-car runs a month to over 30.",
  },
  {
    name: "Dustin Vance",
    role: "VP of Dispatch",
    company: "Titan Heavy Haul",
    badge: "Heavy Equipment",
    testimonial: "Our dispatchers were wasting hours chasing cold quotes. The automated pipeline qualifies heavy machinery transport leads on weight, dimensions, and route viability before it even hits our dashboard. Booking rate is up 3.5x.",
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Manager",
    company: "Apex Carrier Group",
    badge: "Midwest Lanes",
    testimonial: "We had a self-owned funnel before, but it lacked route precision. They rebuilt our geo-targeted campaigns for Chicago-to-Dallas lanes, cutting our cost per acquisition by 54% while maintaining high-quality direct shipper contact info.",
  },
  {
    name: "Carlos Mendez",
    role: "Founder",
    company: "Mendez Transport Services",
    badge: "CA to TX Lane",
    testimonial: "Their CRM setup changed everything. As soon as a CA to TX lead lands, they receive a customized text and email with active route pricing. We are booking direct shippers before the competition even opens the email.",
  },
  {
    name: "Lori Harrison",
    role: "Director of Sales",
    company: "Horizon Auto Shippers",
    badge: "Snowbird Routes",
    testimonial: "The seasonal snowbird rush used to be a stressful bidding war on shared platforms. Now we run targeted funnels for NY-to-FL and MI-to-AZ retirees. We pre-booked 70% of our capacity three months before the season started.",
  },
  {
    name: "Jeremy Miller",
    role: "Founder",
    company: "Miller & Sons Towing",
    badge: "Regional Towing",
    testimonial: "We wanted to transition from local towing to regional multi-car transport. They set up our entire digital presence and lead engine from scratch. We went from zero regional contracts to fully booked weekly loops in under 45 days.",
  },
  {
    name: "Amara Nwosu",
    role: "Logistics Chief",
    company: "Nomad Vehicle Logistics",
    badge: "Cross-Country Lanes",
    testimonial: "Their attribution modeling allowed us to see which exact routes were profitable. We stopped burning money on low-volume lanes and focused strictly on the high-margin cross-country corridors. The ROI was clear in week two.",
  },
  {
    name: "Brandon Cole",
    role: "Lead Dispatcher",
    company: "Velocity Auto Logistics",
    badge: "Broker Operations",
    testimonial: "Carriers love working with us now because we have clean, verified route data and quick deposit locks. The exclusive funnel filters out tire-kickers, so our dispatchers only talk to clients ready to sign the dispatch contract.",
  },
  {
    name: "Chloe Sinclair",
    role: "VP of Growth",
    company: "Vanguard Transport Solutions",
    badge: "B2B Dealerships",
    testimonial: "We targeted regional dealerships for dealer-trade transport. The custom funnel generated direct dealer inquiries that completely bypassed standard load boards. We've added 14 recurring dealer accounts to our portfolio.",
  },

  // ROW 2: 11-20
  {
    name: "Robert Chen",
    role: "President",
    company: "Pacific Coast Auto Shipping",
    badge: "CA to WA Lane",
    testimonial: "We struggled with low conversion rates on our site for years. Their UX audit and redesigned funnel turned our traffic around. Conversion went from 2.1% to 11.4%, bringing in highly profitable West Coast direct routes.",
  },
  {
    name: "Nadia Petrov",
    role: "Operations Head",
    company: "SafeWay Car Shipping",
    badge: "Central Dispatch",
    testimonial: "Before this, we relied 100% on Central Dispatch to find loads, which kept our margins razor-thin. Now, with our own lead machine, we dictate our prices and contract direct carriers, keeping an extra 15% margin on every car.",
  },
  {
    name: "Derek Vance",
    role: "Co-Founder",
    company: "Freedom Express Shippers",
    badge: "FL to TX Lane",
    testimonial: "The speed-to-lead in auto transport is everything. Their automated text auto-responder contacts the customer within 4 seconds of form submission. We are closing 35% of all inbound FL to TX quotes on the very first call.",
  },
  {
    name: "Gabriela Martinez",
    role: "Dispatch Supervisor",
    company: "Metro Car Carriers",
    badge: "Multi-Car Transport",
    testimonial: "Managing 10-car haulers is tough without consistent route volume. This system gives us the exact lane density we need. We've eliminated deadhead miles on our primary routes because we always have backing loads ready.",
  },
  {
    name: "Zachary Taylor",
    role: "CEO",
    company: "Summit Auto Brokers",
    badge: "Self-Owned Funnel",
    testimonial: "Buying shared leads was a race to the bottom where only the cheapest, lowest-quality broker won. Our proprietary funnel lets us sell quality, enclosed safety, and guaranteed pickup dates at a premium. Our revenue has doubled.",
  },
  {
    name: "Isabella Rossi",
    role: "Marketing Director",
    company: "Milano Premium Logistics",
    badge: "Exotics Category",
    testimonial: "They understand the high-end vehicle transport market inside and out. The copy, the dark glass design, and the interactive route map built absolute trust with our vintage car collectors. Our cost-per-booking has plummeted.",
  },
  {
    name: "Terrence Hodge",
    role: "Founder",
    company: "Hodge Transport",
    badge: "Open Carrier Dispatch",
    testimonial: "As an owner-operator, I didn't have time to run ads. They fully managed the setup, integration, and lead optimization. Now I get text alerts when a high-margin load is booked, and I just focus on driving.",
  },
  {
    name: "Melissa Wong",
    role: "VP of Operations",
    company: "Atlas Auto Logistics",
    badge: "FL to CA Lane",
    testimonial: "We were skeptical about generating direct shipper leads for cross-country routes, but the results speak for themselves. The FL to CA lead funnel has maintained a steady flow of high-intent clients even during the off-season.",
  },
  {
    name: "Garrett Reynolds",
    role: "Sales Director",
    company: "Ironclad Auto Shippers",
    badge: "Military Moves",
    testimonial: "We wanted to capture military PCS vehicle relocations. They developed a targeted landing page offering custom military transport calculators. We went from occasional bookings to being the go-to broker for three regional bases.",
  },
  {
    name: "Sophia Al-Jamil",
    role: "Operations Manager",
    company: "Zenith Auto Transport",
    badge: "TX to NY Lane",
    testimonial: "The lead quality from this system is night and day compared to third-party lists. These clients are actively searching for car shipping quotes on specific lanes, which makes our sales script 10 times easier to execute.",
  },

  // ROW 3: 21-30
  {
    name: "Travis Kael",
    role: "Founder",
    company: "Kael Express Logistics",
    badge: "CA to AZ Lane",
    testimonial: "We consolidated our lead capture and SMS nurture into one central platform. Now, leads that don't book immediately are automatically nurtured over 30 days. We've recovered over $45,000 in lost quotes this quarter alone.",
  },
  {
    name: "Monica Geller",
    role: "Marketing Lead",
    company: "Central Valley Shipping",
    badge: "Agricultural Hauling",
    testimonial: "We specialize in shipping agricultural machinery and large trucks. The custom funnel's weight calculators prevent inaccurate quote disputes. Our dispatchers now have a 92% accurate price lock-in rate.",
  },
  {
    name: "Simon Brooks",
    role: "CEO",
    company: "Brooks & Co. Transports",
    badge: "Snowbird Routes",
    testimonial: "Retirees want phone calls, not just texts. The system was customized to instantly patch hot leads through to our inbound sales line. Our phone bookings on the Northeast to Southeast lanes have surged by 300%.",
  },
  {
    name: "Diana Prince",
    role: "Logistics Coordinator",
    company: "Golden Gate Freight",
    badge: "CA to TX Lane",
    testimonial: "The integration with our CRM is flawless. No duplicate leads, automatic geographic assignment, and instant route mileage calculations. It has saved our operations team at least 20 hours of manual work every week.",
  },
  {
    name: "Leon Kennedy",
    role: "Director",
    company: "Raccoon Auto Shippers",
    badge: "Enclosed Category",
    testimonial: "We transport classic sports cars. The luxury glassmorphic look of our new landing page mirrors the high-end service we provide. Classic car club members now request our services directly, bypassing all brokers.",
  },
  {
    name: "Yuki Tanaka",
    role: "Operations Specialist",
    company: "Pacific Rim Logistics",
    badge: "Port Auto Import",
    testimonial: "Imported vehicles coming through West Coast ports need rapid dispatch to inland hubs. The system triggers carrier alerts the second customs clears the VIN. It's cut our port dwell times by an average of 48 hours.",
  },
  {
    name: "Christian Slater",
    role: "Sales VP",
    company: "Titanium Auto Transport",
    badge: "Broker Operations",
    testimonial: "We went from cold calling dealerships to having dealers book transport orders directly through our self-owned portal. The booking fee model has increased our monthly recurring revenue by 40% year-over-year.",
  },
  {
    name: "Natalie Portman",
    role: "Director",
    company: "Black Swan Logistics",
    badge: "NY to CA Lane",
    testimonial: "Moving cars from NY to CA is highly competitive. Standard Google Ads were too expensive. Their long-tail route-specific search campaigns drove down our CPC by 60% while bringing in high-intent direct shippers.",
  },
  {
    name: "Arthur Pendragon",
    role: "Founder",
    company: "Excalibur Auto Transport",
    badge: "UK/US Classic Lanes",
    testimonial: "Overseas classic car transport requires extreme trust. The trust elements, review carousels, and security badges integrated into our custom funnel reduced user friction, lifting our international booking rate by 85%.",
  },
  {
    name: "Selina Kyle",
    role: "CEO",
    company: "Gotham Exotics Shippers",
    badge: "Exotics Category",
    testimonial: "Our previous agency had no clue about the carrier-dispatch relationship. These guys built a funnel that qualifies the user's budget first. We no longer waste time on low-paying loads that carriers refuse to pull.",
  },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const getAvatarBg = (index: number) => {
  const gradients = [
    "from-orange-500 to-red-600",
    "from-teal-400 to-emerald-600",
    "from-blue-500 to-indigo-600",
    "from-purple-500 to-pink-600",
    "from-amber-400 to-orange-600",
  ];
  return gradients[index % gradients.length];
};

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div className="bg-brand-card/60 border border-brand-border/60 hover:border-brand-orange/40 backdrop-blur-sm p-6 rounded-xl w-[350px] shrink-0 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(249,115,22,0.08)]">
      <div>
        {/* Rating Stars & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
            ))}
          </div>
          <span className="text-[10px] font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
            {review.badge}
          </span>
        </div>

        {/* Testimonial text */}
        <p className="font-body text-xs text-brand-gray/90 leading-relaxed italic mb-4">
          "{review.testimonial}"
        </p>
      </div>

      <div>
        {/* Divider line */}
        <div className="h-px bg-brand-border/60 my-4" />

        {/* Client details */}
        <div className="flex items-center gap-3">
          {/* Avatar with initials */}
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarBg(index)} flex items-center justify-center text-brand-white font-bold text-sm shrink-0 shadow-inner`}>
            {getInitials(review.name)}
          </div>
          
          <div className="min-w-0">
            <h4 className="font-headline text-md text-brand-white truncate leading-tight">
              {review.name}
            </h4>
            <p className="font-body text-[11px] text-brand-gray/70 truncate">
              {review.role}, <span className="text-teal-400 font-semibold">{review.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  // Split the 30 reviews into 3 rows of 10
  const row1 = reviews.slice(0, 10);
  const row2 = reviews.slice(10, 20);
  const row3 = reviews.slice(20, 30);

  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border relative overflow-hidden" id="reviews">
      {/* Visual background enhancements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="max-w-[1280px] mx-auto px-6 mb-16">
          <RevealSection variant="fadeUp" className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Direct Booking Testimonials
            </div>
            <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">
              Proven in the Lanes
            </h2>
            <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
              Real feedback from brokerages and carriers who reclaimed their margins by transitioning from shared lists to self-owned growth funnels.
            </p>
          </RevealSection>
        </div>

        {/* Marquee Rows Container */}
        <div className="flex flex-col gap-6 relative w-full overflow-hidden">
          
          {/* Gradient fade-out overlays on the sides for premium luxury feel */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-brand-bg via-brand-bg/60 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left scrolling */}
          <div className="flex overflow-hidden py-1 w-full">
            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] [animation-duration:35s]">
              {row1.map((review, idx) => (
                <ReviewCard key={`row1-${idx}`} review={review} index={idx} />
              ))}
              {row1.map((review, idx) => (
                <ReviewCard key={`row1-dup-${idx}`} review={review} index={idx + 10} />
              ))}
            </div>
          </div>

          {/* Row 2: Right scrolling */}
          <div className="flex overflow-hidden py-1 w-full">
            <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused] [animation-duration:40s]">
              {row2.map((review, idx) => (
                <ReviewCard key={`row2-${idx}`} review={review} index={idx + 3} />
              ))}
              {row2.map((review, idx) => (
                <ReviewCard key={`row2-dup-${idx}`} review={review} index={idx + 13} />
              ))}
            </div>
          </div>

          {/* Row 3: Left scrolling */}
          <div className="flex overflow-hidden py-1 w-full">
            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] [animation-duration:30s]">
              {row3.map((review, idx) => (
                <ReviewCard key={`row3-${idx}`} review={review} index={idx + 6} />
              ))}
              {row3.map((review, idx) => (
                <ReviewCard key={`row3-dup-${idx}`} review={review} index={idx + 16} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
