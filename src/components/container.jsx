


import Slider from "./Slider";

const Container = () => {
  return (
    <div className="flex h-screen p-10 flex-col md:flex-row">
      
      <div className="flex-none h-[40vh] md:w-[30%] md:h-screen p-4 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center rounded-2xl text-[#84bfff] p-4 mb-14 ">
          Swiper Slider
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-center rounded-2xl bg-[#84bfff] text-white p-4 mb-8 uppercase">
            Beauties of Iran
          </h1>
        </div>
      </div>
      <div className="rounded-2xl flex-1 md:w-[70%] bg-[#84bfff] flex justify-center items-center">
        <div className="w-[80%] h-[80%]">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Container;

