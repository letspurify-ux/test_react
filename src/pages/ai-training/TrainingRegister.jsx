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
              모델 학습 등록
            </h2>
            <p className="text-purple-300/60 text-sm mt-1 ml-5">새로운 AI 모델 학습을 시작합니다</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/ai-training')}
          className="px-4 py-2.5 bg-slate-800/50 border border-purple-500/20 text-purple-200 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
        >
          목록으로
        </button>
      </div>

      <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">
              모델명 <span className="text-pink-400">*</span>
            </label>
            <input
              type="text"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              required
              placeholder="모델명을 입력하세요"
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder-purple-300/40 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">
              모델 타입 <span className="text-pink-400">*</span>
            </label>
            <select
              name="modelType"
              value={formData.modelType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white focus:border-purple-500/50 outline-none transition-all"
            >
              <option value="" className="bg-slate-900">선택하세요</option>
              <option value="classification" className="bg-slate-900">이미지 분류</option>
              <option value="detection" className="bg-slate-900">객체 탐지</option>
              <option value="nlp" className="bg-slate-900">자연어 처리</option>
              <option value="recommendation" className="bg-slate-900">추천 시스템</option>
              <option value="timeseries" className="bg-slate-900">시계열 예측</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-purple-200">
              데이터셋 경로 <span className="text-pink-400">*</span>
            </label>
            <div className="flex space-x-3">
              <input
                type="text"
                name="datasetPath"
                value={formData.datasetPath}
                onChange={handleChange}
                required
                placeholder="/path/to/dataset"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder-purple-300/40 focus:border-purple-500/50 outline-none transition-all font-mono text-sm"
              />
              <button
                type="button"
                className="px-5 py-3 bg-slate-800/50 border border-purple-500/20 text-purple-200 rounded-xl hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span>찾아보기</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">에포크 (Epochs)</label>
            <input
              type="number"
              name="epochs"
              value={formData.epochs}
              onChange={handleChange}
              min="1"
              max="1000"
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white focus:border-purple-500/50 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">배치 크기 (Batch Size)</label>
            <select
              name="batchSize"
              value={formData.batchSize}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white focus:border-purple-500/50 outline-none transition-all"
            >
              <option value="8" className="bg-slate-900">8</option>
              <option value="16" className="bg-slate-900">16</option>
              <option value="32" className="bg-slate-900">32</option>
              <option value="64" className="bg-slate-900">64</option>
              <option value="128" className="bg-slate-900">128</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">학습률 (Learning Rate)</label>
            <select
              name="learningRate"
              value={formData.learningRate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white focus:border-purple-500/50 outline-none transition-all"
            >
              <option value="0.1" className="bg-slate-900">0.1</option>
              <option value="0.01" className="bg-slate-900">0.01</option>
              <option value="0.001" className="bg-slate-900">0.001</option>
              <option value="0.0001" className="bg-slate-900">0.0001</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-purple-200">설명</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="모델에 대한 설명을 입력하세요"
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder-purple-300/40 focus:border-purple-500/50 outline-none transition-all resize-none"
            />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-500/20 flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2.5 bg-slate-800/50 border border-purple-500/20 text-purple-200 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
          >
            취소
          </button>
          <button
            type="submit"
            className="neon-button px-6 py-2.5 text-white rounded-xl flex items-center space-x-2 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>학습 시작</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default TrainingRegister
