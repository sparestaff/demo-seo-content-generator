import Link from "next/link";
import { ReactNode } from "react";
import Collapse from "antd/lib/collapse";
import customParser from "utils/customParser";
import { camelCaseAll } from "utils/formatter";

const { Panel } = Collapse;

const FAQWithLocation = ({
  keyword,
  location,
}: {
  keyword: string | undefined;
  location: string;
}) => {
  type PanelItem = {
    key: string;
    header: string;
    body: ReactNode;
  };

  const panelItems: PanelItem[] = [
    {
      key: "1",
      header: "Do I need to make booking to bring my computer in for services?",
      body: (
        <p>
          Appointment is not required to bring computer in. However, we
          recommend to book an appointment for best experience and to make sure
          that our technician is available at the time you come in and reduce
          waiting time. You can{" "}
          <Link
            href="https://safemode.com.au/book-appointment/"
            target={"_blank"}
          >
            book an appointment online
          </Link>{" "}
          by clicking the “Book appointment” at the top. Please allow
          approximately 5-15 minutes for the appointment. Our technician will
          diagnose your computer and give you a quote for repairs. The
          appointment is FREE.
          <br />
          <br />
          For public holidays or days that are close to public holidays (e.g.
          Christmas Eve, New Year&apos;s Eve), please check our trading hours
          closer to public holidays.
        </p>
      ),
    },
    {
      key: "2",
      header:
        "I have important data on my computer, can Safemode technician save everything on my computer?",
      body: (
        <>
          <p>
            We might be able save certain data, but not “everything”. Saving
            data on a broken computer can be difficult, or impossible sometimes,
            especially in the instance of Windows/Mac OS reinstallation (i.e.
            virus issue), or a hard drive problem. Files such as Documents,
            Music, Pictures, Videos, Emails might be recoverable, but software
            programs, setings most likely will be lost. Software programs (i.e.
            iTunes, MYOB, Skype, Office, antivirus, etc) may need to be
            re-installed from CDs, the Internet, the same way that you installed
            them before. Your old emails might be back, but you will need to
            re-create your email account settings (email address, password, mail
            servers, etc). In the instance that Windows/Mac OS need to be
            re-installed, or hard drive needs to be replaced, it&apos;s not
            possible to restore your computer to “exactly” how it was before it
            had the problems. The same applies to transferring data from one
            computer to another, it is not possible to transfer “everything”.
            Keep in mind that it is always your own responsibility to have
            regular backup of your data and knowing how your programs were
            installed from the first place so that you can reinstall them later
            if required (for example, keeping original installation CDs and
            software licenses).
          </p>
          <br />
          <p>
            A good way to understand what can possibly be saved from your
            computer is to imagine that Windows/Mac OS is your house, your
            software programs are your furniture, and you may also many
            customisation, your own setup in that house (your screensaver,
            background photo, saved passwords, email configuration, settings
            etc). When your computer crashes, it means that “house” has
            collapsed or burned down. We are the builders who help you to
            rebuild the “house” and salvage what&apos;s left. It is not possible
            for us to save “everything” from that collapsed/burned “house”. We
            can help to rebuild the “house” (Windows/Mac OS), possibly save one
            or two pieces of furniture (your software programs), but most likely
            your customisation, setup in the house will be lost (your
            screensaver, background photo, settings etc). You will need to know
            how you got the “furniture”, the customisation and setup in the
            first place to get them again.
          </p>
        </>
      ),
    },
    {
      key: "3",
      header: "I approved the quote, can I cancel it now?",
      body: (
        <p>
          No. Our services include labour and cost of spare part thus we cannot
          accept cancellation or change of mind. Once quote is approved, we will
          commence the work immediately, cancellation strictly cannot be
          accepted. Most of repairs that we do require further testing and spare
          parts. After the quote is approved, even if spare part has not
          arrived, there is already work done prior to receiving the spare
          parts, which include: further testing, partial/full disassembly of
          computers, identifying parts, matching with our stocked parts and
          ordering in if required, final repairs, final testing and assembly.
        </p>
      ),
    },
    {
      key: "4",
      header:
        "I need to keep my computer for everyday use, can I take the computer while Safemode is sourcing the part?",
      body: (
        <p>
          Most likely yes, however this may cause delays to the job and we may
          need to ask you to bring the computer back for us to check again.
          Different computer manufacturers and suppliers are based in different
          countries and they have different systems to identify their parts. The
          systems are not standardised and they may request more details of the
          computer or the part from us. Without the computer, our technician is
          not able to provide them with the required details which will
          subsequently cause delays to the job. At times, parts are not
          available which we need to look for alternative repair options which
          requires the computer to be present (i.e. sending the part to be
          repaired or exchanged). We highly recommend that you keep a backup of
          your data and have a spare computer to work with so that there is
          sufficient time for repairs. We can also provide a free rental laptop
          upon request (subject to stock availability and terms & conditions).
        </p>
      ),
    },
    {
      key: "5",
      header: "Can I supply my own part and have Safemode install it?",
      body: (
        <p>
          Yes, but it will come with no guarantee and upfront payment is
          required. We do not test the part before nor after installation. It is
          customer responsibility to ensure the purchased part is correct,
          compatible and working before giving to our technician to install. We
          are unable to assist with finding out the correct part or provide any
          information about where or how to purchase correct parts. We do not
          provide any warranty nor guarantee on third-party parts, hardware and
          software. Any payment for the installation is not refundable in the
          instance that the part, hardware or software provided by the customer
          is not working or does not fix the problem, regardless whether the
          problem was diagnosed by the customer or by Safemode technicians.
        </p>
      ),
    },
    {
      key: "6",
      header:
        "Can I leave other accessories (ie. Bags, CDs) at Safemode and pick up later?",
      body: (
        <p>
          No. We collect necessary items such as computer(s) and chargers only.
          Other items such as cables, CDs should not be left at our store unless
          they are required for the job. We encourage customers not to leave
          unnecessary items at our store because we are unable to keep track of
          these items. We take no responsiblity for loss of unnecessary items
          such as bags, CDs, cables, etc.
        </p>
      ),
    },
    {
      key: "7",
      header: "Do you use manufacturer's genuine spare parts?",
      body: (
        <p>
          This varies. We always choose manufacturer&apos;s genuine spare parts
          if they are available and customer approves our quote. This is usually
          the case for laptop spare parts because spare parts for laptops must
          be replaced with the same or equivalent parts from the same
          manufacturer. For desktop computers, there are usually more choices of
          spare parts in the market, we will source equivalent or better spare
          parts if customer agrees or we can attempt to find cheaper options to
          suit customer&apos;s budget.
        </p>
      ),
    },
    {
      key: "8",
      header: "Can I get a free quote over the phone or via email?",
      body: (
        <>
          <p>
            Generally No. Without the computer in our store, we are unable to
            perform any diagnostics, part & price lookup with our stock and
            suppliers.
          </p>
          <br />
          <p>
            However if you have an obvious computer problem such as cracked
            screen on a Mac computer, we might be able to look up the prices.
            Please make sure to give us as much details of your computer
            problems as you can, including your computer details (Make, Model
            and Serial number), details of the problem(s), and details of any
            parts if required. We will then be able to give you an estimated
            price range for repairs based on the information that you&apos;ve
            given us. This estimated price range should be considered as
            advisory only, not as a formal quote. The price may vary if the
            details are found different. We take no responsibility for incorrect
            estimated prices advised over emails or phone calls. Once our
            technicians have tested your computer, we will contact you to
            confirm actual cost for repairs. Please see our{" "}
            <Link href="https://safemode.com.au/contact/">Contact</Link> page
            for more information.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-0">
      <h4 className="text-black text-center font-sans font-bold text-3xl">
        Frequently asked questions
      </h4>
      <p className="text-center py-10">
        Your questions answered by our computer {camelCaseAll(location)}{" "}
        {keyword} experts. Can&apos;t find an answer?
        <br />
        Call us on: <Link href="tel:1800858382">1800 85 83 82</Link>
      </p>
      <Collapse bordered={false}>
        {panelItems.map((item) => (
          <Panel header={<h4>{item.header}</h4>} key={item.key} forceRender>
            {item.body}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQWithLocation;
