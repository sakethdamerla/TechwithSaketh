const AffiliateProducts = () => {
  const categories = [];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-600/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tech <span className="text-red-600">Recommendations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Curated products I've personally tested and trust
            </p>
            <div className="bg-gray-800/50 rounded-2xl p-6 max-w-2xl mx-auto border border-gray-700">
              <div className="flex items-center justify-center space-x-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 2.25-4.5l.5 1.5 1 2.5 2.25 0 2-2.5 1.5-.5C20 10 19 8.5 17.5 7c-1.5 1-2 3-2 4.5 1.62 0 2.5-.5 2.5-.5a3 3 0 01-4.88-1.12z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">100%</span> Transparent Reviews •
                  <span className="text-white font-semibold"> Tested</span> Products •
                  <span className="text-white font-semibold"> Best</span> Value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-8">
          {categories.length > 0 ? (
            categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                {/* ... product rendering logic would go here ... */}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-2xl">no products for now</p>
          )}
        </div>
      </div>

      {/* Affiliate Disclaimer */}
      <div className="py-12 bg-gray-800">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-4">Affiliate Disclosure</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                As an affiliate partner, I may earn a commission from qualifying purchases made through these links at no additional cost to you.
                My recommendations are always based on genuine testing and experience, never on commissions. I only promote products I truly believe will add value to your tech journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProducts;
