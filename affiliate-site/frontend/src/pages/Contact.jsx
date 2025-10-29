import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    priority: 'normal'
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
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for your message! I\'ve received it and will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: '',
          message: '',
          priority: 'normal'
        });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const contactCategories = [
    'General Inquiry',
    'Business Partnership',
    'Technical Support',
    'Video Collaboration',
    'Affiliate Partnership',
    'Media & Press',
    'Feedback',
    'Other'
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
              Let's <span className="text-red-600">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Reach out and let's build something amazing together
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center bg-gray-800/50 backdrop-blur rounded-2xl p-6 min-w-[150px]">
                <div className="text-3xl font-bold text-red-600 mb-2">24hr</div>
                <p className="text-gray-300 text-sm">Response Time</p>
              </div>
              <div className="text-center bg-gray-800/50 backdrop-blur rounded-2xl p-6 min-w-[150px]">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <p className="text-gray-300 text-sm">Personal Response</p>
              </div>
              <div className="text-center bg-gray-800/50 backdrop-blur rounded-2xl p-6 min-w-[150px]">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-300 text-sm">Form Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Send Me a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                          placeholder="What's this about?"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Category</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                        >
                          <option value="" className="bg-gray-700">Select a category</option>
                          {contactCategories.map((category, index) => (
                            <option key={index} value={category} className="bg-gray-700">{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                      <textarea
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none"
                        placeholder="Please share your thoughts, questions, or suggestions... I'm here to listen and help!"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Priority Level</label>
                      <div className="flex gap-4">
                        {[
                          { value: 'low', label: 'Normal' },
                          { value: 'normal', label: 'Urgent' },
                          { value: 'high', label: 'Very Urgent' }
                        ].map((priority, index) => (
                          <label key={index} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="priority"
                              value={priority.value}
                              checked={formData.priority === priority.value}
                              onChange={handleInputChange}
                              className="text-red-600 focus:ring-red-600"
                            />
                            <span className="text-gray-300">{priority.label}</span>
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
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Social */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Email Response</h4>
                        <p className="text-gray-400 text-sm">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Business Hours</h4>
                        <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Location</h4>
                        <p className="text-gray-400 text-sm">Telangana, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect With Me */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.youtube.com/@TechwithSakethTelugu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">YouTube Channel</p>
                        <p className="text-gray-400 text-sm">Tech with Saketh Telugu</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Twitter</p>
                        <p className="text-gray-400 text-sm">@TechSakethTelugu</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.345.029 11.949c0 5.186 3.521 9.694 8.519 11.218-.113-.945-.219-2.398.041-3.428.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.604 0 11.979-5.345 11.979-11.949C24 5.345 18.621.001 12.017 0z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Pinterest</p>
                        <p className="text-gray-400 text-sm">Tech products & reviews</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Quick FAQ
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Why contact personally?</h4>
                      <p className="text-gray-400 text-xs">I respond to every message because I care about our community.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Business inquiries?</h4>
                      <p className="text-gray-400 text-xs">Use the collaboration form for sponsorship and partnership opportunities.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Technical questions?</h4>
                      <p className="text-gray-400 text-xs">I love helping with tech questions - that's what I'm here for!</p>
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

export default Contact;
