import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Product from "../../../models/Product";

export const GET = async () => {
  try {
    await connect();
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
