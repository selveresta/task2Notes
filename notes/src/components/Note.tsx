import React, { useState } from "react";
import { INote } from "../model/note.model";
import { ButtonPanel } from "./ButtonPanel";
import "../style/note.css";
import { categoryIcon } from "../store/data/noteData";
import { editNoteAction, editPayload } from "../store/reducers/noteReducer";
import { useAppDispatch } from "../hooks/redux";
const Note = (props: { note: INote }) => {
	const [isEdit, setIsEdit] = useState(false);
	const dispatch = useAppDispatch();

	function getDatesFromContent(content: string) {
		const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
		const datesArray = content.match(dateRegex);
		return datesArray ? datesArray.join(", ") : "";
	}

	const editNote = (id: number) => {
		let imgEdit: string = "";
		categoryIcon.forEach((value) => {
			if (value.category === category) {
				imgEdit = value.img;
				return;
			}
		});
		const editPayload: editPayload = {
			id: props.note.id,
			name: name,
			content: content,
			category: category,
			img: imgEdit,
		};

		dispatch(editNoteAction(editPayload));
	};

	const [name, setName] = useState(props.note.name);
	const [content, setContent] = useState(props.note.content);
	const [category, setCategory] = useState(String(props.note.category));

	return (
		<tr>
			<td>
				<img src={require(`../icons/${props.note.img}`)} className='imgLogo' alt='img'></img>
			</td>
			{isEdit ? (
				<td>
					{" "}
					<input
						type='text'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</td>
			) : (
				<td>{props.note.name}</td>
			)}

			<td>{props.note.createdAt.toLocaleDateString()}</td>
			{isEdit ? (
				<td>
					{" "}
					<input
						type='text'
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
				</td>
			) : (
				<td>{props.note.content}</td>
			)}
			{isEdit ? (
				<td>
					{" "}
					<select
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						{categoryIcon.map((category) => (
							<option key={category.category} value={category.category}>
								{category.category}
							</option>
						))}
					</select>
				</td>
			) : (
				<td>{props.note.category}</td>
			)}
			<td>{getDatesFromContent(props.note.content)}</td>
			<td>
				<ButtonPanel note={props.note} isEdit={isEdit} setterEdit={setIsEdit} saveChanges={editNote}></ButtonPanel>
			</td>
		</tr>
	);
};

export default Note;
