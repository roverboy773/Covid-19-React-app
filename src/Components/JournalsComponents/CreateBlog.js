import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.snow.css'

const CreateBlog = ({ refresh, Create }) => {
    const [create, setCreate] = useState(false)
    const [author, setAuthor] = useState('')
    const [desc, setDesc] = useState('')
    const [heading, setHeading] = useState('')
    const [body, setBody] = useState('')
    const [response, setResponse] = useState('')
    const [resCode, setResCode] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const modules = {
        toolbar: [
            ['bold', 'italic', 'link', 'blockquote', 'code', 'image', 'underline',
                { list: 'ordered' }, { list: 'bullet' }, { 'align': [] }, { 'script': 'sub' }, { 'script': 'super' },
                { 'font': [] }, { 'header': [1, 2, 3, 4, 5, 6, false] }, { 'indent': '-1' }, { 'indent': '+1' },
                { 'direction': 'rtl' }, { 'color': [] }
            ]
        ]
    }

    const handleSubmit = async (e) => {
        try{
        e.preventDefault()
        //console.log('handle')
        // const data = {
        //     author,
        //     heading,
        //     body,
        //     desc
        // }
        setLoading(true)
        const formData1=new FormData()
        formData1.append('file',image)
        formData1.append('upload_preset','journal')
        formData1.append('cloud_name','rover773')
          
      fetch('https://api.cloudinary.com/v1_1/rover773/image/upload',{
          method:'POST',
          body:formData1
      })
      .then(result=>result.json())
      .then(async (result)=>{
          
        if(result.secure_url){

            const data={author,heading,body,desc,image:result.secure_url}

        const res = await axios.post('https://covid-19-journals.herokuapp.com/create-blog',data )
        //    console.log(res)
        if (res) {
            setLoading(false)
            setResCode(res.status)
            setResponse(res.data.msg)
            if (res.status === 200) {
                refresh(true)
                setCreate(false)
                setAuthor('')
                setBody('')
                setHeading('')
                setTimeout(() => {
                    setResCode('-')
                }, 1000)
            }
        }
    }      
})
    }catch(e){
        console.log(e)
    }
}
    const handleChange = (html) => {
        setBody(html)
    }
    useEffect(() => {
        if (create)
            Create(true)
        else Create(false)
        return () => {
        }
    }, [create])
    return (
        <div className={`create w-full p-3`}>
            {
                resCode === 200 && <h3 className="my-2 w-11/12 text-center bg-green-400 pt-2 rounded-lg text-white leading-8">{response.toUpperCase()}</h3>
            }
            {
                (create || resCode === 501) ?

                    <div>
                        <i className="las la-times block text-right" onClick={() => setCreate(false)}></i>
                        <form onSubmit={handleSubmit} >

                            <input type="text" placeholder='Author Name' name='author' value={author}
                                className="w-full block mx-auto my-2 py-2 px-3 rounded-xl bg-indigo-400 text-white flex justify-center"
                                onChange={(e) => { setAuthor(e.target.value) }} required />

                            <input type="text" placeholder='Heading' name='heading' value={heading}
                                className="w-full block mx-auto my-2 py-2 px-3 rounded-xl bg-indigo-400 text-white"
                                onChange={(e) => { setHeading(e.target.value) }} required />

                            <textarea name="body" id="" cols="30" rows="3" value={desc}
                                placeholder='Description'
                                className="w-full block mx-auto my-2 rounded-xl bg-indigo-200 p-4"
                                onChange={(e) => { setDesc(e.target.value) }}
                                required ></textarea>

                            <input type="file" placeholder="Choose an image" onChange={(e) => { setImage(e.target.files[0]) }}
                                className="w-full block mx-auto my-2 py-2 px-3 rounded-xl bg-indigo-400 text-white"
                            />

                            <ReactQuill value={body}
                                placeholder='Body'
                                className="w-full block mx-auto my-2 shadow-2xl "
                                onChange={handleChange}
                                modules={modules}
                                theme='snow'
                                required></ReactQuill>

                            {
                                (!loading) ? <button className="bg-indigo-500 px-3 pt-2 text-center mx-auto rounded-xl block text-white leading-8">POST</button>
                                    : <div className="flex items-center justify-center py-2">
                                        <div className="animate-spin w-8 h-8 rounded-full border-t-2 border-r-2 border-indigo-500 mr-1">
                                        </div>
                                        Wait a sec
                                     </div>

                            }
                        </form>
                    </div>

                    :
                    <button className="bg-indigo-500 w-full py-2 px-4 text-center text-white rounded-md block leading-8"
                        onClick={() => setCreate(true)}>Create a Journal</button>
            }
        </div>
    )
}

export default CreateBlog
