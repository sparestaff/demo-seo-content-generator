import Link from "next/link";
import Image from "next/image";
import Button from "antd/lib/button";
import { SAFEMODE_LOGO } from "utils/constants";

const NavBar = () => {
  return (
    <div className="sticky top-0 shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between font-bold px-6 h-20 bg-white">
        <div>
          <Link href="https://safemode.com.au/">
            <Image
              src={SAFEMODE_LOGO}
              alt="safemode-logo"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row items-center gap-7">
            <li>
              <Button
                type="primary"
                href="https://safemode.com.au/book-appointment"
              >
                Book appointment
              </Button>
            </li>
            <li>
              <Link
                href="https://safemode.com.au/"
                className="text-seo-default"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="text-seo-default">
                Computer Services
              </Link>
            </li>
            <li>
              <Link
                href="https://safemode.com.au/pricing-and-info/"
                className="text-seo-default"
              >
                Pricing & Info
              </Link>
            </li>
            <li>
              <Link
                href="https://safemode.com.au/blog/"
                className="text-seo-default"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://safemode.com.au/about-us/"
                className="text-seo-default"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="https://safemode.com.au/contact/"
                className="text-seo-default"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
