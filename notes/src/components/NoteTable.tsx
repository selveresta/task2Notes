import React from "react";
import { ECategory, INote } from "../model/note.model";
import Note from "./Note";
import { SummaryRow } from "./SummaryRow";

interface ITable {
	notes: INote[];
	category: { category: ECategory; img: string }[];
	headers: string[];
	isSummary: boolean;
}

export const NoteTable = (props: ITable) => {
	return (
		<div>
			{props.notes.length !== 0 ? (
				<table>
					<thead>
						<tr>
							{props.headers.map((header, index) => (
								<th key={index}>{header}</th>
							))}
						</tr>
					</thead>
					{props.isSummary ? (
						<tbody>
							{props.category.map((category) => (
								<SummaryRow key={category.category} row={category}></SummaryRow>
							))}
						</tbody>
					) : (
						<tbody>
							{props.notes.map((note: INote) => (
								<Note key={note.id} note={note}></Note>
							))}
						</tbody>
					)}
				</table>
			) : (
				<div>
					<table>
						<thead>
							<tr>
								{props.headers.map((header, index) => (
									<th key={index}>{header}</th>
								))}
							</tr>
						</thead>
					</table>
					<h2 style={{ textAlign: "center" }}>No Notes</h2>
				</div>
			)}
		</div>
	);
};
