import React from 'react'
import AIEditor from './components/AIEditor'

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-950 dark:to-zinc-900 py-12 px-4 sm:px-6">
            <header className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
                    AI Assisted Text Editor
                </h1>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
                    Select text in the editor and fix grammar with one click.
                </p>
            </header>
            <main>
                <AIEditor />
            </main>
        </div>
    )
}

export default App
