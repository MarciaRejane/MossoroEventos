export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-main to-purple-900">
      {children}
    </div>
  );
}