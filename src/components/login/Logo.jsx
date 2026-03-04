export default function Logo() {
  return (
    <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <span className="text-white text-lg font-medium tracking-wide">aps</span>
    </div>
  );
}
