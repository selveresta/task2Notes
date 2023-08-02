import React, { useState } from "react";
import "./App.css";
import { useAppSelector } from "./hooks/redux";
import { NoteTable } from "./components/NoteTable";
import { Button } from "react-bootstrap";
import { AddModal } from "./modals/AddModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { categoryIcon, summaryHeaders, tableHeaders } from "./store/data/noteData";

function App() {
	const [modalShow, setModalShow] = useState(false);

	const { notes } = useAppSelector((state) => state.noteReducer);

	const ArchiveNotes = notes.filter((value) => {
		return value.archived === true;
	});

	const ActiveNotes = notes.filter((value) => {
		return value.archived === false;
	});

	return (
		<div className='App'>
			<AddModal show={modalShow} onHide={() => setModalShow(false)} />
			<h2 style={{ textAlign: "center" }}>Notes</h2>
			<NoteTable notes={ActiveNotes} headers={tableHeaders} isSummary={false} category={categoryIcon}></NoteTable>
			<hr></hr>
			<Button variant='primary' onClick={() => setModalShow(true)}>
				Add New Note{" "}
			</Button>
			<hr></hr>
			<h2 style={{ textAlign: "center" }}>Archive</h2>
			<NoteTable headers={tableHeaders} isSummary={false} notes={ArchiveNotes} category={categoryIcon}></NoteTable>
			<hr></hr>
			<br />
			<h2 style={{ textAlign: "center" }}>Summary</h2>
			<NoteTable headers={summaryHeaders} isSummary={true} notes={notes} category={categoryIcon}></NoteTable>
			<br></br> <br></br>
		</div>
	);
}

export default App;
