import Link from "next/link";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
const Footer = () => {
  const FooterLinks = [
    {
      title: "COMPUTER SERVICES",
      links: [
        {
          body: "Computer Repairs",
          url: "/computer-repairs/",
        },
        {
          body: "Apple Mac Repairs",
          url: "/apple-repairs/",
        },
        {
          body: "Virus Spyware Removal",
          url: "/virus-spyware-removal/",
        },
        {
          body: "Computer Speed-up & Upgrades",
          url: "https://safemode.com.au/computer-speed-up/",
        },
        {
          body: "Internet Network Setup",
          url: "https://safemode.com.au/internet-network-setup/",
        },
        {
          body: "Data Recovery",
          url: "/data-recovery/",
        },
      ],
    },
    {
      title: "BUSINESS IT SUPPORT",
      links: [
        {
          body: "IT Support and Monitoring",
          url: "https://safemode.com.au/business-it-support/",
        },
        {
          body: "Server Installation & Support",
          url: "https://safemode.com.au/server-setup/",
        },
        {
          body: "Business-class Email Setup",
          url: "https://safemode.com.au/business-email/",
        },
        {
          body: "Web Hosting Services",
          url: "https://safemode.com.au/web-hosting/",
        },
        {
          body: "Business IT Support Plans",
          url: "https://safemode.com.au/business-it-support-plans/",
        },
      ],
    },
    {
      title: "SAAS WEB APP",
      links: [
        {
          body: "SEO Marketing Web App",
          url: "https://safemode.com.au/web-app/",
        },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        {
          body: "Book appointment",
          url: "https://safemode.com.au/book-appointment/",
        },
        {
          body: "Pricing and Info",
          url: "https://safemode.com.au/pricing-and-info/",
        },
        {
          body: "Contact us",
          url: "https://safemode.com.au/contact/",
        },
        {
          body: "Frequently Asked Questions",
          url: "https://safemode.com.au/faq/",
        },
        {
          body: "Our Tech Blog",
          url: "https://safemode.com.au/blog/",
        },
        {
          body: "Terms of use",
          url: "https://safemode.com.au/terms/",
        },
        {
          body: "Privacy Policy",
          url: "https://safemode.com.au/privacy/",
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
              © Copyright services.Safemode Computer Service | All Rights
              Reserved
            </div>
            <Link
              className="text-seo-primary text-xl"
              href="https://www.facebook.com/services.safemodecomputerservice/"
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
