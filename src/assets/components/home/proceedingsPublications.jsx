export default function Proceedings() {
  const proceeding_logo = [
    "/images/logo/scopus-logo.webp",
    "/images/logo/sjr-logo.webp",
  ];
  
  return (
    <div className="py-8 px-6 bg-white">
      <div className=" mx-auto max-w-5xl">
        <div className="relative group perspective-1000">
          {/* Metallic glare effect overlay */}
          <div className="absolute inset-0   duration-700 pointer-events-none rounded-3xl z-20"></div>
          <div className="absolute inset-0  duration-500 pointer-events-none rounded-3xl z-20" style={{ animationDelay: '0.1s' }}></div>
          
          {/* Main card with metallic surface */}
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 rounded-3xl shadow-2xl overflow-hidden border border-blue-800">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12  duration-1000"></div>
            
            {/* Metallic shine strips */}
            
            <div className="relative z-10 p-10 lg:p-16">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-block">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
                    Proceedings & Publications
                  </h2>
                  <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                {proceeding_logo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg   duration-300  border border-blue-200/50"
                  >
                    <img
                      src={item}
                      alt=""
                      width={150}
                      height={200}
                      loading="lazy"
                      className="rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* Note section */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl border border-orange-400/50">
                <p className="text-white text-center leading-relaxed">
                  <span className="font-black text-lg">Note: </span>
                  <span className="font-medium">
                    Note: ICAEBMS - 2026 Proceedings will be submitted to the Web of science Book citation index (BkCI) and Scopus for evaluation and indexing purposes (T&C)* apply.

                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}