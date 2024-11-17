export const ProjectsPage = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <h3 className="text-2xl text-white font-bold mb-6 ml-3">Projects</h3>

      <div className="container  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          />

          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-transparent rounded-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-100 text-5xl italic">
                Sofia XT - Agora
              </h3>
              <p className="text-md leading-snug tracking-wide text-gray-100 text-opacity-100 pl-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-transparent rounded-lg w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-100 text-5xl italic">
                Sofia XT - Agora
              </h3>
              <p className="text-md leading-snug tracking-wide text-gray-100 text-opacity-100 pl-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
