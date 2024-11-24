-- CreateTable
CREATE TABLE "PbxCdr" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "call_id" INTEGER NOT NULL,
    "destination_caller_id" TEXT,
    "ringing_duration" TEXT,
    "source_caller_id" TEXT,
    "start_time" TEXT,
    "talking_duration" TEXT,
    "recording_url" TEXT
);
