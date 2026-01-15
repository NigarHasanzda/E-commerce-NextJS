import "../../../app/globals.css";
import React from "react";

const SellingSection = () => {
  const chairs = [
    {
      img: "/chair.png",
      category: "Chair",
      name: "Sakarias Armchair",
      price: 392,
    },
    {
      img: "/chair2.png",
      category: "Chair",
      name: "Baltsar Chair",
      price: 299,
    },
    {
      img: "/Chair3.png",
      category: "Chair",
      name: "Anjay Chair",
      price: 519,
    },
    {
      img: "/chair.png",
      category: "Chair",
      name: "Nyantuy Chair",
      price: 921,
    },
  ];

  return (
    <section className="!bg-[#F7F7F7] !py-20 !px-4 sm:!px-6 lg:!px-10">
      <div className="!max-w-[80%] !mx-auto">
        {/* Title */}
        <h2 className="!text-center !text-[22px] sm:!text-[26px] lg:!text-[30px] !font-bold !mb-8">
          Best Selling Product
        </h2>

        {/* Tabs */}
        <div className="!flex !justify-center !mb-14">
          <div className="!bg-[#EEEEEE] !rounded-full !p-1 !flex !gap-2">
            {["Chair", "Beds", "Sofa", "Lamp"].map((item, i) => (
              <button
                key={i}
                className={`!px-5 !py-2 !text-sm !rounded-full ${
                  item === "Chair"
                    ? "!bg-white !font-semibold"
                    : "!text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-8">
          {chairs.map((item, index) => (
  <div
    key={index}
    className="!rounded-[24px] !shadow-sm hover:!shadow-md !transition"
  >
    {/* Image */}
    <div className="!flex !justify-center !mb-6 !p-6">
      <img
        src={item.img}
        alt={item.name}
        className="!w-[160px] !h-[180px] !object-contain"
      />
    </div>

    {/* 🔽 AŞAĞI HİSSƏ (BG VERƏ BİLƏRSƏN) */}
    <div className="!bg-[#ffffff] !p-6 !rounded-b-[24px]">
      
      <span className="!text-gray-400 !text-sm">
        {item.category}
      </span>

      <h3 className="!font-semibold !text-[16px] !mt-1 !mb-2">
        {item.name}
      </h3>

      {/* Rating */}
      <div className="!flex !gap-1 !mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="!text-orange-400">★</span>
          ))}
      </div>

      {/* Price + Button */}
      <div className="!flex !items-center !justify-between">
        <span className="!font-bold !text-[18px]">
          ${item.price}
        </span>

        <button className="!w-[40px] !h-[40px] !rounded-full !bg-[#0b132b] !text-white !flex !items-center !justify-center !text-xl hover:!scale-105 !transition">
          +
        </button>
      </div>
    </div>
  </div>
))}

        </div>
      </div>

      {/* View All */}
      <span className="!block !mx-auto !my-[20px] !text-center !text-[16px] !text-orange-500">
        View All--
      </span>
    </section>
  );
};

export default SellingSection;
