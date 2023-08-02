import React from "react";
import { INote } from "../model/note.model";
import { tableHeaders } from "../store/data/noteData";
import Note from "./Note";

export const NoteTable = (props: { notes: INote[] }) => {
	if (props.notes.length === 0) {
		return (
			<div>
				<table>
					<thead>
						<tr>
							{tableHeaders.map((header, index) => (
								<th key={index}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody></tbody>
				</table>
				<h2 style={{ textAlign: "center" }}>No Archived Notes</h2>
			</div>
		);
	}
	return (
		<table>
			<thead>
				<tr>
					{tableHeaders.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{props.notes.map((note) => (
					<Note key={note.id} note={note}></Note>
				))}
			</tbody>
		</table>
	);
};
