export default function Loading() {
  return (
    <div className="loading-fade fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]">

      {/* Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />

      {/* Spinner */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500/20"></div>

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400 animate-spin"></div>
      </div>

      {/* Brand */}
      <h2 className="mt-10 text-3xl font-bold tracking-[4px] text-yellow-400">
        PRIME EVENT
      </h2>

      <p className="mt-3 text-gray-400 tracking-[3px] uppercase text-sm">
        Crafting Luxury Celebrations...
      </p>

    </div>
  );
}