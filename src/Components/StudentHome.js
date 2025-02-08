import React, { useEffect, useState } from 'react';

const StudentHome = () => {
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setStudentDetails(storedUser);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {studentDetails ? (
          <div>
            <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
              Welcome, {studentDetails.name}!
            </h1>
            <p className="text-lg text-gray-700 text-center">
              You are logged in as a <span className="font-semibold">{studentDetails.role}</span>.
            </p>

            {/* Login Details Container */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Details:</h2>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="mb-2">
                  <strong className="text-gray-800">Name:</strong> {studentDetails.name}
                </p>
                <p className="mb-2">
                  <strong className="text-gray-800">Email:</strong> {studentDetails.email}
                </p>
                <p className="mb-2">
                  <strong className="text-gray-800">Role:</strong> {studentDetails.role}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
            <p className="text-gray-700">No user information available. Please log in.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentHome;
