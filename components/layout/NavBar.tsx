import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Menu from "antd/lib/menu";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import { SAFEMODE_LOGO } from "utils/constants";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="sticky top-0 shadow z-30">
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
          <div className="lg:block hidden">
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
        width="60vw"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        getContainer={false}
        className="z-50"
      >
        <Menu className="hover:bg-ss-highlight">
          <Menu.Item>
            <Link href="https://safemode.com.au/book-appointment">
              Book appointment
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://safemode.com.au/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="http://localhost:3000/[keyword]">
              Computer Services
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://safemode.com.au/pricing-and-info/">
              Pricing & Info
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://safemode.com.au/blog/">Blog</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://safemode.com.au/about-us/">About Us</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="https://safemode.com.au/contact/">Contacts</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default NavBar;
