import { useState } from "react"
import css from "./App.module.css"
import CafeInfo from "../CafeInfo/CafeInfo"
import Notification from "../Notification/Notification"
import VoteOptions from "../VoteOptions/VoteOptions"
import VoteStats from "../VoteStats/VoteStats"
import { type Votes } from "../../types/votes"

export default function App() {
	const defaultVotes: Votes = {
		good: 0,
		neutral: 0,
		bad: 0,
	}
	const [votes, setVotes] = useState<Votes>(defaultVotes)
	const updateVote = (key: keyof Votes) => {
		setVotes({
			...votes,
			[key]: votes[key] + 1,
		})
	}
	const resetVotes = () => {
		setVotes(defaultVotes)
	}

	const total = votes.good + votes.neutral + votes.bad
	const canReset = total > 0
	const percent = total ? Math.round((votes.good / total) * 100) : 0

	return (
		<div className={css.app}>
			<CafeInfo />
			<VoteOptions
				onVote={updateVote}
				onReset={resetVotes}
				canReset={canReset}
			/>
			{total > 0 ? (
				<VoteStats votes={votes} total={total} percent={percent} />
			) : (
				<Notification />
			)}
		</div>
	)
}
