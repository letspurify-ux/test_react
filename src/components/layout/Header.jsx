function Header() {
  return (
    <header className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white border-b border-purple-500/30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InN0YXIiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiIG9wYWNpdHk9IjAuNSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjAuNSIgZmlsbD0idXJsKCNzdGFyKSIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSIxNSIgcj0iMC44IiBmaWxsPSJ1cmwoI3N0YXIpIiBvcGFjaXR5PSIwLjQiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSI1MCIgcj0iMC42IiBmaWxsPSJ1cmwoI3N0YXIpIiBvcGFjaXR5PSIwLjYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMCIgcj0iMSIgZmlsbD0idXJsKCNzdGFyKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-50"></div>
      <div className="relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-widest neon-text bg-gradient-to-r from-violet-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              SPACE
            </h1>
            <p className="text-xs text-purple-300/70 tracking-wider">AI Training System</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="relative p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-purple-500/30 transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 group">
            <svg
              className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3 pl-3 border-l border-purple-500/30">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 ring-2 ring-purple-400/30">
              <span className="text-sm font-bold text-white">U</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
