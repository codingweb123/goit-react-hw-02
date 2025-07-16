import css from "./VoteStats.module.css"
import type { VoteStats } from "../../types/votes"

export default function VoteStats({
	votes: { good, neutral, bad },
	total,
	percent,
}: VoteStats) {
	return (
		<div className={css.container}>
			<p className={css.stat}>
				Good: <strong>{good}</strong>
			</p>
			<p className={css.stat}>
				Neutral: <strong>{neutral}</strong>
			</p>
			<p className={css.stat}>
				Bad: <strong>{bad}</strong>
			</p>
			<p className={css.stat}>
				Total: <strong>{total}</strong>
			</p>
			<p className={css.stat}>
				Positive: <strong>{percent}%</strong>
			</p>
		</div>
	)
}
