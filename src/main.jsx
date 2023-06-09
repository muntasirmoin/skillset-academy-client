import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import 'sweetalert2/dist/sweetalert2.min.css';


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

    <QueryClientProvider client={queryClient}>
   
      <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
    </QueryClientProvider>
      

    </AuthProvider>



  </React.StrictMode>,
)
