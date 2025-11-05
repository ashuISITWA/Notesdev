"use client"


export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50">
            <main className="flex-1 px-6 py-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">About OpenBun Notes</h1>

                    <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                OpenBun Notes is a modern, fast, and intuitive note-taking application designed to help you capture,
                                organize, and share your thoughts effortlessly. We believe that note-taking should be simple, powerful,
                                and accessible to everyone.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why OpenBun Notes?</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <span>
                                        <strong>Lightning Fast:</strong> Experience instant note creation and editing with our optimized
                                        editor.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-pink-500 font-bold">•</span>
                                    <span>
                                        <strong>Rich Formatting:</strong> Format your notes with bold, italic, lists, links, and more.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-yellow-500 font-bold">•</span>
                                    <span>
                                        <strong>Cloud Sync:</strong> Your notes are automatically saved and synced across all your devices.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <span>
                                        <strong>Privacy First:</strong> Your notes are encrypted and only accessible to you.
                                    </span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Get Started</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Creating your first note is simple. Click the "New Note" button in the top right, start typing, and your
                                note will be automatically saved. You can format your text using the rich editor toolbar and organize
                                your notes with tags and folders.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}
