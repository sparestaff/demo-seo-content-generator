import Link from "next/link";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
const Footer = () => {
  const FooterLinks = [
    {
      title: "COMPUTER SERVICES",
      links: [
        {
          body: "Computer Repairs",
          url: "#",
        },
        {
          body: "Apple Mac Repairs",
          url: "#",
        },
        {
          body: "Virus Spyware Removal",
          url: "#",
        },
        {
          body: "Internet Network Setup",
          url: "#",
        },
        {
          body: "Data Recovery",
          url: "#",
        },
        {
          body: "Computer Tuneup Upgrades",
          url: "#",
        },
      ],
    },
    {
      title: "BUSINESS IT SUPPORT",
      links: [
        {
          body: "IT Support and Monitoring",
          url: "#",
        },
        {
          body: "Server Installation & Support",
          url: "#",
        },
        {
          body: "Business-class Email Setup",
          url: "#",
        },
        {
          body: "Web Hosting Services",
          url: "#",
        },
      ],
    },
    {
      title: "SUPPORT PLANS",
      links: [
        {
          body: "Business IT Support Plans",
          url: "#",
        },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        {
          body: "Book appointment",
          url: "#",
        },
        {
          body: "Pricing and Info",
          url: "#",
        },
        {
          body: "Contact us",
          url: "#",
        },
        {
          body: "Frequently Asked Questions",
          url: "#",
        },
        {
          body: "Our Tech Blog",
          url: "#",
        },
        {
          body: "Terms of use",
          url: "#",
        },
        {
          body: "Privacy Policy",
          url: "#",
        },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-neutral-700 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 max-w-6xl mx-auto gap-10 px-5">
          {FooterLinks.map((item, idx) => (
            <div className="flex flex-col" key={idx}>
              <p className="text-white font-bold mb-3">{item.title}</p>
              {item.links.map((link, idx) => (
                <Link
                  href={link.url}
                  key={idx}
                  className="text-gray-300 my-0.5"
                >
                  {link.body}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </footer>
      <div className="bg-neutral-800 py-5">
        <div className="max-w-6xl mx-auto ">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="text-gray-300">
              © Copyright Safemode Computer Service | All Rights Reserved
            </div>
            <Link
              className="text-seo-primary text-xl"
              href="https://www.facebook.com/safemodecomputerservice/"
              target={"_blank"}
            >
              <FacebookOutlined />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
