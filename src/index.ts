import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const main = async () => {
    // const result = await Prisma.post.create({
    //     data: {
    //         title:'This is a title',
    //         content:'This is the content',
    //         author:'Mahamudul Hasan Ratul' 
    //     }
    // })

    // const getAllFromDb = await Prisma.post.findMany();
    // console.log(getAllFromDb)
};

main();
