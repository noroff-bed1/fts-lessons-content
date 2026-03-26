export interface GameImage {
  url: string;
  alt: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  released: string;
  image: GameImage;
  genre: string[];
}

export interface GamesResponse {
  data: Game[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}

export interface SingleGameResponse {
  data: Game;
  meta: Record<string, unknown>;
}