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
      completed: 'bg-green-100 text-green-800',
      training: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800',
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
        <h2 className="text-2xl font-bold text-gray-800">모델 학습 목록</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleViewResults}
            disabled={!selectedId}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
              selectedId
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>결과 보기</span>
          </button>
          <button
            onClick={handleRegister}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>학습 등록</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="모델명으로 검색..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
              <option value="">전체 상태</option>
              <option value="completed">완료</option>
              <option value="training">학습 중</option>
              <option value="pending">대기 중</option>
              <option value="failed">실패</option>
            </select>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-12">
                선택
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">모델명</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">상태</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">생성일</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">정확도</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trainings.map((training) => (
              <tr
                key={training.id}
                onClick={() => setSelectedId(training.id)}
                className={`cursor-pointer transition-colors ${
                  selectedId === training.id
                    ? 'bg-indigo-50 border-l-4 border-indigo-600'
                    : 'hover:bg-gray-50'
                }`}
              >
                <td className="px-6 py-4">
                  <input
                    type="radio"
                    name="training"
                    checked={selectedId === training.id}
                    onChange={() => setSelectedId(training.id)}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">#{training.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{training.name}</td>
                <td className="px-6 py-4">{getStatusBadge(training.status)}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{training.createdAt}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{training.accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            총 {trainings.length}개의 학습 작업
            {selectedId && (
              <span className="ml-2 text-indigo-600 font-medium">
                (#{selectedId} 선택됨)
              </span>
            )}
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">이전</button>
            <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">1</span>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">다음</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingList
