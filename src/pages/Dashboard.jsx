import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">대시보드</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Training in Progress */}
        <div className="mac-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">진행 중인 학습</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">3</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5 animate-pulse"></span>
            실시간 처리 중
          </p>
        </div>

        {/* Completed Training */}
        <div className="mac-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">완료된 학습</p>
              <p className="text-2xl font-bold text-green-600 mt-1">12</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2">+4 이번 주</p>
        </div>

        {/* Registered Models */}
        <div className="mac-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">등록된 모델</p>
              <p className="text-2xl font-bold text-purple-600 mt-1">8</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">활성 모델 5개</p>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="mac-card p-5">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">SPACE 시스템에 오신 것을 환영합니다</h3>
            <p className="text-sm text-gray-500 mt-1">
              SPACE는 AI 모델 학습을 자동화하고 관리하는 통합 플랫폼입니다.
              왼쪽 메뉴에서 시스템 자동 AI 모델 학습을 선택하여 시작하세요.
            </p>
            <button
              onClick={() => navigate('/ai-training')}
              className="mac-button-primary px-3 py-1.5 text-sm mt-3"
            >
              학습 시작하기
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* System Resources */}
        <div className="mac-card p-5">
          <h3 className="font-semibold text-gray-900 mb-4">시스템 리소스</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">CPU</span>
                <span className="text-gray-900">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">메모리</span>
                <span className="text-gray-900">62%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '62%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">GPU</span>
                <span className="text-gray-900">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mac-card p-5">
          <h3 className="font-semibold text-gray-900 mb-4">최근 활동</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 truncate">이미지 분류 모델 v1 학습 완료</p>
                <p className="text-xs text-gray-400">2시간 전</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 truncate">텍스트 분석 모델 학습 중</p>
                <p className="text-xs text-gray-400">진행률 67%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 truncate">객체 탐지 모델 대기 중</p>
                <p className="text-xs text-gray-400">대기열 2번째</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
