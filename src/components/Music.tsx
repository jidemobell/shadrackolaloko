import Image from 'next/image';

export default function Music() {
  const videos = [
    {
      id: "jXzkGbOAnWA",
      title: "Shadrack Olaloko - Song 1",
      description: "Original worship song by Shadrack Olaloko",
      url: "https://www.youtube.com/watch?v=jXzkGbOAnWA"
    },
    {
      id: "xSM0CC2ZF84",
      title: "Shadrack Olaloko - Song 2", 
      description: "Inspirational Yoruba Christian music",
      url: "https://www.youtube.com/watch?v=xSM0CC2ZF84"
    },
    {
      id: "Zj4SlLSwc6U",
      title: "Shadrack Olaloko - Song 3",
      description: "Live worship performance",
      url: "https://www.youtube.com/watch?v=Zj4SlLSwc6U"
    }
  ];

  const streamingPlatforms = [
    {
      name: "Spotify",
      url: "#",
      color: "from-green-500 to-emerald-600",
      icon: "🎵"
    },
    {
      name: "Apple Music",
      url: "#",
      color: "from-gray-700 to-gray-900",
      icon: "🍎"
    },
    {
      name: "YouTube Music",
      url: "#",
      color: "from-red-500 to-red-600",
      icon: "▶️"
    },
    {
      name: "SoundCloud",
      url: "#",
      color: "from-orange-500 to-amber-600",
      icon: "☁️"
    }
  ];

  return (
    <section id="music" className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-medium text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-0.5 bg-indigo-600"></div>
            <span>Music</span>
            <div className="w-8 h-0.5 bg-indigo-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Listen to My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Music</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience worship through Yoruba Christian music that touches the soul and lifts the spirit
          </p>
        </div>

        {/* Featured Videos Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Videos</h3>
            <p className="text-gray-600 text-lg">Watch live performances and music videos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 relative">
                    {/* YouTube Embed */}
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full rounded-t-3xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="mt-4">
                      <a 
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 hover:underline"
                      >
                        <span>Watch on YouTube</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Available On</h3>
            <p className="text-gray-600 text-lg">Stream my music on your favorite platform</p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl p-12 shadow-xl border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {streamingPlatforms.map((platform, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:-translate-y-2">
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <span className="text-2xl text-white">{platform.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{platform.name}</h4>
                      <p className="text-gray-500 text-sm mb-4">Coming Soon</p>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${platform.color} h-2 rounded-full transition-all duration-700 group-hover:w-full w-0`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Coming Soon Notice */}
            <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎵</div>
              <p className="text-xl font-bold text-gray-900 mb-2">
                New Music Coming Soon!
              </p>
              <p className="text-gray-600">
                Subscribe to stay updated on the latest songs and albums
              </p>
            </div>
          </div>
        </div>

        {/* Music Style Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">My Musical Style</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  My music blends traditional Yoruba melodies with contemporary Christian worship, 
                  creating a unique sound that speaks to both the heart and soul.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each song is crafted with deep spiritual meaning, designed to inspire faith, 
                  bring comfort, and celebrate God&apos;s love in the rich tradition of Yoruba culture.
                </p>
              </div>
            </div>

            {/* Genre Tags */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-lg">Genres & Styles</h4>
              <div className="flex flex-wrap gap-3">
                {['Yoruba Gospel', 'Contemporary Worship', 'Traditional Hymns', 'Christian Music', 'Inspirational'].map((genre, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200 hover:scale-105 transition-transform cursor-pointer">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 via-white to-purple-100 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              <Image
                src="/albumart3.jpeg"
                alt="Shadrack Olaloko Album Artwork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Floating music notes */}
            <div className="absolute top-8 -right-4 text-2xl text-indigo-400 animate-bounce">♪</div>
            <div className="absolute bottom-12 -left-4 text-xl text-purple-400 animate-bounce delay-500">♫</div>
            <div className="absolute top-1/2 -right-6 text-lg text-indigo-300 animate-bounce delay-1000">♪</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know when new music is released. Follow me on social media 
              or reach out for performance bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Notified
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Book Performance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
