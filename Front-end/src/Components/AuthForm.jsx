import React, { useState } from "react";

const AuthForm = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md lg:max-w-lg border border-gray-200 rounded-xl p-8 lg:p-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                        {isSignup ? "Create your account" : "Welcome back"}
                    </h1>
                    <p className="text-sm lg:text-base text-gray-500 mt-2">
                        {isSignup
                            ? "Start managing your projects smarter"
                            : "Sign in to continue"}
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                    <button
                        onClick={() => setIsSignup(false)}
                        className={`flex-1 py-2 rounded-md text-sm lg:text-base font-medium transition ${
                            !isSignup
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-gray-500"
                        }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsSignup(true)}
                        className={`flex-1 py-2 rounded-md text-sm lg:text-base font-medium transition ${
                            isSignup
                                ? "bg-white text-blue-600 shadow-sm"
                                : "text-gray-500"
                        }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form */}
                <div className="space-y-5">
                    {isSignup && (
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full mt-4 py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm lg:text-base font-medium rounded-lg transition">
                        {isSignup ? "Create Account" : "Login"}
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm lg:text-base text-gray-500 mt-8">
                    {isSignup ? "Already have an account?" : "Don’t have an account?"}
                    <button
                        onClick={() => setIsSignup(!isSignup)}
                        className="ml-1 text-blue-600 hover:underline font-medium"
                    >
                        {isSignup ? "Login" : "Sign up"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
