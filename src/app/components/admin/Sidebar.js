import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="drawer drawer-open w-screen lg:w-[30%] lg:sticky lg:top-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="h-[70vh] min-[600px]:h-[50vh] lg:h-[100vh] w-screen lg:w-[30%]">
        <ul className="p-4 w-screen lg:w-80 min-h-full bg-base-200 text-base-content flex flex-col items-center justify-center">
          {/* Sidebar content here */}
          <li>
            <Link href="/admin/currency-rate-table">Currency rate table</Link>
          </li>
          <li className="pt-4">
            <Link href="/admin/gold-statistics">Gold statistics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
