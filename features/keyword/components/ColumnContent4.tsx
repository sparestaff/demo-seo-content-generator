import Image from "next/image";
import { HERO_SECTION_IMAGE } from "utils/constants";

const ColumnContent4 = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full px-10 py-20 rounded-lg bg-orange-50">
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
            Custom content #18 | Why our keyword experts are different
          </h3>
          <div>
            Custom content #19 | Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
            <br />
            <br />
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnContent4;
