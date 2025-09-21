import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-green-500"></div>
        <p className="text-lg text-green-600 font-medium">
          Loading Cultiv8VI...
        </p>
      </div>
    </div>
  )
}

export default Loading