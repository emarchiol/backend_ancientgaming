-- Users inserts
INSERT INTO public.users(
	name, balance)
	VALUES ('Show me the money guy', 120000.00);
INSERT INTO public.users(
	name, balance)
	VALUES ('Broke guy', 20);
INSERT INTO public.users(
	name, balance)
	VALUES ('Eric Bell', 500);
INSERT INTO public.users(
	name, balance)
	VALUES ('Paul Black', 5600.00);

-- Bets inserts
INSERT INTO public.bets(
	"userId", "betAmount", chance, payout)
	VALUES (1, 10000, 5, 3.5);

INSERT INTO public.bets(
	"userId", "betAmount", chance, payout)
	VALUES (3, 200, 60, 3.6);

INSERT INTO public.bets(
	"userId", "betAmount", chance, payout)
	VALUES (2, 5.2, 92.5, 1.1);
