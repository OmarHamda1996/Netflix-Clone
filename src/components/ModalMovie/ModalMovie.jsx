

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


import { useState } from 'react'




export default function ModalMovie({ data, show, close }) {

    const [valComment, setVal] = useState("");

    function addToFav(e) {
        e.preventDefault();
      
        var x = e.target.value;
        setVal(x)
    }
   
    async function addData() {
        const url = `${process.env.REACT_APP_API_URL}/addMovie`
    const data2 = {
      title : data.title,
      release_date : data.release_date,
      poster_path : data.poster_path,
      overview  : data.overview , 
      user_comment : valComment
      
    }
   await fetch(url, {
      method: 'POST', 
  
      body: JSON.stringify(data2) 
    });
    console.log(valComment);
    console.log(data2.title);
console.log(data.title);
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Title :{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{data.release_date}</Modal.Body>
            <Modal.Footer onSubmit={addToFav}>
                {/* <label>comment:</label><input type="text" name="comment" /> */}
                <label>comment:</label><input type="text" onChange={addToFav} />
                <Button variant="secondary" onClick={close}> Close </Button>
                <Button variant="primary" onClick={addData}>add To favarit</Button>
            </Modal.Footer>
        </Modal>
    )
};