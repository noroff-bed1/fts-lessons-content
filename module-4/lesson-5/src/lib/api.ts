import { Game, GamesResponse, SingleGameResponse } from "@/types/game";

const BASE_URL = "https://v2.api.noroff.dev";

export async function getAllGames(): Promise<Game[]> {
  const res = await fetch(`${BASE_URL}/old-games`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch games: ${res.status}`);
  const json: GamesResponse = await res.json();
  return json.data;
}

export async function getGameById(id: string): Promise<Game> {
  const res = await fetch(`${BASE_URL}/old-games/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch game ${id}: ${res.status}`);
  const json: SingleGameResponse = await res.json();
  return json.data;
}