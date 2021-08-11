-- Users inserts
INSERT INTO public.users(
	id, name, balance)
	VALUES (1, 'Show me the money guy', 120000.00);
INSERT INTO public.users(
	id, name, balance)
	VALUES (2, 'Broke guy', 20);
INSERT INTO public.users(
	id, name, balance)
	VALUES (3, 'Eric Bell', 500);
INSERT INTO public.users(
	id, name, balance)
	VALUES (4, 'Paul Black', 5600.00);

-- Bets inserts
INSERT INTO public.bets(
	id, "userId", "betAmount", chance, payout)
	VALUES (1, 1, 10000, 5, 3.5);

INSERT INTO public.bets(
	id, "userId", "betAmount", chance, payout)
	VALUES (2, 3, 200, 60, 3.6);

INSERT INTO public.bets(
	id, "userId", "betAmount", chance, payout)
	VALUES (3, 2, 5.2, 92.5, 1.1);
