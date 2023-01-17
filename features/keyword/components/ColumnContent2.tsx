import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";

const ColumnContent2 = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <Image
          src={HERO_SECTION_IMAGE}
          width={400}
          height={400}
          priority
          alt="custom_upload_image_1"
        />
      </div>
      <div className="grid grid-cols-1 content-center gap-10 w-1/2">
        <h3 className="text-3xl text-black font-bold font-sans">
          Custom content #14
        </h3>
        <div>
          Custom content #15 (fresh optional content block by Site Admin/user)
        </div>
      </div>
    </div>
  );
};

export default ColumnContent2;
