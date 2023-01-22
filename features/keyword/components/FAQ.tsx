import Link from "next/link";
import { ReactNode } from "react";
import Collapse from "antd/lib/collapse";
import customParser from "utils/customParser";

const { Panel } = Collapse;

const FAQ = ({
  keyword,
  location,
  content22,
}: {
  keyword: string | undefined;
  location?: string | undefined;
  content22: string | undefined;
}) => {
  type PanelItem = {
    key: string;
    header: string;
    body: ReactNode;
  };

  const panelItems: PanelItem[] = [
    {
      key: "1",
      header:
        "I have received notification confirming my computer is ready. Can I pick up my computer anytime?",
      body: (
        <p>
          Yes. If we have sent you a notification confirming your computer is
          ready, you can collect the computer anytime during our business hour.
          Please make sure to collect your computer within 7 days from the
          notice.
        </p>
      ),
    },
    {
      key: "2",
      header: "How long does it take for a quote and for repairs?",
      body: (
        <>
          <p>
            When you bring your computer in, we will do a quick diagnostic and
            quote on the spot within 10 minutes. If you computer problem is
            intermittent or complicated, it may take more time for testing.
          </p>
          <br />
          <p>
            At the time of booking in computer, our technician will check the
            computer, stock level and advise you approximate turn-around time.
            Our turn-around time is updated regularly and also checked at
            booking and is generally correct.
          </p>
          <br />
          <p>
            Usually we will try to complete repairs same-day or next day,
            however you should allow 1-7 business days (weekend not included)
            for repairs to be completed (assuming our local suppliers have part
            in stock). Backing up your data before bringing in will help reduce
            turn-around time.
          </p>
          <br />
          <p>
            Break down of the 1-7 business day turn-around time is as follow:
          </p>
          <br />
          <p>
            2-5 business days for standard delivery within Australia, plus 1-2
            business days for us to carry out installation.
          </p>
          <br />
          <p>
            We stock common parts to facilitate repairs to eliminate the 2-5
            days waiting time for part delivery. However there are many factors
            that could affect turn-around time that is out of our control:
          </p>
          <br />
          <ul className="list-disc px-10">
            <li className="my-3">
              Another problem is found with your computer: it is not uncommon to
              find more than one problem with your computer. For example, your
              computer may have had liquid damages that damaged more than one
              part (keyboard/touchpad and motherboard are commonly damaged by
              liquid damages); a power surge can damage both power supply unit,
              and hard drive or motherboard or video card. It is important to
              understand that it is not possible to test “everything” on any
              computer, for example: if your computer has completely failed to
              power on, there is no way to test further on other components
              without a working part to turn it on first.
            </li>
            <li className="my-3">
              Computer problem is intermittent: the problem does not occur often
              enough and we are unable to replicate the issue at our store.
            </li>
            <li className="my-3">
              Replacement part is out of stock in our store at the time you
              approve our quote.
            </li>
            <li className="my-3">
              Replacement part is out of stock at our local suppliers at the
              time you approve our quote.
            </li>
            <li className="my-3">
              Replacement part is only available from overseas supplier:
              delivery in this case will take approx 2-3 weeks.
            </li>
            <li className="my-3">
              Part arrived is found to be DOA (Dead On Arrival), or damaged
              during transit.
            </li>
            <li className="my-3">
              Delays in delivery of part by logistic company.
            </li>
            <li className="my-3">
              We are given incorrect passwords for the computer.
            </li>
            <li className="my-3">
              Replacement parts are limited in the market.
            </li>
            <li className="my-3">
              There is an unexpected high number of jobs in the queue.
            </li>
          </ul>
          <p>
            For the above reasons, we cannot promise you a faster turn-around
            time other than what you are advised at the time of booking, even if
            you call us and ask for urgent repairs.
          </p>
          <br />
          <p>
            Data recovery can be time consuming, it may take 3-7 business days
            or more for data to be recovered and transferred onto new hard
            drive, especially when the old hard drive is faulty because the
            drive becomes very slow and may intermittently malfunction, or when
            there is 100GB+ of data. It&apos;s highly recommended that you have
            a backup of your data before sending us the computer for faster
            turn-around time. A free rental computer can be arranged upon
            request (subject to stock availability). Rental computer may not
            have any of your data in it, you should use data from your backup.
          </p>
          <br />
          <p>
            * Business days do not include weekend and public holidays. Our
            store is open during weekends with limited trading hour and less
            technicians. Most of our suppliers are closed, no courier delivery
            can be made on weekends and public holidays.
          </p>
        </>
      ),
    },
    {
      key: "3",
      header: "Can I pick up my computer first and pay later?",
      body: (
        <p>
          No. Unfortunately we do not have facilities for post payments. Payment
          is required upon collection of fixed computer.
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
      header: "Do I need to pay for the quote to proceed?",
      body: (
        <p>
          Payment might be required to proceed with the quote, depending on cost
          of spare part, estimated turn-around time.
        </p>
      ),
    },
    {
      key: "6",
      header: "How much does it cost to get a quote and for repairs?",
      body: (
        <p>
          If you bring your computer to our store, we offer Free Quote over the
          counter if the problem is obvious and can be quoted over the counter
          (i.e. virus, obvious hard drive failure, cracked screens on common
          laptops). If the problem is complicated and need further testing, we
          offer Free Initial Quick Tests (15 minutes or less tests) and Free
          Quote. Cost for repairs varies depending on the problems, our
          technicians will test your computer first to provide you with a quote
          for repairs. If you need an onsite visit, we charge by hourly rate,
          plus a call-out fee. Unfortunately we are unable to send a technician
          onsite to provide free quote. Free Tests and Free Quote are not
          applicable for computers that are under warranty or covered by
          insurance, a quoting fee may apply in these instances. Our technicians
          do not carry out extended tests (that takes more than half hour) in
          the initial testing, specific details such as make and model of
          replacement parts might not be available during the initial testing
          and quoting.
        </p>
      ),
    },
    {
      key: "7",
      header: "Do you provide printing or scanning services?",
      body: (
        <p>
          No. Our staffs are strictly not allowed to provide printing or
          scanning services under any circumstances.
        </p>
      ),
    },
    {
      key: "8",
      header: "Do you fix mobile phones, iPad and Android tablets?",
      body: (
        <p>
          No. We currently do not fix any mobile phones, iPad and Android
          tablets. We do fix Windows laptop/tablet (i.e. Microsoft Surface) that
          has software issues such as viruses, emails, Windows reinstallation.
        </p>
      ),
    },
  ];

  return (
    <div className="py-20 max-w-6xl mx-auto px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5">
      <h4 className="text-black text-center font-sans font-bold text-3xl">
        Frequently asked questions
      </h4>
      <p className="text-center py-10">
        {content22 ? (
          customParser({ customContent: content22, keyword, location })
        ) : (
          <>
            Your questions answered by our computer experts. Can&apos;t find an
            answer?
          </>
        )}
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

export default FAQ;
