import { useEffect, useState } from "react";

function YouTubeFeed() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
  const MAX_RESULTS = 6;

  useEffect(() => {
    async function loadVideos() {
      setError(null);
      try {
        // Fetch videos directly using the channel ID
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );

        const data = await res.json();

        if (!res.ok || data.error) {
          console.error('YouTube API Error:', data.error?.message || res.statusText);
          if (data.error?.message?.includes('API key expired') || data.error?.message?.includes('API key not valid')) {
            setError('YouTube API key has expired. Please get a new API key from Google Cloud Console.');
          } else {
            setError('Unable to load YouTube videos. Please check your API configuration.');
          }
          return;
        }

        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError('Network error. Please check your internet connection.');
      }
    }

    if (API_KEY && CHANNEL_ID) {
      loadVideos();
    } else {
      setError('Missing YouTube API configuration. Please check your .env file.');
    }
  }, [API_KEY, CHANNEL_ID]);

  return (
    <div className="py-12 sm:py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 flex items-center justify-center flex-wrap">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600 mr-2 sm:mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            Latest YouTube Uploads
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Fresh content from my channel</p>
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos
              .filter((v) => v.id.kind === "youtube#video")
              .map((video) => (
                <div
                  key={video.id.videoId}
                  className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:border-red-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative">
                      <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        className="w-full h-40 sm:h-44 md:h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-90 hover:scale-100 transition-transform duration-300">
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 line-clamp-2 leading-tight">
                      {video.snippet.title.length > 60
                        ? `${video.snippet.title.substring(0, 60)}...`
                        : video.snippet.title
                      }
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-3 sm:px-4 py-2 bg-red-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-300"
                      >
                        Watch Now
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${error ? 'bg-red-900' : 'bg-gray-800'}`}>
              <svg className={`w-6 h-6 sm:w-8 sm:h-8 ${error ? 'text-red-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${error ? 'text-red-400' : 'text-gray-400'}`}>
              {error ? 'Error Loading Videos' : 'Loading latest videos...'}
            </h3>
            <p className={`text-sm sm:text-base ${error ? 'text-red-300' : 'text-gray-500'}`}>
              {error || 'Connecting to YouTube API'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default YouTubeFeed;
