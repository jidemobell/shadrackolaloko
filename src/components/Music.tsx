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
      url: "#",
      color: "bg-green-500 hover:bg-green-600",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    {
      name: "Apple Music",
      url: "#",
      color: "bg-gray-800 hover:bg-gray-900",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.14C17.473 0 16.812 0 16.15 0H7.85c-.662 0-1.323 0-1.986.024-.526.005-1.047.047-1.564.14-.673.121-1.303.353-1.877.727C1.302 1.624.557 2.624.24 3.934.065 4.654 0 5.386 0 6.124v11.752c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.574.374 1.204.606 1.877.727.517.093 1.038.135 1.564.14.663.024 1.324.024 1.986.024h8.3c.662 0 1.323 0 1.986-.024.526-.005 1.047-.047 1.564-.14.673-.121 1.303-.353 1.877-.727 1.118-.734 1.863-1.734 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zM19.15 7.2v3.293c0 2.128-1.732 3.86-3.86 3.86-2.128 0-3.86-1.732-3.86-3.86V6.124c0-.414.336-.75.75-.75s.75.336.75.75v4.369c0 1.3 1.06 2.36 2.36 2.36s2.36-1.06 2.36-2.36V7.2c0-.414.336-.75.75-.75s.75.336.75.75z"/>
        </svg>
      )
    },
    {
      name: "YouTube Music",
      url: "#",
      color: "bg-red-600 hover:bg-red-700",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "SoundCloud",
      url: "#",
      color: "bg-orange-500 hover:bg-orange-600",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.8 17.3c-.4.4-.9.4-1.3 0l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3 3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4z"/>
        </svg>
      )
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
            Stream Shadrack&apos;s Music
          </h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                Available on all major streaming platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {streamingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  className={`${platform.color} text-white rounded-lg p-4 text-center transition-all hover:scale-105 shadow-sm group`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="group-hover:scale-110 transition-transform">
                      {platform.icon}
                    </div>
                    <div className="text-sm font-medium">{platform.name}</div>
                  </div>
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
