import Image from 'next/image';

export default function Shows() {
  const upcomingShows = [
    {
      date: "Dec 15, 2024",
      venue: "Dublin Community Church",
      location: "Dublin, Ireland",
      time: "7:00 PM",
      type: "Worship Service"
    },
    {
      date: "Dec 22, 2024",
      venue: "Christ Embassy",
      location: "Dublin, Ireland", 
      time: "6:30 PM",
      type: "Christmas Special"
    },
    {
      date: "Jan 5, 2025",
      venue: "Redeemed Christian Church",
      location: "Dublin, Ireland",
      time: "11:00 AM",
      type: "Sunday Service"
    }
  ];

  return (
    <section id="shows" className="py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-medium text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-0.5 bg-indigo-600"></div>
            <span>Shows</span>
            <div className="w-8 h-0.5 bg-indigo-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Upcoming <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shows</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join me for inspiring worship experiences across Dublin and Ireland
          </p>
        </div>

        {/* Shows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {upcomingShows.map((show, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium">
                      {show.type}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🎤</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {show.venue}
                  </h3>
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="text-indigo-500 mr-2">📍</span>
                    {show.location}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">📅</span>
                    <span className="font-semibold">{show.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">⏰</span>
                    <span className="font-semibold">{show.time}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    Get Tickets
                  </button>
                  <button className="px-4 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-lg">ℹ️</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Live Worship Experience</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience the power of live worship with heartfelt Yoruba Christian music 
                  that brings communities together in praise and celebration.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each performance is a unique spiritual journey, combining traditional 
                  Nigerian worship with contemporary Christian music in an atmosphere of 
                  faith and fellowship.
                </p>
              </div>
            </div>

            {/* Performance Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Live Vocals",
                "Traditional Music",
                "Community Worship",
                "Spiritual Ministry"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-indigo-100 via-white to-purple-100 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              <Image
                src="/albumart4.jpeg"
                alt="Shadrack Olaloko Live Performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl opacity-40 animate-pulse delay-1000"></div>
            
            {/* Music notes */}
            <div className="absolute top-10 -left-3 text-2xl text-indigo-400 animate-bounce">♪</div>
            <div className="absolute bottom-20 -right-3 text-xl text-purple-400 animate-bounce delay-700">♫</div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-5xl mb-6">🎵</div>
              <h3 className="text-3xl font-bold text-white mb-4">Book Shadrack for Your Event</h3>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                Bring inspiring worship music to your church, community event, or special celebration. 
                Available for services, concerts, and private events across Dublin and Ireland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Request Booking
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  View Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
