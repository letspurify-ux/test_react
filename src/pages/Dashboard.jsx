import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center">
          <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
          대시보드
        </h2>
        <p className="text-purple-300/60 text-sm mt-1 ml-5">SPACE AI 시스템 현황</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Training in Progress */}
        <div className="glass-card rounded-2xl p-6 group hover:border-cyan-500/40 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-300/60">진행 중인 학습</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">3</p>
              <p className="text-xs text-cyan-400/60 mt-2 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                실시간 처리 중
              </p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
              <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Completed Training */}
        <div className="glass-card rounded-2xl p-6 group hover:border-emerald-500/40 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-300/60">완료된 학습</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mt-2">12</p>
              <p className="text-xs text-emerald-400/60 mt-2">이번 주 +4 완료</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
              <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Registered Models */}
        <div className="glass-card rounded-2xl p-6 group hover:border-purple-500/40 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-300/60">등록된 모델</p>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mt-2">8</p>
              <p className="text-xs text-purple-400/60 mt-2">활성 모델 5개</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
              <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">SPACE 시스템에 오신 것을 환영합니다</h3>
              <p className="text-purple-300/60">AI Training System</p>
            </div>
          </div>
          <p className="text-purple-200/80 leading-relaxed mb-6">
            SPACE는 AI 모델 학습을 자동화하고 관리하는 통합 플랫폼입니다.
            왼쪽 메뉴에서 <span className="text-cyan-400 font-medium">시스템 자동 AI 모델 학습</span>을 선택하여
            모델 학습을 시작하세요.
          </p>
          <button
            onClick={() => navigate('/ai-training')}
            className="neon-button px-6 py-3 text-white rounded-xl flex items-center space-x-2 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>학습 시작하기</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
            시스템 리소스
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-purple-200">GPU 사용률</span>
                <span className="text-cyan-400">75%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-purple-200">메모리 사용률</span>
                <span className="text-purple-400">62%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full w-[62%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-purple-200">스토리지</span>
                <span className="text-emerald-400">45%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
            최근 활동
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-xl border border-purple-500/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-white">이미지 분류 모델 v1 학습 완료</p>
                <p className="text-xs text-purple-300/50">2시간 전</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-xl border border-purple-500/10">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <p className="text-sm text-white">텍스트 분석 모델 학습 중</p>
                <p className="text-xs text-purple-300/50">진행률 67%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-xl border border-purple-500/10">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-white">객체 탐지 모델 대기 중</p>
                <p className="text-xs text-purple-300/50">대기열 2번째</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
