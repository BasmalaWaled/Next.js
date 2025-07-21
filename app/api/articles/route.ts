// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient} from '@prisma/client';
// import prisma from '@/utils/db';

// /**
//  * @method POST
//  * @route /api/articles
//  * @desc Create new article
//  * @access public
//  */
// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   if (!body.title || body.title.length < 2) {
//     return NextResponse.json({ message: 'title is required' }, { status: 400 });
//   }

//   const newPost: Post = await prisma.post.create({
//     data: {
//       title: body.title,
//       content: body.content,
//       authorId: 1, 
//     },
//   });

//   return NextResponse.json(newPost, { status: 201 });
// }
// import { NextRequest, NextResponse } from 'next/server';
// import { prisma } from '@/utils/db';

// interface Params {
//   params: { id: string };
// }

// export async function GET(request: NextRequest, { params }: Params) {
//   const id = parseInt(params.id, 10);

//   const article = await prisma.post.findUnique({
//     where: { id },
//     include: { author: true },
//   });

//   if (!article) {
//     return NextResponse.json({ message: 'Article not found' }, { status: 404 });
//   }

//   return NextResponse.json(article);
// }



