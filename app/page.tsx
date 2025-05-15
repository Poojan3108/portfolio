import { Navbar } from "@/components/navbar"
import  Hero  from "@/components/hero"
import  Projects  from "@/components/projects"
import { Research } from "@/components/research"
import { Certificates } from "@/components/certificates"
import { Footer } from "@/components/footer"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Research />
      <Footer />
      
    </main>
  )
}
