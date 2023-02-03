import Link from "next/link";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
const Footer = () => {
  const FooterLinks = [
    {
      title: "COMPUTER SERVICES",
      links: [
        {
          body: "Computer Repairs",
          url: "https://services.safemode.com.au/computer-repairs/",
        },
        {
          body: "Apple Mac Repairs",
          url: "https://services.safemode.com.au/apple-repairs/",
        },
        {
          body: "Virus Spyware Removal",
          url: "https://services.safemode.com.au/virus-spyware-removal/",
        },
        {
          body: "Internet Network Setup",
          url: "https://services.safemode.com.au/internet-network-setup/",
        },
        {
          body: "Data Recovery",
          url: "https://services.safemode.com.au/data-recovery/",
        },
        {
          body: "Computer Tuneup Upgrades",
          url: "https://services.safemode.com.au/computer-speed-up/",
        },
      ],
    },
    {
      title: "BUSINESS IT SUPPORT",
      links: [
        {
          body: "IT Support and Monitoring",
          url: "https://services.safemode.com.au/business-it-support/",
        },
        {
          body: "Server Installation & Support",
          url: "https://services.safemode.com.au/server-setup/",
        },
        {
          body: "Business-class Email Setup",
          url: "https://services.safemode.com.au/business-email/",
        },
        {
          body: "Web Hosting Services",
          url: "https://services.safemode.com.au/web-hosting/",
        },
        {
          body: "Business IT Support Plans",
          url: "https://services.safemode.com.au/business-it-support-plans/",
        },
      ],
    },
    {
      title: "SAAS WEB APP",
      links: [
        {
          body: "SEO Marketing Web App",
          url: "https://services.safemode.com.au/web-app/",
        },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        {
          body: "Book appointment",
          url: "https://services.safemode.com.au/book-appointment/",
        },
        {
          body: "Pricing and Info",
          url: "https://services.safemode.com.au/pricing-and-info/",
        },
        {
          body: "Contact us",
          url: "https://services.safemode.com.au/contact/",
        },
        {
          body: "Frequently Asked Questions",
          url: "https://services.safemode.com.au/faq/",
        },
        {
          body: "Our Tech Blog",
          url: "https://services.safemode.com.au/blog/",
        },
        {
          body: "Terms of use",
          url: "https://services.safemode.com.au/terms/",
        },
        {
          body: "Privacy Policy",
          url: "https://services.safemode.com.au/privacy/",
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
