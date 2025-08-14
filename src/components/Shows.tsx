export default function Shows() {
  // Sample upcoming shows - replace with real data
  const upcomingShows = [
    {
      date: "2024-09-15",
      time: "7:00 PM",
      venue: "St. Patrick's Community Church",
      location: "Dublin 2",
      event: "Sunday Evening Worship",
      description: "Join us for an evening of praise and worship",
      ticketInfo: "Free Entry - All Welcome"
    },
    {
      date: "2024-09-28",
      time: "6:30 PM",
      venue: "Dublin Gospel Centre",
      location: "Dublin 8",
      event: "Faith & Music Night",
      description: "Special worship concert with guest musicians",
      ticketInfo: "€10 suggested donation"
    },
    {
      date: "2024-10-12",
      time: "3:00 PM",
      venue: "Nigerian Community Centre",
      location: "Blanchardstown",
      event: "Cultural Celebration",
      description: "Celebrating Nigerian culture through music and worship",
      ticketInfo: "€15 - Includes refreshments"
    }
  ];

  const pastShows = [
    {
      date: "2024-08-10",
      venue: "Christ Church Cathedral",
      event: "Summer Concert Series"
    },
    {
      date: "2024-07-20",
      venue: "Temple Bar Community Centre",
      event: "Music & Ministry Evening"
    },
    {
      date: "2024-06-15",
      venue: "Trinity College Chapel",
      event: "Interfaith Worship Service"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="shows" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Shows & Events
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the joy of worship in person. Join Shadrack at upcoming shows across Dublin
          </p>
        </div>

        {/* Upcoming Shows */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Upcoming Performances
          </h3>
          
          <div className="space-y-6">
            {upcomingShows.map((show, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center min-w-fit">
                        <div className="text-sm font-medium">{formatDate(show.date)}</div>
                        <div className="text-lg font-bold">{show.time}</div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {show.event}
                        </h4>
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {show.venue}, {show.location}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-2">{show.description}</p>
                    <p className="text-blue-600 font-medium">{show.ticketInfo}</p>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Get Details
                    </button>
                  </div>
                </div>
                
                {/* Pamphlet Download Placeholder */}
                <div className="mt-4 pt-4 border-t border-blue-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Event pamphlet available:</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Download PDF
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Shadrack */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Book Shadrack for Your Event</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Available for church services, community events, weddings, and special celebrations. 
              Bringing inspiring worship music to your gathering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                Contact for Booking
              </a>
              <a 
                href="tel:+353-XXX-XXXX"
                className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Past Shows */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Performances
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastShows.map((show, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-sm font-medium mb-2">
                  {formatDate(show.date)}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {show.event}
                </h4>
                <p className="text-gray-600 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {show.venue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated on Upcoming Shows
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive notifications about new performances and events
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
