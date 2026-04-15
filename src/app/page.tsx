import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">Nexus Learning</div>
          <div className="nav-links">
            <Link href="/login" className="nav-link">Login</Link>
            <Link href="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h1 className="h1 text-gradient">Master New Skills with Premium Courses</h1>
          <p className="text-muted h3 mb-8">
            Join thousands of students and elevate your career with our industry-leading curriculum.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses" className="btn btn-primary">Browse Courses</Link>
            <Link href="/admin" className="btn btn-secondary">Admin Panel</Link>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <h2 className="h2 text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-3">
          <div className="card">
            <h3 className="h3">Expert Instructors</h3>
            <p className="text-muted">Learn from industry professionals with years of real-world experience.</p>
          </div>
          <div className="card">
            <h3 className="h3">Interactive Lessons</h3>
            <p className="text-muted">Engage with dynamic content that makes learning effective and fun.</p>
          </div>
          <div className="card">
            <h3 className="h3">Lifetime Access</h3>
            <p className="text-muted">Review materials anytime, anywhere with unrestricted access to your courses.</p>
          </div>
        </div>
      </div>
    </>
  );
}
