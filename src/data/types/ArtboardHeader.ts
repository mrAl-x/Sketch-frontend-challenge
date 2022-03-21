export type ArtboardHeader = {
  currentIndex?: Navigation['currentIndex'];
  height?: number;
  next: Navigation['next'];
  onClose: () => void;
  previous: Navigation['previous'];
  title: React.ReactNode | string;
  totalArtboards?: Navigation['totalArtboards'];
};

export type Navigation = {
  currentIndex?: number;
  next: () => void;
  previous: () => void;
  totalArtboards?: number | '-';
};
