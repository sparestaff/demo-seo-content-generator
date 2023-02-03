import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Menu from "antd/lib/menu";
import type { MenuProps } from "antd";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import { SAFEMODE_LOGO } from "utils/constants";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "Book appointment",
      label: (
        <Button
          type="primary"
          href="https://services.safemode.com.au/book-appointment/"
          className="text-white"
        >
          Book appointment
        </Button>
      ),
    },
    {
      key: "Home",
      label: <Link href="https://safemode.com.au">Home</Link>,
    },
    {
      key: "Computer Services",
      label: "Computer Services",
      children: [
        {
          key: "Computer repairs",
          label: <Link href="/computer-repairs/">Computer repairs</Link>,
        },
        {
          key: "Apple Mac Repairs",
          label: <Link href="/apple-repairs/">Apple Mac Repairs</Link>,
        },
        {
          key: "Virus Spyware Removal",
          label: (
            <Link href="/virus-spyware-removal/">Virus Spyware Removal</Link>
          ),
        },
        {
          key: "Data Recovery",
          label: <Link href="/data-recovery/">Data Recovery</Link>,
        },
        {
          key: "Business-class Email Setup",
          label: (
            <Link href="https://safemode.com.au/business-email/">
              Business-class Email Setup
            </Link>
          ),
        },
        {
          key: "Business IT Support",
          label: (
            <Link href="https://safemode.com.au/business-it-support/">
              Business IT Support
            </Link>
          ),
        },
        {
          key: "Web Hosting Services",
          label: (
            <Link href="https://safemode.com.au/web-hosting/">
              Web Hosting Services
            </Link>
          ),
        },
      ],
    },
    {
      key: "Web App",
      label: <Link href="https://safemode.com.au/web-app/">Web App</Link>,
    },
    {
      key: "Pricing",
      label: (
        <Link href="https://safemode.com.au/pricing-and-info/">Pricing</Link>
      ),
    },
    {
      key: "Blog",
      label: <Link href="https://safemode.com.au/blog/">Blog</Link>,
    },
    {
      key: "About Us",
      label: "About Us",
      children: [
        {
          key: "Our Guarantees",
          label: (
            <Link href="https://safemode.com.au/our-guarantees/">
              Our Guarantees
            </Link>
          ),
        },
        {
          key: "Warranty Repairs",
          label: (
            <Link href="https://safemode.com.au/warranty-repairs/">
              Warranty Repairs
            </Link>
          ),
        },
        {
          key: "Trade in",
          label: <Link href="https://safemode.com.au/tradein/">Trade in</Link>,
        },
        {
          key: "Frequently Asked Questions",
          label: (
            <Link href="https://safemode.com.au/faq/">
              Frequently Asked Questions
            </Link>
          ),
        },
        {
          key: "Careers",
          label: <Link href="https://safemode.com.au/careers/">Careers</Link>,
        },
        {
          key: "Testimonials",
          label: (
            <Link href="https://safemode.com.au/testimonials/">
              Testimonials
            </Link>
          ),
        },
      ],
    },
    {
      key: "Contacts",
      label: <Link href="https://safemode.com.au/contact/">Contacts</Link>,
    },
  ];

  return (
    <>
      <div className="sticky top-0 shadow z-30 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-20 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
          <div>
            <Link href="http://safemode.com.au/">
              <Image
                src={SAFEMODE_LOGO}
                alt="safemode-logo"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className="w-full lg:block hidden">
            <Menu mode="horizontal" items={items} forceSubMenuRender />
          </div>
          <div className="lg:hidden block">
            <MenuOutlined
              className="text-xl text-seo-primary rounded cursor-pointer"
              onClick={() => setVisible(true)}
              data-testid="mobile-navbar"
            />
          </div>
        </div>
        <hr />
      </div>
      <Drawer
        width="70vw"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        className="z-50"
        bodyStyle={{ paddingRight: "0", paddingLeft: "0" }}
      >
        <Menu
          items={items}
          mode="inline"
          forceSubMenuRender
          inlineIndent={15}
        />
      </Drawer>
    </>
  );
};

export default NavBar;
