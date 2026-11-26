import { Metadata } from "next";
import React from "react";
import LayoutHeader from "@/components/LayoutHeader";
import TradeEnquirySection from "@/components/TradeEnquirySection";
import MyButton from "@/components/MyButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trade In Your Car | Peach Cars",
  description: "Trade in your current vehicle and top up to get a new one. Get a fair, transparent valuation for your car at Peach Cars in Eldoret, Kenya.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4 lg:px-0">
        <LayoutHeader slug="trade-in" />
      </div>

      <TradeEnquirySection />

      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-[35.2px] uppercase font-semibold mb-6">
              How Our Trade-In Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-2">Get Valuation</h3>
              <p className="text-[18px] text-[#6c757d]">Bring your car to our Eldoret showroom for a free, transparent valuation based on market data.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-2">Choose Your Upgrade</h3>
              <p className="text-[18px] text-[#6c757d]">Browse our quality pre-owned inventory and pick your next car from top brands.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-2">Drive Away</h3>
              <p className="text-[18px] text-[#6c757d]">We handle all paperwork and transfer. Your trade-in value is deducted instantly.</p>
            </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-[35.2px] font-semibold mb-4">Ready to Trade In?</h3>
            <p className="text-[20px] mb-8 max-w-2xl mx-auto opacity-90">
              Get a fair valuation for your current vehicle and drive away in your next car today.
            </p>
            <Link href="/contact-us">
              <MyButton
                text="Schedule Valuation"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-4"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-[24px] font-semibold mb-4 text-primary">Why Trade In with Peach Cars?</h4>
              <ul className="space-y-3 text-[18px] text-[#6c757d]">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fair, transparent valuations based on real market data
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Value deducted directly from your new purchase
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No advertising, no strangers, no hassle
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wide selection of quality pre-owned vehicles
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible financing options available
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-[24px] font-semibold mb-4 text-primary">What You'll Need</h4>
              <ul className="space-y-3 text-[18px] text-[#6c757d]">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Original logbook (registration document)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Valid national ID or passport
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  KRA PIN certificate
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vehicle inspection (we'll do this on-site)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Any service history records
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;