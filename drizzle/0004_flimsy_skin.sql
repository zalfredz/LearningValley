CREATE TABLE `focus_spots` (
	`map` text NOT NULL,
	`spot` text NOT NULL,
	`user_id` text NOT NULL,
	`updated` integer NOT NULL,
	PRIMARY KEY(`map`, `spot`)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `focus_spots_user_map` ON `focus_spots` (`map`,`user_id`);--> statement-breakpoint
CREATE TABLE `map_terrain` (
	`map` text NOT NULL,
	`cell` integer NOT NULL,
	`blocked` integer NOT NULL,
	PRIMARY KEY(`map`, `cell`)
);
