import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const main = async () => {
  // Find All

  const getAllFromDb = await Prisma.post.findMany();

//   find first and throw 

  const findFirst = await Prisma.post.findFirstOrThrow({
    where:{
        id:5
    }
  });


  console.log({findFirst});
};

main();
