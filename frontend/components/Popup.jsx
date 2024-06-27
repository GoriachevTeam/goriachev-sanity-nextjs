export default function Popup({ children, className = "", onAnimationEnd }) {
  return (
    <div
      onAnimationEnd={onAnimationEnd}
      className={`fade-in fixed inset-0 bg-deep-cove bg-opacity-70 z-50 flex justify-center items-center p-6 backdrop-filter backdrop-blur ${className}`}
    >
      <div className="slide-in">{children}</div>
    </div>
  );
}
