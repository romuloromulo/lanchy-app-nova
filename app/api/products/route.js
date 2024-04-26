import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.products.findMany();
    console.log("PRODUTOSSSS:", products);
    await prisma.$disconnect();
    return NextResponse.json(products);
  } catch (error) {
    console.log("ERROR_GETPRODUCTS:", error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
