"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Lock, Eye, EyeOff } from 'lucide-react'

interface PasswordPromptPopupProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (password: string) => void
    versionNumber: number
}

export function PasswordPromptPopup({ isOpen, onClose, onConfirm, versionNumber }: PasswordPromptPopupProps) {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const handleConfirm = () => {
        if (!password.trim()) {
            setError('Password is required')
            return
        }
        onConfirm(password)
        handleClose()
    }

    const handleClose = () => {
        setPassword('')
        setShowPassword(false)
        setError('')
        onClose()
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleConfirm()
        } else if (e.key === 'Escape') {
            handleClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-5 h-5 text-yellow-600" />
                    <h3 className="text-lg font-semibold">Password Required</h3>
                </div>

                <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                        Version {versionNumber} is password protected. Please enter the password to access this version.
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError('')
                                }}
                                onKeyDown={handleKeyPress}
                                placeholder="Enter password..."
                                className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-500 text-xs mt-1">{error}</p>
                        )}
                    </div>
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
                        onClick={handleConfirm}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={!password.trim()}
                    >
                        Unlock Version
                    </Button>
                </div>
            </div>
        </div>
    )
}
