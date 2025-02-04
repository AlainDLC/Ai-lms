import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { writeFile } from "node:fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { prompt } = data;

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
  });

  const input = {
    prompt: prompt,
    output_format: "png",
    output_quality: 80,
    aspect_ratio: "1:1",
  };

  try {
    const output: any = await replicate.run("black-forest-labs/flux-schnell", {
      input,
    });

    // Spara bilden på servern
    const outputPath = path.join(process.cwd(), "public", "output_0.webp");
    await writeFile(outputPath, output[0]);

    // Returnera URL till den genererade bilden
    return NextResponse.json({ imageUrl: `/output_0.webp` });
  } catch (error) {
    console.error("Fel vid bildgenerering:", error);
    return NextResponse.json({ error: "Bildgenerering misslyckades." });
  }
}
