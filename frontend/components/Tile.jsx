export default function Tile({ children, className = "" }) {
  return (
    <div
      className={`p-4 md:p-8 bg-white rounded-2xl shadow-fancy ${className}`}
    >
      {children}
    </div>
  );
}
