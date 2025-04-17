import React, { useState } from 'react';
import { Instagram, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">與我聯繫</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">讓我們開始合作</h3>
                <p className="text-gray-600 leading-relaxed">
                  無論是商業合作、委託創作，還是任何關於藝術創作的討論，都歡迎與我聯繫。
                  我期待能與您一同創造獨特的視覺作品。
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contact@yuya.art" 
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Mail size={20} />
                  contact@yuya.art
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Instagram size={20} />
                  @yuya.illustration
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">姓名</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-none
                  focus:outline-none focus:border-gray-800 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-none
                  focus:outline-none focus:border-gray-800 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">訊息</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-none
                  focus:outline-none focus:border-gray-800 transition-colors"
                  rows={5}
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full border-2 border-gray-800 text-gray-800 px-6 py-3
                hover:bg-gray-800 hover:text-white transition-colors flex items-center 
                justify-center gap-2 text-sm tracking-wider"
              >
                發送訊息
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;