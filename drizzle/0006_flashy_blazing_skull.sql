CREATE TABLE `focus_spot_positions` (
	`map` text NOT NULL,
	`spot` text NOT NULL,
	`col` integer NOT NULL,
	`row` integer NOT NULL,
	PRIMARY KEY(`map`, `spot`)
);
