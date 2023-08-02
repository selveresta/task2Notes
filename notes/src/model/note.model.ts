export enum ECategory {
	Task = "Task",
	Idea = "Idea",
	RandomThought = "Random Thought",
}

export interface INote {
	id: number;
	img: string;
	name: string;
	createdAt: Date;
	category: ECategory;
	content: string;
	archived: boolean;
}

export interface NoteState {
	notes: INote[];
}
