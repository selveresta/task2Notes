import React from "react";
import { INote } from "../model/note.model";
import { useAppDispatch } from "../hooks/redux";
import { archiveNoteAction, editNoteAction, removeNoteAction, undoNoteAction } from "../store/reducers/noteReducer";

export const ButtonPanel = (props: { note: INote }) => {
	const dispatch = useAppDispatch();

	const editNote = (id: number) => {
		dispatch(editNoteAction(props.note));
	};

	const archiveNote = (id: number) => {
		dispatch(archiveNoteAction(props.note));
	};

	const undoNote = (id: number) => {
		dispatch(undoNoteAction(props.note));
	};

	const removeNote = (id: number) => {
		dispatch(removeNoteAction(props.note));
	};

	return (
		<div>
			<button
				onClick={() => {
					editNote(props.note.id);
				}}
			>
				Edit
			</button>
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
