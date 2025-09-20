"use client";
import React, { use } from 'react'
import Link from 'next/link'
import { AlertCircle, Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Error Banner */}
        <div 
          role="alert" 
          className="bg-red-100 border border-red-200 text-red-800 px-6 py-4 rounded-lg flex items-center gap-3 mb-6"
        >
          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
          <span className="font-medium">Error! Page not found</span>
        </div>

        {/* 404 Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
