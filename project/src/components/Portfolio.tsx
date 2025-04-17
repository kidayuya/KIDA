import React, { useState } from 'react';

const categories = ['全部', '人物', '場景', '商業', '繪本'];

const works = [
  {
    id: 1,
    title: '春日少女',
    category: '人物',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80',
    tags: ['數位繪畫', '人物']
  },
  {
    id: 2,
    title: '都市印象',
    category: '場景',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80',
    tags: ['場景設計', '概念藝術']
  },
  {
    id: 3,
    title: '童話世界',
    category: '繪本',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1560830672-575980201c33?auto=format&fit=crop&q=80',
    tags: ['繪本插畫', '兒童']
  },
  {
    id: 4,
    title: '品牌形象',
    category: '商業',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80',
    tags: ['商業插畫', '品牌']
  },
  {
    id: 5,
    title: '夢境漫遊',
    category: '場景',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80',
    tags: ['概念藝術', '場景']
  },
  {
    id: 6,
    title: '角色設定',
    category: '人物',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
    tags: ['角色設計', '人物']
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredWorks = activeCategory === '全部' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">作品集</h2>
          
          <div className="flex justify-center gap-8 mb-16">
            {categories.map(category => (
              <button
                key={category}
                className={`text-sm tracking-wider px-6 py-2 transition-colors ${
                  activeCategory === category 
                    ? 'text-gray-800 border-b-2 border-gray-800' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map(work => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700
                    group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 
                      group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-light mb-2">{work.title}</h3>
                      <p className="text-sm opacity-80">{work.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;