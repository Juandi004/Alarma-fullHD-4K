/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `register` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `room` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `sensor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "register_id_key" ON "register"("id");

-- CreateIndex
CREATE UNIQUE INDEX "room_id_key" ON "room"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sensor_id_key" ON "sensor"("id");
