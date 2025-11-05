"use client"

export default function Changelog() {
  const versions = [
    {
      version: "2.1.0",
      date: "October 20, 2025",
      changes: [
        "Added dark mode support",
        "Improved editor performance",
        "Fixed text formatting bugs",
        "Added keyboard shortcuts guide",
      ],
    },
    {
      version: "2.0.0",
      date: "September 15, 2025",
      changes: [
        "Complete UI redesign",
        "Introduced rich text editor with Tiptap",
        "Added collaborative editing",
        "New note organization system",
      ],
    },
    {
      version: "1.5.0",
      date: "August 1, 2025",
      changes: [
        "Added export to PDF",
        "Improved search functionality",
        "Added note templates",
        "Performance optimizations",
      ],
    },
    {
      version: "1.0.0",
      date: "July 1, 2025",
      changes: ["Initial release", "Basic note creation and editing", "Cloud synchronization", "User authentication"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      <main className="flex-1 px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Changelog</h1>

          <div className="space-y-6">
            {versions.map((version, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900">v{version.version}</h2>
                  <span className="text-sm text-gray-500">{version.date}</span>
                </div>
                <ul className="space-y-2">
                  {version.changes.map((change, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600">
                      <span className="text-blue-500 font-bold">+</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
