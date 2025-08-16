import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-medium text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-0.5 bg-indigo-600"></div>
            <span>About</span>
            <div className="w-8 h-0.5 bg-indigo-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shadrack</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Shadrack Olaloko is a passionate Nigerian Yoruba Christian music artist 
                who has made Ireland his home. With a heart full of faith and a voice 
                that touches souls, Shadrack creates music that bridges cultures and 
                brings people closer to God.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Born and raised in Nigeria, Shadrack&apos;s musical journey began in his local 
                church where he discovered his calling to minister through song. His 
                unique blend of traditional Yoruba melodies with contemporary Christian 
                music has resonated with audiences across Ireland and beyond.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Now based in Ireland, Shadrack regularly performs at churches, 
                community events, and special celebrations in Dublin and surrounding 
                areas. His mission is simple: to use music as a vessel for spreading 
                God&apos;s love and bringing hope to all who listen.
              </p>
            </div>

            {/* Key Points - Modern Style */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                "Nigerian Yoruba Artist",
                "Based in Ireland", 
                "Dublin Performer",
                "Worship Leader"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder - More Modern */}
          <div className="relative lg:ml-12">
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-indigo-100 via-white to-purple-100 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <Image
                  src="/albumart2.jpeg"
                  alt="Shadrack Olaloko Performance Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl opacity-40 animate-pulse delay-1000"></div>
              
              {/* Decorative dots */}
              <div className="absolute top-10 -left-3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 -right-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement - More Elegant */}
        <div className="mt-24">
          <div className="relative">
            <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl p-12 shadow-xl border border-white/20">
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl mb-8">❝</div>
                <blockquote className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed mb-8">
                  Music is the universal language of the soul. Through my songs, 
                  I hope to touch hearts, inspire faith, and bring people closer to 
                  God&apos;s infinite love.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                  <p className="text-indigo-600 font-semibold tracking-wide">Shadrack Olaloko</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
