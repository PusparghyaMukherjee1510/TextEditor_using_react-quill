import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {

    const [show, setShow] = useState('')

    return (
        <>
            <Container>
                <ReactQuill className="shadow-sm"
                            theme="snow"
                            style={{
                                height: 500,
                                marginTop: '2rem',
                                marginLeft:'5rem',
                                marginRight:'5rem',
                                display: 'flex',
                                flexDirection: 'column'
                            }}

                            value={show}

                            modules={{
                                toolbar: [
                                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], [{size: []}],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{'align': []}],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    [ "video","image", "code-block"],
                                    ['clean']
                                ],
                            }}
                            formats={[
                                'header', 'font', 'size',
                                'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
                                'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
                            ]}
                            onChange={(val) => {
                                setShow(val)
                            }}
                />
            </Container>
        </>
    );
};

export default TextEditor;