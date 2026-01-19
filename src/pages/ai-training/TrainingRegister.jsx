import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TrainingRegister() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    modelName: '',
    modelType: '',
    datasetPath: '',
    epochs: 100,
    batchSize: 32,
    learningRate: 0.001,
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('모델 학습이 등록되었습니다!')
    console.log('Form submitted:', formData)
    navigate('/ai-training')
  }

  const handleCancel = () => {
    navigate('/ai-training')
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
          <h2 className="text-xl font-semibold text-gray-800">모델 학습 등록</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mac-card p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              모델명 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              required
              placeholder="모델명을 입력하세요"
              className="mac-input w-full px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              모델 타입 <span className="text-red-500">*</span>
            </label>
            <select
              name="modelType"
              value={formData.modelType}
              onChange={handleChange}
              required
              className="mac-select w-full px-3 py-2 text-sm"
            >
              <option value="">선택하세요</option>
              <option value="classification">이미지 분류</option>
              <option value="detection">객체 탐지</option>
              <option value="nlp">자연어 처리</option>
              <option value="recommendation">추천 시스템</option>
              <option value="timeseries">시계열 예측</option>
            </select>
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              데이터셋 경로 <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="datasetPath"
                value={formData.datasetPath}
                onChange={handleChange}
                required
                placeholder="/path/to/dataset"
                className="mac-input flex-1 px-3 py-2 text-sm font-mono"
              />
              <button type="button" className="mac-button px-3 py-2 text-sm">
                찾아보기...
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">에포크 (Epochs)</label>
            <input
              type="number"
              name="epochs"
              value={formData.epochs}
              onChange={handleChange}
              min="1"
              max="1000"
              className="mac-input w-full px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">배치 크기</label>
            <select
              name="batchSize"
              value={formData.batchSize}
              onChange={handleChange}
              className="mac-select w-full px-3 py-2 text-sm"
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
              <option value="128">128</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">학습률</label>
            <select
              name="learningRate"
              value={formData.learningRate}
              onChange={handleChange}
              className="mac-select w-full px-3 py-2 text-sm"
            >
              <option value="0.1">0.1</option>
              <option value="0.01">0.01</option>
              <option value="0.001">0.001</option>
              <option value="0.0001">0.0001</option>
            </select>
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">설명</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="모델에 대한 설명을 입력하세요"
              className="mac-input w-full px-3 py-2 text-sm resize-none"
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleCancel}
            className="mac-button px-4 py-1.5 text-sm"
          >
            취소
          </button>
          <button
            type="submit"
            className="mac-button-primary px-4 py-1.5 text-sm"
          >
            학습 시작
          </button>
        </div>
      </form>
    </div>
  )
}

export default TrainingRegister
