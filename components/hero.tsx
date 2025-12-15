import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-6">
          시대를 초월한
          <br />
          <span className="font-medium">우아함의 정의</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          ATELIER는 장인정신과 현대적 감각이 만나는 곳입니다.
          <br />
          우리는 지속 가능한 패션을 통해 당신만의 스타일을 완성합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            브랜드 스토리 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            컬렉션 둘러보기
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-12 bg-border"></div>
      </div>
    </section>
  )
}
