import Link from "next/link";
import Collapse from "antd/lib/collapse";
import customParser from "utils/customParser";
import { FAQ } from "types/FAQ";

const { Panel } = Collapse;

const Faq = ({
  keyword,
  location,
  content,
  faqs,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content: string | undefined;
  faqs: FAQ[];
}) => {
  return (
    <div className="py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5">
      <h4 className="text-black text-center font-sans font-bold text-3xl">
        Frequently asked questions
      </h4>
      <p className="text-center py-10">
        {content ? (
          customParser({ customContent: content, keyword, location })
        ) : (
          <>
            Your questions answered by our computer experts. Can&apos;t find an
            answer?
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
