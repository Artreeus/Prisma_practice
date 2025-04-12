import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@ph.com",
    //         role: UserRole.user
    //     }

    // });

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio...",
    //         userId: 1
    //     }
    // })

    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "Softaware engineering"
    //     }
    // })

    const createPost = await prisma.post.create({
        data: {
            title: "this is title 3",
            content: "this is content of the post. 3",
            authorId: 2,
            postCategory: {
                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 4
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }
    })
    console.log(createPost)
}

main();