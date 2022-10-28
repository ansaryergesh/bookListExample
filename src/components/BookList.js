import Table from "react-bootstrap/Table"
const BookList = (props) => {
    const removeBook = (index) => {
        const afterRemoveBooks = props.books.filter((b,i) => i!= index)
        props.setBooks(afterRemoveBooks)
    }
    const allBook = props.books.map((b,index)=> (
        <tr className="">
            <td>{index+1}</td>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.description}</td>
            <td>{b.status}</td>
            <td><button onClick={() =>removeBook(index)}>Delete</button></td>
            <td><button>Edit</button></td>
            <td><button>View detail</button></td>

        </tr>
    ));

    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action Delete</th>
                    <th>Action Edit</th>
                    <th>Action View</th>
                </tr>
                </thead>
                <tbody>
                    {allBook}
                </tbody>
            </Table>
           
        </div>
    )
}

export default BookList;