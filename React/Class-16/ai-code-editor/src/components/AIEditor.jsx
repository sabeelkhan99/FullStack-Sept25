import React, { useRef, useState } from 'react';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true
});

const AIEditor = () => {

    const textAreaRef = useRef();

    const selectedTextRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [correctedText, setCorrectedText] = useState(null);
    const [incorrectText, setInCorrectText] = useState(null);

    const sendReqToAI = async () => {
        
        if (selectedTextRef.current?.trim() === 0) {
            return;
        }

        setIsLoading(true);
        setInCorrectText(selectedTextRef.current);
        const response = await client.responses.create({
            model: "gpt-5-nano",
            instructions: `You are an expert on english language, 
            fix the grammar in the input text and the return 
            the corrected output only. Do not return any other
             thing just the corrected text.`,
            input: selectedTextRef.current
        });
        setIsLoading(false);
        setCorrectedText(response.output_text);
        
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
        if (!textAreaRef.current.value || textAreaRef.current.value.trim() === 0) {
            return;
        }
        textAreaRef.current.value = textAreaRef.current.value.replace(incorrectText, correctedText);
    }

    return (
        <div>
            <textarea ref={textAreaRef} onSelect={textSelectHandler} placeholder='Write your text' rows={5} cols={40}></textarea>
            <br />
            {incorrectText && <p>Incorrect: { incorrectText }</p>}
            {correctedText && <p>Correct: { correctedText }</p>}
            {isLoading && <p>Fixing the grammar</p>}
            <button onClick={sendReqToAI}>Fix the grammar</button>
            <button onClick={applyCorrectedTextHandler}>Apply</button>
        </div>
    )
}

export default AIEditor
