import React from 'react'
import ReactQuill from "react-quill";
import { useAppContext } from '../contexts/AppContext';

import 'react-quill/dist/quill.snow.css';  // editor to add heading, bold, italic text and more to content
import '../custom-quill.css';

const Editor = ( {value, onChange} ) => {

    const { theme, font } = useAppContext();

    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' }, 
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
    };

    return (
        <>
            <div style={{
                '--nav_color': theme.nav_color,
                '--bg_color': theme.bg_color,
                '--block_color': theme.block_color,
                '--hover_color': theme.hover_color,
                '--primary_text': theme.primary_text,
                '--secondary_text': theme.secondary_text,
                '--font': font,
            }}
                className=''>

                <ReactQuill value={value} 
                    modules={modules} 
                    theme="snow"
                    onChange = { onChange }
                />

            </div>
        </>
    )
}

export default Editor