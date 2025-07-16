import css from "../styles/VoteOptions.module.css"
import type { VoteOptions } from "../types/votes"

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptions) {
	return (
		<div className={css.container}>
			<button className={css.button} onClick={() => onVote("good")}>
				Good
			</button>
			<button className={css.button} onClick={() => onVote("neutral")}>
				Neutral
			</button>
			<button className={css.button} onClick={() => onVote("bad")}>
				Bad
			</button>
			{canReset && (
				<button className={`${css.button} ${css.reset}`} onClick={onReset}>
					Reset
				</button>
			)}
		</div>
	)
}
