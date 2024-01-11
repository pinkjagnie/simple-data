import Sidebar from "@/app/components/admin/Sidebar";
import CurrencyRateTable from "@/app/components/admin/currency-rate-table/CurrencyRateTable";

const Page = () => {
  return (
    <section className="w-full min-h-screen bg-slate-50">
      <Sidebar />
      <CurrencyRateTable />
    </section>
  );
};

export default Page;
