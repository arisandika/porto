const PageLoader = () => (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#0e0e0e]/80 backdrop-blur-sm">
    <div className="flex-flex-col gap-12">
      <div className="flex items-center justify-center h-[44px] gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white/80 rounded-full loading-dot"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
      <div className="text-sm">Just a moment.</div>
    </div>
  </div>
);

export default PageLoader;
