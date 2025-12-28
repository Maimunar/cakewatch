import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();

interface CakewatchData {
  total: number;
  progress: number;
}

export async function GET() {
  const result = await redis.get<CakewatchData>("cakewatch");

  const total = Number(result?.total);
  const progress = Number(result?.progress);

  return NextResponse.json({ total, progress });
}
