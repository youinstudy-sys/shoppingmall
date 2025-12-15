import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { RecruitForm } from "@/components/recruit-form"

export default function RecruitPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">채용</h1>
            <p className="text-muted-foreground leading-relaxed">
              ATELIER는 장인정신과 현대적 감각을 바탕으로, 데이터와 감도를 모두 이해하는 MD를 찾습니다.
            </p>
          </div>

          <div className="mt-10">
            <RecruitForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
