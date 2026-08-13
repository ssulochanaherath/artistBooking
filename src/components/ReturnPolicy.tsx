import React from "react";
import { useSearchParams } from "react-router-dom";
import LegalPageNavbar, { getLegalPageVariant } from "./LegalPageNavbar";

const ReturnPolicy: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navbarVariant = getLegalPageVariant(searchParams.get("from"));

    return (
        <>
            <style>{`
        .return-page * { margin: 0; padding: 0; box-sizing: border-box; }
        .return-page { font-family: 'Fraunces', serif; background: #fff; color: #111; }

        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400&display=swap');

        .return-page nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 60px; background: #fff; border-bottom: 1px solid #eee; }
        .return-page nav .logo { font-size: 22px; font-weight: 800; color: #111; }
        .return-page nav .logo span { color: #e63946; }
        .return-page nav a { color: #555; text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 28px; }
        .return-page nav .btn { background: #e63946; color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-left: 28px; text-decoration: none; }

        .return-page .hero { background: #f9f9f9; padding: 80px 60px 60px; border-bottom: 1px solid #eee; }
        .return-page .hero .tag { display: inline-block; background: rgba(230,57,70,0.08); color: #e63946; font-size: 13px; font-weight: 600; padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(230,57,70,0.2); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .return-page .hero h1 { font-size: 52px; font-weight: 900; letter-spacing: -2px; line-height: 1.05; color: #111; }
        .return-page .hero h1 span { color: #e63946; }
        .return-page .hero p { color: #888; font-size: 15px; margin-top: 12px; }

        .return-page .layout { display: grid; grid-template-columns: 260px 1fr; }
        .return-page .sidebar { background: #f9f9f9; border-right: 1px solid #eee; padding: 40px 28px; position: sticky; top: 0; height: fit-content; }
        .return-page .content { padding: 50px 60px; }
        .return-page .sidebar .sib-title { font-size: 11px; font-weight: 700; color: #bbb; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
        .return-page .sidebar a { display: block; font-size: 14px; color: #888; text-decoration: none; padding: 8px 12px; border-radius: 8px; margin-bottom: 2px; transition: all 0.2s; }
        .return-page .sidebar a:hover { color: #111; background: #eee; }

        .return-page .meta-bar { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 14px 20px; margin-bottom: 50px; font-size: 13px; color: #999; display: flex; gap: 24px; flex-wrap: wrap; }
        .return-page .meta-bar strong { color: #555; }

        .return-page .sec { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid #eee; }
        .return-page .sec:last-child { border-bottom: none; }
        .return-page .sec-header { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .return-page .sec-num { background: #e63946; color: #fff; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; }
        .return-page .sec h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #111; }
        .return-page .sec p { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 12px; }
        .return-page .sec h3 { font-size: 14px; font-weight: 700; color: #333; margin: 20px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .return-page .sec ul { padding-left: 0; list-style: none; }
        .return-page .sec ul li { font-size: 15px; color: #555; line-height: 1.8; padding: 5px 0 5px 20px; position: relative; }
        .return-page .sec ul li::before { content: ''; position: absolute; left: 0; top: 14px; width: 6px; height: 6px; background: #e63946; border-radius: 50%; }

        .return-page .notice { background: #fff5f5; border: 1px solid rgba(230,57,70,0.2); border-left: 3px solid #e63946; border-radius: 0 10px 10px 0; padding: 16px 20px; margin: 16px 0; }
        .return-page .notice p { color: #c0392b; font-size: 14px; margin: 0; }
        .return-page .notice strong { color: #e63946; }

        .return-page .info-box { background: #f9f9f9; border: 1px solid #eee; border-radius: 12px; padding: 20px 22px; margin: 16px 0; }
        .return-page .info-box p { color: #555; font-size: 14px; margin: 0; line-height: 1.7; }

        .return-page table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        .return-page table th, .return-page table td { text-align: left; font-size: 14px; padding: 12px 16px; border-bottom: 1px solid #eee; color: #555; }
        .return-page table th { color: #111; font-weight: 700; background: #f9f9f9; }

        .return-page footer { background: #fff; border-top: 1px solid #eee; padding: 30px 60px; display: flex; align-items: center; justify-content: space-between; }
        .return-page footer .logo { font-size: 18px; font-weight: 800; color: #111; }
        .return-page footer .logo span { color: #e63946; }
        .return-page footer p { font-size: 13px; color: #999; }

        @media (max-width: 900px) {
          .return-page nav { padding: 16px 24px; }
          .return-page .hero { padding: 50px 24px 40px; }
          .return-page .hero h1 { font-size: 36px; }
          .return-page .layout { grid-template-columns: 1fr; }
          .return-page .sidebar { display: none; }
          .return-page .content { padding: 32px 24px; }
          .return-page footer { flex-direction: column; gap: 12px; text-align: center; padding: 24px; }
          .return-page table { display: block; overflow-x: auto; }
        }
      `}</style>

            <LegalPageNavbar variant={navbarVariant} />

            <div className="return-page" style={{ paddingTop: "72px" }}>
                <div className="hero">
                    <div className="tag">Legal</div>
                    <h1>
                        Return &amp; <span>Refund Policy</span>
                    </h1>
                    <p>
                        Effective Date: August 12, 2026
                    </p>
                </div>

                <div className="layout">
                    <div className="sidebar">
                        <p className="sib-title">Contents</p>
                        <a href="#s1">1. Overview</a>
                        <a href="#s2">2. How Payments Work</a>
                        <a href="#s3">3. Cancellations by the Client</a>
                        <a href="#s4">4. Cancellation by the Artist / Non-Fulfillment</a>
                        <a href="#s5">5. Refund Eligibility</a>
                        <a href="#s6">6. Performa Booking/Service Fee</a>
                        <a href="#s7">7. Payment Gateway Charges</a>
                        <a href="#s8">8. Refund Process</a>
                        <a href="#s9">9. Duplicate or Erroneous Payments</a>
                        <a href="#s10">10. Disputes Between Clients and Artists</a>
                        <a href="#s11">11. No Refund of Artist Performance Fees by Performa</a>
                        <a href="#s12">12. Changes to This Policy</a>
                        <a href="#s13">13. Governing Law</a>
                        <a href="#s14">14. Contact Us</a>
                    </div>

                    <div className="content">
                        <div className="meta-bar">
                            <span>
                                Platform: <strong>Performa · performa.lk</strong>
                            </span>
                            <span>
                                Location: <strong>Sri Lanka</strong>
                            </span>
                            <span>
                                Governed by: <strong>Sri Lankan Law</strong>
                            </span>
                        </div>

                        <div className="sec" id="s1">
                            <div className="sec-header">
                                <div className="sec-num">1</div>
                                <h2>Overview</h2>
                            </div>
                            <p>
                                Performa is an online artist booking platform that connects clients with independent artists and
                                creative service providers in Sri Lanka.
                            </p>
                            <p>
                                Performa charges clients a booking/service fee for using the platform and related booking
                                services. This Return & Refund Policy explains how payments made to Performa for its
                                booking/service fee are handled when a booking is cancelled or not fulfilled.
                            </p>
                            <p>
                                The artist's performance fee is separate from Performa's booking/service fee. Unless expressly
                                stated otherwise, the performance fee is agreed and paid directly between the client and the
                                artist and is not processed, held, or transferred by Performa.
                            </p>
                            <p>
                                By making a payment to Performa, you agree to this Return & Refund Policy together with
                                Performa's Terms & Conditions and Privacy Policy.
                            </p>
                        </div>

                        <div className="sec" id="s2">
                            <div className="sec-header">
                                <div className="sec-num">2</div>
                                <h2>How Payments Work</h2>
                            </div>
                            <p>
                                To help you understand what a refund covers, a typical booking on Performa works as follows:
                            </p>
                            <ul>
                                <li>1. A client submits a booking request to an artist with the relevant event details.</li>
                                <li>2. The artist reviews and accepts the booking request.</li>
                                <li>3. The client and artist agree directly on the artist's performance fee and other performance-related arrangements.</li>
                                <li>4. The client is then asked to pay Performa's applicable booking/service fee to confirm the booking.</li>
                                <li>5. The client pays Performa's booking/service fee securely through Performa's payment gateway.</li>
                                <li>6. This payment is made for Performa's platform, booking, and related services and is received by Performa.</li>
                                <li>7. The artist's performance fee is a separate amount agreed between the client and the artist.</li>
                                <li>8. Performa does not collect, process, hold, settle, or transfer the artist's performance fee through its payment system.</li>
                                <li>9. Any arrangements relating to payment of the artist's performance fee, including the amount, timing, and payment method, are made directly between the client and the artist.</li>
                            </ul>
                            <p>This Return & Refund Policy applies only to payments made to Performa.</p>
                        </div>

                        <div className="sec" id="s3">
                            <div className="sec-header">
                                <div className="sec-num">3</div>
                                <h2>Cancellations by the Client</h2>
                            </div>
                            <p>
                                If you need to cancel a booking after paying Performa's booking/service fee, your eligibility for a
                                refund depends on how far in advance you cancel relative to the event date.
                            </p>
                            <table>
                                <thead>
                                <tr>
                                    <th>Cancellation Window</th>
                                    <th>Refund of Performa Booking/Service Fee</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>More than 7 days before the event</td>
                                    <td>100% refund</td>
                                </tr>
                                <tr>
                                    <td>Between 7 and 3 days before the event</td>
                                    <td>75% refund</td>
                                </tr>
                                <tr>
                                    <td>Less than 3 days before the event</td>
                                    <td>Non-refundable</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>The above refund rules apply only to the booking/service fee paid to Performa.</p>
                            <p>
                                Any performance fee or other payment separately agreed or paid between the client and artist is
                                outside Performa's payment and refund process.
                            </p>
                        </div>

                        <div className="sec" id="s4">
                            <div className="sec-header">
                                <div className="sec-num">4</div>
                                <h2>Cancellation by the Artist / Non-Fulfillment</h2>
                            </div>
                            <p>
                                If an artist cancels an accepted booking, fails to attend, or otherwise fails to provide the agreed
                                service, the client may be eligible for a full refund of the Performa booking/service fee.
                            </p>
                            <p>To request a refund:</p>
                            <ul>
                                <li>Report the cancellation or non-fulfillment to Performa within 3 days of the scheduled event.</li>
                                <li>Provide any relevant information or evidence requested by Performa.</li>
                                <li>Performa will review the booking record, communications, and other relevant information.</li>
                                <li>If Performa confirms that the booking was cancelled or not fulfilled by the artist, the approved refund of the Performa booking/service fee will be processed to the original payment method.</li>
                            </ul>
                            <p>
                                Any performance fee paid directly to the artist is a separate transaction between the client and
                                artist. Performa does not control that payment and cannot guarantee or process a refund of that
                                payment.
                            </p>
                        </div>

                        <div className="sec" id="s5">
                            <div className="sec-header">
                                <div className="sec-num">5</div>
                                <h2>Refund Eligibility</h2>
                            </div>
                            <p>A client may be eligible for a refund of the Performa booking/service fee where:</p>
                            <ul>
                                <li>The client cancels within an eligible cancellation period described in this policy.</li>
                                <li>The artist cancels an accepted booking.</li>
                                <li>The artist fails to attend or otherwise fails to fulfill the confirmed booking.</li>
                                <li>A duplicate payment was made to Performa due to a technical error.</li>
                                <li>An erroneous payment was made to Performa due to a platform or payment gateway error.</li>
                                <li>The booking materially differs from what was confirmed through Performa, as determined by Performa after reviewing the relevant information.</li>
                            </ul>
                            <p>Refunds of the Performa booking/service fee are generally not available where:</p>
                            <ul>
                                <li>The event takes place as confirmed and the artist provides the agreed service.</li>
                                <li>The client requests cancellation after the applicable non-refundable period.</li>
                                <li>The client is dissatisfied with subjective matters that do not represent a failure to provide the agreed service.</li>
                                <li>The issue relates solely to a payment made directly between the client and artist.</li>
                            </ul>
                        </div>

                        <div className="sec" id="s6">
                            <div className="sec-header">
                                <div className="sec-num">6</div>
                                <h2>Performa Booking/Service Fee</h2>
                            </div>
                            <p>
                                The booking/service fee charged by Performa is a fee for access to and use of the Performa
                                platform and related booking services.
                            </p>
                            <p>The fee may cover services such as:</p>
                            <ul>
                                <li>Artist discovery</li>
                                <li>Booking request management</li>
                                <li>Platform access</li>
                                <li>Booking coordination</li>
                                <li>Communication tools</li>
                                <li>Booking administration</li>
                            </ul>
                            <p>The applicable booking/service fee is displayed to the client before payment is completed.</p>
                            <p>The Performa booking/service fee is separate from the artist's performance fee.</p>
                        </div>

                        <div className="sec" id="s7">
                            <div className="sec-header">
                                <div className="sec-num">7</div>
                                <h2>Payment Gateway Charges</h2>
                            </div>
                            <p>Payments made to Performa may be processed through a third-party payment gateway.</p>
                            <p>
                                Where a payment gateway or payment provider applies processing charges, certain charges
                                may be non-refundable or may not be recoverable by Performa.
                            </p>
                            <p>
                                Any non-refundable payment processing or gateway charges may affect the amount refunded,
                                where permitted by applicable law and the payment provider's terms.
                            </p>
                        </div>

                        <div className="sec" id="s8">
                            <div className="sec-header">
                                <div className="sec-num">8</div>
                                <h2>Refund Process</h2>
                            </div>
                            <p>To request a refund, the client should:</p>
                            <ul>
                                <li>1. Submit a refund request through their Performa account, where available; or</li>
                                <li>2. Contact Performa using the contact information provided below.</li>
                            </ul>
                            <p>Refund requests should include:</p>
                            <ul>
                                <li>Booking reference, if available</li>
                                <li>Client name</li>
                                <li>Event date</li>
                                <li>Reason for the refund request</li>
                                <li>Relevant supporting information</li>
                            </ul>
                            <p>Performa will normally review refund requests within <strong>5 business days</strong>.</p>
                            <p>
                                If a refund is approved, Performa will initiate the refund through the original payment method or
                                payment gateway.
                            </p>
                            <p>
                                After Performa initiates the refund, it may take an additional <strong>5–7 business days</strong> or longer for
                                the funds to appear in the client's account, depending on the payment provider, bank, card
                                issuer, or other financial institution.
                            </p>
                        </div>

                        <div className="sec" id="s9">
                            <div className="sec-header">
                                <div className="sec-num">9</div>
                                <h2>Duplicate or Erroneous Payments</h2>
                            </div>
                            <p>
                                If a client believes that they have been charged more than once for the same Performa
                                booking/service fee or that an incorrect amount was charged because of a technical error, they
                                should contact Performa as soon as possible.
                            </p>
                            <p>
                                Performa will review the relevant transaction records and, where a duplicate or erroneous
                                payment is confirmed, process an appropriate refund.
                            </p>
                        </div>

                        <div className="sec" id="s10">
                            <div className="sec-header">
                                <div className="sec-num">10</div>
                                <h2>Disputes Between Clients and Artists</h2>
                            </div>
                            <p>
                                If a client and artist disagree about whether a booking was fulfilled, either party may raise the
                                matter with Performa.
                            </p>
                            <p>Performa may review:</p>
                            <ul>
                                <li>Booking information</li>
                                <li>Booking status</li>
                                <li>Messages exchanged through the platform</li>
                                <li>Cancellation information</li>
                                <li>Evidence provided by the parties</li>
                                <li>Other relevant information available to Performa</li>
                            </ul>
                            <p>Performa may determine whether the client is eligible for a refund of the Performa booking/service fee.</p>
                            <p>
                                Performa's decision regarding eligibility for a refund of a Performa booking/service fee will be
                                final for the purpose of processing that refund through the Performa platform, subject to any
                                rights available under applicable law.
                            </p>
                            <p>
                                Performa does not determine or guarantee the outcome of disputes concerning payments made
                                directly between clients and artists.
                            </p>
                        </div>

                        <div className="sec" id="s11">
                            <div className="sec-header">
                                <div className="sec-num">11</div>
                                <h2>No Refund of Artist Performance Fees by Performa</h2>
                            </div>
                            <p>The artist's performance fee is separate from Performa's booking/service fee.</p>
                            <p>
                                Because Performa does not collect, hold, or process the artist's performance fee, Performa
                                cannot provide or guarantee a refund of an artist's performance fee.
                            </p>
                            <p>
                                Any dispute concerning an artist's performance fee must be addressed between the client and
                                the artist, unless applicable law or a separate written agreement provides otherwise.
                            </p>
                        </div>

                        <div className="sec" id="s12">
                            <div className="sec-header">
                                <div className="sec-num">12</div>
                                <h2>Changes to This Policy</h2>
                            </div>
                            <p>Performa may update this Return & Refund Policy from time to time.</p>
                            <p>When changes are made, Performa will update the effective date shown at the beginning of this policy.</p>
                            <p>Where appropriate, Performa may provide notice of significant changes through the platform.</p>
                            <p>
                                Continued use of Performa after the updated policy becomes effective constitutes acceptance of
                                the updated policy, to the extent permitted by applicable law.
                            </p>
                        </div>

                        <div className="sec" id="s13">
                            <div className="sec-header">
                                <div className="sec-num">13</div>
                                <h2>Governing Law</h2>
                            </div>
                            <p>This Return & Refund Policy is governed by the laws of Sri Lanka.</p>
                            <p>
                                Any disputes relating to this policy will be subject to the applicable laws and jurisdiction of Sri Lanka.
                            </p>
                        </div>

                        <div className="sec" id="s14">
                            <div className="sec-header">
                                <div className="sec-num">14</div>
                                <h2>Contact Us</h2>
                            </div>
                            <p>If you have questions about this Return & Refund Policy or wish to request a refund, please contact:</p>
                            <div className="info-box" style={{ marginTop: "16px" }}>
                                <p>
                                    <strong>Performa</strong><br/>
                                    📧 <strong>Email:</strong> infoperforma.lk@gmail.com<br/>
                                    📞 <strong>Phone:</strong> +94 70 403 5236<br/>
                                    📍 <strong>Location:</strong> Kandy, Sri Lanka<br/>
                                    🌐 <strong>Website:</strong> performa.lk
                                </p>
                            </div>
                            <p style={{ marginTop: "14px", color: "#555", fontSize: "14px" }}>
                                This Return & Refund Policy should be read together with Performa's Terms & Conditions and
                                Privacy Policy.
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

export default ReturnPolicy;