"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function toLines(value: string) {
  return value
    .split("\n")
    .map((v) => v.trim())
    .filter(Boolean)
}

const defaultState = {
  company: "ATELIER",
  position: "패션 MD",
  employmentType: "정규직",
  location: "서울",
  requirements: "패션/리테일 MD 직무에 대한 기본 이해\n상품 기획/운영/분석을 위한 데이터 기반 사고\n협업 부서(디자인/생산/마케팅)와 원활한 커뮤니케이션",
  preferred: "패션 또는 이커머스 업계 경험\n엑셀/스프레드시트 활용 능력(피벗, 함수 등)\n트렌드 리서치 및 경쟁사 분석 경험",
  responsibilities: "시즌/캠페인 상품 기획 및 운영\n판매 데이터 분석을 통한 발주/재고 운영\n상품 상세/구성/가격 정책 수립 및 개선",
  apply: "이력서(필수)\n포트폴리오(선택)\n지원 동기 및 직무 경험 요약(선택)",
}

export function RecruitForm() {
  const [company, setCompany] = useState(defaultState.company)
  const [position, setPosition] = useState(defaultState.position)
  const [employmentType, setEmploymentType] = useState(defaultState.employmentType)
  const [location, setLocation] = useState(defaultState.location)
  const [requirements, setRequirements] = useState(defaultState.requirements)
  const [preferred, setPreferred] = useState(defaultState.preferred)
  const [responsibilities, setResponsibilities] = useState(defaultState.responsibilities)
  const [apply, setApply] = useState(defaultState.apply)

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>MD 자격요건 입력</CardTitle>
          <CardDescription>입력한 내용은 오른쪽(아래) 미리보기 영역에 즉시 반영됩니다.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="text-sm font-medium">회사명</div>
            <Input value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">포지션</div>
            <Input value={position} onChange={(e) => setPosition(e.target.value)} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <div className="text-sm font-medium">고용 형태</div>
              <Input value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <div className="text-sm font-medium">근무지</div>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">주요 업무</div>
            <Textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">자격요건</div>
            <Textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">우대사항</div>
            <Textarea value={preferred} onChange={(e) => setPreferred(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">지원 서류</div>
            <Textarea value={apply} onChange={(e) => setApply(e.target.value)} />
          </div>

          <div className="flex items-center justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCompany(defaultState.company)
                setPosition(defaultState.position)
                setEmploymentType(defaultState.employmentType)
                setLocation(defaultState.location)
                setRequirements(defaultState.requirements)
                setPreferred(defaultState.preferred)
                setResponsibilities(defaultState.responsibilities)
                setApply(defaultState.apply)
              }}
            >
              기본값으로 초기화
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>채용 공고 미리보기</CardTitle>
          <CardDescription>페이지에 노출될 채용 정보 형태로 정리됩니다.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">{company}</div>
            <div className="text-xl font-semibold">{position} 채용</div>
            <div className="text-sm text-muted-foreground">
              {employmentType} · {location}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">주요 업무</div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {toLines(responsibilities).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">자격요건</div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {toLines(requirements).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">우대사항</div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {toLines(preferred).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">지원 서류</div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {toLines(apply).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
