'use client';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TextEditor = (): JSX.Element => {
    const editorRef = useRef(null);
    return (
        <div>
            <Editor
                apiKey='iycum87boiep1yzkgt49qh3c76mhjwnd8dm3x2f5ospjq3en'
                onInit={(evt, editor) => editorRef.current = editor as any}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins:
                        "anchor autolink charmap codesample emoticons forecolor backcolor image link lists media searchreplace table fullscreen visualblocks wordcount insertdatetime directionality",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor | link image media table | numlist bullist indent outdent align lineheight | fullscreen ltr rtl insertdatetime | emoticons charmap | removeformat|help",
                    toolbar_mode: "wrap",

                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button >Log editor content</button>
        </div>
    );

}