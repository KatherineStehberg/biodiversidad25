import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = await req.json()
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      })
      return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
    } catch (error) {
      return NextResponse.json({ message: 'Error creating user' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
  }
}

