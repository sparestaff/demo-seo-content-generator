import Link from "next/link";
import Button from "antd/lib/button";
import { camelCaseAll } from "utils/formatter";

const ColumnContentWithLocation4 = ({
  keyword,
  location,
}: {
  keyword: string;
  location: string;
}) => {
  return (
    <div className="max-w-6xl mx-auto py-10 sm:py-20">
      <h3 className="text-3xl text-black font-bold font-sans text-center mb-10">
        About Safemode Computer Service
      </h3>
      <div className="flex sm:justify-between sm:flex-row flex-col sm:gap-20">
        <div className="grid grid-cols-1 w-full gap-5 sm:w-1/2 py-5 ">
          <h4 className="text-black font-sans font-bold text-2xl">
            Your local {camelCaseAll(location)} {keyword} experts
          </h4>
          <div>
            <Link href="https://safemode.com.au/" target="_blank">
              Safemode Computer Service
            </Link>{" "}
            is a team of friendly computer IT professionals. We commit ourselves
            to helping residential customers to get their computers to the best
            working condition; helping businesses by providing better IT support
            and services.
            <br />
            <br /> We&apos;re rated in the Best 3 Computer Repair Service
            Centers in Sydney from 2016 to 2022. We&apos;ve worked diligently
            over the years to build a strong committed team of full-time
            experienced computer technicians plus our network of trusted
            suppliers.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 w-full sm:w-1/2 py-5 ">
          <h4 className="text-black font-sans font-bold text-2xl">
            Visit our {keyword} shop
          </h4>
          <div>
            Trust is an important factor when it comes to choosing a computer
            technician that you can trust. Thus, we have a long-established
            computer shop for you to come and visit us. So you know that
            we&apos;re always there when you need us.
          </div>
          <h4 className="text-black font-sans font-bold text-2xl">
            We come to you, or remote troubleshooting
          </h4>
          <div>
            Can&apos;t leave your home or office? We also offer pickup &
            delivery option, computer services at your place, or remote
            troubleshooting for certain problems.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnContentWithLocation4;
