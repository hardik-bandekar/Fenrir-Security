export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 
        bg-[linear-gradient(135deg,#0ea5e9_0%,#0f0f0f_40%,#ff6b00_75%,#dc2626_100%)] 
        opacity-30"
      ></div>

      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] 
        bg-blue-500 rounded-full blur-[200px] opacity-40"
      ></div>

      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] 
        bg-gradient-to-r from-orange-500 to-red-600 
        rounded-full blur-[200px] opacity-40"
      ></div>
    </div>
  );
}
