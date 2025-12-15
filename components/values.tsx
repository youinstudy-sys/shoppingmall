import { Leaf, Users, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Leaf,
    title: "지속 가능성",
    description: "환경을 생각하는 소재 선택과 생산 과정을 통해 지구와 함께 성장합니다.",
  },
  {
    icon: Sparkles,
    title: "장인정신",
    description: "모든 제품은 숙련된 장인의 손길로 정성스럽게 제작되어 최상의 퀄리티를 보장합니다.",
  },
  {
    icon: Users,
    title: "고객 중심",
    description: "고객의 목소리에 귀 기울이며, 개인의 스타일과 니즈를 존중하는 서비스를 제공합니다.",
  },
]

export function Values() {
  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">핵심 가치</h2>
          <p className="text-muted-foreground text-lg">우리가 소중히 여기는 것들</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
