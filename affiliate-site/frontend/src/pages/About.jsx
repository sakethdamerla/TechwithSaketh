const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-red-600">Saketh Damerla</span>
            </h1>
            <div className="relative mx-auto mb-8">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-lg transform scale-110"></div>
              <img
                src="/Tech with saketh.jpg"
                alt="Saketh Damerla - Tech with Saketh Telugu"
                className="relative w-48 h-48 mx-auto rounded-full border-4 border-white shadow-2xl object-cover"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Passionate Tech Enthusiast | YouTuber | Content Creator
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story Section */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  My Journey
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Hi, I'm <span className="text-red-600 font-semibold">Saketh Damerla</span>, and welcome to my digital world!
                    My passion for technology started at a young age, and I've been fascinated by how technology can transform lives and businesses.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I created "Tech with Saketh Telugu" because I believe that technology knowledge should be accessible to everyone,
                    especially the Telugu-speaking community. My mission is to break down complex tech concepts into simple,
                    understandable content that anyone can follow.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Beyond creating content, I love exploring the latest gadgets, discovering innovative solutions,
                    and sharing authentic experiences with my audience. When I'm not creating videos or coding,
                    you'll find me experimenting with new technologies or helping others navigate the tech landscape.
                  </p>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L17 10.414V13a7 7 0 01-14 0v-2.586l.293.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 011.414-1.414L3 6.414V8a5 5 0 0010 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-6-6zM10 18a3 3 1 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  My Mission
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-black/50 rounded-lg p-4 border-l-4 border-red-600">
                    <h3 className="text-xl font-semibold text-white mb-2">Tech Education</h3>
                    <p>Make technology accessible and understandable for everyone through clear Telugu content.</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border-l-4 border-red-600">
                    <h3 className="text-xl font-semibold text-white mb-2">Authentic Reviews</h3>
                    <p>Provide genuine product reviews and recommendations based on real user experiences.</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border-l-4 border-red-600">
                    <h3 className="text-xl font-semibold text-white mb-2">Community Building</h3>
                    <p>Foster a community of tech enthusiasts who learn, share, and grow together.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
                  <p className="text-gray-300">YouTube Subscribers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <p className="text-gray-300">Videos Created</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
                  <p className="text-gray-300">Community Members</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
                  <p className="text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Tech Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to Tech with Saketh Telugu and be part of a community that's passionate about technology,
              innovation, and learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch My Videos
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-10 py-4 border-2 border-red-600 text-red-600 font-bold text-lg rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
