type PerkFrontMatter = {
  name: string;
  id: string;
  type: 'survivor' | 'killer';
  owner: string;
  initialScore: number;
  flavor: string;
  tags: string[];
};

type PerkRow = {
  id: string;
  name: string;
  score: number;
  votes: number;
};
