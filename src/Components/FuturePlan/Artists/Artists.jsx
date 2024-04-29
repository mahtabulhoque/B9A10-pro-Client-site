const Artists = () => {
  return (

    <div className="lg:flex gap-7">
      <div className="card mb-5 w-full shadow-xl bg-slate-300">
        <figure className="px-10 pt-10">
          <img
            src="/Artit1.jpg"
            alt="Artist"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title text-slate-700 font-bold text-2xl">Name: Jonathon</h2>
          <p className="text-[16px] font-medium text-gray-500">He is our most experienced Sculpture Artist</p>
          
        </div>
      </div>

      <div className="card mb-5  w-full  shadow-xl bg-slate-300">
        <figure className="px-10 pt-10">
          <img
            src="/Artist2.jpg"
            alt="Artist"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-slate-700 text-2xl">Name: Sishu Gupta</h2>
          <p className="text-[16px] font-medium text-gray-500">He is our most experienced clay Artist</p>
          
        </div>
      </div>

      <div className="card w-full mb-5  shadow-xl bg-slate-300">
        <figure className="px-10 pt-10">
          <img
            src="/artist3.jpg"
            alt="Artist"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title text-slate-700 font-bold text-2xl">Name: Jonathon</h2>
          <p className="text-[16px] font-medium text-gray-500">He is our Clay master</p>
          
        </div>
      </div>
    </div>
  );
};

export default Artists;
