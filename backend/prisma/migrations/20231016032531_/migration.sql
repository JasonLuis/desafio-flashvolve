-- CreateTable
CREATE TABLE "Operators" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Operators_login_key" ON "Operators"("login");
