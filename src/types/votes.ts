export interface Votes {
	good: number
	neutral: number
	bad: number
}
export interface VoteStats {
	votes: Votes
	total: number
	percent: number
}
export interface VoteOptions {
	onVote: (key: keyof Votes) => void
	onReset: () => void
	canReset: boolean
}