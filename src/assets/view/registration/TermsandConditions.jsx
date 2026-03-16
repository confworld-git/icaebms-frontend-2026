import React from "react";
import Hero from "../commonhero/common-hero";
// import { Helmet } from "react-helmet";
import { FileText, Shield, XCircle, RefreshCw, Globe, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

const TermsandConditions = () => {
  return (
    <section>
      <Hero
        title="Terms & Conditions"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonheroimages/commonhero14.webp"
      />
      <section className="font-sans antialiased bg-gray-50 py-8 md:py-8">
      {/* <Helmet>
        <title>Conference Policies | Terms & Conditions | ICLSMHA 2026</title>
        <meta
          name="description"
          content="Review ICLSMHA 2026 conference policies including terms and conditions, privacy policy, cancellation & refund rules, visa information, and venue details for delegates."
        />
        <meta
          name="keywords"
          content="conference terms and conditions, conference privacy policy, conference cancellation policy, international conference refund policy, visa information for conference, conference venue details, ICLSMHA 2026 policies"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/terms-and-conditions" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet> */}

      <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="w-full px-4 py-8">
        
        {/* Terms and Conditions */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-blue-900">Terms and Conditions</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="font-medium text-blue-600 text-lg">
              By registering for the conference, you hereby agree with the terms and conditions.
            </p>
            
            <p>The organization reserves the right to make alterations to the program, date and/or venue at any time without prior notice.</p>
            
            <p>The organization is not responsible for any loss or damage as a result of substitution, alteration, postponement or cancellation of an event due to causes beyond its control including without limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes, terrorism, strikes or hostilities.</p>
            
            <p>The organization reserves the right and holds the sole discretion to cancel any conference at any time in case of any unavoidable and unforeseeable circumstances. The organizer will have no further liability to the client.</p>
            
            <p>Registrations remain valid for the event with new dates or for future editions if the conference has to be postponed by causes beyond organizer control. The refund policy is not applicable to this condition.</p>
            
            <p>In the event of cancellation, the organization will use reasonable and suitable alternative arrangements such as posting the news of cancellation on the appropriate event website to alert those who have booked or purchased tickets to attend the event.</p>
            
            <div className="bg-orange-50 border-l-4 border-orange-400 p-5 my-6 rounded">
              <div className="flex gap-3">
                <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-orange-900 mb-2">Important Notice</p>
                  <p className="text-gray-800">Delegates are responsible for checking this information prior to the event. We advise you to keep checking the website for updates of our conference.</p>
                </div>
              </div>
            </div>
            
            <p>The organizers will not accept any liability for personal injuries or for loss or damage to property belonging to the delegates, either during, or as a result of the conference.</p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-blue-900">Privacy Policy</h2>
          </div>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">1. Information</h3>
              <p className="mb-3">We collect personal information that you voluntarily provide to us when registering for conferences, subscribing to newsletters, submitting inquiries, or participating in surveys or forums on https://icaebms.com</p>
              <p className="font-medium mb-2">This information may include</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact number</li>
                <li>Mailing address</li>
                <li>Payment information</li>
                <li>Any other information you provide voluntarily</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">2. How We Use Your Information</h3>
              <p className="mb-2">We use the information we collect for the following purposes</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                <li>To process registrations for events and conferences</li>
                <li>To communicate with you regarding updates, announcements and relevant event information</li>
                <li>To respond to inquiries or provide customer support</li>
                <li>To manage website operations and improve our services</li>
                <li>To process payments and billing for conference participation or services</li>
                <li>For marketing purposes (only if you have given explicit consent)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">3. Sharing of Information</h3>
              <p className="mb-2">We do not sell, trade or rent your personal information to third parties. However, we may share your information with</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                <li>Service providers and vendors assisting us with conference logistics, payment processing and website management</li>
                <li>Law enforcement agencies or governmental bodies when required by law</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">4. Your Rights</h3>
              <p className="mb-2">You have the right to</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                <li>Access, update or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request the restriction of processing of your data in certain circumstances</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, please contact us at info@icaebmss.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">5. Changes to This Privacy Policy</h3>
              <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page and we encourage you to review this page regularly to stay informed.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">6. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at</p>
              <div className="mt-3 space-y-2 text-gray-800">
                <p><strong>Email:</strong> info@icaebms.com</p>
                <p><strong>Phone:</strong> +91 8072381719</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-blue-900">Cancellation Policy</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>If the registrant is unable to attend, please note the following cancellation policy, which takes into account advance payments made for venue, printing, shipping, hotels and other overheads</p>
            
            <div className="grid gap-4 mt-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded">
                <p className="font-semibold text-blue-900 text-lg">50 Days Before Conference</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">40% Refundable</p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded">
                <p className="font-semibold text-orange-900 text-lg">30-40 Days Before Conference</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">35% Refundable</p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded">
                <p className="font-semibold text-red-900 text-lg">Less Than 30 Days Before Conference</p>
                <p className="text-3xl font-bold text-red-600 mt-2">No Refunds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-blue-900">Refund Policy</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Transfer of Registration</h3>
              <p>Registration can be transferred to another event organized by the same organization of the registrant's choice.</p>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded mt-4">
              <p className="font-semibold text-orange-900 mb-2">Important Note</p>
              <p className="text-gray-800">Refunds will be processed 2-4 weeks after the conference, excluding transaction charges.</p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mt-4">
              <p className="font-semibold text-yellow-900 mb-2">Special Conditions</p>
              <p className="text-gray-800">Refund/Cancellation Policy is not applicable if the conference is postponed due to natural disasters or unpredictable activities beyond organizers control including without limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes, terrorism, strikes or hostilities.</p>
            </div>
          </div>
        </section>

        {/* VISA Information */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-blue-900">VISA Information</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="mb-4">Confworld Educational Research and Development Association (CERADA) will not directly contact embassies and consulates on behalf of visa applicants.</p>
              <p className="font-semibold text-blue-900 text-lg">All delegates or invitees should apply for a Business Visa only.</p>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded">
              <p className="font-semibold text-orange-900 mb-2">Important</p>
              <p className="text-gray-800">Visa issues, including the inability to obtain a visa, do not fall under the consideration of the cancellation policy of the Confworld Educational Research and Development Association (CERADA).</p>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="bg-blue-600 text-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={32} />
            <h2 className="text-3xl font-bold">Venue</h2>
          </div>
          <p className="text-2xl">Singapore</p>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
          <p className="text-gray-700 mb-4 font-medium">Conference registration and paper submission inquiries</p>
          <div className="space-y-3 text-gray-800">
            <p className="text-lg"><strong>Name:</strong> Ms. Aishwarya S</p>
            <p className="flex items-center gap-3 text-lg">
              <Phone className="text-blue-600" size={20} />
              <span><strong>Mobile:</strong> +91 8072381719</span>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <Mail className="text-blue-600" size={20} />
              <span><strong>Email:</strong> info@icaebms.com</span>
            </p>
          </div>
        </section>
      </main>

      
    </div>
    </section>
    </section>
    
  );
};

export default TermsandConditions;
