import React from "react";
import { INote } from "../model/note.model";
import { useAppDispatch } from "../hooks/redux";
import { archiveNoteAction, removeNoteAction, undoNoteAction } from "../store/reducers/noteReducer";

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
		<div>
			{props.isEdit ? (
				<button
					onClick={() => {
						props.saveChanges(props.note.id);
						changeStateEdit();
					}}
				>
					Save
				</button>
			) : (
				<button
					onClick={() => {
						changeStateEdit();
					}}
				>
					Edit
				</button>
			)}

			{props.note.archived ? (
				<button
					onClick={() => {
						undoNote(props.note.id);
					}}
				>
					{" "}
					Undo
				</button>
			) : (
				<button
					onClick={() => {
						archiveNote(props.note.id);
					}}
				>
					Archive
				</button>
			)}
			<button
				onClick={() => {
					removeNote(props.note.id);
				}}
			>
				Remove
			</button>
		</div>
	);
};
