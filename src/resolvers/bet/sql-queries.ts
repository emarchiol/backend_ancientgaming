export const selectBetsQuery = "SELECT * FROM bets";
export const selectBetByIdQuery = "SELECT * FROM bets WHERE id=$1";
export const insertBetQuery = "INSERT INTO public.bets(\"userId\", \"betAmount\", chance, payout, win) VALUES ($1, $2, $3, $4, $5) RETURNING id, \"userId\", \"betAmount\", chance, payout, win;";
export const updateUserBalance = "UPDATE public.users SET balance=balance+$1 WHERE id=$2";
