-- Users table
CREATE TABLE public.users
(
    id integer NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    balance money,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;

-- Bets table
CREATE TABLE public.bets
(
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "betAmount" money,
    chance real,
    payout money,
    win boolean,
    CONSTRAINT bets_pkey PRIMARY KEY (id),
    CONSTRAINT "userId_fk" FOREIGN KEY ("userId")
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.bets
    OWNER to postgres;
