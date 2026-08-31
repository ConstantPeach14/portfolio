import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-100px)] flex items-center justify-center bg-dark-bg">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/" variant="primary" size="lg">
          Return Home
        </Button>
      </div>
    </div>
  );
}
