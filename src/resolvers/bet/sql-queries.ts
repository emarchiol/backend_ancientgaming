export const selectBetsQuery = "SELECT * FROM bets";
export const selectBetByIdQuery = "SELECT * FROM bets WHERE id=$1";
export const insertBetQuery = "INSERT INTO public.bets(\"userId\", \"betAmount\", chance, payout, win) VALUES ($1, $2, $3, $4, $5) RETURNING id, \"userId\", \"betAmount\", chance, payout, win;";
export const updateUserBalance = "UPDATE public.users SET balance=balance+$1 WHERE id=$2";
export const selectBestBets = 
`SELECT DISTINCT ON (u.id)
	b.id,
	b."userId",
	b."betAmount",
    b.chance,
    b.payout,
    b.win
	FROM users u
	JOIN bets b ON b."userId" = u.id
	ORDER BY u.id, b."betAmount" DESC
    LIMIT $1
    `
