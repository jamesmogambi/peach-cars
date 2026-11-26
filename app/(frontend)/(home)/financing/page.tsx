import { Metadata } from "next";
import React from "react";
import LayoutHeader from "@/components/LayoutHeader";
import MyButton from "@/components/MyButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Financing | Peach Cars",
  description: "Flexible car financing options in Kenya. Bank loans, asset finance, and dealer-arranged financing. Get your dream car with affordable monthly payments at Peach Cars in Eldoret.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4 lg:px-0">
        <LayoutHeader slug="financing" />
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 text-center">
          <h1 className="text-[35.2px] lg:text-[52px] uppercase font-semibold mb-6">
            Flexible Car Financing
          </h1>
          <p className="text-[20px] lg:text-[24px] max-w-3xl mx-auto opacity-90 mb-10">
            Drive your dream car today with affordable monthly payments. We partner with leading banks and Saccos to offer you the best rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <MyButton
                text="Apply for Financing"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6"
              />
            </Link>
            <Link href="/cars-for-sale-in-kenya">
              <MyButton
                text="Browse Cars"
                className="border-2 border-white text-white hover:bg-primary/20 text-lg px-10 py-6"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-16">
        {/* Financing Options */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-[35.2px] uppercase font-semibold mb-6">
              Our Financing Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bank Loans */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3">Bank Car Loans</h3>
              <p className="text-[18px] text-[#6c757d] mb-6">
                Traditional bank financing with competitive rates from Kenya's leading commercial banks.
              </p>
              <ul className="space-y-3 text-[16px] text-[#6c757d]">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  20-40% deposit required
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  12-60 month repayment terms
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Credit assessment required
                </li>
              </ul>
            </div>

            {/* Asset Finance */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3">Asset Finance (Saccos)</h3>
              <p className="text-[18px] text-[#6c757d] mb-6">
                Sacco-backed financing secured against the vehicle with lower deposits and member benefits.
              </p>
              <ul className="space-y-3 text-[16px] text-[#6c757d]">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lower deposit (often 10-20%)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Faster approval process
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dividend offsets on interest
                </li>
              </ul>
            </div>

            {/* Dealer-Arranged */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-[24px] font-semibold mb-3">Dealer-Arranged Financing</h3>
              <p className="text-[18px] text-[#6c757d] mb-6">
                We handle everything in-house - one place, one team, multiple lender options.
              </p>
              <ul className="space-y-3 text-[16px] text-[#6c757d]">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multiple lender comparison
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Negotiated favorable terms
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  End-to-end paperwork handling
                </li>
              </ul>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-8">
            <div className="text-center mb-10">
              <h3 className="text-[35.2px] uppercase font-semibold mb-4">Estimate Your Monthly Payment</h3>
              <p className="text-[20px] text-[#6c757d] max-w-2xl mx-auto">
                Use our simple calculator to get an estimate of your monthly installments.
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-6">
              <div>
                <label className="block text-[16px] font-semibold text-[#6c757d] mb-2">Car Price (KES)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-[18px]"
                  placeholder="e.g., 2,500,000"
                />
              </div>
              <div>
                <label className="block text-[16px] font-semibold text-[#6c757d] mb-2">Deposit Amount (KES)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-[18px]"
                  placeholder="e.g., 500,000"
                />
              </div>
              <div>
                <label className="block text-[16px] font-semibold text-[#6c757d] mb-2">Loan Term</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-[18px]">
                  <option value="12">12 Months (1 Year)</option>
                  <option value="24">24 Months (2 Years)</option>
                  <option value="36">36 Months (3 Years)</option>
                  <option value="48">48 Months (4 Years)</option>
                  <option value="60">60 Months (5 Years)</option>
                </select>
              </div>
              <div>
                <label className="block text-[16px] font-semibold text-[#6c757d] mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-[18px]"
                  placeholder="e.g., 13.5"
                />
              </div>
              <MyButton
                text="Calculate Monthly Payment"
                className="w-full text-lg px-10 py-6"
              />
            </div>

            <p className="text-center text-[14px] text-[#6c757d] mt-6">
              *This is an estimate only. Actual rates and terms depend on credit assessment and lender approval.
            </p>
          </div>

          {/* Requirements */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-[35.2px] uppercase font-semibold mb-4">What You'll Need to Apply</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-semibold mb-2">National ID / Passport</h4>
                <p className="text-[16px] text-[#6c757d]">Valid identification document</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-semibold mb-2">KRA PIN Certificate</h4>
                <p className="text-[16px] text-[#6c757d]">Tax compliance certificate</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-semibold mb-2">Proof of Income</h4>
                <p className="text-[16px] text-[#6c757d]">3 months payslips or bank statements</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-semibold mb-2">Vehicle Logbook</h4>
                <p className="text-[16px] text-[#6c757d]">For the car you're purchasing</p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-[35.2px] uppercase font-semibold mb-4">Our Financing Partners</h3>
              <p className="text-[20px] text-[#6c757d] max-w-2xl mx-auto">
                We work with Kenya's leading financial institutions to secure you the best rates.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[18px] font-semibold text-gray-700">NCBA Bank</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[18px] font-semibold text-gray-700">Co-op Bank</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[18px] font-semibold text-gray-700">KCB Bank</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[18px] font-semibold text-gray-700">Stanbic Bank</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[18px] font-semibold text-gray-700">Various Saccos</p>
              </div>
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[18px] font-semibold text-gray-700">Asset Finance Co.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center mt-8">
            <h3 className="text-[35.2px] font-semibold mb-4">Ready to Finance Your Dream Car?</h3>
            <p className="text-[20px] mb-8 max-w-2xl mx-auto opacity-90">
              Get pre-approved in minutes. Our team will guide you through the entire process.
            </p>
            <Link href="/contact-us">
              <MyButton
                text="Start Financing Application"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;