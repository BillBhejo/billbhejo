import { ReceiptIndianRupee } from "lucide-react";
import PolicyHeader from "../components/ui/PolicyHeader";
import PolicySection from "../components/ui/PolicySection";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <PolicyHeader
            icon={ReceiptIndianRupee}
            title="Cancellation & Refund Policy"
          />

          <div className="space-y-8 text-gray-600">
            <PolicySection title="1. Subscription Cancellation">
              <p className="mb-4">
                You can cancel your subscription at any time through your
                WhatsApp App. <br />
                <br />
                Upon cancellation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your service will continue until the end of the current
                  billing period
                </li>
                <li>
                  No partial refunds will be issued for unused days in the
                  current billing period
                </li>
                <li>
                  You'll retain access to all features until the subscription
                  expires
                </li>
                <li>
                  Your data will be retained for 30 days after cancellation
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="2. Refund Eligibility">
              <p className="mb-4">
                We offer refunds under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Within 14 days of initial subscription (first-time subscribers
                  only)
                </li>
                <li>Service outage lasting more than 24 hours</li>
                <li>Incorrect charging or billing errors</li>
                <li>Technical issues preventing core service functionality</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Refund Process">
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our support team via email</li>
                <li>Provide your account details and reason for refund</li>
                <li>Include any relevant documentation or screenshots</li>
                <li>Allow up to 5-7 business days for processing</li>
              </ol>
            </PolicySection>

            <PolicySection title="4. Non-Refundable Items">
              <p>The following are not eligible for refunds:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Add-on services or features</li>
                <li>Custom development work</li>
                <li>Partial months of service</li>
                <li>Subscriptions cancelled after the 14-day period</li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Payment Processing">
              <p>
                Refunds will be processed to the original payment method used
                for the purchase. Processing times may vary depending on your
                payment provider and location.
              </p>
            </PolicySection>

            <PolicySection title="6. Disputes">
              <p>
                If you believe your refund request was incorrectly denied,
                please contact our support team at hello@growtegy.com with your
                case details for review.
              </p>
            </PolicySection>

            <div className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Refund;
