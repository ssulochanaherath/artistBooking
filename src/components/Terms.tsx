import React from "react";
import { useSearchParams } from "react-router-dom";
import LegalPageNavbar, { getLegalPageVariant } from "./LegalPageNavbar";

const TermsAndConditions: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navbarVariant = getLegalPageVariant(searchParams.get("from"));

    return (
        <>
            <style>{`
        .terms-page * { margin: 0; padding: 0; box-sizing: border-box; }
        .terms-page { font-family: 'Fraunces', serif; background: #fff; color: #111; }

        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400&display=swap');

        .terms-page nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 60px; background: #fff; border-bottom: 1px solid #eee; }
        .terms-page nav .logo { font-size: 22px; font-weight: 800; color: #111; }
        .terms-page nav .logo span { color: #e63946; }
        .terms-page nav a { color: #555; text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 28px; }
        .terms-page nav .btn { background: #e63946; color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-left: 28px; text-decoration: none; }

        .terms-page .hero { background: #f9f9f9; padding: 80px 60px 60px; border-bottom: 1px solid #eee; }
        .terms-page .hero .tag { display: inline-block; background: rgba(230,57,70,0.08); color: #e63946; font-size: 13px; font-weight: 600; padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(230,57,70,0.2); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .terms-page .hero h1 { font-size: 52px; font-weight: 900; letter-spacing: -2px; line-height: 1.05; color: #111; }
        .terms-page .hero h1 span { color: #e63946; }
        .terms-page .hero p { color: #888; font-size: 15px; margin-top: 12px; }

        .terms-page .layout { display: grid; grid-template-columns: 260px 1fr; }
        .terms-page .sidebar { background: #f9f9f9; border-right: 1px solid #eee; padding: 40px 28px; position: sticky; top: 0; height: fit-content; }
        .terms-page .content { padding: 50px 60px; }
        .terms-page .sidebar .sib-title { font-size: 11px; font-weight: 700; color: #bbb; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
        .terms-page .sidebar a { display: block; font-size: 14px; color: #888; text-decoration: none; padding: 8px 12px; border-radius: 8px; margin-bottom: 2px; transition: all 0.2s; }
        .terms-page .sidebar a:hover { color: #111; background: #eee; }

        .terms-page .meta-bar { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 14px 20px; margin-bottom: 50px; font-size: 13px; color: #999; display: flex; gap: 24px; flex-wrap: wrap; }
        .terms-page .meta-bar strong { color: #555; }

        .terms-page .sec { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid #eee; }
        .terms-page .sec:last-child { border-bottom: none; }
        .terms-page .sec-header { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .terms-page .sec-num { background: #e63946; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; }
        .terms-page .sec h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #111; }
        .terms-page .sec p { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 12px; }
        .terms-page .sec h3 { font-size: 14px; font-weight: 700; color: #333; margin: 20px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .terms-page .sec ul { padding-left: 0; list-style: none; }
        .terms-page .sec ul li { font-size: 15px; color: #555; line-height: 1.8; padding: 5px 0 5px 20px; position: relative; }
        .terms-page .sec ul li::before { content: ''; position: absolute; left: 0; top: 14px; width: 6px; height: 6px; background: #e63946; border-radius: 50%; }

        .terms-page .two-box { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; }
        .terms-page .box { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 20px 22px; }
        .terms-page .box .label { font-size: 11px; font-weight: 700; color: #e63946; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
        .terms-page .box p { font-size: 14px; color: #555; margin: 0; line-height: 1.7; }

        .terms-page .flow { background: #f9f9f9; border: 1px solid #eee; border-radius: 14px; padding: 28px; margin: 20px 0; }
        .terms-page .flow-row { display: flex; align-items: center; gap: 0; flex-wrap: wrap; margin-bottom: 16px; }
        .terms-page .flow-step { background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 10px 16px; font-size: 13px; font-weight: 600; color: #333; }
        .terms-page .flow-arrow { color: #e63946; font-size: 18px; font-weight: 700; padding: 0 12px; }
        .terms-page .flow p { font-size: 14px; color: #777; margin: 0; }

        .terms-page .warning { background: #fff5f5; border: 1px solid rgba(230,57,70,0.2); border-left: 3px solid #e63946; border-radius: 0 10px 10px 0; padding: 18px 20px; margin: 16px 0; }
        .terms-page .warning p { color: #c0392b; font-size: 14px; margin: 0; line-height: 1.7; }

        .terms-page .notice { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 18px 22px; margin: 16px 0; }
        .terms-page .notice p { color: #555; font-size: 14px; margin: 0; }

        .terms-page footer { background: #fff; border-top: 1px solid #eee; padding: 30px 60px; display: flex; align-items: center; justify-content: space-between; }
        .terms-page footer .logo { font-size: 18px; font-weight: 800; color: #111; }
        .terms-page footer .logo span { color: #e63946; }
        .terms-page footer p { font-size: 13px; color: #999; }

        @media (max-width: 900px) {
          .terms-page nav { padding: 16px 24px; }
          .terms-page .hero { padding: 50px 24px 40px; }
          .terms-page .hero h1 { font-size: 36px; }
          .terms-page .layout { grid-template-columns: 1fr; }
          .terms-page .sidebar { display: none; }
          .terms-page .content { padding: 32px 24px; }
          .terms-page .two-box { grid-template-columns: 1fr; }
          .terms-page .flow-row { flex-direction: column; align-items: flex-start; gap: 8px; }
          .terms-page footer { flex-direction: column; gap: 12px; text-align: center; padding: 24px; }
        }
      `}</style>

            <LegalPageNavbar variant={navbarVariant} />

            <div className="terms-page" style={{ paddingTop: "72px" }}>
                <div className="hero">
                    <div className="tag">Legal</div>
                    <h1>
                        Terms & <span>Conditions</span>
                    </h1>
                    <p>
                        Effective Date: August 12, 2026
                    </p>
                </div>

                <div className="layout">
                    <div className="sidebar">
                        <p className="sib-title">Contents</p>
                        <a href="#s1">1. About Performa</a>
                        <a href="#s2">2. Eligibility</a>
                        <a href="#s3">3. Account Registration</a>
                        <a href="#s4">4. For Clients</a>
                        <a href="#s5">5. For Artists</a>
                        <a href="#s6">6. How Performa Makes Money</a>
                        <a href="#s7">7. Booking Confirmation</a>
                        <a href="#s8">8. Cancellations and Refunds</a>
                        <a href="#s9">9. Complaints and Disputes</a>
                        <a href="#s10">10. Circumvention</a>
                        <a href="#s11">11. Prohibited Conduct</a>
                        <a href="#s12">12. Artist Content and IP</a>
                        <a href="#s13">13. Availability</a>
                        <a href="#s14">14. Third-Party Services</a>
                        <a href="#s15">15. Limitation of Liability</a>
                        <a href="#s16">16. Indemnity</a>
                        <a href="#s17">17. Privacy</a>
                        <a href="#s18">18. Changes</a>
                        <a href="#s19">19. Governing Law</a>
                        <a href="#s20">20. Contact Us</a>
                    </div>

                    <div className="content">
                        <div className="intro" style={{ marginBottom: "40px" }}>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            Welcome to Performa. These Terms & Conditions govern your use of the Performa website,
                            platform, and related services.
                          </p>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            By creating an account, using the platform, submitting or accepting a booking request, or
                            making a payment to Performa, you agree to these Terms & Conditions.
                          </p>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            If you do not agree with these Terms, please do not use Performa.
                          </p>
                        </div>

                        <div className="sec" id="s1">
                            <div className="sec-header">
                                <div className="sec-num">1</div>
                                <h2>About Performa</h2>
                            </div>
                            <p>
                                Performa is an online platform that connects clients with independent artists and creative
                                service providers in Sri Lanka, including singers, DJs, dancers, musicians, photographers,
                                videographers, and other performers or creative professionals.
                            </p>
                            <p>
                                Performa provides an online platform for discovering artists, communicating about bookings,
                                submitting and accepting booking requests, and facilitating the booking process.
                            </p>
                            <p>
                                Performa is not the employer, agent, partner, or representative of any artist unless expressly
                                stated otherwise.
                            </p>
                            <p>
                                Artists are independent service providers and are responsible for the services they provide to
                                clients.
                            </p>
                        </div>

                        <div className="sec" id="s2">
                            <div className="sec-header">
                                <div className="sec-num">2</div>
                                <h2>Eligibility</h2>
                            </div>
                            <p>To use Performa, you must:</p>
                            <ul>
                                <li>Be at least 18 years old.</li>
                                <li>Be legally capable of entering into a binding agreement under applicable Sri Lankan law.</li>
                                <li>Provide accurate and complete information when creating or using an account.</li>
                                <li>Use the platform only for lawful purposes.</li>
                            </ul>
                            <p>
                                If you register on behalf of a business or organization, you confirm that you have authority to act
                                on its behalf.
                            </p>
                        </div>

                        <div className="sec" id="s3">
                            <div className="sec-header">
                                <div className="sec-num">3</div>
                                <h2>Account Registration</h2>
                            </div>
                            <p>Certain Performa features require you to create an account.</p>
                            <p>You are responsible for:</p>
                            <ul>
                                <li>Providing accurate and current information.</li>
                                <li>Keeping your login credentials confidential.</li>
                                <li>All activity carried out through your account.</li>
                                <li>Notifying Performa promptly if you believe your account has been accessed without authorization.</li>
                            </ul>
                            <p>
                                Performa may suspend or terminate accounts that violate these Terms or are suspected of
                                fraudulent, abusive, or unlawful activity.
                            </p>
                        </div>

                        <div className="sec" id="s4">
                            <div className="sec-header">
                                <div className="sec-num">4</div>
                                <h2>For Clients</h2>
                            </div>
                            <h3>4.1 Finding and Booking Artists</h3>
                            <p>Clients may browse artist profiles, portfolios, availability information, and other details provided through Performa.</p>
                            <p>Clients may submit booking requests containing information such as:</p>
                            <ul>
                                <li>Event date</li>
                                <li>Event time</li>
                                <li>Event location</li>
                                <li>Type of service or performance</li>
                                <li>Expected duration</li>
                                <li>Other relevant event requirements</li>
                            </ul>
                            <p>A booking request does not become confirmed until the artist accepts the request and the applicable Performa booking/service fee has been paid.</p>
                            
                            <h3>4.2 Artist Performance Fees</h3>
                            <p>The artist's performance fee is separate from Performa's booking/service fee.</p>
                            <p>The artist and client are responsible for discussing and agreeing on:</p>
                            <ul>
                                <li>Performance fee</li>
                                <li>Payment amount</li>
                                <li>Payment schedule</li>
                                <li>Performance requirements</li>
                                <li>Event duration</li>
                                <li>Travel or additional expenses</li>
                                <li>Other performance-related arrangements</li>
                            </ul>
                            <p>Unless expressly stated otherwise on the platform, the artist's performance fee is paid directly by the client to the artist.</p>
                            <p>Performa does not collect, hold, or transfer the artist's performance fee.</p>

                            <h3>4.3 Performa Booking/Service Fee</h3>
                            <p>Performa may charge a booking/service fee for providing access to its platform and booking-related services.</p>
                            <p>The applicable Performa fee will be displayed to the client before payment is completed.</p>
                            <p>The Performa booking/service fee is separate from the artist's performance fee.</p>
                            <p>Payments made to Performa through the payment gateway are payments for Performa's own platform and booking services.</p>
                        </div>

                        <div className="sec" id="s5">
                            <div className="sec-header">
                                <div className="sec-num">5</div>
                                <h2>For Artists</h2>
                            </div>
                            <h3>5.1 Artist Profiles</h3>
                            <p>Artists must provide accurate and truthful information about themselves and their services.</p>
                            <p>Artists are responsible for ensuring that photographs, videos, music, portfolios, descriptions, logos, and other content uploaded to Performa are owned by them or used with appropriate permission.</p>
                            <p>Performa may remove or restrict content that violates these Terms or applicable law.</p>

                            <h3>5.2 Accepting Bookings</h3>
                            <p>When an artist accepts a booking request, the artist agrees to make reasonable efforts to provide the agreed service at the confirmed date, time, location, and conditions.</p>
                            <p>Artists should communicate promptly with clients regarding changes, cancellations, delays, or circumstances affecting the booking.</p>
                            <p>Repeated cancellations, failure to attend confirmed bookings, fraudulent activity, or serious complaints may result in account suspension or termination.</p>

                            <h3>5.3 Artist Payments</h3>
                            <p>Artists determine their own performance fees unless otherwise agreed with the client.</p>
                            <p>The artist's performance fee is a separate transaction between the client and the artist.</p>
                            <p>Performa does not collect, hold, or disburse the artist's performance fee through the Performa payment system.</p>
                            <p>Artists are responsible for providing clients with accurate payment instructions where payment is to be made directly to the artist.</p>
                            <p>Artists are responsible for their own taxes, permits, licences, and other legal obligations relating to income earned from their services.</p>
                        </div>

                        <div className="sec" id="s6">
                            <div className="sec-header">
                                <div className="sec-num">6</div>
                                <h2>How Performa Makes Money</h2>
                            </div>
                            <p>Performa earns revenue primarily through booking/service fees charged to clients for the use of the platform and related booking services.</p>
                            <p>The applicable booking/service fee is displayed before the client completes payment.</p>
                            <p>Performa does not take custody of the artist's performance fee.</p>
                            <p>Any performance fee paid to an artist is separate from Performa's booking/service fee.</p>
                        </div>

                        <div className="sec" id="s7">
                            <div className="sec-header">
                                <div className="sec-num">7</div>
                                <h2>Booking Confirmation</h2>
                            </div>
                            <p>A booking is considered confirmed when:</p>
                            <ul>
                                <li>1. The artist has accepted the booking request; and</li>
                                <li>2. The applicable Performa booking/service fee has been successfully paid.</li>
                            </ul>
                            <p>The client and artist remain responsible for confirming the specific performance arrangements between themselves.</p>
                        </div>

                        <div className="sec" id="s8">
                            <div className="sec-header">
                                <div className="sec-num">8</div>
                                <h2>Cancellations and Refunds</h2>
                            </div>
                            <p>Cancellations and refunds of Performa's booking/service fee are governed by Performa's Return & Refund Policy.</p>
                            <p>The Return & Refund Policy applies only to payments made to Performa.</p>
                            <p>Payments made directly between clients and artists are separate transactions and are not governed by Performa's refund process.</p>
                            <p>If an artist cancels or fails to fulfill an accepted booking, the client may report the matter to Performa for review.</p>
                            <p>Performa may review booking records, platform communications, and other relevant evidence when determining eligibility for a refund of the Performa booking/service fee.</p>
                        </div>

                        <div className="sec" id="s9">
                            <div className="sec-header">
                                <div className="sec-num">9</div>
                                <h2>Complaints and Disputes Between Clients and Artists</h2>
                            </div>
                            <p>Performa encourages clients and artists to communicate directly and attempt to resolve booking-related issues in good faith.</p>
                            <p>If a dispute cannot be resolved, either party may contact Performa.</p>
                            <p>Performa may review:</p>
                            <ul>
                                <li>Booking information</li>
                                <li>Messages exchanged through the platform</li>
                                <li>Cancellation information</li>
                                <li>Relevant evidence supplied by either party</li>
                            </ul>
                            <p>Performa may make a determination regarding whether a Performa booking/service fee refund is appropriate under the Return & Refund Policy.</p>
                            <p>Performa does not determine or guarantee recovery of payments made directly between clients and artists.</p>
                        </div>

                        <div className="sec" id="s10">
                            <div className="sec-header">
                                <div className="sec-num">10</div>
                                <h2>Circumvention</h2>
                            </div>
                            <p>Clients and artists must not intentionally move a booking outside Performa for the purpose of avoiding a Performa booking/service fee where the client and artist were first introduced through Performa.</p>
                            <p>This restriction does not prevent users from communicating or entering into lawful arrangements that are unrelated to avoiding Performa's applicable fees.</p>
                            <p>Violations may result in account suspension or termination.</p>
                        </div>

                        <div className="sec" id="s11">
                            <div className="sec-header">
                                <div className="sec-num">11</div>
                                <h2>Prohibited Conduct</h2>
                            </div>
                            <p>Users must not:</p>
                            <ul>
                                <li>Provide false or misleading information.</li>
                                <li>Create fraudulent accounts.</li>
                                <li>Impersonate another person or business.</li>
                                <li>Harass, threaten, abuse, or discriminate against another user.</li>
                                <li>Upload illegal, obscene, defamatory, or infringing content.</li>
                                <li>Upload content that violates another person's intellectual property rights.</li>
                                <li>Attempt to gain unauthorized access to Performa systems.</li>
                                <li>Attempt to interfere with or damage the platform.</li>
                                <li>Use Performa for fraudulent or unlawful activities.</li>
                                <li>Attempt to manipulate reviews, ratings, bookings, or payments.</li>
                                <li>Use the platform to avoid applicable Performa fees.</li>
                            </ul>
                            <p>Performa may suspend or terminate accounts involved in prohibited conduct.</p>
                        </div>

                        <div className="sec" id="s12">
                            <div className="sec-header">
                                <div className="sec-num">12</div>
                                <h2>Artist Content and Intellectual Property</h2>
                            </div>
                            <p>Artists retain ownership of content they lawfully upload to Performa.</p>
                            <p>By uploading content, an artist grants Performa a non-exclusive, worldwide, royalty-free licence to display, reproduce, resize, format, and promote that content as reasonably necessary to operate and market the platform.</p>
                            <p>Users must not upload content that they do not have the legal right to use.</p>
                            <p>Performa retains ownership of its website, platform, software, branding, trademarks, logos, text, graphics, and other proprietary materials unless otherwise stated.</p>
                        </div>

                        <div className="sec" id="s13">
                            <div className="sec-header">
                                <div className="sec-num">13</div>
                                <h2>Availability of the Platform</h2>
                            </div>
                            <p>Performa aims to keep the platform available and functioning reliably but does not guarantee uninterrupted or error-free availability.</p>
                            <p>The platform may occasionally be unavailable because of:</p>
                            <ul>
                                <li>Maintenance</li>
                                <li>Technical problems</li>
                                <li>Security incidents</li>
                                <li>Internet or hosting problems</li>
                                <li>Payment gateway issues</li>
                                <li>Events outside Performa's reasonable control</li>
                            </ul>
                        </div>

                        <div className="sec" id="s14">
                            <div className="sec-header">
                                <div className="sec-num">14</div>
                                <h2>Third-Party Services</h2>
                            </div>
                            <p>Performa may use third-party services such as payment gateways, hosting providers, analytics providers, communication services, and other technology providers.</p>
                            <p>Use of third-party services may be subject to their own terms and privacy policies.</p>
                            <p>Performa is not responsible for failures caused solely by third-party services outside Performa's reasonable control.</p>
                        </div>

                        <div className="sec" id="s15">
                            <div className="sec-header">
                                <div className="sec-num">15</div>
                                <h2>Limitation of Liability</h2>
                            </div>
                            <p>To the fullest extent permitted by applicable law, Performa is not responsible for indirect, incidental, special, or consequential losses arising from the use of the platform.</p>
                            <p>Performa does not guarantee:</p>
                            <ul>
                                <li>The quality of an artist's performance.</li>
                                <li>The availability of an artist.</li>
                                <li>The suitability of an artist for a particular event.</li>
                                <li>That an artist will meet every expectation of a client.</li>
                                <li>The outcome of arrangements made directly between clients and artists.</li>
                            </ul>
                            <p>Clients should review artist profiles, portfolios, reviews, and booking information before confirming a booking.</p>
                            <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.</p>
                        </div>

                        <div className="sec" id="s16">
                            <div className="sec-header">
                                <div className="sec-num">16</div>
                                <h2>Indemnity</h2>
                            </div>
                            <p>To the extent permitted by applicable law, users agree to be responsible for claims, losses, damages, liabilities, and reasonable expenses arising from:</p>
                            <ul>
                                <li>Their violation of these Terms.</li>
                                <li>Their unlawful use of the platform.</li>
                                <li>Their infringement of another person's rights.</li>
                                <li>Their breach of an agreement with another user.</li>
                            </ul>
                        </div>

                        <div className="sec" id="s17">
                            <div className="sec-header">
                                <div className="sec-num">17</div>
                                <h2>Privacy</h2>
                            </div>
                            <p>Performa collects and processes personal information in accordance with its Privacy Policy.</p>
                            <p>By using Performa, you acknowledge that your information may be processed for purposes including account management, booking administration, communication, payment processing, security, fraud prevention, customer support, and improvement of the platform.</p>
                        </div>

                        <div className="sec" id="s18">
                            <div className="sec-header">
                                <div className="sec-num">18</div>
                                <h2>Changes to These Terms</h2>
                            </div>
                            <p>Performa may update these Terms from time to time.</p>
                            <p>When material changes are made, Performa may update the effective date and provide reasonable notice through the platform where appropriate.</p>
                            <p>Your continued use of Performa after updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law.</p>
                        </div>

                        <div className="sec" id="s19">
                            <div className="sec-header">
                                <div className="sec-num">19</div>
                                <h2>Governing Law</h2>
                            </div>
                            <p>These Terms are governed by the laws of Sri Lanka.</p>
                            <p>Subject to any mandatory rights or remedies available under applicable law, disputes relating to these Terms or use of Performa shall be subject to the jurisdiction of the courts of Sri Lanka.</p>
                        </div>

                        <div className="sec" id="s20">
                            <div className="sec-header">
                                <div className="sec-num">20</div>
                                <h2>Contact Us</h2>
                            </div>
                            <p>If you have questions about these Terms & Conditions, please contact Performa:</p>
                            <div className="notice" style={{ marginTop: "16px" }}>
                                <p>
                                    📧 <strong>Email:</strong> infoperforma.lk@gmail.com &nbsp;·&nbsp;
                                    📞 <strong>Phone:</strong> +94 70 403 5236 &nbsp;·&nbsp; 📍
                                    Kandy, Sri Lanka
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <footer>
                    <div className="logo">
                        Performa<span>.</span>
                    </div>
                    <p>© 2026 Performa. All rights reserved. · Sri Lanka</p>
                </footer>
            </div>
        </>
    );
};

export default TermsAndConditions;