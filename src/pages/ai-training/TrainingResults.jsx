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
      <div className="space-y-4">
        <div className="mac-card p-8 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-500 mb-4">해당 모델의 결과를 찾을 수 없습니다.</p>
          <button
            onClick={() => navigate('/ai-training')}
            className="mac-button-primary px-4 py-1.5 text-sm"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate('/ai-training')}
            className="mac-button p-1.5"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold text-gray-800">모델 학습 결과</h2>
        </div>
        <button
          onClick={() => navigate('/ai-training')}
          className="mac-button px-3 py-1.5 text-sm"
        >
          목록으로
        </button>
      </div>

      <div className="space-y-4">
        {/* Model Info */}
        <div className="mac-card p-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{model.name}</h3>
              <p className="text-xs text-gray-500">모델 ID: #{model.id}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-0.5">완료 시간</p>
              <p className="text-sm font-medium text-gray-900">{model.completedAt}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-0.5">소요 시간</p>
              <p className="text-sm font-medium text-gray-900">{model.duration}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs text-green-600 mb-0.5">정확도</p>
              <p className="text-sm font-semibold text-green-700">{model.accuracy}%</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs text-blue-600 mb-0.5">Loss</p>
              <p className="text-sm font-semibold text-blue-700">{model.loss}</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mac-card p-5">
          <h3 className="font-semibold text-gray-900 mb-4">성능 지표</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Precision</span>
                <span className="font-medium text-gray-900">{model.precision}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${model.precision}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Recall</span>
                <span className="font-medium text-gray-900">{model.recall}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${model.recall}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">F1 Score</span>
                <span className="font-medium text-gray-900">{model.f1Score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${model.f1Score}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Graph Placeholder */}
        <div className="mac-card p-5">
          <h3 className="font-semibold text-gray-900 mb-4">학습 그래프</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 border-dashed">
            <div className="text-center">
              <svg className="w-10 h-10 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <p className="text-sm text-gray-400">Accuracy / Loss over Epochs</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <button className="mac-button px-3 py-1.5 text-sm flex items-center space-x-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>모델 다운로드</span>
          </button>
          <button className="mac-button-primary px-3 py-1.5 text-sm flex items-center space-x-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>리포트 생성</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainingResults
