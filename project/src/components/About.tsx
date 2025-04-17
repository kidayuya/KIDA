import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#DEDEBE]/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
                alt="Artist Portrait"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-light">關於我</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  你好，我是 Yuya，一位專注於數位插畫創作的藝術家。我的作品風格融合了東方美學與現代設計元素，
                  致力於透過獨特的視角展現日常生活中的詩意時刻。
                </p>
                <p>
                  在我的創作生涯中，我不斷探索不同的表現形式，從細膩的人物刻畫到富有想像力的場景設計，
                  每一幅作品都承載著獨特的故事與情感。
                </p>
                <div>
                  <p className="mb-4">專長領域：</p>
                  <ul className="space-y-2 list-inside list-disc">
                    <li>人物角色設計</li>
                    <li>場景概念設計</li>
                    <li>商業插畫製作</li>
                    <li>童書繪本創作</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;