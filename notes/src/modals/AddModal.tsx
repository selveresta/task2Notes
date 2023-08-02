import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { categoryIcon } from "../store/data/noteData";
import { useAppDispatch } from "../hooks/redux";
import { ECategory, INote } from "../model/note.model";
import {  addNoteAction } from "../store/reducers/noteReducer";

export const AddModal = (props: any) => {
	const dispatch = useAppDispatch();

	const [name, setName] = useState("Note");
	const [content, setContent] = useState("");
	const [category, setCategory] = useState("Task");

	const addNewNote = () => {
		let chooseCategory: ECategory = ECategory.Idea;
		let img: string = "";
		categoryIcon.forEach((value) => {
			if (value.category === category) {
				img = value.img;
				return (chooseCategory = value.category);
			}
		});

		const newNote: INote = {
			id: Math.round(Math.random() * 1000),
			name: name,
			category: chooseCategory,
			content: content,
			createdAt: new Date(Date.now()),
			img: img,
			archived: false,
		};

		dispatch(addNoteAction(newNote));
	};

	return (
		<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className='mb-3' controlId='addName'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
							type='text'
							placeholder='Note'
							autoFocus
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Category</Form.Label>

						<Form.Select
							value={category}
							onChange={(e) => {
								setCategory(e.target.value);
							}}
							className='mb-2'
							aria-label='Choose category'
						>
							{categoryIcon.map((category) => (
								<option key={category.category} value={category.category}>
									{category.category}
								</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className='mb-3' controlId='addContent'>
						<Form.Label>Content</Form.Label>
						<Form.Control
							value={content}
							onChange={(e) => {
								setContent(e.target.value);
							}}
							as='textarea'
							rows={3}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={props.onHide}>
					Close
				</Button>
				<Button variant='primary' onClick={addNewNote}>
					Add
				</Button>{" "}
			</Modal.Footer>
		</Modal>
	);
};
