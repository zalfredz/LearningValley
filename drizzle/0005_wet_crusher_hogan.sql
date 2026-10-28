CREATE TABLE `focus_area_cells` (
	`map` text NOT NULL,
	`spot` text NOT NULL,
	`cell` integer NOT NULL,
	`included` integer NOT NULL,
	PRIMARY KEY(`map`, `spot`, `cell`)
);
