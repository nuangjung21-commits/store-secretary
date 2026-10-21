import React, { useState } from 'react';

/**
 * '말하는 가게비서' - 오늘의 매출장부 섹션 (React + Tailwind CSS 컴포넌트)
 * - 폰트: Pretendard
 * - 색상: 딥 네이비(#0F172A), 소프트 베이지(#FAF6EE), 오렌지 옐로우(#FF8A00 / #FBBF24)
 */
export default function SalesLedgerSection() {
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: '치아바타 빵 25개', sub: '현재 잔여 5개 · 일일 권장 재고 30개 기준', badge: '필수 발주', checked: true },
    { id: 2, name: '신선 양상추 2박스', sub: '현재 잔여 0개 (전량 소진)', badge: '재고 소진', checked: true },
    { id: 3, name: '수프용 감자 1박스', sub: '오늘 점심 감자수프 세트 판매 급증 반영', badge: 'AI 추천 추가', checked: true },
  ]);
  const [smsSent, setSmsSent] = useState(false);

  const toggleItem = (id) => {
    setOrderItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <section
      id="sales-ledger"
      className="py-20 md:py-28 bg-[#FAF6EE] text-[#0F172A] font-['Pretendard',sans-serif] antialiased"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* 메인 타이틀 영역 */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] text-[#FBBF24] font-extrabold text-xs sm:text-sm mb-4 shadow-sm">
            📒 오늘의 매출장부 · 마감부터 발주까지 자동화
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            "장사 끝! 마감부터 내일 장사 준비까지
            <br />
            <span className="text-[#FF8A00] underline decoration-[#FF8A00]/40 decoration-4 underline-offset-8">
              말 한마디면 3분 만에
            </span>{' '}
            끝납니다."
          </h2>
          <p className="text-[#334155] mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            퇴근 전 피곤한 상태에서 툭 던진 말 한마디가 정확한 마감 리포트와 내일 발주서로 즉시 정리됩니다.
          </p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {/* ==========================================================
              1. 오늘 매출 분석 기능 (좌측 말풍선 vs 우측 대시보드 카드)
              ========================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 좌측: 사장님 음성 (친근한 대화창) */}
            <div className="lg:col-span-5 bg-[#F3ECE0] rounded-[32px] p-7 sm:p-8 border border-[#E5DCCB] flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E5DCCB]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#0F172A] text-[#FBBF24] flex items-center justify-center text-xl shadow">
                      👨‍🍳
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#EA580C] block">01. 오늘 매출 분석 기능</span>
                      <h3 className="text-base font-extrabold text-[#0F172A]">사장님 음성 (말풍선)</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white text-[#0F172A] font-bold text-xs border border-[#E5DCCB]">
                    🎙️ 일상 대화
                  </span>
                </div>

                <div className="bg-white rounded-3xl rounded-tl-md p-6 shadow-md border border-[#E5DCCB]">
                  <p className="text-[#0F172A] font-bold text-base sm:text-lg leading-relaxed">
                    "오늘{' '}
                    <span className="text-[#EA580C] bg-amber-50 px-1.5 py-0.5 rounded">
                      치아바타 샌드위치 30개
                    </span>{' '}
                    팔았고, 점심때{' '}
                    <span className="text-[#EA580C] bg-amber-50 px-1.5 py-0.5 rounded">
                      감자수프 세트
                    </span>
                    가 많이 나갔어.
                    <br />
                    <br />
                    <span className="underline decoration-[#FF8A00] decoration-2 underline-offset-4">
                      현금 5만 원에 카드 35만 원
                    </span>
                    이야."
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#334155] font-semibold mt-5">
                💬 계산기를 두드릴 필요 없이 퇴근 전 기억나는 대로 편하게 말씀하세요.
              </p>
            </div>

            {/* 우측: AI 생성 결과 (대시보드 카드) */}
            <div className="lg:col-span-7 bg-[#0F172A] text-white rounded-[32px] p-7 sm:p-8 shadow-2xl border border-[#1E293B] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#FBBF24] uppercase tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00] animate-pulse" />
                    AI 생성 결과 · 마감 정산 대시보드
                  </span>
                  <span className="text-xs text-slate-400 font-mono">실시간 리포트 위젯</span>
                </div>

                {/* [오늘의 마감 리포트] */}
                <div className="bg-[#1E293B] rounded-2xl p-6 border border-white/10 mb-5">
                  <span className="text-xs font-extrabold text-[#FBBF24] block mb-1">[오늘의 마감 리포트]</span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-5">
                    "오늘 총매출은 <span className="text-[#FBBF24]">40만 원</span>입니다. 🎉{' '}
                    <span className="text-emerald-400 text-base sm:text-lg">(어제보다 15% 상승)</span>"
                  </h4>

                  {/* 차트/그래프 UI */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 pt-4 border-t border-white/10 items-center">
                    <div className="sm:col-span-7 space-y-2.5 text-xs">
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-300">💳 카드 매출 (87.5%)</span>
                        <span className="text-white font-extrabold">350,000원</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#0F172A] rounded-full overflow-hidden flex">
                        <div className="bg-[#FF8A00] h-full" style={{ width: '87.5%' }} />
                        <div className="bg-[#FBBF24]/50 h-full" style={{ width: '12.5%' }} />
                      </div>
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-400">💵 현금 매출 (12.5%)</span>
                        <span className="text-slate-200 font-extrabold">50,000원</span>
                      </div>
                    </div>

                    <div className="sm:col-span-5 bg-[#0F172A] rounded-xl p-3.5 border border-white/5">
                      <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                        <span>시간대별 주문 추이</span>
                        <span className="text-[#FBBF24] font-bold">12~1시 60%</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 items-end h-14 px-1">
                        <div className="bg-slate-700 rounded-t h-5" />
                        <div className="bg-[#FF8A00] rounded-t h-12" />
                        <div className="bg-slate-600 rounded-t h-7" />
                        <div className="bg-slate-500 rounded-t h-8" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* [AI 판매 인사이트] */}
                <div className="bg-[#FF8A00]/15 border border-[#FBBF24]/40 rounded-2xl p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#FF8A00] text-white text-xs font-extrabold mb-2">
                    [AI 판매 인사이트]
                  </span>
                  <p className="text-sm sm:text-base text-[#FAF6EE] font-semibold leading-relaxed">
                    "오늘{' '}
                    <strong className="text-[#FBBF24]">
                      점심시간(12시~1시)에 세트 주문이 전체의 60%
                    </strong>
                    를 차지했습니다. 내일 매장 앞 입간판에{' '}
                    <strong className="underline decoration-[#FBBF24] underline-offset-4">
                      세트 메뉴를 강조
                    </strong>
                    해 보는 건 어떨까요?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
              2. 내일 발주 리스트 자동 작성 기능 (체크리스트 UI 포함)
              ========================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 좌측: 사장님 음성 */}
            <div className="lg:col-span-5 bg-[#F3ECE0] rounded-[32px] p-7 sm:p-8 border border-[#E5DCCB] flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E5DCCB]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#0F172A] text-[#FBBF24] flex items-center justify-center text-xl shadow">
                      👨‍🍳
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#EA580C] block">
                        02. 내일 발주 리스트 자동 작성
                      </span>
                      <h3 className="text-base font-extrabold text-[#0F172A]">사장님 음성 (말풍선)</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white text-[#0F172A] font-bold text-xs border border-[#E5DCCB]">
                    🎙️ 재고 파악
                  </span>
                </div>

                <div className="bg-white rounded-3xl rounded-tl-md p-6 shadow-md border border-[#E5DCCB]">
                  <p className="text-[#0F172A] font-bold text-base sm:text-lg leading-relaxed">
                    "샌드위치가 예상보다 많이 나가서{' '}
                    <span className="text-[#EA580C] bg-amber-50 px-1.5 py-0.5 rounded">
                      치아바타 빵 5개 남았고
                    </span>
                    ,{' '}
                    <span className="text-[#EA580C] bg-amber-50 px-1.5 py-0.5 rounded">
                      양상추는 다 썼어.
                    </span>
                    <br />
                    <br />
                    내일 필요한 재료 좀 쫙 정리해 줘."
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#334155] font-semibold mt-5">
                📦 냉장고 문을 열고 남은 재료만 말하면 발주 수량을 알아서 계산합니다.
              </p>
            </div>

            {/* 우측: AI 생성 결과 (체크리스트 카드 + 포인트 버튼) */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-7 sm:p-8 shadow-2xl border-2 border-[#0F172A]/10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-4 border-b-2 border-dashed border-gray-200">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#0F172A] text-[#FBBF24] text-xs font-extrabold mb-1">
                      [내일 발주 리스트]
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
                      "판매량과 재고를 바탕으로 발주 리스트를 준비했습니다."
                    </h4>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    체크리스트 위젯
                  </span>
                </div>

                {/* 체크 박스 리스트 */}
                <div className="space-y-3 mb-6">
                  {orderItems.map((item) => (
                    <label
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF6EE] border border-[#E5DCCB] hover:border-[#FF8A00] cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => {}}
                          className="w-5 h-5 accent-[#FF8A00] rounded"
                        />
                        <div>
                          <span className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                            ✓ {item.name}
                          </span>
                          <p className="text-xs text-gray-500">{item.sub}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-lg">
                        {item.badge}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 포인트 버튼 */}
              <div>
                <button
                  type="button"
                  onClick={() => setSmsSent(true)}
                  className="w-full bg-[#FF8A00] hover:bg-[#EA580C] text-white text-base sm:text-lg font-extrabold py-4 px-6 rounded-2xl shadow-[0_8px_24px_rgba(255,138,0,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span>📨 거래처 사장님께 발주 문자 바로 보내기</span>
                </button>
                {smsSent && (
                  <div className="mt-3 bg-[#0F172A] text-white rounded-xl p-3.5 text-xs border border-[#FBBF24]/40">
                    <span className="text-[#FBBF24] font-extrabold block mb-0.5">
                      ✅ 거래처 발주 문자 초안 준비 완료
                    </span>
                    "사장님, 내일 오전 배송으로 [치아바타 빵 25개 / 신선 양상추 2박스 / 수프용 감자 1박스] 발주 부탁드립니다!"
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
