
import YouTubeFeed from '../components/youtubefeed';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-600/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
            {/* Profile Image */}
            <div className="shrink-0 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-lg transform scale-110"></div>
                <img
                  src="/Tech with saketh.jpg"
                  alt="Saketh Damerla - Tech with Saketh Telugu"
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-2xl object-cover mx-auto md:mx-0"
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-lg px-4 md:px-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white leading-tight">
                Tech with <span className="text-red-600">Saketh Telugu</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-light mb-2">Saketh Damerla</p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                Welcome to my digital space where I share cutting-edge tech insights,
                innovative tutorials, and exclusive affiliate recommendations in Telugu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="https://www.youtube.com/@TechwithSakethTelugu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Now!
                </a>
                <a
                  href="https://www.youtube.com/@TechwithSakethTelugu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Feed Section */}
      <YouTubeFeed />

      {/* Call to Action */}
      <div className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Level Up Your Tech Skills?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Join thousands of tech enthusiasts who are learning and growing together.
              Subscribe to Tech with Saketh Telugu for exclusive content and insider insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="https://www.youtube.com/@TechwithSakethTelugu"
                 target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-red-600 text-white font-bold text-base sm:text-lg rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Subscribe Now
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/affiliate"
                className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-red-600 text-red-600 font-bold text-base sm:text-lg rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
