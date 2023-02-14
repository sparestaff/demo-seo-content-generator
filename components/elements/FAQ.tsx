import Link from "next/link";
import Collapse from "antd/lib/collapse";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";
import { FAQ } from "types/FAQ";

const { Panel } = Collapse;

const Faq = ({
  keyword,
  location,
  content,
  faqs,
}: {
  keyword: string | undefined;
  content?: string;
  location?: string;
  // faqs: FAQ[] | undefined;
  faqs: FAQ[];
}) => {

  faqs = [
    {
      _id: "1",
      header: "What is your return policy?",
      body: "We accept returns within 30 days of purchase for items that are unused and in their original packaging. Please see our returns page for more information."
    },
    {
      _id: "2",
      header: "How long does shipping take?",
      body: "Shipping times vary depending on your location and the shipping method you select at checkout. Please see our shipping page for estimated delivery times."
    },
    {
      _id: "3",
      header: "What payment methods do you accept?",
      body: "We accept Visa, Mastercard, American Express, EFTPOS, Cash and Internet Bank Transfer."
    },
    {
      _id: "4",
      header: "Do you offer Free quotes?",
      body: "Yes, we offer a Free, quick initial consultation and a Free quote. Simply visit our store or book an appointment on our website"
    },
    {
      _id: "5",
      header: "What is your privacy policy?",
      body: "We take your privacy seriously and only collect information that is necessary to process your order. Please see our privacy policy for more information."
    },
    {
      _id: "6",
      header: "Can I cancel my order?",
      body: "You can cancel your order within 24 hours of placing it. After that, it may have already been shipped and we won't be able to cancel it."
    },
    {
      _id: "7",
      header: "What should I do if I receive a defective item?",
      body: "Please contact us immediately and we will work with you to resolve the issue. We may ask you to provide photos or other evidence of the defect."
    },
    {
      _id: "8",
      header: "How do I track my order?",
      body: "You will receive a tracking number by email once your order has shipped. You can use this number to track your order on our website or on the carrier's website."
    }
  ];

  return (
    <div className="py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5">
      <h4 className="text-black text-center font-bold text-3xl">
        Frequently asked questions
      </h4>
      <p className="text-center py-10">
        {content ? (
          customParser({ customContent: content, keyword })
        ) : (
          <>
            Your questions answered by our
            {location ? " " + camelCaseAll(String(location)) : ""} {keyword}{" "}
            experts. Can&apos;t find an answer?
          </>
        )}
        <br />
        Call us on: <Link href="tel:1800858382">1800 85 83 82</Link>
      </p>
      <Collapse bordered={false}>
        {faqs?.length
          ? faqs.map((item) => (
              <Panel header={<h4>{item.header}</h4>} key={item._id} forceRender>
                {customParser({ customContent: item.body })}
              </Panel>
            ))
          : null}
      </Collapse>
    </div>
  );
};

export default Faq;
