import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome Back</h1>
            <p className="text-lg md:text-xl text-gray-600">
              You have successfully logged in and reached the main page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

