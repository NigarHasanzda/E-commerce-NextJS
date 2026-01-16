import FadeInFromBottom from '@/components/FadeInWhenVisible/FadeFromBottom';
import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Bang Upin",
      job: "Pedagang Asongan",
      comment: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      bgImage: "bg1.png",
      profileImage: "person1.png",
      stars: 4
    },
    {
      id: 2,
      name: "Ibuk Sukijan",
      job: "Ibu Rumah Tangga",
      comment: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      bgImage: "bg2.png",
      profileImage: "person1.png",
      stars: 4
    },
    {
      id: 3,
      name: "Mpok Ina",
      job: "Karyawan Swasta",
      comment: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      bgImage: "bg3.png",
      profileImage: "person1.png",
      stars: 4
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-orange-500 uppercase tracking-widest text-sm font-bold mb-2">Testimonials</h4>
          <h2 className="text-4xl font-bold text-gray-900">Our Client Reviews</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 relative">
          {reviews.map((item) => (
           <FadeInFromBottom key={item.id} >
             <div 
              
              className="w-[370px] h-[480px] rounded-[30px] overflow-hidden relative shadow-xl"
              style={{ 
                backgroundImage: `url(${item.bgImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-6 pt-12 text-center shadow-md">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-200">
                  <img src={item.profileImage} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-gray-400 text-xs mb-4">{item.job}</p>
                <p className="text-gray-600 text-sm italic leading-relaxed mb-4">
                  "{item.comment}"
                </p>
            
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < item.stars ? "text-orange-400" : "text-gray-200"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
           </FadeInFromBottom>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;