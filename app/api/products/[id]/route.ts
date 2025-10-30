// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

function parseId(id: string): number | null {
  if (!id || typeof id !== 'string') return null;
  const parsed = parseInt(id, 10);
  return isNaN(parsed) ? null : parsed;
}

/**
 * -------------------------------------------
 * Handler untuk GET (Mengambil satu produk)
 * -------------------------------------------
 */
export async function GET(
  request: NextRequest, 
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ Await params langsung
    const params = await context.params;
    const id = parseId(params.id);
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Invalid product ID' }, 
        { status: 400 }
      );
    }
    
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true }
    });
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: product });
    
  } catch (error: any) {
    console.error('API Error (GET):', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' }, 
      { status: 500 }
    );
  }
}

/**
 * -------------------------------------------
 * Handler untuk PUT (Meng-update satu produk)
 * -------------------------------------------
 */
export async function PUT(
  request: NextRequest, 
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseId(params.id);
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Invalid product ID' }, 
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    const existingProduct = await prisma.product.findUnique({ where: { id } });
    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' }, 
        { status: 404 }
      );
    }
    
    // Build update data
    const dataToUpdate: any = {};
    if (body.name !== undefined) dataToUpdate.name = body.name;
    if (body.description !== undefined) dataToUpdate.description = body.description;
    if (body.price !== undefined) dataToUpdate.price = parseFloat(body.price);
    if (body.stock !== undefined) dataToUpdate.stock = parseInt(body.stock);
    if (body.image !== undefined) dataToUpdate.image = body.image || null;
    if (body.categoryId !== undefined) {
      if (body.categoryId === null || body.categoryId === '' || isNaN(Number(body.categoryId))) {
        dataToUpdate.categoryId = null;
      } else {
        dataToUpdate.categoryId = Number(body.categoryId);
      }
    }
    
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: dataToUpdate,
      include: { category: true }
    });
    
    return NextResponse.json({ success: true, data: updatedProduct });
    
  } catch (error: any) {
    console.error('API Error (PUT):', error);
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { 
          success: false, 
          error: `A product with this ${error.meta.target.join(', ')} already exists.` 
        }, 
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' }, 
      { status: 500 }
    );
  }
}

/**
 * -------------------------------------------
 * Handler untuk DELETE (Menghapus satu produk)
 * -------------------------------------------
 */
export async function DELETE(
  request: NextRequest, 
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseId(params.id);
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Invalid product ID' }, 
        { status: 400 }
      );
    }
    
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' }, 
        { status: 404 }
      );
    }
    
    await prisma.product.delete({ where: { id } });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Product deleted successfully' 
    });
    
  } catch (error: any) {
    console.error('API Error (DELETE):', error);
    
    if (error.code === 'P2003') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Cannot delete product. It is referenced by other records (e.g., in orders).' 
        }, 
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' }, 
      { status: 500 }
    );
  }
}