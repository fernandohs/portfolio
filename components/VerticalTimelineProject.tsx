interface Props {
  dateBetween: string,
  isLeftContent: Boolean,
  role: string,
  title: string,
}

export const VerticalTimelineProject = ({ title, dateBetween, isLeftContent, role }: Props) => {
  return (

      <div className={`mb-8 flex justify-between items-center w-full ${isLeftContent && 'flex-row-reverse'}`}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
          
        </div>
        <div className={`order-1 w-5/12 py-4 ${isLeftContent ? 'text-end' : 'text-start'}`}>
          <h3 className="mb-3 font-semibold text-white text-xl">
            {title}
          </h3>
          <p className="text-sm leading-snug tracking-wide text-white ">
            {dateBetween}
          </p>

          <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
            {role}
          </p>
        </div>
      </div>
  );
};
