"use client"

import React, { createContext, useContext, useState } from 'react'
import { Editor } from '@tiptap/react'

interface EditorContextType {
    editor: Editor | null
    setEditor: (editor: Editor | null) => void
    clearEditor: () => void
}

const EditorContext = createContext<EditorContextType | undefined>(undefined)

export function EditorProvider({ children }: { children: React.ReactNode }) {
    const [editor, setEditorState] = useState<Editor | null>(null)

    const setEditor = (editor: Editor | null) => {
        setEditorState(editor)
    }

    const clearEditor = () => {
        if (editor) {
            editor.commands.clearContent()
        }
    }

    return (
        <EditorContext.Provider value={{
            editor,
            setEditor,
            clearEditor
        }}>
            {children}
        </EditorContext.Provider>
    )
}

export function useEditorContext() {
    const context = useContext(EditorContext)
    if (context === undefined) {
        throw new Error('useEditorContext must be used within an EditorProvider')
    }
    return context
}
