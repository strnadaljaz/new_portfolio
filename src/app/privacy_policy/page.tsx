"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#2C2F36] min-h-screen flex flex-col">
            <Navbar />
            <section className="flex-grow px-4 py-12 md:py-16">
                <article className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[#1F222A]/80 p-6 md:p-10 text-gray-300 shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
                    <p className="text-sm md:text-base text-gray-400 mb-8">
                        <strong>Last updated:</strong> July 13, 2026
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">1. Data Controller</h2>
                    <p className="mb-4 leading-relaxed">The data controller responsible for the processing of your personal data is:</p>
                    <p className="mb-4 leading-relaxed">
                        <strong>Aljaž Strnad</strong>
                        <br />
                        Email:{" "}
                        <a
                            href="mailto:aljaz.strnad@student.um.si"
                            className="text-[#FFD700] hover:text-yellow-400 underline underline-offset-4 transition-colors"
                        >
                            aljaz.strnad@student.um.si
                        </a>
                        <br />
                        Phone:  
                        <a href="phone:+38651769401" className="text-[#FFD700] hover:text-yellow-400 underline underline-offset-4 transition-colors"> +386 (0)51 769 401</a>
                    </p>
                    <p className="mb-4 leading-relaxed">
                        If you have any questions regarding this Privacy Policy or the processing of your personal data,
                        please contact us using the information above.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">2. Personal Data We Collect</h2>
                    <p className="mb-4 leading-relaxed">When you use our contact form, we may collect the following personal information:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>The content of your message</li>
                    </ul>
                    <p className="mb-4 leading-relaxed">
                        We may also automatically collect certain technical information when you visit our website, such
                        as your IP address, browser type, operating system, access time, and other technical data
                        necessary for the secure operation of the website.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">3. Purpose of Processing</h2>
                    <p className="mb-4 leading-relaxed">We process your personal data solely for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Responding to your inquiries submitted through the contact form.</li>
                        <li>Communicating with you regarding your request.</li>
                        <li>Maintaining the security and functionality of our website.</li>
                        <li>Complying with applicable legal obligations.</li>
                    </ul>
                    <p className="mb-4 leading-relaxed">
                        We do <strong>not</strong> use your personal data for marketing purposes unless you have
                        explicitly consented to such use.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">4. Legal Basis for Processing</h2>
                    <p className="mb-4 leading-relaxed">
                        We process your personal data in accordance with Article 6(1) of the General Data Protection
                        Regulation (GDPR):
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            <strong>Article 6(1)(b):</strong> Processing is necessary to respond to your request or to
                            take steps prior to entering into a contract.
                        </li>
                        <li>
                            <strong>Article 6(1)(f):</strong> Processing is necessary for our legitimate interests,
                            including maintaining website security and communicating with website visitors.
                        </li>
                        <li>
                            <strong>Article 6(1)(c):</strong> Processing is necessary to comply with legal obligations
                            where applicable.
                        </li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">5. Data Retention</h2>
                    <p className="mb-4 leading-relaxed">
                        We retain your personal data only for as long as necessary to fulfill the purposes for which it
                        was collected.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Information submitted through the contact form is generally retained for up to{" "}
                        <strong>12 months</strong> after our last communication unless a longer retention period is
                        required by law or necessary to establish, exercise, or defend legal claims.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">6. Sharing of Personal Data</h2>
                    <p className="mb-4 leading-relaxed">We do not sell, rent, or trade your personal data.</p>
                    <p className="mb-4 leading-relaxed">
                        Your personal data may be shared with trusted service providers who help us operate our website
                        and communication services, such as:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Web hosting providers</li>
                        <li>Email service providers</li>
                        <li>IT support providers</li>
                    </ul>
                    <p className="mb-4 leading-relaxed">
                        These service providers process personal data only on our behalf and under appropriate
                        contractual and security obligations.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">7. Cookies</h2>
                    <p className="mb-4 leading-relaxed">This website does not use cookies for advertising or user tracking.</p>
                    <p className="mb-4 leading-relaxed">
                        We use Vercel Web Analytics to collect aggregated and privacy-friendly usage statistics to help us understand how the website is used and improve its performance. Vercel Web Analytics does not rely on cookies to collect this information.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">8. Your Rights</h2>
                    <p className="mb-4 leading-relaxed">Under the GDPR, you have the right to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Access your personal data.</li>
                        <li>Request correction of inaccurate or incomplete data.</li>
                        <li>Request deletion of your personal data where legally applicable.</li>
                        <li>Request restriction of processing.</li>
                        <li>Object to processing based on legitimate interests.</li>
                        <li>Request data portability where applicable.</li>
                        <li>Withdraw consent at any time where processing is based on consent.</li>
                        <li>Lodge a complaint with your local data protection authority.</li>
                    </ul>
                    <p className="mb-4 leading-relaxed">
                        To exercise any of these rights, please contact us using the contact details provided above.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">9. Data Security</h2>
                    <p className="mb-4 leading-relaxed">
                        We implement appropriate technical and organizational measures to protect your personal data
                        against unauthorized access, disclosure, alteration, or destruction.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        However, no method of transmission over the Internet or electronic storage can be guaranteed to
                        be completely secure.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">10. International Data Transfers</h2>
                    <p className="mb-4 leading-relaxed">
                        Where our service providers are located outside the European Economic Area (EEA), we ensure that
                        appropriate safeguards are in place in accordance with the GDPR, such as the use of Standard
                        Contractual Clauses or reliance on an adequacy decision issued by the European Commission.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">11. Changes to This Privacy Policy</h2>
                    <p className="mb-4 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect legal, technical, or operational
                        changes.
                    </p>
                    <p className="leading-relaxed">
                        The latest version will always be published on this page together with the date of the latest
                        update.
                    </p>
                </article>
            </section>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;