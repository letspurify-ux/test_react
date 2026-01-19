import { NavLink } from 'react-router-dom'

function Sidebar() {
  const menuItems = [
    {
      id: 'ai-training',
      title: '시스템 자동 AI 모델 학습',
      path: '/ai-training',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900/50 border-r border-purple-500/20 min-h-full relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-10 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <nav className="relative p-4">
        <div className="mb-6 px-3">
          <p className="text-xs font-semibold text-purple-400/60 uppercase tracking-wider">메인 메뉴</p>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  group relative flex items-center p-4 rounded-xl transition-all duration-300
                  ${isActive
                    ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/20 border border-purple-500/40 shadow-lg shadow-purple-500/10'
                    : 'hover:bg-white/5 border border-transparent hover:border-purple-500/20'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r-full"></div>
                    )}
                    <div className={`
                      p-2.5 rounded-lg mr-3 transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-purple-500/30'
                        : 'bg-white/5 group-hover:bg-white/10'
                      }
                    `}>
                      <div className={isActive ? 'text-white' : 'text-purple-300 group-hover:text-purple-200'}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className={`
                        text-sm font-medium transition-colors
                        ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                      `}>
                        {item.title}
                      </span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-purple-300' : 'text-gray-500 group-hover:text-purple-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Bottom decoration */}
        <div className="mt-8 mx-3 p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-white">시스템 상태</p>
              <p className="text-xs text-green-400">정상 작동 중</p>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1.5 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">GPU 사용률: 75%</p>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
