function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-100 to-gray-200/80 backdrop-blur-xl border-b border-gray-300/50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Traffic Lights */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="traffic-light traffic-red"></span>
            <span className="traffic-light traffic-yellow"></span>
            <span className="traffic-light traffic-green"></span>
          </div>
        </div>

        {/* Title - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h1 className="text-sm font-semibold text-gray-700">SPACE</h1>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <button className="p-1.5 hover:bg-gray-200/60 rounded-md transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-1.5 hover:bg-gray-200/60 rounded-md transition-colors relative">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center ml-1">
            <span className="text-xs font-medium text-white">U</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
