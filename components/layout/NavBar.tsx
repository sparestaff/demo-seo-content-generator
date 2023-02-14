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
          href="https://safemode.com.au/book-appointment/"
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
      label: "Your Services",
      children: [
        {
          key: "Computer repairs",
          label: <Link href="/home-renovation/">Home Renovation</Link>,
        },
        {
          key: "Apple Mac Repairs",
          label: <Link href="/electricians/">Electricians</Link>,
        },
        {
          key: "Virus Spyware Removal",
          label: (
            <Link href="/builders/">
              Builders
            </Link>
          ),
        },
        {
          key: "Computer Speed-up & Upgrades",
          label: (
            <Link href="/car-repairs/">
              Car Repairs
            </Link>
          ),
        },
        {
          key: "Internet Network Setup",
          label: (
            <Link href="/plumbers/">
              Plumbers
            </Link>
          ),
        },
        {
          key: "Data Recovery",
          label: (
            <Link href="/computer-repairs/">
              Computer Repairs
            </Link>
          ),
        },
      ],
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
          key: "About Us",
          label: (
            <Link href={"https://safemode.com.au/about-us"}>About us</Link>
          ),
        },
        {
          key: "Our Guarantees",
          label: (
            <Link href="https://safemode.com.au/our-guarantees/">
              Our Guarantees
            </Link>
          ),
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
          <div className="w-3/5 lg:block hidden">
            <Menu mode="horizontal" items={items} />
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
        <Menu items={items} mode="inline" inlineIndent={15} />
      </Drawer>
    </>
  );
};

export default NavBar;
