import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-serif text-2xl font-semibold mb-4">ATELIER</div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              시대를 초월한 우아함을 만드는 프리미엄 패션 브랜드
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">쇼핑</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  신상품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  여성
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  남성
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  악세서리
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">고객 지원</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  배송 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  반품/교환
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  사이즈 가이드
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">회사</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <Link href="/recruit" className="hover:text-primary-foreground transition-colors">
                  채용
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  매장 찾기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  지속가능성
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">© 2025 ATELIER. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-primary-foreground/80">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
