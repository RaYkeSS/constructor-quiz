-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_authorId_fkey";

-- AlterTable
CREATE SEQUENCE question_order_seq;
ALTER TABLE "Question" ALTER COLUMN "order" SET DEFAULT nextval('question_order_seq');
ALTER SEQUENCE question_order_seq OWNED BY "Question"."order";

-- AlterTable
ALTER TABLE "Test" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
