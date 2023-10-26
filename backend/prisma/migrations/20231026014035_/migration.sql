-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "operators_id" TEXT DEFAULT '',
    "idTelegram" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL,
    "dtMessage" DATETIME NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Messages_operators_id_fkey" FOREIGN KEY ("operators_id") REFERENCES "Operators" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Messages_idTelegram_fkey" FOREIGN KEY ("idTelegram") REFERENCES "Customers" ("idTelegram") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Messages" ("dtMessage", "id", "idTelegram", "operators_id", "sent", "text") SELECT "dtMessage", "id", "idTelegram", "operators_id", "sent", "text" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
