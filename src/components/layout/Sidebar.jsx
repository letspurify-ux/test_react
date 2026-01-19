import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState(['ai-training'])
  const location = useLocation()

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    )
  }

  const menuItems = [
    {
      id: 'ai-training',
      title: '시스템 자동 AI 모델 학습',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      subItems: [
        { path: '/ai-training/list', label: '모델 학습 목록 조회' },
        { path: '/ai-training/register', label: '모델 학습 등록' },
        { path: '/ai-training/results', label: '모델 학습 결과 조회' },
      ]
    },
  ]

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 min-h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => toggleMenu(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  expandedMenus.includes(item.id)
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedMenus.includes(item.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedMenus.includes(item.id) && (
                <ul className="mt-2 ml-4 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.path}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) => `
                          block p-2 pl-8 rounded-lg text-sm transition-colors
                          ${isActive
                            ? 'bg-indigo-500/30 text-indigo-300 border-l-2 border-indigo-400'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                          }
                        `}
                      >
                        {subItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
