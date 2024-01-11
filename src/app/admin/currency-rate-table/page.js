import Sidebar from "@/app/components/admin/Sidebar";
import CurrencyRateTable from "@/app/components/admin/currency-rate-table/CurrencyRateTable";

const Page = () => {
  return (
    <section className="w-full min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      <div className="w-[100%] lg:w-[30%]">
        <Sidebar />
      </div>
      <div className="w-[100%] lg:w-[70%] py-8 px-2">
        <CurrencyRateTable />
      </div>
    </section>
  );
};

export default Page;
