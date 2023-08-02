import React, { useEffect, useState } from "react";
import { ECategory } from "../model/note.model";
import { useAppSelector } from "../hooks/redux";

interface SummaryRowProp {
	category: ECategory;
	img: string;
}

export const SummaryRow = (props: { row: SummaryRowProp }) => {
	const { notes } = useAppSelector((state) => state.noteReducer);

	const [activeNotesCount, setActiveNotesCount] = useState<number>(0); //notesData.filter((note) => note.category === category.category && note.archived === false).length;
	const [archivedNotesCount, setArchivedNotesCount] = useState<number>(0); //notesData.filter((note) => note.category === category.category && note.archived).length;
	useEffect(() => {
		const activeNotesCount = notes.filter((note) => note.category === props.row.category && note.archived === false).length;
		const archivedNotesCount = notes.filter((note) => note.category === props.row.category && note.archived).length;

		setActiveNotesCount(activeNotesCount);
		setArchivedNotesCount(archivedNotesCount);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [notes]);

	return (
		<tr className='note'>
			<td>
				<img className='imgLogo' alt='' src={require(`../icons/${props.row.img}`)}></img>
			</td>
			<td>{props.row.category}</td>
			<td>{activeNotesCount}</td>
			<td>{archivedNotesCount}</td>
		</tr>
	);
};
