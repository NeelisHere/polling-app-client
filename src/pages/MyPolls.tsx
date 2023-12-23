import { Accordion } from "@chakra-ui/react";
import PollItem from "../components/PollItem";
import { nanoid } from "nanoid";

const polls: PollType[] = [
	{
		id: '1',
		question: 'Question 1?',
		options: [
			{ id: '1', text: 'yes' },
			{ id: '2', text: 'no' },
		]
	},
	{
		id: '2',
		question: 'Question 2?',
		options: [
			{ id: '1', text: 'yes' },
			{ id: '2', text: 'no' },
		]
	}
];

const MyPolls = () => {
	return (
		<Accordion w={'500px'} margin={'0 auto'} allowToggle>
			{
				polls.map((poll) => {
					return (
						<PollItem key={nanoid()} poll={poll} />
					)
				})
			}
		</Accordion>
	);
};

export default MyPolls;
