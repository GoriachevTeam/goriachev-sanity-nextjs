export default function Main({ children, className }) {
  return (
    <main className={`container mx-auto px-4 py-16 ${className}`}>
      {children}
    </main>
  );
}
