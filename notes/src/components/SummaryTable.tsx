import React from "react";
import { categoryIcon, summaryHeaders } from "../store/data/noteData";
import { SummaryRow } from "./SummaryRow";

export const SummaryTable = () => {

	
	return (
		<table>
			<thead>
				<tr>
					{summaryHeaders.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{categoryIcon.map((category, index) => (
					<SummaryRow key={index} row={category}></SummaryRow>
				))}
			</tbody>
		</table>
	);
};
