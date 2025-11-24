import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Palette, Image, Trees, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-white py-16 md:py-24 lg:py-32 relative">
      <div className="container px-6 mx-auto flex flex-col items-center text-center">
        {/* Hero */}
        <div className="flex flex-col items-center max-w-3xl w-full">
          <div className="mb-6 p-3 md:p-4 rounded-full bg-teal-600 shadow-lg">
            <Palette className="text-white h-7 w-7 md:h-8 md:w-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            Discover & Buy{" "}
            <span className="text-teal-600">Beautiful Portraits</span> and Paintings
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl px-2">
            Explore an exclusive collection of artworks from talented artists across the globe.
            Own a masterpiece that inspires your soul and beautifies your space.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <Link href="/gallery" aria-label="Browse gallery">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base rounded-full shadow">
                Browse Gallery
              </Button>
            </Link>

            {/* Optional secondary CTA (kept here but can be removed) */}
            <Link href="/sell" aria-label="Start selling your art">
              <Button variant="outline" className="border-teal-600 text-teal-700 px-6 py-3 rounded-full hidden sm:inline-flex">
                Sell Your Art
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured cards (responsive grid) */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
          <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
              <Image className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600" />
            </div>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">Abstract Painting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 flex flex-col grow">
              <p className="text-gray-500 text-sm mb-4">Abstract Serenity</p>
              <div className="mt-auto w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3">
                <span className="font-semibold text-teal-700 text-lg">$299</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2">
                  <ShoppingBag className="w-4 h-4 mr-2 inline-block" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
              <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600" />
            </div>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">Portrait Painting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 flex flex-col grow">
              <p className="text-gray-500 text-sm mb-4">Whispers of Soul</p>
              <div className="mt-auto w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3">
                <span className="font-semibold text-teal-700 text-lg">$450</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2">
                  <ShoppingBag className="w-4 h-4 mr-2 inline-block" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
              <Trees className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600" />
            </div>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800">Nature Painting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 flex flex-col grow">
              <p className="text-gray-500 text-sm mb-4">Harmony in Nature</p>
              <div className="mt-auto w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3">
                <span className="font-semibold text-teal-700 text-lg">$389</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2">
                  <ShoppingBag className="w-4 h-4 mr-2 inline-block" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About + CTA */}
        <div className="mt-12 md:mt-24 max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Connecting Artists & Collectors</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Our mission is to unite artists and art lovers worldwide through the language of creativity.
            Every artwork tells a story — find the one that speaks to your heart.
          </p>
        </div>

        <div className="mt-12 md:mt-20 w-full max-w-5xl bg-teal-600 text-white rounded-3xl p-8 md:p-10 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Start Your Art Journey Today</h3>
          <p className="text-base md:text-lg mb-6 opacity-90">
            Buy or sell paintings that inspire souls and transform spaces.
          </p>
          <Link href="/gallery" aria-label="Explore gallery">
            <Button className="bg-white text-teal-700 font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-teal-100 transition">
              Explore Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
