export const ContactBanner = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-secondary mt-10 py-3 xl:my-20">
      <h1 className="text-2xl  xl:text-4xl my-5">Let's talk!</h1>

      <p className="w-3/4 xl:w-[600px] text-center">
        Have a project or idea you’d like to bring to life? Let’s work together
        to create innovative and impactful digital solutions. I’d love to hear
        from you!
      </p>

      <button className="p-1 rounded-sm border border-white w-44 my-10 transition ease-in-out delay-75 hover:bg-white hover:text-primary">
        <a href="mailto:fernandohs@live.com.mx">Contact</a>
      </button>
    </div>
  );
};
