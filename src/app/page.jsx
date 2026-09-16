import Courses from "@/components/Courses"
import CTA from "@/components/CTA"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"

const page = () => {
  return (
    <div className="relative min-h-screen bg-dark-900 text-text-primary overflow-x-hidden">
      <Navbar/>

      <main>
        <Hero/>
        <Features/>

        <Courses/>
        <Stats />
        <Testimonials/>
        <Pricing/>
        <CTA/>
        <Footer/>
      </main>
      </div>
  )
}

export default page