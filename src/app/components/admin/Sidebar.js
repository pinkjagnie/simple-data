import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="drawer drawer-open w-screen lg:w-[30%] lg:sticky lg:top-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="h-[70vh] min-[600px]:h-[50vh] lg:h-[100vh] w-screen lg:w-[30%]">
        {/* <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label> */}
        <ul className="p-4 w-screen lg:w-80 min-h-full bg-base-200 text-base-content flex flex-col items-center justify-center">
          {/* Sidebar content here */}
          <li>
            <Link href="/admin/currency-rate-table">Currency rate table</Link>
          </li>
          <li className="pt-4">
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
