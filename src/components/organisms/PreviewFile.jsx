import React, { useState } from 'react'

const PreviewFile = ({ file }) => {
    const [preview, setPreview] = useState(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result)
    }
    return (
        <div>
            {preview ? <img src={preview} alt={preview} width="100px" height="100px" /> : "loading..."}
        </div>
    )
}

export default PreviewFile;
