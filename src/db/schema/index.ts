// Youtube Creator Form Schema

import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const youtubeCreatorForm = pgTable("youtube_creator_form", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  channel: text("channel").notNull(),
});

