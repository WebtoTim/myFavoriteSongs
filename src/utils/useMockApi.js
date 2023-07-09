import { useEffect, useState } from 'react';
import axios from 'axios';

const useMockApi = (endpoint) => {
  const [mockData, setMockData] = useState(null);
  const [mockLoading, setMockLoading] = useState(false);
  const [mockError, setMockError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setMockLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_MOCKAPI}${endpoint}`);
        setMockData(response.data);
      } catch (error) {
        setMockError(error);
      } finally {
        setMockLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { mockData, mockLoading, mockError };
};

export default useMockApi;
