import Link from "next/link";
import React from "react";

const BreadCrumbs = ({ keyword }: { keyword: string | undefined }) => {
  return (
    <div className="text-center py-5">
      You are here: <Link href="https://safemode.com.au/">Home</Link> /{" "}
      {keyword}
    </div>
  );
};

export default BreadCrumbs;
