import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";

const ColumnContent3 = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row	text-center sm:justify-between sm:items-center max-w-6xl mx-auto py-20">
      <div className="grid grid-cols-1 content-center gap-5 py-5 sm:gap-10 w-full sm:w-1/2">
        <h3 className="text-3xl text-black font-bold font-sans">
          Custom content #16
        </h3>
        <div>
          Custom content #17 (fresh optional content block by Site Admin/user)
        </div>
      </div>
      <div>
        <Image
          src={HERO_SECTION_IMAGE}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
    </div>
  );
};

export default ColumnContent3;
