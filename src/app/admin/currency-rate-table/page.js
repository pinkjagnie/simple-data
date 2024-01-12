"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import Sidebar from "@/app/components/admin/Sidebar";
import CurrencyRateTable from "@/app/components/admin/currency-rate-table/CurrencyRateTable";

const Page = () => {
  const { user } = useAuth();

  let pageContent;

  if (user) {
    pageContent = (
      <>
        <div className="w-[100%] lg:w-[30%]">
          <Sidebar />
        </div>
        <div className="w-[100%] lg:w-[70%] py-8 px-2">
          <CurrencyRateTable />
        </div>
      </>
    );
  } else {
    pageContent = (
      <div className="w-[90%] mx-auto pt-24">
        <p className="w-[90%] mx-auto text-center text-xl font-bold py-4 lg:pt-14 pb-10">
          You do not have access to this page. Please log in
        </p>
        <div className="flex items-center justify-center">
          <Link href="/login" className="btn btn-accent">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {pageContent}
    </section>
  );
};

export default Page;
