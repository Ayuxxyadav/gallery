import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Palette, Image, Trees, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-white py-24 md:py-32 relative">
      <div className="container flex flex-col items-center text-center px-6">
        {/* Hero */}
        <div className="flex flex-col items-center max-w-3xl">
          <div className="mb-6 p-4 rounded-full bg-teal-600 shadow-lg">
            <Palette className="text-white h-8 w-8" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            Discover & Buy{" "}
            <span className="text-teal-600">Beautiful Portraits</span> and Paintings
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Explore an exclusive collection of artworks from talented artists across the globe.
            Own a masterpiece that inspires your soul and beautifies your space.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/gallery" passHref>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full shadow">
                Browse Gallery
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured cards (no images; lucid icons used) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
              <Image className="w-12 h-12 text-teal-600" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg font-semibold text-gray-800">Abstract Painting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-500 text-sm mb-4">Abstract Serenity</p>
              <div className="flex items-center justify-between w-full mt-auto px-2">
                <span className="font-semibold text-teal-700">$299</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  <ShoppingBag className="w-4 h-4 mr-2" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
              <Palette className="w-12 h-12 text-teal-600" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg font-semibold text-gray-800">Portrait Painting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-500 text-sm mb-4">Whispers of Soul</p>
              <div className="flex items-center justify-between w-full mt-auto px-2">
                <span className="font-semibold text-teal-700">$450</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  <ShoppingBag className="w-4 h-4 mr-2" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
              <Trees className="w-12 h-12 text-teal-600" />
            </div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg font-semibold text-gray-800">Nature Painting</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-gray-500 text-sm mb-4">Harmony in Nature</p>
              <div className="flex items-center justify-between w-full mt-auto px-2">
                <span className="font-semibold text-teal-700">$389</span>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  <ShoppingBag className="w-4 h-4 mr-2" /> Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About + CTA */}
        <div className="mt-24 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Connecting Artists & Collectors</h2>
          <p className="text-gray-600 text-lg">
            Our mission is to unite artists and art lovers worldwide through the language of creativity.
            Every artwork tells a story — find the one that speaks to your heart.
          </p>
        </div>

        <div className="mt-20 w-full max-w-5xl bg-teal-600 text-white rounded-3xl p-10 text-center shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Start Your Art Journey Today</h3>
          <p className="text-lg mb-6 opacity-90">
            Buy or sell paintings that inspire souls and transform spaces.
          </p>
          <Link href="/gallery">
            <Button className="bg-white text-teal-700 font-semibold px-10 py-6 rounded-full hover:bg-teal-100 transition">
              Explore Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
