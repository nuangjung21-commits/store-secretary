import React, { useState } from 'react';

/**
 * '말하는 가게비서' - 오늘 꼭 챙겨야 할 정보 (스마트 모닝 브리핑 대시보드)
 * - 폰트: Pretendard
 * - 컬러: 딥 네이비(#0F172A), 소프트 베이지(#FAF6EE), 오렌지(#FF6B2B / #FB923C)
 */
export default function MorningBriefingSection() {
  const [showIdea, setShowIdea] = useState(false);

  return (
    <section
      id="morning-briefing"
      className="py-20 md:py-28 bg-[#FAF6EE] text-[#0F172A] font-['Pretendard',sans-serif] antialiased"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] text-[#FB923C] font-extrabold text-xs sm:text-sm mb-4 shadow-sm">
            ☀️ Smart Morning Briefing · 오늘 꼭 챙겨야 할 정보
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            "출근길 1분 브리핑,
            <br className="sm:hidden" />{' '}
            <span className="text-[#FF6B2B] underline decoration-[#FF6B2B]/40 decoration-4 underline-offset-8">
              오늘 장사와 내일의 트렌드
            </span>
            를 알려드립니다."
          </h2>
          <p className="text-[#334155] mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            아침 출근길 스마트폰 화면 하나로 단골 예약부터 유통기한 임박 식자재, 요즘 뜨는 신메뉴 트렌드까지 한눈에 챙기세요.
          </p>
        </div>

        {/* 대시보드 위젯 3가지 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* 1. 단골 예약 리마인더 (달력/시계 아이콘) */}
          <div className="lg:col-span-6 bg-white rounded-[30px] p-7 sm:p-8 shadow-xl border border-[#E5DCCB] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#FB923C] flex items-center justify-center shadow">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      Widget 01 · Schedule
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">단골 예약 리마인더</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs border border-blue-200">
                  ⏰ 12:30 알람 ON
                </span>
              </div>

              <div className="bg-[#FAF6EE] rounded-2xl p-5 border border-[#E5DCCB] mb-5">
                <p className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-relaxed">
                  "오후 1시{' '}
                  <span className="text-[#EA580C] underline decoration-[#FF6B2B] decoration-2 underline-offset-4">
                    단골 김 사장님 치아바타 10개 픽업 예정
                  </span>{' '}
                  (12:30 준비 알람 설정됨)"
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-600 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200/70">
              <span>🔔 12:30 포장 준비 알람</span>
              <span className="text-[#FF6B2B]">→</span>
              <span className="text-[#0F172A]">🥖 13:00 치아바타 10개 픽업</span>
            </div>
          </div>

          {/* 2. 식자재 유통기한 알림 (경고/재고 아이콘) */}
          <div className="lg:col-span-6 bg-white rounded-[30px] p-7 sm:p-8 shadow-xl border border-[#E5DCCB] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#EA580C] border border-orange-200 flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#EA580C] uppercase tracking-wider">
                      Widget 02 · Inventory Alert
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">식자재 유통기한 알림</h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 font-extrabold text-xs border border-red-200">
                  ⚠️ D-1 만료 임박
                </span>
              </div>

              <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-200 mb-5">
                <p className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-relaxed">
                  "⚠️ <span className="text-red-600">내일 만료: 리코타 치즈 2통.</span> 오늘{' '}
                  <span className="text-[#EA580C] bg-white px-1.5 py-0.5 rounded border border-orange-200">
                    '한정 메뉴'로 우선 소진
                  </span>
                  을 추천합니다."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-600 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200/70">
              <span>🧀 리코타 치즈 2통 우선 활용</span>
              <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                식자재 폐기 손실 방어
              </span>
            </div>
          </div>

          {/* 3. 업종 트렌드 & 인사이트 (전구/트렌드 차트 아이콘) - ★가장 강조할 위젯 */}
          <div className="lg:col-span-12 bg-[#0F172A] text-white rounded-[34px] p-8 sm:p-10 shadow-[0_14px_40px_rgba(255,107,43,0.3)] border-2 border-[#FF6B2B] relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF6B2B]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FF6B2B] text-white font-extrabold text-xs sm:text-sm mb-6 shadow">
              <span>★ AI TREND INSIGHT</span>
              <span>·</span>
              <span>오늘 가장 주목해야 할 신메뉴 기회</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FB923C] to-[#EA580C] text-white flex items-center justify-center text-3xl shadow-lg shrink-0">
                    💡
                  </div>
                  <div>
                    <span className="text-[#FB923C] text-xs font-extrabold uppercase tracking-wider">
                      Widget 03 · Market Trend & Insight
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      업종 트렌드 & 인사이트
                    </h3>
                  </div>
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#FB923C]/40">
                  <p className="text-lg sm:text-2xl font-extrabold text-[#FAF6EE] leading-snug">
                    "💡 최근 2030 직장인{' '}
                    <span className="text-[#FB923C] underline decoration-[#FF6B2B] decoration-4 underline-offset-4">
                      '비건/건강식' 검색량 30% 증가.
                    </span>{' '}
                    당근 라페를 활용한 신메뉴를 기획해 볼까요?"
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowIdea(!showIdea)}
                  className="inline-flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl shadow-lg transition-all"
                >
                  <span>🥕 당근 라페 신메뉴 추천 조합 보기</span>
                </button>
                {showIdea && (
                  <div className="bg-[#1E293B] p-4 rounded-xl border border-[#FB923C]/30 text-xs text-[#FAF6EE]">
                    ✨ 추천 메뉴: [홀그레인 당근 라페 치아바타 샌드위치] - 아삭한 식감과 낮은 칼로리로 2030 직장인 점심 픽업 만족도가 높습니다!
                  </div>
                )}
              </div>

              {/* 트렌드 상승 미니 차트 카드 */}
              <div className="lg:col-span-5 bg-[#1E293B]/90 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#E5DCCB]">
                    📈 2030 직장인 '비건/건강식' 검색 추이
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FF6B2B] text-white font-extrabold text-xs">
                    ▲ +30% 증가
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2.5 items-end h-24 pt-4 px-2 bg-[#0F172A] rounded-xl border border-white/5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full bg-slate-700 rounded-t h-7" />
                    <span className="text-[10px] text-slate-400">3주전</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full bg-slate-600 rounded-t h-10" />
                    <span className="text-[10px] text-slate-400">2주전</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full bg-[#FB923C]/70 rounded-t h-12" />
                    <span className="text-[10px] text-slate-300">지난주</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full bg-gradient-to-t from-[#EA580C] to-[#FB923C] rounded-t h-16" />
                    <span className="text-[10px] font-extrabold text-[#FB923C]">이번주</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
