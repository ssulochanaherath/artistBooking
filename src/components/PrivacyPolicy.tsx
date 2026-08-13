import React from "react";
import { useSearchParams } from "react-router-dom";
import LegalPageNavbar, { getLegalPageVariant } from "./LegalPageNavbar";

const PrivacyPolicy: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navbarVariant = getLegalPageVariant(searchParams.get("from"));

    return (
        <>
            <style>{`
        .privacy-page * { margin: 0; padding: 0; box-sizing: border-box; }
        .privacy-page { font-family: 'Fraunces', serif; background: #fff; color: #111; }

        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400&display=swap');

        .privacy-page nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 60px; background: #fff; border-bottom: 1px solid #eee; }
        .privacy-page nav .logo { font-size: 22px; font-weight: 800; color: #111; }
        .privacy-page nav .logo span { color: #e63946; }
        .privacy-page nav a { color: #555; text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 28px; }
        .privacy-page nav .btn { background: #e63946; color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-left: 28px; text-decoration: none; }

        .privacy-page .hero { background: #f9f9f9; padding: 80px 60px 60px; border-bottom: 1px solid #eee; }
        .privacy-page .hero .tag { display: inline-block; background: rgba(230,57,70,0.08); color: #e63946; font-size: 13px; font-weight: 600; padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(230,57,70,0.2); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .privacy-page .hero h1 { font-size: 52px; font-weight: 900; letter-spacing: -2px; line-height: 1.05; color: #111; }
        .privacy-page .hero h1 span { color: #e63946; }
        .privacy-page .hero p { color: #888; font-size: 15px; margin-top: 12px; }

        .privacy-page .layout { display: grid; grid-template-columns: 260px 1fr; }
        .privacy-page .sidebar { background: #f9f9f9; border-right: 1px solid #eee; padding: 40px 28px; position: sticky; top: 0; height: fit-content; }
        .privacy-page .content { padding: 50px 60px; }
        .privacy-page .sidebar .sib-title { font-size: 11px; font-weight: 700; color: #bbb; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
        .privacy-page .sidebar a { display: block; font-size: 14px; color: #888; text-decoration: none; padding: 8px 12px; border-radius: 8px; margin-bottom: 2px; transition: all 0.2s; }
        .privacy-page .sidebar a:hover { color: #111; background: #eee; }

        .privacy-page .meta-bar { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 14px 20px; margin-bottom: 50px; font-size: 13px; color: #999; display: flex; gap: 24px; flex-wrap: wrap; }
        .privacy-page .meta-bar strong { color: #555; }

        .privacy-page .sec { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid #eee; }
        .privacy-page .sec:last-child { border-bottom: none; }
        .privacy-page .sec-header { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .privacy-page .sec-num { background: #e63946; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; }
        .privacy-page .sec h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #111; }
        .privacy-page .sec p { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 12px; }
        .privacy-page .sec h3 { font-size: 14px; font-weight: 700; color: #333; margin: 20px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .privacy-page .sec ul { padding-left: 0; list-style: none; }
        .privacy-page .sec ul li { font-size: 15px; color: #555; line-height: 1.8; padding: 5px 0 5px 20px; position: relative; }
        .privacy-page .sec ul li::before { content: ''; position: absolute; left: 0; top: 14px; width: 6px; height: 6px; background: #e63946; border-radius: 50%; }

        .privacy-page .notice { background: #fff5f5; border: 1px solid rgba(230,57,70,0.2); border-left: 3px solid #e63946; border-radius: 0 10px 10px 0; padding: 16px 20px; margin: 16px 0; }
        .privacy-page .notice p { color: #c0392b; font-size: 14px; margin: 0; }
        .privacy-page .notice strong { color: #e63946; }

        .privacy-page .info-box { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 20px 22px; margin: 16px 0; }
        .privacy-page .info-box p { color: #555; font-size: 14px; margin: 0; line-height: 1.7; }

        .privacy-page footer { background: #fff; border-top: 1px solid #eee; padding: 30px 60px; display: flex; align-items: center; justify-content: space-between; }
        .privacy-page footer .logo { font-size: 18px; font-weight: 800; color: #111; }
        .privacy-page footer .logo span { color: #e63946; }
        .privacy-page footer p { font-size: 13px; color: #999; }

        @media (max-width: 900px) {
          .privacy-page nav { padding: 16px 24px; }
          .privacy-page .hero { padding: 50px 24px 40px; }
          .privacy-page .hero h1 { font-size: 36px; }
          .privacy-page .layout { grid-template-columns: 1fr; }
          .privacy-page .sidebar { display: none; }
          .privacy-page .content { padding: 32px 24px; }
          .privacy-page footer { flex-direction: column; gap: 12px; text-align: center; padding: 24px; }
        }
      `}</style>

            <LegalPageNavbar variant={navbarVariant} />

            <div className="privacy-page" style={{ paddingTop: "72px" }}>
                <div className="hero">
                    <div className="tag">Legal</div>
                    <h1>
                        Privacy <span>Policy</span>
                    </h1>
                    <p>
                        Effective Date: August 12, 2026
                    </p>
                </div>

                <div className="layout">
                    <div className="sidebar">
                        <p className="sib-title">Contents</p>
                        <a href="#s1">1. Information We Collect</a>
                        <a href="#s2">2. How We Use Personal Information</a>
                        <a href="#s3">3. Sharing Personal Information</a>
                        <a href="#s4">4. Payment Information</a>
                        <a href="#s5">5. Artist and Client Visibility</a>
                        <a href="#s6">6. Data Retention</a>
                        <a href="#s7">7. Data Security</a>
                        <a href="#s8">8. Your Rights</a>
                        <a href="#s9">9. Children's Privacy</a>
                        <a href="#s10">10. International Data Processing</a>
                        <a href="#s11">11. Third-Party Websites and Services</a>
                        <a href="#s12">12. Marketing Communications</a>
                        <a href="#s13">13. Data Breaches and Security Incidents</a>
                        <a href="#s14">14. Changes to This Privacy Policy</a>
                        <a href="#s15">15. Contact Us</a>
                    </div>

                    <div className="content">
                        <div className="intro" style={{ marginBottom: "40px" }}>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            Performa operates an online platform that connects clients with independent artists and creative
                            service providers in Sri Lanka.
                          </p>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            This Privacy Policy explains how Performa collects, uses, stores, shares, and protects personal
                            information when you use our website, platform, applications, services, or communicate with us.
                          </p>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            By using Performa, you acknowledge the practices described in this Privacy Policy.
                          </p>
                          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "12px" }}>
                            Performa aims to handle personal data responsibly and in accordance with applicable Sri
                            Lankan data protection laws, including the Personal Data Protection Act, No. 9 of 2022, as
                            amended from time to time. Sri Lanka's Data Protection Authority states that the principal
                            operational provisions of the PDPA came into operation on March 18, 2025.
                          </p>
                        </div>

                        <div className="sec" id="s1">
                            <div className="sec-header">
                                <div className="sec-num">1</div>
                                <h2>Information We Collect</h2>
                            </div>
                            <p>Depending on how you use Performa, we may collect the following categories of information.</p>
                            
                            <h3>1.1 Account Information</h3>
                            <p>When you create an account, we may collect:</p>
                            <ul>
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Password or authentication information</li>
                                <li>Account type</li>
                                <li>Profile information</li>
                            </ul>

                            <h3>1.2 Artist Information</h3>
                            <p>If you register as an artist, we may collect:</p>
                            <ul>
                                <li>Artist or business name</li>
                                <li>Profile photograph</li>
                                <li>Biography</li>
                                <li>Category and skills</li>
                                <li>Portfolio information</li>
                                <li>Photographs and videos</li>
                                <li>Performance/service information</li>
                                <li>Availability information</li>
                                <li>Service areas</li>
                                <li>Contact information</li>
                                <li>Performance pricing or fee information</li>
                                <li>Other information you choose to publish on your artist profile</li>
                            </ul>
                            <p>Artists should not upload sensitive personal information that is unnecessary for operating their profile.</p>

                            <h3>1.3 Booking Information</h3>
                            <p>When you create, request, accept, or manage a booking, we may collect:</p>
                            <ul>
                                <li>Client information</li>
                                <li>Artist information</li>
                                <li>Event date and time</li>
                                <li>Event location</li>
                                <li>Event type</li>
                                <li>Booking requirements</li>
                                <li>Messages and communications relating to the booking</li>
                                <li>Booking status</li>
                                <li>Cancellation information</li>
                                <li>Complaint or dispute information</li>
                            </ul>

                            <h3>1.4 Payment Information</h3>
                            <p>Payments for Performa's booking/service fee may be processed through third-party payment providers.</p>
                            <p>Performa may receive information such as:</p>
                            <ul>
                                <li>Payment status</li>
                                <li>Transaction reference</li>
                                <li>Amount paid</li>
                                <li>Currency</li>
                                <li>Date and time of transaction</li>
                                <li>Payment method information provided by the payment provider</li>
                            </ul>
                            <p>Where payment information is processed by a third-party payment gateway, that provider may process payment information under its own privacy policy and security practices.</p>
                            <p>Performa does not need to store your full card number or card security code to provide its booking services.</p>

                            <h3>1.5 Communications</h3>
                            <p>If you communicate with Performa or other users through the platform, we may process information contained in those communications for purposes such as:</p>
                            <ul>
                                <li>Providing customer support</li>
                                <li>Managing bookings</li>
                                <li>Resolving disputes</li>
                                <li>Preventing fraud and abuse</li>
                                <li>Maintaining platform security</li>
                                <li>Enforcing our Terms & Conditions</li>
                            </ul>

                            <h3>1.6 Technical Information</h3>
                            <p>When you use Performa, we may automatically collect technical information such as:</p>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device type</li>
                                <li>Operating system</li>
                                <li>Approximate location derived from technical information where applicable</li>
                                <li>Pages visited</li>
                                <li>Date and time of access</li>
                                <li>Referring website</li>
                                <li>Technical logs</li>
                                <li>Security and diagnostic information</li>
                            </ul>

                            <h3>1.7 Cookies</h3>
                            <p>Performa may use cookies and similar technologies to:</p>
                            <ul>
                                <li>Keep users signed in</li>
                                <li>Remember preferences</li>
                                <li>Maintain security</li>
                                <li>Understand website usage</li>
                                <li>Improve website functionality</li>
                                <li>Analyse traffic and performance</li>
                            </ul>
                            <p>You may be able to control cookies through your browser settings.</p>
                            <p>Disabling certain cookies may affect some platform functionality.</p>
                        </div>

                        <div className="sec" id="s2">
                            <div className="sec-header">
                                <div className="sec-num">2</div>
                                <h2>How We Use Personal Information</h2>
                            </div>
                            <p>We may use personal information to:</p>
                            <ul>
                                <li>Create and manage user accounts.</li>
                                <li>Provide and operate Performa's services.</li>
                                <li>Facilitate booking requests.</li>
                                <li>Connect clients and artists.</li>
                                <li>Communicate with users.</li>
                                <li>Process Performa booking/service fee payments.</li>
                                <li>Provide customer support.</li>
                                <li>Process refund requests.</li>
                                <li>Investigate complaints and disputes.</li>
                                <li>Prevent fraud, abuse, and unauthorized activity.</li>
                                <li>Protect the security of the platform.</li>
                                <li>Improve website functionality and user experience.</li>
                                <li>Analyse platform usage and performance.</li>
                                <li>Send important service-related communications.</li>
                                <li>Comply with applicable laws and legal obligations.</li>
                                <li>Establish, exercise, or defend legal claims where necessary.</li>
                            </ul>
                            <p>We will not use personal information for purposes materially incompatible with the purpose for which it was collected unless permitted or required by applicable law.</p>
                        </div>

                        <div className="sec" id="s3">
                            <div className="sec-header">
                                <div className="sec-num">3</div>
                                <h2>Sharing Personal Information</h2>
                            </div>
                            <p>We may share relevant personal information with:</p>
                            
                            <h3>3.1 Other Users</h3>
                            <p>When necessary to facilitate a booking, certain information may be shared between the client and artist.</p>
                            <p>For example, a confirmed booking may require the parties to know information such as:</p>
                            <ul>
                                <li>Name</li>
                                <li>Contact information</li>
                                <li>Event details</li>
                                <li>Location</li>
                                <li>Booking requirements</li>
                            </ul>
                            <p>We only intend to share information reasonably necessary for the booking or related service.</p>

                            <h3>3.2 Service Providers</h3>
                            <p>We may use third-party providers for:</p>
                            <ul>
                                <li>Payment processing</li>
                                <li>Website hosting</li>
                                <li>Cloud storage</li>
                                <li>Email delivery</li>
                                <li>SMS or communication services</li>
                                <li>Analytics</li>
                                <li>Security</li>
                                <li>Technical support</li>
                            </ul>
                            <p>These providers may process personal information on our behalf or independently according to their respective agreements and privacy policies.</p>

                            <h3>3.3 Legal and Regulatory Requirements</h3>
                            <p>We may disclose information where reasonably necessary to:</p>
                            <ul>
                                <li>Comply with applicable law.</li>
                                <li>Respond to lawful requests from authorities.</li>
                                <li>Protect users or the public.</li>
                                <li>Investigate suspected fraud or unlawful activity.</li>
                                <li>Protect Performa's legal rights.</li>
                                <li>Enforce our Terms & Conditions.</li>
                            </ul>
                        </div>

                        <div className="sec" id="s4">
                            <div className="sec-header">
                                <div className="sec-num">4</div>
                                <h2>Payment Information</h2>
                            </div>
                            <p>Performa uses third-party payment providers to process payments for Performa's booking/service fees.</p>
                            <p>When you make a payment, you may be redirected to or interact with the payment provider's secure payment environment.</p>
                            <p>The payment provider may collect and process payment information under its own terms and privacy policy.</p>
                            <p>Performa may retain transaction records necessary for accounting, customer support, refunds, fraud prevention, and legal compliance.</p>
                        </div>

                        <div className="sec" id="s5">
                            <div className="sec-header">
                                <div className="sec-num">5</div>
                                <h2>Artist and Client Visibility</h2>
                            </div>
                            <p>Performa is a booking platform. Some information is intentionally made visible to other users to allow them to discover and book artists.</p>
                            <p>Artist profile information may be publicly visible, including:</p>
                            <ul>
                                <li>Artist name</li>
                                <li>Profile photograph</li>
                                <li>Biography</li>
                                <li>Portfolio</li>
                                <li>Services</li>
                                <li>Categories</li>
                                <li>Reviews</li>
                                <li>Service area</li>
                                <li>Other information intentionally published by the artist</li>
                            </ul>
                            <p>Users should avoid publishing private or sensitive information in public profile areas.</p>
                        </div>

                        <div className="sec" id="s6">
                            <div className="sec-header">
                                <div className="sec-num">6</div>
                                <h2>Data Retention</h2>
                            </div>
                            <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:</p>
                            <ul>
                                <li>Providing services</li>
                                <li>Maintaining accounts</li>
                                <li>Managing bookings</li>
                                <li>Handling refunds and disputes</li>
                                <li>Preventing fraud</li>
                                <li>Maintaining business records</li>
                                <li>Complying with legal obligations</li>
                                <li>Establishing or defending legal claims</li>
                            </ul>
                            <p>Retention periods may vary depending on the type of information and the purpose for which it is processed.</p>
                            <p>When information is no longer reasonably required, we may delete, anonymize, or securely dispose of it, subject to applicable legal and operational requirements.</p>
                        </div>

                        <div className="sec" id="s7">
                            <div className="sec-header">
                                <div className="sec-num">7</div>
                                <h2>Data Security</h2>
                            </div>
                            <p>Performa takes reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.</p>
                            <p>Security measures may include:</p>
                            <ul>
                                <li>Access controls</li>
                                <li>Authentication mechanisms</li>
                                <li>Secure communications</li>
                                <li>System monitoring</li>
                                <li>Appropriate hosting and infrastructure security</li>
                                <li>Restricted access to personal information</li>
                            </ul>
                            <p>However, no online system can be guaranteed to be completely secure.</p>
                            <p>Users are responsible for keeping their account credentials confidential.</p>
                        </div>

                        <div className="sec" id="s8">
                            <div className="sec-header">
                                <div className="sec-num">8</div>
                                <h2>Your Rights</h2>
                            </div>
                            <p>Subject to applicable law and any applicable limitations or exceptions, individuals may have rights relating to their personal information, including rights concerning:</p>
                            <ul>
                                <li>Access to personal information.</li>
                                <li>Correction or updating of inaccurate information.</li>
                                <li>Deletion or erasure in applicable circumstances.</li>
                                <li>Restriction or objection to certain processing.</li>
                                <li>Withdrawal of consent where processing is based on consent.</li>
                                <li>Other rights provided under applicable data protection law.</li>
                            </ul>
                            <p>Requests can be made by contacting Performa using the contact information below.</p>
                            <p>We may need to verify your identity before processing certain requests.</p>
                            <p>The availability and scope of these rights depend on applicable law.</p>
                        </div>

                        <div className="sec" id="s9">
                            <div className="sec-header">
                                <div className="sec-num">9</div>
                                <h2>Children's Privacy</h2>
                            </div>
                            <p>Performa is intended for users aged 18 and above.</p>
                            <p>We do not knowingly provide account registration or booking services to children under 18.</p>
                            <p>If we become aware that we have collected personal information from a person under 18 without an appropriate legal basis, we may take reasonable steps to delete the information.</p>
                        </div>

                        <div className="sec" id="s10">
                            <div className="sec-header">
                                <div className="sec-num">10</div>
                                <h2>International Data Processing</h2>
                            </div>
                            <p>Some of our third-party service providers may process information outside Sri Lanka.</p>
                            <p>Where personal information is transferred or processed outside Sri Lanka, Performa will take steps required by applicable law to ensure appropriate safeguards are applied.</p>
                        </div>

                        <div className="sec" id="s11">
                            <div className="sec-header">
                                <div className="sec-num">11</div>
                                <h2>Third-Party Websites and Services</h2>
                            </div>
                            <p>Performa may contain links to third-party websites or services.</p>
                            <p>These third parties operate independently from Performa and may have their own privacy policies.</p>
                            <p>Performa is not responsible for the privacy practices of third-party websites or services that are not controlled by Performa.</p>
                        </div>

                        <div className="sec" id="s12">
                            <div className="sec-header">
                                <div className="sec-num">12</div>
                                <h2>Marketing Communications</h2>
                            </div>
                            <p>We may send service-related communications such as:</p>
                            <ul>
                                <li>Booking confirmations</li>
                                <li>Booking updates</li>
                                <li>Account notifications</li>
                                <li>Security alerts</li>
                                <li>Payment notifications</li>
                                <li>Refund notifications</li>
                            </ul>
                            <p>Where permitted by applicable law, we may also send promotional communications.</p>
                            <p>You may opt out of promotional communications by using the unsubscribe mechanism provided in the communication or by contacting us.</p>
                            <p>Opting out of marketing communications will not prevent us from sending essential service or transactional messages.</p>
                        </div>

                        <div className="sec" id="s13">
                            <div className="sec-header">
                                <div className="sec-num">13</div>
                                <h2>Data Breaches and Security Incidents</h2>
                            </div>
                            <p>If Performa becomes aware of a personal data breach that requires notification under applicable law, we will take appropriate steps to investigate, contain, and respond to the incident and make any required notifications.</p>
                        </div>

                        <div className="sec" id="s14">
                            <div className="sec-header">
                                <div className="sec-num">14</div>
                                <h2>Changes to This Privacy Policy</h2>
                            </div>
                            <p>We may update this Privacy Policy from time to time.</p>
                            <p>When changes are made, we will update the effective date at the beginning of this policy.</p>
                            <p>Where required by applicable law, we will provide additional notice or obtain consent for material changes.</p>
                        </div>

                        <div className="sec" id="s15">
                            <div className="sec-header">
                                <div className="sec-num">15</div>
                                <h2>Contact Us</h2>
                            </div>
                            <p>If you have questions about this Privacy Policy or wish to make a privacy-related request, contact:</p>
                            <div className="info-box" style={{ marginTop: "16px" }}>
                                <p>
                                    <strong>Performa</strong><br/>
                                    📧 <strong>Email:</strong> infoperforma.lk@gmail.com<br/>
                                    📞 <strong>Phone:</strong> +94 70 403 5236<br/>
                                    📍 <strong>Location:</strong> Kandy, Sri Lanka
                                </p>
                            </div>
                            <p style={{ marginTop: "14px", color: "#555", fontSize: "14px" }}>
                                When contacting us about personal data, please describe your request clearly so that we can respond appropriately.
                            </p>
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

export default PrivacyPolicy;