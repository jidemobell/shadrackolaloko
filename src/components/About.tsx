export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Shadrack
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Shadrack Olaloko is a passionate Nigerian Yoruba Christian music artist 
              who has made Ireland his home. With a heart full of faith and a voice 
              that touches souls, Shadrack creates music that bridges cultures and 
              brings people closer to God.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Born and raised in Nigeria, Shadrack&apos;s musical journey began in his local 
              church where he discovered his calling to minister through song. His 
              unique blend of traditional Yoruba melodies with contemporary Christian 
              music has resonated with audiences across Ireland and beyond.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Now based in Ireland, Shadrack regularly performs at churches, 
              community events, and special celebrations in Dublin and surrounding 
              areas. His mission is simple: to use music as a vessel for spreading 
              God&apos;s love and bringing hope to all who listen.
            </p>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Nigerian Yoruba Christian Music Artist</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Based in Ireland</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Regular performer in Dublin</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Inspiring worship through song</span>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg aspect-square flex items-center justify-center shadow-lg">
              <div className="text-center text-gray-500">
                <div className="text-8xl mb-4">🎤</div>
                <p className="text-sm italic">Performance photo coming soon</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <blockquote className="text-2xl font-medium text-gray-800 italic mb-4">
            &ldquo;Music is the universal language of the soul. Through my songs, 
            I hope to touch hearts, inspire faith, and bring people closer to 
            God&apos;s infinite love.&rdquo;
          </blockquote>
          <p className="text-blue-600 font-semibold">- Shadrack Olaloko</p>
        </div>
      </div>
    </section>
  );
}
