import { useState } from 'react';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    topic: '',
    suggestion: '',
    urgency: 'normal'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for your suggestion! I truly appreciate your input and will consider it for future content.');
        setFormData({
          name: '',
          email: '',
          type: '',
          topic: '',
          suggestion: '',
          urgency: 'normal'
        });
      } else {
        alert('Error submitting suggestion. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting suggestion. Please try again.');
    }
  };

  const suggestionTypes = [
    'Product Review',
    'Tutorial Video',
    'Tech News Coverage',
    'Comparison Review',
    'Tech Tips & Tricks',
    'Problem Solving',
    'Future Tech Trends',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Anytime is fine', desc: 'I can wait months for this content' },
    { value: 'normal', label: 'Normal - When convenient', desc: 'This would be nice to see in future videos' },
    { value: 'high', label: 'High - Timely topic', desc: 'This is a trending topic or time-sensitive' },
    { value: 'urgent', label: 'Urgent - Breaking news', desc: 'Latest tech release or important tech update' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
        <div className="absolute top-16 left-16 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-red-600/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Voice <span className="text-red-600">Matters</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Help shape the future of Tech with Saketh Telugu
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center bg-gray-800/50 backdrop-blur rounded-2xl p-6 min-w-[150px]">
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <p className="text-gray-300 text-sm">Suggestions Received</p>
              </div>
              <div className="text-center bg-gray-800/50 backdrop-blur rounded-2xl p-6 min-w-[150px]">
                <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
                <p className="text-gray-300 text-sm">Implemented</p>
              </div>
              <div className="text-center bg-gray-800/50 backdrop-blur rounded-2xl p-6 min-w-[150px]">
                <div className="text-3xl font-bold text-red-600 mb-2">24hr</div>
                <p className="text-gray-300 text-sm">Review Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Types */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Kind of Content Interests You?</h2>
            <p className="text-xl text-gray-300">Tell me what you'd love to learn about</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📱', title: 'Mobile Tech', topics: 'Phones, Apps, Android, Mobile OS' },
              { icon: '💻', title: 'Computers', topics: 'Laptops, PCs, Hardware, Software' },
              { icon: '🎮', title: 'Gaming', topics: 'Gaming PCs, Consoles, VR/AR, Esports' },
              { icon: '🔧', title: 'Tools & Software', topics: 'Productivity, Development, AI Tools' },
              { icon: '🌐', title: 'Internet & Networks', topics: 'Web Development, Cloud, Security' },
              { icon: '🤖', title: 'AI & Future Tech', topics: 'Machine Learning, Robotics, Innovation' },
              { icon: '📷', title: 'Gadgets', topics: 'Smart Home, Wearables, IoT Devices' },
              { icon: '💡', title: 'Tips & Tutorials', topics: 'How-to Guides, Troubleshooting, Best Practices' }
            ].map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-red-600/50 transition-colors duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggestion Form */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Share Your Idea
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Content Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      required
                    >
                      <option value="" className="bg-gray-700">What type of content would you like?</option>
                      {suggestionTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-gray-700">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Specific Topic/Technology *</label>
                    <input
                      type="text"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      placeholder="e.g., iPhone 14 Pro Max, React.js, Gaming Laptops, AI Tools"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Suggestion *</label>
                    <textarea
                      name="suggestion"
                      rows="6"
                      value={formData.suggestion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none"
                      placeholder="Share your detailed idea or question... What specific aspect interests you? What problems do you want solved? What tutorials would you find helpful?"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Importance Level</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {urgencyLevels.map((level, index) => (
                        <label key={index} className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="mt-1 text-red-600 focus:ring-red-600"
                          />
                          <div>
                            <div className="font-medium text-white">{level.label}</div>
                            <div className="text-gray-400 text-sm">{level.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    Send Your Suggestion
                  </button>
                </form>
              </div>

              {/* Why Your Ideas Matter */}
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Why Your Ideas Matter
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Direct Impact</h4>
                        <p className="text-gray-400 text-sm">Your suggestions directly influence what I create next</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Community Driven</h4>
                        <p className="text-gray-400 text-sm">Content created specifically for our Telugu tech community</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Personal Response</h4>
                        <p className="text-gray-400 text-sm">I personally read every suggestion and respond when relevant</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    Recent Suggestions That Became Videos
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-red-600">
                      <p className="text-gray-300 text-sm italic">"How to choose the best mechanical keyboard?"</p>
                      <p className="text-gray-400 text-xs mt-2">→ Created comprehensive keyboard buying guide</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-red-600">
                      <p className="text-gray-300 text-sm italic">"Explain React vs Vue for beginners"</p>
                      <p className="text-gray-400 text-xs mt-2">→ 2-part comparison series with demo projects</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-red-600">
                      <p className="text-gray-300 text-sm italic">"Smart home setup under ₹50,000"</p>
                      <p className="text-gray-400 text-xs mt-2">→ Complete budget smart home tutorial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
