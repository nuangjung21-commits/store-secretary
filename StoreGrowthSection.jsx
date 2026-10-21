import React, { useState } from 'react';

/**
 * '말하는 가게비서' - 내 가게 성장시키기 섹션 (2x2 경영 컨설팅 대시보드 UI)
 * - 폰트: Pretendard
 * - 컬러: 딥 네이비(#0F172A), 소프트 베이지(#FAF6EE), 에메랄드 그린(#10B981) & 로열 블루(#2563EB)
 */
export default function StoreGrowthSection() {
  const [crmSent, setCrmSent] = useState(false);

  return (
    <section
      id="store-growth"
      className="py-20 md:py-28 bg-[#FAF6EE] text-[#0F172A] font-['Pretendard',sans-serif] antialiased break-keep"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* 섹션 메인 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] text-emerald-400 font-extrabold text-xs sm:text-sm mb-4 shadow-sm">
            📊 내 가게 성장시키기 · AI 경영 컨설팅 리포트
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
            "막막한 1인 매장,
            <br className="sm:hidden" />{' '}
            <span className="text-emerald-600 underline decoration-emerald-500/40 decoration-4 underline-offset-8">
              프랜차이즈 본사급 밀착 컨설팅
            </span>
            을
            <br />
            받아보세요."
          </h2>
          <p className="text-[#334155] mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            쌓인 장부 데이터를 바탕으로 우리 매장만의 전담 슈퍼바이저가 핵심을 찌르는 4대 성장 리포트를 제공합니다.
          </p>
        </div>

        {/* 4가지 컨설팅 리포트 위젯 (2x2 그리드) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* 1. 30일 성장 로드맵 */}
          <div className="bg-white rounded-[30px] p-7 sm:p-8 shadow-xl border border-[#E5DCCB] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-emerald-400 flex items-center justify-center text-2xl shadow">
                    🚩
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">
                      Report 01 · Roadmap
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">1. 30일 성장 로드맵</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                  3주차 미션 진행 중
                </span>
              </div>

              <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E5DCCB] mb-5">
                <p className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-relaxed">
                  "📈 <span className="text-emerald-600">이번 달 매출 20% 상승을 위한 3주차 미션:</span>{' '}
                  반응 좋은 치아바타 라인업 집중 홍보"
                </p>
              </div>
            </div>

            <div className="bg-[#0F172A] text-white rounded-2xl p-4">
              <div className="flex justify-between text-xs mb-2.5">
                <span className="text-slate-300 font-bold">월 매출 +20% 달성 로드맵</span>
                <span className="text-emerald-400 font-extrabold">진행률 75%</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold">
                <div className="bg-emerald-500/20 text-emerald-300 py-1.5 rounded-lg border border-emerald-500/30">
                  ✓ 1주차
                </div>
                <div className="bg-emerald-500/20 text-emerald-300 py-1.5 rounded-lg border border-emerald-500/30">
                  ✓ 2주차
                </div>
                <div className="bg-emerald-500 text-[#0F172A] font-extrabold py-1.5 rounded-lg shadow">
                  🔥 3주차
                </div>
                <div className="bg-white/5 text-slate-400 py-1.5 rounded-lg border border-white/10">
                  4주차
                </div>
              </div>
            </div>
          </div>

          {/* 2. 경쟁업체 차별화 전략 */}
          <div className="bg-white rounded-[30px] p-7 sm:p-8 shadow-xl border border-[#E5DCCB] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow">
                    🔍
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                      Report 02 · Positioning
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">2. 경쟁업체 차별화 전략</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs border border-blue-200">
                  상권 타겟 분석
                </span>
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 mb-5">
                <p className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-relaxed">
                  "🔍 인근 카페는 달콤한 디저트 위주입니다.{' '}
                  <span className="text-blue-600">수제 샌드위치와 따뜻한 수프를 묶어</span>{' '}
                  <span className="bg-[#0F172A] text-emerald-400 px-2 py-0.5 rounded">
                    '건강한 한 끼'로 포지셔닝
                  </span>{' '}
                  하세요!"
                </p>
              </div>
            </div>

            <div className="bg-[#FAF6EE] rounded-2xl p-4 border border-[#E5DCCB] flex items-center justify-between text-xs font-bold">
              <span className="text-slate-500">인근 카페: 디저트 78% 과밀</span>
              <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                🎯 수제 샌드위치+수프 독점
              </span>
            </div>
          </div>

          {/* 3. 메뉴 수익성 진단 */}
          <div className="bg-white rounded-[30px] p-7 sm:p-8 shadow-xl border border-[#E5DCCB] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shadow">
                    💰
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">
                      Report 03 · Profitability
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">3. 메뉴 수익성 진단</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                  마진율 정밀 분석
                </span>
              </div>

              <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E5DCCB] mb-5 space-y-2.5">
                <p className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                  "🏆 효자 메뉴:{' '}
                  <span className="text-emerald-600">B.L.T 샌드위치 (마진 68%)</span>"
                </p>
                <p className="text-sm sm:text-base font-extrabold text-slate-700 pt-2 border-t border-[#E5DCCB]">
                  "⚠️ 주의: <span className="text-amber-600">생과일주스</span> (원가율 상승, 시즌 메뉴로 전환 추천)"
                </p>
              </div>
            </div>

            <div className="bg-[#0F172A] text-white rounded-2xl p-4 space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-emerald-400">🏆 B.L.T 샌드위치</span>
                  <span>마진 68%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full" style={{ width: '68%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-amber-400">⚠️ 생과일주스 (원가 상승)</span>
                  <span className="text-amber-400">시즌 전환 권장</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full" style={{ width: '34%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* 4. 단골 재방문 전략 */}
          <div className="bg-[#0F172A] text-white rounded-[30px] p-7 sm:p-8 shadow-2xl border-2 border-emerald-500/70 flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 text-white flex items-center justify-center text-2xl shadow">
                    💌
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                      Report 04 · CRM Retention
                    </span>
                    <h3 className="text-xl font-extrabold text-white">4. 단골 재방문 전략</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-400/30">
                  3주 미방문 15명
                </span>
              </div>

              <div className="bg-[#1E293B] rounded-2xl p-5 border border-white/10 mb-5">
                <p className="text-base sm:text-lg font-extrabold text-[#FAF6EE] leading-relaxed">
                  "💌 <span className="text-emerald-400">3주 미방문 단골 15명 발견.</span>{' '}
                  <span className="text-blue-300 underline decoration-blue-400 underline-offset-4">
                    '주말 한정 아메리카노 무료 업그레이드'
                  </span>{' '}
                  맞춤 문자를 발송할까요?"
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setCrmSent(true)}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-extrabold text-base py-4 px-5 rounded-2xl shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>📩 단골 15명에게 맞춤 문자 발송하기</span>
              </button>
              {crmSent && (
                <div className="mt-3 bg-slate-950 rounded-xl p-3.5 text-xs text-emerald-300 border border-emerald-500/40">
                  ✅ 3주 미방문 단골 15명에게 '주말 한정 아메리카노 무료 업그레이드' 쿠폰 문자가 발송되었습니다!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
