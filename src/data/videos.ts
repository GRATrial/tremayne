// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Attorney Tremayne Washington on civil rights litigation ...",
    source: "YouTube · DC Bar Association",
    duration: "8:33",
    views: "Feb 14, 2025"
  },
  {
    id: "v2",
    title: "Tremayne Washington — Howard University Commencement ...",
    source: "YouTube · Howard University",
    duration: "18:42",
    views: "May 20, 2024"
  },
  {
    id: "v3",
    title: "Tremayne Washington discusses community investment in DC",
    source: "YouTube · WJLA News",
    duration: "4:55",
    views: "Sep 3, 2024"
  }
];

