import React, { Fragment, useState } from 'react';



const CreatePost = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = (e) => {
       setFile(e.target.file[0]);
    }
 return(
     <>
      <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
     </>
 );

}