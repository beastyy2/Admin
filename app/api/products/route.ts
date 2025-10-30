// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validasi
    if (!body.name || !body.price || !body.categoryId) {
      return NextResponse.json({
        success: false,
        error: 'Name, price, and categoryId are required'
      }, { status: 400 });
    }
    
    // Cek apakah category exists
    const categoryExists = await prisma.category.findUnique({
      where: { id: parseInt(body.categoryId) }
    });
    
    if (!categoryExists) {
      return NextResponse.json({
        success: false,
        error: 'Category not found'
      }, { status: 404 });
    }
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        stock: body.stock || 0,
        categoryId: parseInt(body.categoryId),
        image: body.image || null,
      },
      include: {
        category: true // Include category data di response
      }
    });
    
    return NextResponse.json({
      success: true,
      data: product
    }, { status: 201 });
  } catch (error: any) {
    console.error('API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Internal server error'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        category: true // Include category data
      }
    });
    
    return NextResponse.json({
      success: true,
      data: products
    });
  } catch (error: any) {
    console.error('API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Internal server error'
    }, { status: 500 });
  }
}