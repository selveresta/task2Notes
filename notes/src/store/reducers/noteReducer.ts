import { INote, NoteState } from "../../model/note.model";
import { notesState } from "../data/noteData";
import update from "immutability-helper";

export enum EActions {
	ADD_NOTE = "ADD_NOTE",
	EDIT_NOTE = "EDIT_NOTE",
	REMOVE_NOTE = "REMOVE_NOTE",
	ARCHIVE_NOTE = "ARCHIVE_NOTE",
	UNDO_NOTE = "UNDO_NOTE",
}

export interface INoteAction {
	type: EActions;
	payload: INote;
}

interface AddAction {
	type: EActions.ADD_NOTE;
	payload: INote;
}

interface EditAction {
	type: EActions.EDIT_NOTE;
	payload: INote;
}

interface RemoveAction {
	type: EActions.REMOVE_NOTE;
	payload: INote;
}

interface ArchiveAction {
	type: EActions.ARCHIVE_NOTE;
	payload: INote;
}

interface UndoAction {
	type: EActions.UNDO_NOTE;
	payload: INote;
}

export type NoteAction = AddAction | EditAction | ArchiveAction | UndoAction | RemoveAction;

export const noteReducer = (state: NoteState = notesState, action: NoteAction): NoteState => {
	switch (action.type) {
		case EActions.ADD_NOTE:
			return { ...state, notes: [...state.notes, action.payload] };
		case EActions.EDIT_NOTE:
			const note = state.notes.filter((value) => {
				return value.id === action.payload.id;
			})[0];
			note.category = action.payload.category;
			note.name = action.payload.name;
			note.content = action.payload.content;
			//actions with note
			return state;
		case EActions.REMOVE_NOTE:
			const notes = state.notes.filter((value) => {
				return value.id !== action.payload.id;
			});
			return { ...state, notes: [...notes] };
		case EActions.ARCHIVE_NOTE:
			const noteFA = state.notes.find((value) => {
				return value.id === action.payload.id;
			});
			let index = 0;
			if (noteFA) {
				index = state.notes.indexOf(noteFA);
			} else {
				return { ...state };
			}

			return update(state, {
				notes: {
					[index]: {
						archived: { $set: true },
					},
				},
			});
		case EActions.UNDO_NOTE:
			const noteFU = state.notes.find((value) => {
				return value.id === action.payload.id;
			});
			let index1 = 0;
			if (noteFU) {
				index1 = state.notes.indexOf(noteFU);
			} else {
				return { ...state };
			}

			return update(state, {
				notes: {
					[index1]: {
						archived: { $set: false },
					},
				},
			});
		default:
			return state;
	}
};
