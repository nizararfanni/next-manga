export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="mt-2">
          <a href="#privacy" className="hover:text-secondary mx-2">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-secondary mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
