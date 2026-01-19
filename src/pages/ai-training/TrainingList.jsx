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
      completed: 'bg-green-100 text-green-700',
      training: 'bg-blue-100 text-blue-700',
      pending: 'bg-yellow-100 text-yellow-700',
      failed: 'bg-red-100 text-red-700',
    }
    const labels = {
      completed: '완료',
      training: '학습 중',
      pending: '대기 중',
      failed: '실패',
    }
    return (
      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${styles[status]}`}>
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">모델 학습 목록</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleViewResults}
            disabled={!selectedId}
            className={`mac-button px-3 py-1.5 text-sm flex items-center space-x-1.5 ${
              !selectedId ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>결과 보기</span>
          </button>
          <button
            onClick={handleRegister}
            className="mac-button-primary px-3 py-1.5 text-sm flex items-center space-x-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            <span>학습 등록</span>
          </button>
        </div>
      </div>

      <div className="mac-card overflow-hidden">
        <div className="p-3 border-b border-gray-200/60 bg-gray-50/50">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="검색..."
                className="mac-input w-full pl-9 pr-3 py-1.5 text-sm"
              />
            </div>
            <select className="mac-select px-3 py-1.5 text-sm text-gray-600">
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
              <tr className="border-b border-gray-200/60 bg-gray-50/30">
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                  선택
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">모델명</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">생성일</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">정확도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {trainings.map((training) => (
                <tr
                  key={training.id}
                  onClick={() => setSelectedId(training.id)}
                  className={`cursor-pointer transition-colors ${
                    selectedId === training.id
                      ? 'bg-blue-50'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-4 py-3 w-24">
                    <div className="flex items-center justify-center">
                      <input
                        type="radio"
                        name="training"
                        checked={selectedId === training.id}
                        onChange={() => setSelectedId(training.id)}
                        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-500">#{training.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-gray-900">{training.name}</span>
                  </td>
                  <td className="px-4 py-3">{getStatusBadge(training.status)}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-500">{training.createdAt}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${training.accuracy !== '-' ? 'text-green-600' : 'text-gray-400'}`}>
                      {training.accuracy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200/60 bg-gray-50/30 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            총 {trainings.length}개 항목
            {selectedId && (
              <span className="ml-2 text-blue-600">• #{selectedId} 선택됨</span>
            )}
          </p>
          <div className="flex items-center space-x-1">
            <button className="mac-button px-2.5 py-1 text-xs">이전</button>
            <span className="px-2.5 py-1 bg-blue-500 text-white rounded text-xs">1</span>
            <button className="mac-button px-2.5 py-1 text-xs">다음</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingList
