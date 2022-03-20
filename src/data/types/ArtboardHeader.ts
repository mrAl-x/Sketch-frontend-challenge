export type ArtboardHeader = {
  currentArtboardIndex?: ArtboardNavigation['currentArtboardIndex'];
  height?: number;
  next: ArtboardNavigation['next'];
  onClose: () => void;
  previous: ArtboardNavigation['previous'];
  title: React.ReactNode | string;
  totalArtboards?: ArtboardNavigation['totalArtboards'];
};

export type ArtboardNavigation = {
  currentArtboardIndex?: number;
  next: () => void;
  previous: () => void;
  totalArtboards?: number | '-';
};
