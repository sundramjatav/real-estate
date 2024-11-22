import axios from "axios";
import { useEffect, useState } from "react";
import taj from '../../assets/TajParadise/taj.png'
const TajParadise = () => {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const allCategory = allData?.map((item) => item.category);
  const [activeTab, setActiveTab] = useState(
    allCategory?.[0]?.replaceAll(" ", "_")
  );

  useEffect(() => {
    allData?.map((item) => {
      if (item?.category === activeTab?.replaceAll("_", " ")) {
        setFilterData(item?.properties);
      }
    });
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(allCategory?.[0]?.replaceAll(" ", "_"));
  }, [allData]);

  useEffect(() => {
    axios
      .get("https://adapi.aspirantsally.com/api/properties")
      .then((response) => {
        setAllData(response.data);
        console.log(response.data,"responsive data");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="TajParadise py-[4rem]">
        <div className="section-inner">
          {/* <h4 className="big-heading mb-[6rem]">Taj  Paradise</h4> */}
          <div className="w-full flex items-center justify-center ">
            <img className="w-[45vh]" src={taj} alt="" />
          </div>

          <div className="inner-wrapper">
            <div className="tab-panel">
              <div className="panel-wrapper w-100 flex justify-center flex-wrap gap-[2rem]">
                {allCategory?.map((cat, i) => {
                  return (
                    <div
                      key={`categ${i}`}
                      className={` text-[2rem] text-[#8f9fa3] cursor-pointer p-[1.8rem_2.4rem] rounded-lg ${
                        activeTab?.replaceAll(" ", "_") ===
                        cat?.replaceAll(" ", "_")
                          ? "text-[#fff] bg-[#e79600]"
                          : ""
                      }`}
                      onClick={() => handleTabClick(cat?.replaceAll(" ", "_"))}
                    >
                      {cat}
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{rowGap:'2rem', columnGap:'2%'}} className="flex justify-center flex-wrap mt-[5rem]">
              {filterData?.map((e, i) => {
                return (
                  <div
                    key={`taj${i}`}
                    className={`capitalize cursor-pointer min-w-[48%] w-[48%] lg:min-w-[12%] lg:w-[12%] md:min-w-[32%] md:w-[32%] flex justify-center items-center text-[1.8rem] leading-8 p-[3rem_4.4rem] bg-[#131212] rounded-[1rem] border-2 group relative ${
                      e?.status === "available" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <h1
                      // style={{ fontFamily: "var(--ff-satisfy)" }}
                      className="name text-[2.2rem] text-white "
                    >
                      {e?.name}
                    </h1>

                    <div
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      }}
                      className=" absolute z-10 top-[100%] left-0 mt-4 max-h-0 overflow-hidden group-hover:max-h-fit transition-all duration-300 ease-in-out"
                    >
                      <div className="bg-gray-100 p-[2rem] w-100 rounded-lg shadow-lg text-black">
                        <p className="text-nowrap text-[#e79600]">
                          Name: <b>{e?.name}</b>
                        </p>

                        <p className="text-nowrap text-[#e79600] mt-[1.6rem]">
                          Status:{" "}
                          <b
                            className={
                              e?.status === "available"
                                ? "text-green-700 capitalize"
                                : "text-red-500 capitalize"
                            }
                          >
                            {e?.status}
                          </b>
                        </p>

                        {e?.bookingDetails?.bookingDate && (
                          <p className="text-nowrap text-[#e79600] mt-[1.6rem]">
                            date:{" "}
                            <b>
                              {new Date(
                                e?.bookingDetails?.bookingDate
                              ).toLocaleDateString("en-GB")}
                            </b>
                          </p>
                        )}
                        {e?.bookingDetails?.bookedTo && (
                          <p className="text-nowrap text-[#e79600] mt-[1.6rem]">
                            booked To: <b>{e?.bookingDetails?.bookedTo}</b>
                          </p>
                        )}
                        {e?.bookingDetails?.bookedBy && (
                          <p className="text-nowrap text-[#e79600] mt-[1.6rem]">
                            booked By: <b>{e?.bookingDetails?.bookedBy}</b>
                          </p>
                        )}
                        {e?.plot && (
                          <p className="text-nowrap text-[#e79600] mt-[1.6rem]">
                            Plot: <b>{e?.plot}</b>
                          </p>
                        )}

                        <div className=" w-64 max-h-40 mx-auto mt-[2rem]">
                          <img className="rounded-2xl" src={e?.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TajParadise;
