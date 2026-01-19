import { NavLink } from 'react-router-dom'

function Sidebar() {
  const menuItems = [
    {
      id: 'ai-training',
      title: '시스템 자동 AI 모델 학습',
      path: '/ai-training',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <aside className="w-60 mac-sidebar border-r border-gray-200/60 min-h-full">
      <nav className="p-3">
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">메뉴</p>
        </div>
        <ul className="space-y-0.5">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `
                flex items-center px-3 py-1.5 rounded-md text-sm transition-colors
                ${isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-200/60'
                }
              `}
            >
              <svg className="w-4 h-4 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>대시보드</span>
            </NavLink>
          </li>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center px-3 py-1.5 rounded-md text-sm transition-colors
                  ${isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-200/60'
                  }
                `}
              >
                <span className="mr-2.5">{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Status Card */}
        <div className="mt-6 mx-1 p-3 bg-white/60 rounded-lg border border-gray-200/60">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">시스템 정상</span>
          </div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
                <span>CPU</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
                <span>메모리</span>
                <span>62%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-500 h-1 rounded-full" style={{width: '62%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
