import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import AuthProviders from './Contexts/AuthProviders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />

      </AuthProviders>
    </QueryClientProvider>

  </React.StrictMode>,
)
