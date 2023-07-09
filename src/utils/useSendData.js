/* import { createContext, useState } from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const { data, loading, error } = useAxios('/me', accessToken);
  let axiosData = {
        userData: {
          data: data,
          loading: loading,
          error: error,
        },
        myData: {
          data: data,
          loading: loading,
          error: error,
        },
        Songs: {
          data: data,
          loading: loading,
          error: error,
        }
  }

  return (
    <AuthContext.Provider value={{ }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }; */


