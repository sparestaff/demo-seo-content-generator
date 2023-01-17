import Link from "next/link";
import React from "react";

const BreadCrumbs = () => {
  return (
    <div className="text-center py-5">
      You are here: <Link href="https://safemode.com.au/">Home</Link> / Keyword
    </div>
  );
};

export default BreadCrumbs;
