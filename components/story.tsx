export function Story() {
  return (
    <section id="story" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <img src="/elegant-fashion-atelier-workspace.jpg" alt="ATELIER 작업실" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">우리의 이야기</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>2015년, 작은 아틀리에에서 시작된 ATELIER는 진정한 패션의 가치를 추구하는 열정으로 탄생했습니다.</p>
              <p>
                우리는 빠르게 변화하는 패션 트렌드 속에서도 변치 않는 아름다움과 품질을 지키고자 합니다. 각 시즌마다
                엄선된 소재와 디자인으로 고객님께 특별한 경험을 선사합니다.
              </p>
              <p>
                오늘날 ATELIER는 전국 15개 매장과 온라인 플랫폼을 통해 수많은 고객님들과 함께하고 있습니다. 우리의
                여정은 계속됩니다.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="font-serif text-4xl font-light text-primary mb-2">2015</div>
                <div className="text-sm text-muted-foreground">설립년도</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-light text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">매장 수</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-light text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">고객 수</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
