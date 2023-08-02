import React from "react";
import { INote } from "../model/note.model";
import { useAppDispatch } from "../hooks/redux";
import { archiveNoteAction, removeNoteAction, undoNoteAction } from "../store/reducers/noteReducer";
import { Button } from "react-bootstrap";

export const ButtonPanel = (props: { note: INote; isEdit: boolean; setterEdit: Function; saveChanges: Function }) => {
	const dispatch = useAppDispatch();

	const archiveNote = (id: number) => {
		dispatch(archiveNoteAction(props.note));
	};

	const undoNote = (id: number) => {
		dispatch(undoNoteAction(props.note));
	};

	const removeNote = (id: number) => {
		dispatch(removeNoteAction(props.note));
	};

	const changeStateEdit = () => {
		props.setterEdit(!props.isEdit);
	};

	return (
		<div className='ButtonPanel'>
			{props.isEdit ? (
				<Button
					className='myButton'
					variant='success'
					onClick={() => {
						props.saveChanges(props.note.id);
						changeStateEdit();
					}}
				>
					Save
				</Button>
			) : (
				<Button
					className='myButton'
					variant='warning'
					onClick={() => {
						changeStateEdit();
					}}
				>
					Edit
				</Button>
			)}

			{props.note.archived ? (
				<Button
					className='myButton'
					onClick={() => {
						undoNote(props.note.id);
					}}
				>
					{" "}
					Undo
				</Button>
			) : (
				<Button
					className='myButton'
					variant='info'
					onClick={() => {
						archiveNote(props.note.id);
					}}
				>
					Archive
				</Button>
			)}
			<Button
				className='myButton'
				onClick={() => {
					removeNote(props.note.id);
				}}
				variant='danger'
			>
				Remove
			</Button>
		</div>
	);
};
