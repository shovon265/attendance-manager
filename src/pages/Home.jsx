import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  const location = useLocation()
  const loggedIn = location.state?.loggedIn

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {loggedIn && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-green-800 shadow-sm">
            Login successful! You have entered the page.
          </div>
        )}
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              University Attendance Manager
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10">
              A simple system for course teachers to monitor student attendance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

