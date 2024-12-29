import { ScrollText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <ScrollText className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Terms and Conditions
          </h1>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Bill Bhejo, you agree to be bound by
                these Terms and Conditions. If you disagree with any part of
                these terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Service Description
              </h2>
              <p className="mb-4">
                Bill Bhejo provides WhatsApp-based invoicing solutions that
                allow users to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and send invoices via WhatsApp</li>
                <li>Track payment status</li>
                <li>Manage customer information</li>
                <li>Generate financial reports</li>
                <li>Access invoice history</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Obligations
              </h2>
              <p className="mb-4">Users must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of their account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misuse or attempt to manipulate the service</li>
                <li>Respect other users' privacy and rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Payment Terms
              </h2>
              <p>
                Users agree to pay all fees associated with their chosen
                subscription plan. Payments are processed securely through our
                authorized payment partners. Refunds are subject to our refund
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of our service are
                owned by us and are protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                We shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of
                our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend access to our
                service immediately, without prior notice, for any breach of
                these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes via email or through our
                service.
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

export default Terms;
