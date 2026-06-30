import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002147] mb-2">Cookie Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 15, 2025</p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">

          {/* 1. What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer, tablet, or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. Cookies allow a website to recognize your device and remember information about your visit, such as your preferred language, login details, and other settings.
            </p>
          </section>

          {/* 2. How We Use Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">
              Vitabirr Financial Technologies (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website <strong>vitabirr.com</strong> and related digital platforms (collectively, the &ldquo;Service&rdquo;) for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Operations:</strong> To enable core functionality such as secure login, session management, and transaction processing.</li>
              <li><strong>Performance &amp; Analytics:</strong> To understand how visitors interact with our Service, helping us improve usability and fix issues.</li>
              <li><strong>Personalization:</strong> To remember your preferences, such as language and region, so we can deliver a tailored experience.</li>
              <li><strong>Security:</strong> To detect and prevent fraudulent activity and protect user accounts.</li>
              <li><strong>Marketing &amp; Communication:</strong> To measure the effectiveness of our promotional campaigns and deliver relevant content (only with your consent where required by law).</li>
            </ul>
          </section>

          {/* 3. Types of Cookies We Use */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">3. Types of Cookies We Use</h2>

            <h3 className="text-lg font-semibold text-[#002147] mt-5 mb-2">a) Strictly Necessary Cookies</h3>
            <p className="mb-3">
              These cookies are essential for the Service to function properly. They enable you to navigate the site and use its features, such as accessing secure areas and completing transactions. Without these cookies, services you have asked for cannot be provided. These cookies do not collect information about you that could be used for marketing purposes.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#002147] text-white">
                  <tr>
                    <th className="text-left py-2 px-4">Cookie Name</th>
                    <th className="text-left py-2 px-4">Provider</th>
                    <th className="text-left py-2 px-4">Purpose</th>
                    <th className="text-left py-2 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="py-2 px-4">session_id</td><td className="py-2 px-4">Vitabirr</td><td className="py-2 px-4">Maintains your authenticated session</td><td className="py-2 px-4">Session</td></tr>
                  <tr><td className="py-2 px-4">csrf_token</td><td className="py-2 px-4">Vitabirr</td><td className="py-2 px-4">Protects against cross-site request forgery</td><td className="py-2 px-4">Session</td></tr>
                  <tr><td className="py-2 px-4">lang_pref</td><td className="py-2 px-4">Vitabirr</td><td className="py-2 px-4">Stores your preferred language</td><td className="py-2 px-4">1 year</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-[#002147] mt-5 mb-2">b) Performance &amp; Analytics Cookies</h3>
            <p className="mb-3">
              These cookies collect information about how visitors use our Service, such as which pages are visited most often and whether users receive error messages. All information collected by these cookies is aggregated and anonymous. It is solely used to improve how the Service works.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#002147] text-white">
                  <tr>
                    <th className="text-left py-2 px-4">Cookie Name</th>
                    <th className="text-left py-2 px-4">Provider</th>
                    <th className="text-left py-2 px-4">Purpose</th>
                    <th className="text-left py-2 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="py-2 px-4">_ga</td><td className="py-2 px-4">Google Analytics</td><td className="py-2 px-4">Distinguishes unique users</td><td className="py-2 px-4">2 years</td></tr>
                  <tr><td className="py-2 px-4">_gid</td><td className="py-2 px-4">Google Analytics</td><td className="py-2 px-4">Distinguishes users</td><td className="py-2 px-4">24 hours</td></tr>
                  <tr><td className="py-2 px-4">_gat</td><td className="py-2 px-4">Google Analytics</td><td className="py-2 px-4">Throttles request rate</td><td className="py-2 px-4">1 minute</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-[#002147] mt-5 mb-2">c) Functional Cookies</h3>
            <p className="mb-3">
              These cookies allow the Service to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#002147] text-white">
                  <tr>
                    <th className="text-left py-2 px-4">Cookie Name</th>
                    <th className="text-left py-2 px-4">Provider</th>
                    <th className="text-left py-2 px-4">Purpose</th>
                    <th className="text-left py-2 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="py-2 px-4">region</td><td className="py-2 px-4">Vitabirr</td><td className="py-2 px-4">Remembers your selected region for localized content</td><td className="py-2 px-4">1 year</td></tr>
                  <tr><td className="py-2 px-4">theme</td><td className="py-2 px-4">Vitabirr</td><td className="py-2 px-4">Stores display preference (light/dark mode)</td><td className="py-2 px-4">1 year</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-[#002147] mt-5 mb-2">d) Targeting / Advertising Cookies</h3>
            <p className="mb-3">
              These cookies record your visit to the Service, the pages you have visited, and the links you have followed. We may use this information to make the Service and the advertising displayed on it more relevant to your interests. We may also share this information with third-party advertising partners.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#002147] text-white">
                  <tr>
                    <th className="text-left py-2 px-4">Cookie Name</th>
                    <th className="text-left py-2 px-4">Provider</th>
                    <th className="text-left py-2 px-4">Purpose</th>
                    <th className="text-left py-2 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="py-2 px-4">_fbp</td><td className="py-2 px-4">Meta (Facebook)</td><td className="py-2 px-4">Delivers advertisements and measures ad performance</td><td className="py-2 px-4">3 months</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">4. Third-Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Google Analytics:</strong> Helps us understand how visitors engage with our Service. These cookies track things like how long you spend on the site and the pages you visit.</li>
              <li><strong>Meta (Facebook/Instagram):</strong> Enables social media integration and helps us measure the effectiveness of advertising campaigns.</li>
              <li><strong>Payment Processors:</strong> Our payment partners may set cookies to facilitate secure transactions and prevent fraud.</li>
            </ul>
            <p className="mt-3">
              We do not control the cookies set by these third parties. Please refer to their respective privacy and cookie policies for more information.
            </p>
          </section>

          {/* 5. Managing Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">5. Managing and Disabling Cookies</h2>
            <p className="mb-3">
              You can manage and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit the site, and some services and functionalities may not work.
            </p>
            <p className="mb-3">To manage cookie settings in your browser:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options &rarr; Privacy &amp; Security &rarr; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Cookies and Website Data</li>
              <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and Site Permissions</li>
            </ul>
            <p className="mt-3">
              For more information on how to manage cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#CE1126] hover:underline">www.allaboutcookies.org</a>.
            </p>
          </section>

          {/* 6. Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">6. Do Not Track Signals</h2>
            <p>
              Some browsers have a &ldquo;Do Not Track&rdquo; feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not alter our data collection practices when we receive a &ldquo;Do Not Track&rdquo; signal. However, we are committed to respecting your privacy choices and will comply with any applicable laws regarding tracking.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can take appropriate action.
            </p>
          </section>

          {/* 8. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">8. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically to stay informed about our use of cookies.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-[#002147] mb-3">9. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Cookie Policy or our use of cookies, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2">
              <p><strong className="text-[#002147]">Vitabirr Financial Technologies</strong></p>
              <p>Africa Venue, Airport Road, Abyssinia Real Estate Building, 3rd Floor, Addis Ababa, Ethiopia</p>
              <p>Email: <a href="mailto:info@vitabirr.com" className="text-[#CE1126] hover:underline">info@vitabirr.com</a></p>
              <p>Phone: +251 956 659 965</p>
              <p className="text-sm text-slate-500 mt-2">License Registration: NPS-PII/006/2025 (National Bank of Ethiopia)</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
