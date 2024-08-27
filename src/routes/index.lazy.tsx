import { createLazyFileRoute } from '@tanstack/react-router'
import HomeIndex from '../components/Home/index'

export const Route = createLazyFileRoute('/')({
  component: HomeIndex,
})
