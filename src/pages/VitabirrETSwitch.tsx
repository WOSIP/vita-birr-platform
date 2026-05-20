import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Smartphone, QrCode } from 'lucide-react';

const VitabirrETSwitch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#002147] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">One Dynamic QR. Any Bank. Zero Fees.</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Send, receive, and pay with any bank in Ethiopia – using a single dynamic QR code. No amount entry needed. Just confirm.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
              Register Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">What is the Vitabirr ETSwitch Dynamic QR?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Vitabirr has integrated with ETSwitch, Ethiopia's national interoperable payment switch, to offer a dynamic QR code – a smart QR code that contains the exact payment amount within it. When scanned, the end user does not need to type the amount. They simply confirm with PIN or fingerprint, and the transfer is complete.
          </p>
          
          {/* Illustration 1: Mobile Payment / QR Scanning */}
          <div className="my-8 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl bg-slate-100">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779295716237_QR_Code_payment_1.jpg" 
                alt="Customer scanning QR code for payment" 
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            This QR code works bidirectionally:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#CE1126] w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-slate-700"><strong>Merchant to customer:</strong> Customer scans and pays.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#CE1126] w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-slate-700"><strong>Customer to customer:</strong> Anyone with any bank app can scan a Vitabirr user's QR code to send money directly into that user's Vitabirr wallet – from any bank account.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Key Capabilities</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">Capability</th>
                  <th className="p-4 rounded-tr-lg">How It Works</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Dynamic QR with amount</td>
                  <td className="p-4 text-slate-600">The QR code contains the exact amount to be paid – no manual entry needed.</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">One-tap confirmation</td>
                  <td className="p-4 text-slate-600">Just confirm with PIN or fingerprint – payment completes instantly.</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Receive from any bank</td>
                  <td className="p-4 text-slate-600">Your Vitabirr QR code can be scanned by any bank's app (CBE, Dashen, Awash, Hibret, etc.) to send you money.</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Pay to any bank</td>
                  <td className="p-4 text-slate-600">Scan any ETSwitch QR code with Vitabirr to pay merchants or individuals.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">Zero fees for end users</td>
                  <td className="p-4 text-slate-600">Always – sending or receiving.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits for End Users */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Benefits for End Users</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "No amount typing", desc: "The QR code knows the amount. Scan, confirm, done." },
              { title: "Receive money from anyone", desc: "Friends, family, or customers with any bank app can send to your Vitabirr wallet by scanning your QR code." },
              { title: "Send money to anyone", desc: "Scan their ETSwitch QR code with your Vitabirr app – zero fees." },
              { title: "Biometric security", desc: "Confirm payments with your fingerprint – faster and safer than typing a PIN." },
              { title: "One QR for everything", desc: "The same QR code works for receiving payments, sending payments, and merchant checkouts." },
              { title: "Zero fees always", desc: "No transaction costs for sending or receiving – ever." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-[#002147] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Merchants */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Benefits for Merchants</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Faster checkout", desc: "Customer scans, confirms with fingerprint, done – no amount entry." },
              { title: "No errors", desc: "Amount is embedded in the QR – no risk of customer typing the wrong number." },
              { title: "Accept from any bank", desc: "One dynamic QR accepts payments from CBE Birr, Telebirr, HelloCash, Kacha, and every bank app." },
              { title: "Receive payments instantly", desc: "Funds settle immediately in your Vitabirr merchant account." },
              { title: "Easiest payment collection", desc: "No cash, no card machine, no manual reconciliation." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-[#002147] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">How It Works: End User Step-by-Step</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#CE1126] mb-4">Scenario A: End User PAYING a merchant (dynamic QR with amount)</h3>
            <ol className="space-y-4 list-decimal list-inside text-slate-700">
              <li>Merchant enters the amount (e.g., 350 Birr) on their Vitabirr merchant app or POS. The system generates a dynamic QR code containing exactly 350 Birr.</li>
              <li>Customer opens Vitabirr app and taps "Scan QR."</li>
              <li>Customer scans the merchant's dynamic QR code. Screen displays: "Pay 350 Birr to [Merchant Name]?"</li>
              <li>Customer confirms using PIN or fingerprint.</li>
              <li>Payment processes instantly via ETSwitch. "Payment successful! 350 Birr sent."</li>
              <li>Merchant receives instant notification. Funds available immediately.</li>
            </ol>
            <p className="mt-4 font-semibold text-[#002147]">Total time: Under 5 seconds. No typing. No errors.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#CE1126] mb-4">Scenario B: End User RECEIVING money from any bank app (e.g., a friend using CBE Birr)</h3>
            <ol className="space-y-4 list-decimal list-inside text-slate-700">
              <li>Vitabirr user opens their app and displays their personal dynamic QR code.</li>
              <li>Friend opens their bank's app (e.g., CBE Birr, Dashen, Awash, Telebirr – any ETSwitch-enabled app).</li>
              <li>Friend scans the Vitabirr user's QR code. Their app displays: "Send to [Vitabirr User Name]?" with amount field.</li>
              <li>Friend enters amount (e.g., 500 Birr) and confirms. Payment processed via ETSwitch.</li>
              <li>Vitabirr user receives instant notification – funds added to wallet. "500 Birr received from [Friend Name]"</li>
            </ol>
            <p className="mt-4 font-semibold text-[#002147]">Zero fees deducted. Full 500 Birr arrives. Wallet balance updates instantly.</p>
            <p className="mt-2 text-slate-600">Result: Anyone with any bank app can send money to a Vitabirr user. The Vitabirr user pays zero fees to receive.</p>
          </div>
        </div>
      </section>

      {/* Dynamic QR vs Static QR */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Dynamic QR vs. Static QR: What's the Difference?</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">Feature</th>
                  <th className="p-4">Static QR Code</th>
                  <th className="p-4 rounded-tr-lg">Dynamic QR Code (Vitabirr + ETSwitch)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Amount pre-set?</td>
                  <td className="p-4 text-slate-600">No – user types amount each time</td>
                  <td className="p-4 text-slate-600">Yes – amount embedded in the code</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Typing required?</td>
                  <td className="p-4 text-slate-600">Yes – user must enter amount</td>
                  <td className="p-4 text-slate-600">No – just confirm with PIN/fingerprint</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Error risk</td>
                  <td className="p-4 text-slate-600">Medium (wrong amount possible)</td>
                  <td className="p-4 text-slate-600">Zero (amount is fixed in the QR)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Speed</td>
                  <td className="p-4 text-slate-600">Slower (typing + confirmation)</td>
                  <td className="p-4 text-slate-600">Faster (one confirmation only)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Best for</td>
                  <td className="p-4 text-slate-600">Variable amounts (e.g., friends splitting bills)</td>
                  <td className="p-4 text-slate-600">Fixed transactions (e.g., merchant checkout, bill payment)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">Receive from any bank?</td>
                  <td className="p-4 text-slate-600">Yes (if user displays QR code)</td>
                  <td className="p-4 text-slate-600">Yes – works identically</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700">
            <strong>Vitabirr supports both:</strong><br />
            • Dynamic QR for merchants and fixed-amount payments<br />
            • Static QR for personal receiving (friend can enter any amount)
          </p>
        </div>
      </section>

      {/* Real-Life Examples */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Real-Life Examples</h2>
          
          <div className="mb-10 p-6 bg-white rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-xl font-bold text-[#002147] mb-3">Example 1: Paying a Merchant</h3>
            
            <p className="text-slate-600 mb-2">Azeb runs a small grocery shop in Addis Ababa. A customer buys 450 Birr of goods.</p>
            <p className="text-slate-700"><strong>Old way:</strong> Customer opens app, scans QR, types "450", confirms, waits.</p>
            <p className="text-slate-700"><strong>Vitabirr way:</strong> Azeb enters "450" on her Vitabirr merchant app. A dynamic QR appears. Customer scans with Vitabirr, confirms with fingerprint, and payment is done in 3 seconds.</p>
            <p className="mt-2 font-semibold text-[#002147]">Customer pays zero fees. Azeb gets paid instantly.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-xl font-bold text-[#002147] mb-3">Example 2: Receiving Money from a Family Member</h3>
            <p className="text-slate-600 mb-2">Tsegaye is a student in Jimma. His mother in Addis uses CBE Birr (a different bank).</p>
            <p className="text-slate-700"><strong>Old way:</strong> Mother needs Tsegaye's bank account number, branch, and full name. Transfer takes 24 hours and has fees.</p>
            <p className="text-slate-700"><strong>Vitabirr way:</strong> Tsegaye opens Vitabirr and shows his personal dynamic QR code via WhatsApp. Mother opens CBE Birr, scans the QR code, enters 1,000 Birr, and confirms. Tsegaye receives the money instantly in his Vitabirr wallet.</p>
            <p className="mt-2 font-semibold text-[#002147]">Tsegaye pays zero fees to receive. Mother pays her bank's standard send fee – but Tsegaye keeps every Birr.</p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Security: PIN and Biometric Confirmation</h2>
          <p className="text-slate-600 mb-6">Vitabirr offers two confirmation methods – user chooses:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">Method</th>
                  <th className="p-4">How It Works</th>
                  <th className="p-4 rounded-tr-lg">Best For</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">PIN (Personal Identification Number)</td>
                  <td className="p-4 text-slate-600">User enters a 4-6 digit code to confirm each transaction</td>
                  <td className="p-4 text-slate-600">Users without fingerprint sensors on their phone</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">Biometric (Fingerprint)</td>
                  <td className="p-4 text-slate-600">User touches the phone's fingerprint sensor to confirm</td>
                  <td className="p-4 text-slate-600">Speed, convenience, and enhanced security</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600">Both methods are fully encrypted and comply with National Bank of Ethiopia security standards.</p>
        </div>
      </section>

      {/* Summary Comparison */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">Summary Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">Feature</th>
                  <th className="p-4">Vitabirr + ETSwitch Dynamic QR</th>
                  <th className="p-4 rounded-tr-lg">Other Ethiopian Mobile Money</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Dynamic QR with amount embedded</td>
                  <td className="p-4 text-slate-600">Yes – no typing needed</td>
                  <td className="p-4 text-slate-600">Rarely</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Confirm with fingerprint</td>
                  <td className="p-4 text-slate-600">Yes</td>
                  <td className="p-4 text-slate-600">Mostly PIN only</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Receive money from any bank app</td>
                  <td className="p-4 text-slate-600">Yes – scan QR with CBE, Dashen, Telebirr, etc.</td>
                  <td className="p-4 text-slate-600">Limited interoperability</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Send money to any bank user</td>
                  <td className="p-4 text-slate-600">Yes – scan their ETSwitch QR</td>
                  <td className="p-4 text-slate-600">Limited</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">End user fees (sending/receiving)</td>
                  <td className="p-4 text-slate-600">Zero</td>
                  <td className="p-4 text-slate-600">Typically 1%+</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">Merchant checkout speed</td>
                  <td className="p-4 text-slate-600">Under 5 seconds</td>
                  <td className="p-4 text-slate-600">10-20 seconds (typing amount)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">Works without internet?</td>
                  <td className="p-4 text-slate-600">Yes – USSD fallback</td>
                  <td className="p-4 text-slate-600">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Summary Box */}
      <section className="py-16 px-4 bg-[#002147] text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Final Summary</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse bg-white/10">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="p-4">You Want To...</th>
                  <th className="p-4">How Vitabirr + ETSwitch QR Helps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="p-4 font-semibold">Pay a merchant</td>
                  <td className="p-4">Scan their dynamic QR – amount pre-filled – confirm with fingerprint – zero fees</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 font-semibold">Receive money from any bank user</td>
                  <td className="p-4">Show your personal QR – they scan with their bank app – you receive instantly – zero fees for you</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 font-semibold">Send money to anyone</td>
                  <td className="p-4">Scan their QR – enter amount – confirm – zero fees for you</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Get paid instantly as a merchant</td>
                  <td className="p-4">Generate a dynamic QR with the amount – customer scans and confirms – funds arrive immediately</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Call to Action</h3>
            <p className="text-xl mb-6">One Dynamic QR. Any Bank. Zero Fees.</p>
            <p className="text-lg mb-8 text-slate-300">Pay, send, and receive from any bank in Ethiopia. Just scan, confirm with your fingerprint, and done.</p>
            <Link to="/">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-slate-400">Vitabirr + ETSwitch Dynamic QR: One code. Any bank. No typing. Zero fees. Just confirm.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitabirrETSwitch;