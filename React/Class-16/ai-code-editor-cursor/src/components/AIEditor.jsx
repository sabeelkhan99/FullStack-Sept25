import React, { useRef, useReducer } from 'react';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true
});

const GRAMMAR_FIX_INSTRUCTIONS = `You are an expert on the English language. Fix the grammar in the input text and return only the corrected output. Do not return any other content—just the corrected text.`;

const initialState = {
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    data: { incorrectText: null, correctedText: null },
    error: null,
};

function grammarReducer(state, action) {
    switch (action.type) {
        case 'REQUEST':
            return {
                status: 'loading',
                data: { incorrectText: action.payload, correctedText: null },
                error: null,
            };
        case 'SUCCESS':
            return {
                ...state,
                status: 'success',
                data: { ...state.data, correctedText: action.payload },
                error: null,
            };
        case 'FAILURE':
            return {
                ...state,
                status: 'error',
                error: action.payload,
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const AIEditor = () => {

    const textAreaRef = useRef();
    const selectedTextRef = useRef();

    const [state, dispatch] = useReducer(grammarReducer, initialState);
    const { status, data, error } = state;
    const isLoading = status === 'loading';
    const { incorrectText, correctedText } = data;

    const sendReqToAI = async () => {
        const selected = selectedTextRef.current?.trim();
        if (!selected) {
            dispatch({ type: 'FAILURE', payload: 'Please select some text to fix.' });
            return;
        }

        dispatch({ type: 'REQUEST', payload: selected });

        try {
            const response = await client.responses.create({
                model: "gpt-5-nano",
                instructions: GRAMMAR_FIX_INSTRUCTIONS,
                input: selected,
            });
            const output = response.output_text ?? '';
            dispatch({ type: 'SUCCESS', payload: output });
        } catch (err) {
            const message = err?.message ?? 'Something went wrong while fixing grammar.';
            dispatch({ type: 'FAILURE', payload: message });
        }
    }

    const textSelectHandler = () => {
        const textArea = textAreaRef.current;
        const startIdx = textArea.selectionStart;
        const endIdx = textArea.selectionEnd;

        if (startIdx === endIdx) {
            console.log('Empty selection')
            return;
        }

        const textAreaValue = textArea.value;
        const selectedText = textAreaValue.substring(startIdx, endIdx);
        selectedTextRef.current = selectedText;
    }

    const applyCorrectedTextHandler = () => {
        if (!textAreaRef.current?.value?.trim() || !incorrectText || !correctedText) {
            return;
        }
        textAreaRef.current.value = textAreaRef.current.value.replace(incorrectText, correctedText);
        dispatch({ type: 'RESET' });
    }

    return (
        <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-6 sm:p-8">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Write or paste your text, then select a phrase to fix
                </label>
                <textarea
                    ref={textAreaRef}
                    onSelect={textSelectHandler}
                    placeholder="Write your text..."
                    rows={6}
                    className="w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 px-4 py-3 text-base resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
                />

                {error && (
                    <div className="mt-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 p-4 flex items-start justify-between gap-3">
                        <p className="text-sm text-red-800 dark:text-red-200 flex-1">{error}</p>
                        <button
                            type="button"
                            onClick={() => dispatch({ type: 'RESET' })}
                            className="shrink-0 rounded-lg px-2 py-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 text-sm font-medium transition-colors"
                        >
                            Dismiss
                        </button>
                    </div>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                    <button
                        onClick={sendReqToAI}
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium px-5 py-2.5 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                    >
                        {isLoading ? (
                            <>
                                <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Fixing grammar...
                            </>
                        ) : (
                            'Fix grammar'
                        )}
                    </button>
                    <button
                        onClick={applyCorrectedTextHandler}
                        disabled={!correctedText}
                        className="rounded-xl bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-800 dark:text-zinc-200 font-medium px-5 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                    >
                        Apply correction
                    </button>
                </div>

                {(incorrectText || correctedText) && (
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                        {incorrectText && (
                            <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">Original</p>
                                <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">{incorrectText}</p>
                            </div>
                        )}
                        {correctedText && (
                            <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">Corrected</p>
                                <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">{correctedText}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AIEditor
