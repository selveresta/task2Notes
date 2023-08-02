import React from "react";
import { INote } from "../model/note.model";
import { useAppDispatch } from "../hooks/redux";
import { EActions } from "../store/reducers/noteReducer";

export const ButtonPanel = (props: { note: INote }) => {
	const dispatch = useAppDispatch();

	const editNote = (id: number) => {
		dispatch({ type: EActions.EDIT_NOTE, payload: props.note });
	};

	const archiveNote = (id: number) => {
		dispatch({ type: EActions.ARCHIVE_NOTE, payload: props.note });
	};

	const undoNote = (id: number) => {
		dispatch({ type: EActions.UNDO_NOTE, payload: props.note });
	};

	const removeNote = (id: number) => {
		dispatch({ type: EActions.REMOVE_NOTE, payload: props.note });
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
