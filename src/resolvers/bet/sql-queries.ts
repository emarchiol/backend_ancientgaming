export const selectBetsQuery = "SELECT * FROM bets";
export const selectBetByIdQuery = "SELECT * FROM bets WHERE id=$1";
export const insertBetQuery = "INSERT INTO public.bets(\"userId\", \"betAmount\", chance) VALUES ($1, $2, $3) RETURNING id, \"userId\", \"betAmount\", chance, payout, win;";
