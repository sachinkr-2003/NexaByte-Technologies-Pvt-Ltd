export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center z-[9999]">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 border-4 border-t-cyan-400 border-r-blue-500 border-b-blue-600 border-l-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-4 border-t-transparent border-r-transparent border-b-cyan-400 border-l-blue-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">NexaByte</h2>
        <p className="text-blue-300 text-sm">Loading...</p>
      </div>
    </div>
  );
}
