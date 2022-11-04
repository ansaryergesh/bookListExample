import { useState } from "react"

const BookForm = (props) => {
    const statuses = ["read","unread"]

    const onChangeValues = event => {
        const name = event.target.name;
        const value = event.target.value;
        props.setBook({...props.book,[name]:value})
    }

    const onSubmitBook = (e) => {
        e.preventDefault();
        if(!props.edit) {
            props.setBooks([...props.books,props.book])
        } else {
            const books = props.books;
            props.books[props.book.index] = props.book;
            props.setBooks(books)
        }
        props.setEdit(false)
        clearFields();
    }
    
    const clearFields = () => {
        props.setBook({
            title: "",
            author:"",
            description:"",
            status:"read"
        })
    }

    const canceledit = () => {
        clearFields();
        props.setEdit(false)
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmitBook(e)}>
                {props.edit &&  <div>
                    <label>index</label>
                    <input readOnly={true} value={props.book.index}/>
                </div>}

                <div>
                    <label>Title</label>
                    <input name="title" value={props.book.title} onChange={(e)=>onChangeValues(e)}></input>
                </div>
                <div>
                    <label>Author</label>
                    <input name="author" value={props.book.author} onChange={(e)=>onChangeValues(e)}></input>
                </div>
                <div>
                    <label>Status</label>
                    <select onChange={(e)=>onChangeValues(e)} name="status" value={props.book.status}>
                        {statuses.map(s=>(
                            <option value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label>Description</label>
                    <input onChange={e=>onChangeValues(e)} name="description" value={props.book.description} />
                </div>
                <button type="submit">{props.edit ? "Edit book" : "Add book"}</button>
                {props.edit && <button type="button" onClick={() => canceledit()}>Cancel Edit</button>}
            </form>
        </div>
    )
}

export default BookForm