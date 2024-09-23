import React from 'react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { MantineProvider } from '@mantine/core';

import { useEffect } from 'react';
import './InputArea.scss';


interface InputAreaProps {
    value: string;
    setValue: (value: string) => void;
}
var content: string;

/**
 * InputArea component is a rich text editor built using the Mantine and Tiptap libraries.
 * It allows users to format text with various styles and alignments.
 *
 * @component
 * @param {InputAreaProps} props - The properties for the InputArea component.
 * @param {string} props.value - The current content of the editor.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setValue - Function to update the content of the editor.
 *
 * @returns {JSX.Element} The rendered InputArea component.
 *
 * @remarks
 * - The editor is initialized with several extensions including StarterKit, Underline, Link, and TextAlign.
 * - The `useEffect` hook is used to update the parent component with the current content of the editor.
 * - The component uses MantineProvider to wrap the RichTextEditor.
 * - The toolbar includes controls for text formatting, headings, alignment, and undo/redo actions.
 *
 * @example
 * ```tsx
 * const [value, setValue] = useState<string>('');
 * 
 * return (
 *   <InputArea value={value} setValue={setValue} />
 * );
 * ```
 */
const InputArea: React.FC<InputAreaProps> = ({ value, setValue }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content: value,
    });
    // it's better to use  useContext here;
    //ill do it later
    useEffect(() => {
        setValue(content);
        console.log(value);
    });

    return (
        // yes, TS is having issues, but it works without any warnings lmao
        <MantineProvider>
            <RichTextEditor editor={editor}>
                <RichTextEditor.Toolbar sticky>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Link />
                        <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo />
                        <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content />
            </RichTextEditor>
        </MantineProvider>
    );
}

export default InputArea;