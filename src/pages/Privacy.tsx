import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information you provide directly to us when using
                Bill Bhejo, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, address, tax ID)</li>
                <li>Payment information</li>
                <li>Invoice data and history</li>
                <li>WhatsApp communication logs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our invoicing service</li>
                <li>Processing your transactions</li>
                <li>Sending you important service updates</li>
                <li>Improving our services</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to maintain the security of your personal information, including
                encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information with third-party service providers who assist us in
                operating our service, processing payments, and analyzing our
                service performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at hello@growtegy.com
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
