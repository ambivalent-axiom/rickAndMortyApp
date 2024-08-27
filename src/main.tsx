import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

const queryClient = new QueryClient()
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
    </StrictMode>,
  )
