import Table from 'react-bootstrap/Table'

const BookList = ({ books }) => {
	if (!books.length) {
		return <p>No books for you!</p>
	}

	/** 
	 * book.title
	 * book.author.name
	 * book.pages
	 * book.published 
	*/

	return (
		<Table hover>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Pages</th>
					<th>Published</th>
				</tr>
			</thead>
			<tbody>
				{books.map(book => (
					<tr key={book.id}>
						<td>{book.title}</td>
						<td>{book.author.name}</td>
						<td>{book.pages}</td>
						<td>{book.published}</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Pages</th>
					<th>Published</th>
				</tr>
			</tfoot>
		</Table>
	)
}

export default BookList
