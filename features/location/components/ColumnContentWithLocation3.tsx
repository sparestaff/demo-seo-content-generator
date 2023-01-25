import Button from "antd/lib/button";

const ColumnContentWithLocation3 = ({
  keyword,
  location,
}: {
  keyword: string;
  location: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto py-10 sm:py-20">
      <h3 className="text-3xl text-black font-bold font-sans text-center mb-10">
        All the support you need
      </h3>
      <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col sm:gap-20">
        <div className="grid grid-cols-1 content-center gap-5 sm:gap-10  w-full sm:w-1/2 py-5 ">
          <h4 className="text-black font-sans font-bold text-2xl">
            For all your {location} {keyword} needs
          </h4>
          <div>
            By providing {keyword} at both customer&apos;s home / office and our
            workshop, our computer technicians are experienced with {keyword}{" "}
            plus many other computer IT support for home and small businesses:
            email support such as Office 365, Google Workspace email support;
            office networking setup; system downgrade and upgrade; data backup
            and security; business printer setup and configuration and many
            more. Just ask and we&apos;ll be happy to assist you.
          </div>
        </div>
        <div className="grid grid-cols-1 content-center gap-5 sm:gap-10  w-full sm:w-1/2 py-5 ">
          <h4 className="text-black font-sans font-bold text-2xl">
            Pre and after-sales support
          </h4>
          <div>
            Providing {keyword} doesn&apos;t end after money is transacted. Most
            customers have questions that need answers after getting their
            computers serviced. We understand that pre and after-sales support
            is an integral part of our business. Thus, our friendly staff is
            happy to assist you further for free of charge should you have any
            questions after we&apos;ve provided the services. This can be done
            over the phone, via email, over the counter, or remote
            troubleshooting. If we&apos;re not the best person to assist you,
            we&apos;ll refer you to someone who can.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button type="primary" size="large" shape="round">
          Get a Quick Quote
        </Button>
      </div>
    </div>
  );
};

export default ColumnContentWithLocation3;
