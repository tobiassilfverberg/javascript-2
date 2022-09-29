import React from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch } from 'react-redux'
import { removeEmployee } from './employeesSlice'

const EmployeeList = ({ employees }) => {
	const dispatch = useDispatch()

	return (
		<ListGroup>
			{employees.map(employee => (
				<ListGroup.Item key={employee.id} className="d-flex justify-content-between align-items-center">
					{employee.name}
					<Button
						variant="danger"
						onClick={() => dispatch( removeEmployee(employee) )}
					>🗑</Button>
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default EmployeeList
