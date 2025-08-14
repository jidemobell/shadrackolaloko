export default function Music() {
  // Sample YouTube video IDs - replace with actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
      title: "Blessed Assurance - Yoruba Version",
      description: "A beautiful rendition of this classic hymn in Yoruba"
    },
    {
      id: "9bZkp7q19f0", // Placeholder - replace with actual video ID
      title: "Ogo Ni Fun Olorun",
      description: "Praise song celebrating God's glory"
    },
    {
      id: "kJQP7kiw5Fk", // Placeholder - replace with actual video ID
      title: "Amazing Grace - Live Performance",
      description: "Live performance at Dublin Community Church"
    }
  ];

  const streamingPlatforms = [
    {
      name: "Spotify",
      icon: "🎵",
      url: "#",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Apple Music",
      icon: "🎶",
      url: "#",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "YouTube Music",
      icon: "▶️",
      url: "#",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      name: "SoundCloud",
      icon: "☁️",
      url: "#",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <section id="music" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Music & Worship
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of worship through Shadrack&apos;s inspiring musical ministry
          </p>
        </div>

        {/* YouTube Videos Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Videos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for YouTube embed */}
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🎥</div>
                    <p className="text-sm">YouTube Video</p>
                    <p className="text-xs italic mt-1">Embed code coming soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {video.description}
                  </p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Watch Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m4-10V8a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming Platforms Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Listen on Your Favorite Platform
          </h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                Stream Shadrack&apos;s music on all major platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {streamingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  className={`${platform.color} text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-md`}
                >
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <div className="font-semibold">{platform.name}</div>
                </a>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-8 text-center bg-blue-50 rounded-lg p-6">
              <p className="text-blue-800 font-medium">
                🎵 New music releases coming soon! 
              </p>
              <p className="text-blue-600 text-sm mt-1">
                Subscribe to stay updated on the latest songs and albums
              </p>
            </div>
          </div>
        </div>

        {/* Music Genre & Style */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Musical Style
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow">
                Yoruba Gospel
              </span>
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow">
                Contemporary Christian
              </span>
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow">
                Worship Music
              </span>
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow">
                Traditional Hymns
              </span>
              <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium shadow">
                Inspirational
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
