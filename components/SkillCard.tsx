interface props {
  Icon: React.ElementType,
  title: string,
  color: string
}

export const SkillCard = ({Icon, title, color}: props) => {
  return (
    <div
      className="relative
        flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm
        border-2 border-white
        min-w-64
        "
    >
      <div>
        <div className="h-auto overflow-hidden p-2">
          <div className="h-44 overflow-hidden relative">
            <Icon className={`w-full h-full ${color}`} />
          </div>
        </div>
        <div className="bg-white py-4 px-3">
          <h3 className="text-xl mb-2 font-medium text-primary flex items-center justify-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
