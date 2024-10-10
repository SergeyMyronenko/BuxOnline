import React from 'react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { MantineProvider } from '@mantine/core';;
import './InputArea.scss';


interface InputAreaProps {
    initialValue?: string;
    id:string;
    setValue: (value: string,id:string) => void;
}

/**
 * InputArea component is a rich text editor built using Mantine's RichTextEditor and Tiptap's useEditor.
 * It allows users to input and format text with various controls such as bold, italic, underline, and more.
 * The editor's content is updated and passed to the parent component via the setValue prop.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Function} props.setValue - Function to update the parent component with the editor's content.
 *
 * @returns {JSX.Element} The rendered InputArea component.
 *
 * @example
 * <InputArea setValue={handleSetValue} />
 */
const InputArea: React.FC<InputAreaProps> = ({ setValue,initialValue,id }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],       
        onUpdate(props) {
           const content = props.editor.getHTML();
           setValue(content,id);
        },
        content: initialValue,
    });

    return (
        <MantineProvider>
            <RichTextEditor editor={editor} >
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