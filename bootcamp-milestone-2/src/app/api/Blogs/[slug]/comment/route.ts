import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../database/db';
import Blog from '../../../../../database/blogSchema';

type IParams = {
		params:  Promise<{slug: string}>
}

export async function POST(req: NextRequest, { params }: IParams) {
	// If { params } looks confusing, check the note below this code block
		
    await connectDB() // function from db.ts before
        const body = await req.json()
		const { slug } = await params // another destructure

    // validate body
    if (!body.user || !body.comment) {
        return NextResponse.json(
            {error: 'User and comment required fields'}, { status: 400 })
    }
	   try {
	        const blog = await Blog.findOneAndUpdate({ slug }, 
                { $push: {
                    comments: {
                        user: body.user,
                        comment: body.comment,
                        time: new Date()
                    }
                    }
                },
                {new: true}
            );
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json({error: 'Failed to add comment'}, { status: 500 })
	    }
}