import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (endpoint, accessToken) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.spotify.com/v1${endpoint}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [endpoint, accessToken]);

  return { data, loading, error };
};

export default useAxios;
