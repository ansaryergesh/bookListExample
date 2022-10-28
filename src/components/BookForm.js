import { useState } from "react"

const BookForm = (props) => {
    const statuses = ["read","unread"]
    const [book,setBook] = useState({
        title: "",
        author:"",
        description:"",
        status:"read"
    })
    const onChangeValues = event => {
        const name = event.target.name;
        const value = event.target.value;
        setBook({...book,[name]:value})
    }

    const onSubmitBook = (e) => {
        e.preventDefault();
        props.setBooks([...props.books,book])
        clearFields();
    }
    
    const clearFields = () => {
        setBook({
            title: "",
            author:"",
            description:"",
            status:"read"
        })
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmitBook(e)}>
                <div>
                    <label>Title</label>
                    <input name="title" value={book.title} onChange={(e)=>onChangeValues(e)}></input>
                </div>
                <div>
                    <label>Author</label>
                    <input name="author" value={book.author} onChange={(e)=>onChangeValues(e)}></input>
                </div>
                <div>
                    <label>Status</label>
                    <select onChange={(e)=>onChangeValues(e)} name="status" value={book.status}>
                        {statuses.map(s=>(
                            <option value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label>Description</label>
                    <input onChange={e=>onChangeValues(e)} name="description" value={book.description} />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default BookForm