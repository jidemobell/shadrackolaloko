import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.05)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.05)_0%,transparent_60%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Album Art - Round Container */}
        <div className="mb-16">
          <div className="relative mx-auto">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="/albumart1.png"
                alt="Shadrack Olaloko Album Art"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating ring - perfectly round */}
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-indigo-200/30 animate-pulse"></div>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium tracking-wide">
            Latest Album Art
          </p>
        </div>

        {/* Modern Typography */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                Shadrack
              </span>
              <br />
              <span className="text-gray-800">Olaloko</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-gray-700 font-light tracking-wide">
              Nigerian Yoruba Christian Music Artist
            </p>
            
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-600">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              <span>Based in Ireland</span>
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Inspiring Hearts Through Song</span>
            </div>
          </div>
        </div>

        {/* Modern CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#music"
            className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
          >
            <span className="relative z-10">Listen to Music</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#shows"
            className="group px-10 py-4 bg-white text-gray-900 font-semibold rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:border-indigo-200 hover:shadow-xl"
          >
            Upcoming Shows
          </a>
        </div>

        {/* Sleek Social Media Links */}
        <div className="mt-20 flex justify-center space-x-8">
          <a 
            href="#" 
            className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-50 border border-white/20"
            title="YouTube"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          
          <a 
            href="#" 
            className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-50 border border-white/20"
            title="Spotify"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          
          <a 
            href="#" 
            className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 border border-white/20"
            title="Facebook"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
