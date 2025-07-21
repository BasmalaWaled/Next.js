// import prisma from "../lib/prisma";
// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "Ahmed",
//       email: "ahmed@example.com",
//       posts: {
//         create: {
//           title: "Hello World",
//           content: "My first post",
//         },
//       },
//     },
//   });
// }

// main()
//   .then(() => {
//     console.log("Seed successful");
//   })
//   .catch((e) => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });