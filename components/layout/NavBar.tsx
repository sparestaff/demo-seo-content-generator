import Link from "next/link";
import Button from "antd/lib/button";

const NavBar = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto flex items-center justify-between font-bold px-6 h-20">
        <div className="text-2xl">SAFEMODE</div>
        <div>
          <ul className="flex flex-row gap-7">
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
    </>
  );
};

export default NavBar;
