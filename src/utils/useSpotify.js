import { useEffect, useState } from 'react';
import axios from 'axios';

const useSpotify = (endpoint, accessToken) => {
  const [spotifyData, setSpotifyData] = useState(null);
  const [spotifyLoading, setSpotifyLoading] = useState(false);
  const [spotifyError, setSpotifyError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setSpotifyLoading(true);
      try {
        const response = await axios.get(`https://api.spotify.com/v1${endpoint}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setSpotifyData(response.data);
      } catch (error) {
        setSpotifyError(error);
      } finally {
        setSpotifyLoading(false);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [endpoint, accessToken]);

  return { spotifyData, spotifyLoading, spotifyError };
};

export default useSpotify;
