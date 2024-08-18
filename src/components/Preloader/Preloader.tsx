
const Preloader = () => {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#002647] to-[#00080E] bg-opacity-90 z-[1000]">
        <img src='https://pandafterimages.s3.us-east-2.amazonaws.com/logoUniversitaria.webp' alt="Logo" width={130} height={40} className="relative -top-10"/>
        <div className="w-24 h-24 border-8 border-gray-300 border-t-blue-500 border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-white font-semibold text-xl">Cargando...</p>
      </div>
    );
  };
  
  export default Preloader;
  