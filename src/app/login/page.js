import Login from "../components/forms/Login";

const Page = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-slate-50">
      <h1 className="py-4 text-xl text-center font-bold">
        Login to your account
      </h1>
      <Login />
    </section>
  );
};

export default Page;
