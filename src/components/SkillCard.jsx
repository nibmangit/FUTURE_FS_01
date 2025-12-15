 
const SkillCard = ({ name, icon }) => {
  return (
    <div className="group p-6 bg-gray-800 rounded-2xl flex flex-col items-center space-y-4 transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1 border border-gray-700/50">
      <div
        className={`p-4 rounded-full bg-gray-900/60 flex items-center justify-center transition group-hover:scale-110`}
      >
        {icon}
      </div> 
      <p className="text-gray-100 font-medium text-sm text-center tracking-wide">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;