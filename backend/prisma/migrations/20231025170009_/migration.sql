-- CreateTable
CREATE TABLE "Customers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "idTelegram" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "operators_id" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Messages_operators_id_fkey" FOREIGN KEY ("operators_id") REFERENCES "Operators" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_idTelegram_key" ON "Customers"("idTelegram");
