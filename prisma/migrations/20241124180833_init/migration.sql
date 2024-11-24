/*
  Warnings:

  - A unique constraint covering the columns `[segment_id]` on the table `PbxCdr` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PbxCdr_segment_id_key" ON "PbxCdr"("segment_id");
