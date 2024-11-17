interface props {
  Icon: React.ElementType,
  title: string,
}

export const SkillCard = ({Icon, title}: props) => {
  return (
    <div
      className="relative
        flex flex-col
        rounded-xl
        overflow-hidden
        hover:-translate-y-1
        transition-all duration-300 max-w-sm
        min-w-52
        "
    >
      <div>
        <div className="h-auto overflow-hidden p-2 ">
          <div className="h-16 overflow-hidden relative ">
            <Icon className="w-full h-full text-white" />
          </div>
        </div>
          <h3 className="text-xl mb-2 font-medium text-white flex items-center justify-center">
            {title}
          </h3>
      </div>
    </div>
  );
};
