import { useParams, useNavigate } from 'react-router-dom'

function TrainingResults() {
  const { id } = useParams()
  const navigate = useNavigate()

  const resultsData = {
    1: {
      id: 1,
      name: '이미지 분류 모델 v1',
      completedAt: '2026-01-15 14:30',
      duration: '2시간 15분',
      accuracy: 94.5,
      loss: 0.0523,
      precision: 93.8,
      recall: 95.2,
      f1Score: 94.5,
    },
    4: {
      id: 4,
      name: '음성 인식 모델',
      completedAt: '2026-01-10 09:45',
      duration: '4시간 30분',
      accuracy: 91.2,
      loss: 0.0891,
      precision: 90.5,
      recall: 91.8,
      f1Score: 91.1,
    },
  }

  const model = resultsData[id]

  if (!model) {
    return (
      <div className="space-y-6">
        <div className="glass-card rounded-2xl p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-purple-200 mb-6">해당 모델의 결과를 찾을 수 없습니다.</p>
          <button
            onClick={() => navigate('/ai-training')}
            className="neon-button px-6 py-2.5 text-white rounded-xl font-medium"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/ai-training')}
            className="p-2.5 bg-slate-800/50 hover:bg-purple-500/20 rounded-xl border border-purple-500/20 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-purple-300 group-hover:text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
              모델 학습 결과
            </h2>
            <p className="text-purple-300/60 text-sm mt-1 ml-5">학습 완료된 모델의 성능을 확인합니다</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/ai-training')}
          className="px-4 py-2.5 bg-slate-800/50 border border-purple-500/20 text-purple-200 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
        >
          목록으로
        </button>
      </div>

      <div className="space-y-6">
        {/* Model Info Card */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{model.name}</h3>
              <p className="text-purple-300/60 text-sm">모델 ID: #{model.id}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/30 rounded-xl p-4 border border-purple-500/10">
              <p className="text-sm text-purple-300/60 mb-1">완료 시간</p>
              <p className="text-lg font-semibold text-white">{model.completedAt}</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-4 border border-purple-500/10">
              <p className="text-sm text-purple-300/60 mb-1">소요 시간</p>
              <p className="text-lg font-semibold text-white">{model.duration}</p>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
              <p className="text-sm text-emerald-400/80 mb-1">정확도</p>
              <p className="text-lg font-semibold text-emerald-300">{model.accuracy}%</p>
            </div>
            <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
              <p className="text-sm text-cyan-400/80 mb-1">Loss</p>
              <p className="text-lg font-semibold text-cyan-300">{model.loss}</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
            성능 지표
          </h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-purple-200">Precision</span>
                <span className="font-medium text-white">{model.precision}%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-violet-500 to-purple-500 h-3 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/30"
                  style={{ width: `${model.precision}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-purple-200">Recall</span>
                <span className="font-medium text-white">{model.recall}%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 shadow-lg shadow-cyan-500/30"
                  style={{ width: `${model.recall}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-purple-200">F1 Score</span>
                <span className="font-medium text-white">{model.f1Score}%</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/30"
                  style={{ width: `${model.f1Score}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Training Graph Placeholder */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
            학습 그래프
          </h3>
          <div className="h-64 bg-slate-800/30 rounded-xl flex items-center justify-center border border-purple-500/10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <p className="text-purple-200">학습 진행 그래프</p>
              <p className="text-sm text-purple-300/50 mt-1">Accuracy / Loss over Epochs</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button className="px-5 py-2.5 bg-slate-800/50 border border-purple-500/20 text-purple-200 rounded-xl hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>모델 다운로드</span>
          </button>
          <button className="neon-button px-5 py-2.5 text-white rounded-xl flex items-center space-x-2 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>리포트 생성</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainingResults
