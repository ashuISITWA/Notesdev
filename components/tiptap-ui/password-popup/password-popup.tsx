"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Lock, Eye, EyeOff } from 'lucide-react'

interface PasswordPopupProps {
    isOpen: boolean
    onClose: () => void
    onSave: (password: string | null, title: string) => void
    initialTitle?: string
}

export function PasswordPopup({ isOpen, onClose, onSave, initialTitle = "" }: PasswordPopupProps) {
    const [hasPassword, setHasPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [title, setTitle] = useState(initialTitle)

    useEffect(() => {
        if (isOpen) {
            setTitle(initialTitle || '')
        }
    }, [initialTitle, isOpen])

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        if (hasPassword) {
            if (!password) {
                newErrors.password = 'Password is required'
            } else if (password.length < 4) {
                newErrors.password = 'Password must be at least 4 characters'
            }

            if (!confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password'
            } else if (password !== confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = () => {
        if (validateForm()) {
            onSave(hasPassword ? password : null, title.trim())
            handleClose()
        }
    }

    const handleClose = () => {
        setHasPassword(false)
        setPassword('')
        setConfirmPassword('')
        setShowPassword(false)
        setShowConfirmPassword(false)
        setErrors({})
        onClose()
    }

    const handlePasswordToggle = () => {
        setHasPassword(!hasPassword)
        if (hasPassword) {
            setPassword('')
            setConfirmPassword('')
            setErrors({})
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Save Version</h3>
                </div>

                <div className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Document title..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Password Switch */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Password Protection
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                                Encrypt this version with a password
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={handlePasswordToggle}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${hasPassword ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${hasPassword ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Password Fields */}
                    {hasPassword && (
                        <div className="space-y-3">
                            {/* Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password..."
                                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Confirm Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm password..."
                                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 justify-end mt-6">
                    <Button
                        variant="outline"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Save Version
                    </Button>
                </div>
            </div>
        </div>
    )
}
