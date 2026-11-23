import LayoutHeader from "@/components/LayoutHeader";
import { formatText } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const posts = [
  {
    slug: "how-to-buy-a-second-hand-car-in-kenya",
    title: "How to Buy a Second-Hand Car in Kenya: A Complete Guide",
    image: "/images/who-we-are.jpg",
    date: "November 10, 2026",
    excerpt:
      "Buying a second-hand car can be overwhelming. From inspection to paperwork, here is everything you need to know to make a confident purchase.",
    body: [
      "Buying a second-hand car in Kenya is one of the most practical ways to own a vehicle, but it comes with its own set of challenges. Unlike buying new, the pre-owned market requires a keen eye, thorough inspection, and careful paperwork to avoid costly mistakes.",
      "Start by setting a realistic budget that includes the purchase price, insurance, transfer fees, and a buffer for immediate repairs or servicing. Once you have a figure in mind, list down the features you need — fuel type, transmission, body style, and size — to narrow your search.",
      "Always inspect the vehicle in person and, where possible, bring along a trusted mechanic. Check the engine, transmission, suspension, tyres, and signs of accident damage. Ask for the service history and verify the mileage against it.",
      "Paperwork is where many buyers get burned. Confirm the logbook matches the seller's identity, check for any outstanding loans or liens on the car, and ensure the chassis and engine numbers match the registration documents. NTSA's portal can help verify ownership details.",
      "Finally, negotiate with confidence. Knowing the market value of the model you want puts you in a strong position. At Saisa Motors, every vehicle undergoes a thorough inspection and certification process, so you can buy with peace of mind. Visit our showroom in Eldoret or browse our stock online to get started.",
    ],
  },
  {
    slug: "car-financing-in-kenya",
    title: "Car Financing in Kenya: Bank Loans vs. Asset Finance",
    image: "/images/bank-financing-icon.png",
    date: "October 28, 2026",
    excerpt:
      "Compare the most popular car financing options available in Kenya and find out which one works best for your budget and lifestyle.",
    body: [
      "Car financing in Kenya has become increasingly accessible, with multiple institutions offering tailored solutions to help you drive your dream car sooner. Understanding your options is the first step toward making a sound financial decision.",
      "Bank car loans are offered by most commercial banks and typically require a down payment of 20% to 40% of the vehicle value. Interest rates vary between banks, and repayment periods range from 12 to 60 months. Banks will assess your creditworthiness, employment stability, and income before approving a facility.",
      "Asset finance, offered by Saccos and specialized lenders, is another popular option. It often requires lower deposits and is secured against the vehicle itself, which can mean faster approval. Saccos in particular offer competitive rates to members, sometimes with dividends that offset the cost of borrowing.",
      "Dealer-arranged financing is convenient because everything is handled in one place. At Saisa Motors, we partner with several banks and Saccos to negotiate favorable terms on your behalf, saving you the legwork of approaching each lender individually.",
      "Before committing to any facility, compare the total cost of the loan — not just the monthly installment. Look at the interest rate, processing fees, insurance requirements, and any early repayment penalties. Choose a repayment period that keeps your installments comfortably within 30% of your net income.",
    ],
  },
  {
    slug: "why-regular-vehicle-maintenance-saves-you-money",
    title: "Why Regular Vehicle Maintenance Saves You Money",
    image: "/images/our-services.jpg",
    date: "October 15, 2026",
    excerpt:
      "Skipping service intervals may seem harmless, but neglecting routine maintenance can lead to costly repairs down the road. Learn why prevention is cheaper than cure.",
    body: [
      "Many car owners view routine maintenance as an unnecessary expense, especially when the vehicle seems to be running fine. The truth, however, is that skipping scheduled servicing is one of the most expensive false economies in car ownership.",
      "Regular oil changes, filter replacements, and fluid checks keep your engine running efficiently. Old, degraded oil fails to lubricate properly, increasing friction and wear on engine components. What would have cost a few thousand shillings in routine servicing can escalate into hundreds of thousands in engine repairs or replacement.",
      "Brake inspections are another critical area. Worn brake pads are inexpensive to replace, but if ignored, they can damage the brake discs, turning a minor job into a major one. Similarly, neglecting tyre rotation and alignment leads to uneven wear, poor handling, and reduced fuel economy.",
      "Routine maintenance also protects your warranty. Most manufacturers require proof of scheduled servicing to honor warranty claims. Skipping services can void coverage, leaving you to pay out of pocket for repairs that would otherwise have been free.",
      "At Saisa Motors, our service center offers comprehensive maintenance packages tailored to your vehicle's needs. From oil changes to full diagnostics, our certified technicians keep your car in peak condition, saving you money and extending its lifespan. Book a service with us today and drive with confidence.",
    ],
  },
  {
    slug: "trade-in-vs-selling-privately",
    title: "Trade-In vs. Selling Your Car Privately in Kenya",
    image: "/images/trade-carr.jpg",
    date: "September 30, 2026",
    excerpt:
      "Weigh the pros and cons of trading in your old car to a dealer versus selling it privately. Get more value with less hassle.",
    body: [
      "When it is time to upgrade, one of the first decisions you will face is how to dispose of your current car. In Kenya, the two main options are trading it in to a dealer or selling it privately. Each has its advantages and drawbacks, and the right choice depends on your priorities.",
      "Selling privately often fetches a higher price because you are dealing directly with the buyer, without a middleman taking a cut. However, the process can be lengthy and stressful. You will need to advertise, field calls, arrange viewings and test drives, negotiate with tire-kickers, and handle the transfer paperwork yourself. There is also the risk of fraud or dealing with unreliable buyers.",
      "Trading in, on the other hand, is fast and convenient. You drive your old car to the dealership, drive out in a new one, and the dealer handles everything — valuation, paperwork, and transfer. The trade-in value is typically lower than a private sale price because the dealer needs to recondition and resell the car at a profit, but you save time, effort, and the uncertainty of the private market.",
      "At Saisa Motors, we make trade-ins even more attractive. Our valuations are fair and transparent, based on the current market value, condition, and mileage of your vehicle. The amount is deducted directly from your new purchase, reducing the cash you need to bring. Plus, you avoid the hassle of running adverts and dealing with strangers.",
      "The best approach is to get a trade-in offer from us and compare it with realistic private-sale expectations. If the difference in value is worth your time and effort, sell privately. If convenience and speed matter more, a trade-in is hard to beat. Either way, Saisa Motors is here to help you make the transition smoothly.",
    ],
  },
  {
    slug: "5-signs-its-time-to-upgrade-your-car",
    title: "5 Signs It Is Time to Upgrade Your Car",
    image: "/images/slider1.png",
    date: "September 12, 2026",
    excerpt:
      "Rising repair costs, poor fuel economy, or growing family needs — here are the telltale signs that your next upgrade is due.",
    body: [
      "Knowing when to upgrade your car can be tricky. Many of us hold on to a vehicle longer than we should, either out of attachment or because the thought of car shopping feels daunting. Here are five clear signals that it may be time for a change.",
      "First, watch your repair bills. If your car is frequently in the garage and the cost of repairs in a year approaches half the car's current value, it is time to reconsider. Older vehicles become increasingly unreliable and expensive to maintain as parts wear out and become harder to source.",
      "Second, consider fuel efficiency. If your car is guzzling more fuel than it used to, or if newer models offer significantly better mileage, the savings at the pump can offset your upgrade costs over time. Modern engines with fuel injection and hybrid options can dramatically reduce running costs.",
      "Third, think about your lifestyle needs. A growing family may need more space, a new job may require longer commutes, or you may simply need a vehicle that matches your current status. If your car no longer fits your daily life, an upgrade will improve your quality of life.",
      "Fourth, safety features matter. Older cars lack modern safety technology like airbags, ABS, stability control, and advanced driver-assistance systems. If your current vehicle was manufactured before these became standard, upgrading could be a life-saving decision.",
      "Finally, if your warranty has expired and you no longer have the peace of mind that comes with a new-car guarantee, consider upgrading to a certified pre-owned vehicle from Saisa Motors. Our cars come with warranties and have undergone rigorous inspections, giving you the best of both worlds — reliability and value.",
    ],
  },
  {
    slug: "preparing-for-your-first-road-trip",
    title: "Preparing for Your First Road Trip: A Checklist",
    image: "/images/schedule-img.jpg",
    date: "August 25, 2026",
    excerpt:
      "Planning a long drive this season? Our road-trip checklist covers vehicle checks, documents, and emergency essentials you should never leave home without.",
    body: [
      "There is nothing quite like the freedom of the open road, but a successful road trip starts with thorough preparation. Whether you are heading upcountry to visit family or exploring Kenya's scenic routes, proper planning ensures a safe and enjoyable journey.",
      "Start with your vehicle. Check the tyres for adequate tread and correct pressure, including the spare. Top up engine oil, coolant, brake fluid, and washer fluid. Inspect the wipers, lights, and indicators. If your car is due for a service, get it done before you leave — not on the road.",
      "Pack an emergency kit. This should include a first-aid kit, a fire extinguisher, warning triangles, a reflective vest, jumper cables, a tow rope, basic tools, and a flashlight with spare batteries. A charged power bank and a physical map are also wise additions.",
      "Sort out your documents before departure. Carry your driving licence, vehicle logbook, insurance certificate, and NTSA inspection sticker if applicable. If you are crossing county borders, ensure your insurance covers the entire route. Keep digital copies on your phone as backup.",
      "Plan your route and schedule rest stops. Kenya's highways can be unpredictable, so allow extra time for delays. Avoid driving at night where possible, especially on unfamiliar roads. Share your itinerary with someone at your destination so they know when to expect you.",
      "Finally, pack smart. Bring water, snacks, and entertainment for passengers. Keep luggage secure and avoid overloading the vehicle. With careful preparation, your road trip will be memorable for all the right reasons. Safe travels from all of us at Saisa Motors!",
    ],
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} | Saisa Motors Blog` : "Blog | Saisa Motors",
    description: post?.excerpt,
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4 lg:px-0">
        <LayoutHeader slug={formatText(post.slug)} />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-[12px] text-[#6c757d] uppercase mb-2">
          {post.date}
        </p>
        <h1 className="text-[35.2px] font-semibold leading-tight mb-6">
          {post.title}
        </h1>

        <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            quality={95}
            priority
          />
        </div>

        <div className="space-y-5">
          {post.body.map((paragraph, index) => (
            <p key={index} className="text-[18px] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t">
          <Link
            href="/blog"
            className="text-primary uppercase font-semibold text-[14px]"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default page;