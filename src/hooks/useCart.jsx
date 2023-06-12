import { useContext } from 'react';
// import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProvider';
// import { useQuery } from 'react-query';
import { useQuery } from '@tanstack/react-query'


const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    // ...
    const token = localStorage.getItem('access-token');
    const { refetch, data: cart = [] } = useQuery({
      queryKey: ['carts', user?.email],
      enabled: !loading,
      queryFn: async () => {
        // Fetch cart data from the server
        const res = await fetch(`https://skillset-academy-server.vercel.app/carts?email=${user?.email}`, {
          headers: {
            authorization: `bearer ${token}`
          }
        });
        return res.json();
      },
    });
  
    return [cart, refetch];
  };
  
  export default useCart;