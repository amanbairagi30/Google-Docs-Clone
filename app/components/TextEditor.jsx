
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'
import "../components/TextEditor.css"

const TOOLBAR_OPTIONS = [
    [{header : [1,2,3,4,5,6,false]}],
    [{font:[]}],
    [{list :"ordered"},{list:"bullet"}],
    ["bold","italic","underline"],
    [{color:[]},{background :[]}],
    [{script:"sub"},{script:"super"}],
    [{align: []}],
    ["image","blockquote","code-block"],
    ["clean"],
]

const TextEditor = () => {
    const [socket , setSocket] = useState()
    const [quill,setQuill] = useState()

    useEffect(()=>{
        const s = io("http://localhost:3001")
        setSocket(s)
        
        return ()=>{
            s.disconnect()
            if (quill && quill.current) {
                quill.current.destroy();
              }
        }
    },[])  

    useEffect(()=>{
        if(socket == null || quill == null) return
            const handler = (delta, oldDelta, source)=>{
                quill.updateContents(delta)
            }
            socket.on('receive-changes', handler)
            return ()=>{
                socket.off('receive-changes',handler)
            }

    }, [socket,quill])
    useEffect(()=>{
        if(socket == null || quill == null) return
            const handler = (delta, oldDelta, source)=>{
                if(source !== 'user') return
                socket.emit("send-changes",delta)
            }
            quill.on('text-change', handler)
            return ()=>{
                quill.off('text-change',handler)
            }

    }, [socket,quill])

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return
    
        if (!quill) {
            const editor = document.createElement('div')
            wrapper.innerHTML = ""
            wrapper.append(editor)
            const q = new Quill(editor, { theme: "snow" ,modules:{
                toolbar:TOOLBAR_OPTIONS
            }})
            setQuill(q)
        }
    }, [quill])
    
    return (
        <div className='container' ref={wrapperRef}></div>
    )
}

export default TextEditor
