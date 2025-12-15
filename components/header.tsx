import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-serif font-semibold tracking-tight">ATELIER</div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm tracking-wide hover:text-primary transition-colors">
            브랜드 소개
          </a>
          <a href="#values" className="text-sm tracking-wide hover:text-primary transition-colors">
            핵심 가치
          </a>
          <a href="#story" className="text-sm tracking-wide hover:text-primary transition-colors">
            우리의 이야기
          </a>
          <a href="#contact" className="text-sm tracking-wide hover:text-primary transition-colors">
            문의하기
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
