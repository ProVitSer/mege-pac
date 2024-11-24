/*
  Warnings:

  - Added the required column `answered` to the `PbxCdr` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PbxCdr" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "call_id" INTEGER NOT NULL,
    "answered" BOOLEAN NOT NULL,
    "destination_caller_id" TEXT,
    "ringing_duration" TEXT,
    "source_caller_id" TEXT,
    "start_time" TEXT,
    "talking_duration" TEXT,
    "recording_url" TEXT,
    "segment_id" INTEGER NOT NULL
);
INSERT INTO "new_PbxCdr" ("call_id", "destination_caller_id", "id", "recording_url", "ringing_duration", "segment_id", "source_caller_id", "start_time", "talking_duration") SELECT "call_id", "destination_caller_id", "id", "recording_url", "ringing_duration", "segment_id", "source_caller_id", "start_time", "talking_duration" FROM "PbxCdr";
DROP TABLE "PbxCdr";
ALTER TABLE "new_PbxCdr" RENAME TO "PbxCdr";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
