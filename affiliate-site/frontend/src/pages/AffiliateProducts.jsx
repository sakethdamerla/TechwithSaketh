const AffiliateProducts = () => {
  const categories = [
    {
      name: 'Tech Gadgets',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      products: [
        {
          id: 1,
          name: 'Mechanical Keyboard',
          description: 'High-performance mechanical keyboard with RGB lighting and premium switches for gaming and productivity.',
          image: '/keyboard.jpg',
          price: '₹8,999',
          features: ['Cherry MX Switches', 'RGB Backlighting', 'USB-C Connection'],
          link: '#'
        },
        {
          id: 2,
          name: 'Wireless Earbuds',
          description: 'Premium wireless earbuds with active noise cancellation and exceptional sound quality.',
          image: '/earbuds.jpg',
          price: '₹12,999',
          features: ['ANC Technology', '40hr Battery Life', 'Touch Controls'],
          link: '#'
        },
      ]
    },
    {
      name: 'Smart Devices',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      products: [
        {
          id: 3,
          name: 'Smart Home Hub',
          description: 'Centralized smart home control with voice assistance and automation capabilities.',
          image: '/smarthome.jpg',
          price: '₹15,499',
          features: ['Voice Control', 'Automation', 'Home Security'],
          link: '#'
        },
        {
          id: 4,
          name: 'Wireless Charger',
          description: 'Fast wireless charging pad with multiple device support and sleek design.',
          image: '/wirelesscharger.jpg',
          price: '₹2,499',
          features: ['15W Fast Charging', 'Multi-Device', 'Modern Design'],
          link: '#'
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
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
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center mb-12">
                {category.icon}
                <h2 className="text-4xl font-bold text-white ml-4">{category.name}</h2>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.products.map(product => (
                  <div key={product.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:border-red-600/50 transition-colors duration-300">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                          <p className="text-gray-300 text-lg leading-relaxed mb-4">{product.description}</p>

                          {/* Features */}
                          <div className="mb-6">
                            {product.features.map((feature, index) => (
                              <span key={index} className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                ✓ {feature}
                              </span>
                            ))}
                          </div>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold text-red-600">{product.price}</div>
                            <a
                              href={product.link}
                              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trusted Badge */}
                    <div className="flex items-center justify-center bg-gray-700/50 py-4">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">Personally Tested & Reviewed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
