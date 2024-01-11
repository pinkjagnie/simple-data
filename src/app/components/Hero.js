import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen heroBg">
      <div className="hero-overlay bg-stone-900/90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
