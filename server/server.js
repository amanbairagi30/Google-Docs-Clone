const mongoose = require("mongoose")
const Document = require("./Document")

mongoose.connect('mongodb://127.0.0.1/google-docs-clone',
);

const defaultValue = ""

const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

io.on("connection", socket => {
    socket.on("get-document",async id=>{
        const document = await findOrCreateDocument(id)
        socket.join(id)
        socket.emit("load-document",document.data)


        socket.on("send-changes", delta => {
            socket.broadcast.to(id).emit("receive-changes",delta)
        }) 


        socket.on("save-document",async data =>{
            await Document.findByIdAndUpdate(id,{ data })
        })
    })
})

async function findOrCreateDocument(id){
    if(id == null) return

    const document = await Document.findById(id)
    if(document) return document
    return await Document.create({_id : id , data : defaultValue})
}