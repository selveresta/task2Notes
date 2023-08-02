import { ECategory, NoteState } from "../../model/note.model";

export let notesState: NoteState = {
	notes: [
		{
			id: 1,
			createdAt: new Date("2023-07-25"),
			name: "Name1",
			content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
			category: ECategory.Task,
			img: "task.png",
			archived: false,
		},
		{
			id: 2,
			createdAt: new Date("2023-07-25"),
			name: "Name2",
			content: "from  7/10/2022, I moved it from 8/10/2022",
			category: ECategory.Task,
			img: "task.png",
			archived: false,
		},
		{
			id: 3,
			createdAt: new Date("2023-07-25"),
			name: "Name3",
			content: "on the 3/5/2021, I moved",
			category: ECategory.Idea,
			img: "idea.png",
			archived: false,
		},
		{
			id: 4,
			createdAt: new Date("2023-07-26"),
			name: "Name4",
			content: "This is a random thought.",
			category: ECategory.RandomThought,
			img: "RT.png",
			archived: false,
		},
		{
			id: 5,
			createdAt: new Date("2023-07-26"),
			name: "Name5",
			content: "This is a random thought.",
			category: ECategory.RandomThought,
			img: "RT.png",
			archived: false,
		},

		{
			id: 6,
			createdAt: new Date("2023-07-26"),
			name: "Name61",
			content: "This is a random thought.",
			category: ECategory.RandomThought,
			img: "RT.png",
			archived: false,
		},
		{
			id: 7,
			createdAt: new Date("2023-07-27"),
			name: "Name16",
			content: "I have a great idea!",
			category: ECategory.Idea,
			img: "idea.png",
			archived: false,
		},
	],
};

export const tableHeaders = ["", "Name", "Created At", " Content", "Categoty", "Dates", "Actions"];

export const summaryHeaders = ["", "Category", "Active", "Archived"];

export const categoryIcon = [
	{ category: ECategory.Task, img: "task.png" },
	{ category: ECategory.RandomThought, img: "RT.png" },
	{ category: ECategory.Idea, img: "idea.png" },
];
