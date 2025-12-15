import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Values } from "@/components/values"
import { Story } from "@/components/story"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Values />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}
