import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TrainingList() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(null)
  const [trainings] = useState([
    { id: 1, name: '이미지 분류 모델 v1', status: 'completed', createdAt: '2026-01-15', accuracy: '94.5%' },
    { id: 2, name: '텍스트 분석 모델', status: 'training', createdAt: '2026-01-18', accuracy: '-' },
    { id: 3, name: '객체 탐지 모델', status: 'pending', createdAt: '2026-01-19', accuracy: '-' },
    { id: 4, name: '음성 인식 모델', status: 'completed', createdAt: '2026-01-10', accuracy: '91.2%' },
    { id: 5, name: '추천 시스템 모델', status: 'failed', createdAt: '2026-01-12', accuracy: '-' },
  ])

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
      training: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse',
      pending: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
      failed: 'bg-red-500/20 text-red-300 border border-red-500/30',
    }
    const labels = {
      completed: '완료',
      training: '학습 중',
      pending: '대기 중',
      failed: '실패',
    }
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    )
  }

  const handleViewResults = () => {
    if (selectedId) {
      const selectedTraining = trainings.find(t => t.id === selectedId)
      if (selectedTraining.status === 'completed') {
        navigate(`/ai-training/results/${selectedId}`)
      } else {
        alert('완료된 학습만 결과를 확인할 수 있습니다.')
      }
    } else {
      alert('학습 항목을 선택해주세요.')
    }
  }

  const handleRegister = () => {
    navigate('/ai-training/register')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
            모델 학습 목록
          </h2>
          <p className="text-purple-300/60 text-sm mt-1 ml-5">AI 모델 학습 작업을 관리합니다</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleViewResults}
            disabled={!selectedId}
            className={`px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-2 font-medium ${
              selectedId
                ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5'
                : 'bg-slate-800/50 text-slate-500 border border-slate-700/50 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>결과 보기</span>
          </button>
          <button
            onClick={handleRegister}
            className="neon-button px-5 py-2.5 text-white rounded-xl flex items-center space-x-2 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>학습 등록</span>
          </button>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-purple-500/20">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="모델명으로 검색..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder-purple-300/40 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>
            <select className="px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-purple-200 focus:border-purple-500/50 outline-none transition-all">
              <option value="">전체 상태</option>
              <option value="completed">완료</option>
              <option value="training">학습 중</option>
              <option value="pending">대기 중</option>
              <option value="failed">실패</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="px-6 py-4 text-left text-xs font-semibold text-purple-300 uppercase tracking-wider w-12">
                  선택
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-purple-300 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-purple-300 uppercase tracking-wider">모델명</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-purple-300 uppercase tracking-wider">상태</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-purple-300 uppercase tracking-wider">생성일</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-purple-300 uppercase tracking-wider">정확도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/10">
              {trainings.map((training) => (
                <tr
                  key={training.id}
                  onClick={() => setSelectedId(training.id)}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedId === training.id
                      ? 'bg-purple-500/15 border-l-2 border-l-purple-500'
                      : 'hover:bg-purple-500/5'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedId === training.id
                          ? 'border-purple-400 bg-purple-500'
                          : 'border-purple-500/30'
                      }`}>
                        {selectedId === training.id && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-cyan-400 font-mono">#{training.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-white">{training.name}</span>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(training.status)}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-purple-200/70">{training.createdAt}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${training.accuracy !== '-' ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {training.accuracy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-purple-500/20 flex items-center justify-between">
          <p className="text-sm text-purple-300/60">
            총 <span className="text-purple-300 font-medium">{trainings.length}</span>개의 학습 작업
            {selectedId && (
              <span className="ml-2 text-cyan-400">
                (#{selectedId} 선택됨)
              </span>
            )}
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-slate-800/50 border border-purple-500/20 rounded-lg text-sm text-purple-200 hover:bg-purple-500/10 transition-colors">
              이전
            </button>
            <span className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg text-sm font-medium">
              1
            </span>
            <button className="px-4 py-2 bg-slate-800/50 border border-purple-500/20 rounded-lg text-sm text-purple-200 hover:bg-purple-500/10 transition-colors">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingList
