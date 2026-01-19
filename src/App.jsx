import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import TrainingList from './pages/ai-training/TrainingList'
import TrainingRegister from './pages/ai-training/TrainingRegister'
import TrainingResults from './pages/ai-training/TrainingResults'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="ai-training" element={<TrainingList />} />
          <Route path="ai-training/register" element={<TrainingRegister />} />
          <Route path="ai-training/results/:id" element={<TrainingResults />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
