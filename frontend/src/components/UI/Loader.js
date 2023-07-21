const Loader = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-white ">
      <div
        className={`h-7 w-7 bg-orange-600 rounded-full border-4 border-orange-600 shadow-xl shadow-orange-500/50 animate-bounce`}
      ></div>
      <div
        className={`h-7 w-7 bg-transparent rounded-full border-4 border-orange-600 shadow-xl shadow-orange-500/50 animate-bounce200`}
      ></div>
      <div
        className={`h-7 w-7 bg-orange-600 rounded-full border-4 border-orange-600 shadow-xl shadow-orange-500/50 animate-bounce400`}
      ></div>
    </div>
  );
};

export default Loader;
