import { useState } from 'react'
import { Bell, Search, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NetflixClone() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className="flex items-center space-x-2 md:space-x-10 px-4 py-4">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            alt="Netflix logo"
          />
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-pointer font-semibold text-white hover:text-gray-300">Home</li>
            <li className="headerLink cursor-pointer font-semibold text-[#e5e5e5] hover:text-gray-300">TV Shows</li>
            <li className="headerLink cursor-pointer font-semibold text-[#e5e5e5] hover:text-gray-300">Movies</li>
            <li className="headerLink cursor-pointer font-semibold text-[#e5e5e5] hover:text-gray-300">New & Popular</li>
            <li className="headerLink cursor-pointer font-semibold text-[#e5e5e5] hover:text-gray-300">My List</li>
          </ul>
          <div className="flex items-center space-x-4 text-sm font-light">
            <Search className="hidden sm:inline h-6 w-6" />
            <p className="hidden lg:inline">Kids</p>
            <Bell className="h-6 w-6" />
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Account"
              className="cursor-pointer rounded"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[95vh]">
        <div className="absolute w-full h-full">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-[30%] ml-4 md:ml-16">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">Movie Title</h1>
          <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">Movie description goes here. This is a placeholder for the movie's synopsis.</p>
          <div className="flex space-x-3 mt-4">
            <Button className="bg-white text-black hover:bg-[#e6e6e6]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </Button>
            <Button className="bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]">
              More Info
            </Button>
          </div>
        </div>
      </section>

      {/* Movie Rows */}
      <section className="pb-24 px-4 md:px-16">
        <MovieRow title="Trending Now" />
        <MovieRow title="Top Rated" />
        <MovieRow title="Action Thrillers" />
      </section>
    </div>
  )
}

function MovieRow({ title }: { title: string }) {
  return (
    <div className="mt-4 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
      <div className="group relative md:-ml-2">
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
              <CardContent className="relative h-full p-0">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  className="rounded-sm object-cover md:rounded"
                  alt={`Movie ${i + 1}`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100">
          <ChevronDown className="h-9 w-9" />
        </div>
        <div className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100">
          <ChevronDown className="h-9 w-9 rotate-90" />
        </div>
      </div>
    </div>
  )
}