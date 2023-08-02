import React from "react";
import { INote } from "../model/note.model";
import { ButtonPanel } from "./ButtonPanel";
import "../style/note.css";
const Note = (props: { note: INote }) => {
	function getDatesFromContent(content: string) {
		const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
		const datesArray = content.match(dateRegex);
		return datesArray ? datesArray.join(", ") : "";
	}

	return (
		<tr>
			<td>
				<img src={require(`../icons/${props.note.img}`)} className='imgLogo' alt='img'></img>
			</td>
			<td>{props.note.name}</td>
			<td>{props.note.createdAt.toLocaleDateString()}</td>
			<td>{props.note.content}</td>
			<td>{props.note.category}</td>
			<td>{getDatesFromContent(props.note.content)}</td>
			<td>
				<ButtonPanel note={props.note}></ButtonPanel>
			</td>
		</tr>
	);
};

export default Note;
