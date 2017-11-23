export interface BrkPointIFace {
  portrait: MediaIFace;
  landscape: MediaIFace;
}

export interface MediaIFace {
  minWidth?: number;
  maxWidth?: number;
  units?: string;
}

export interface MediaBrkPointIFace {
  mobile: BrkPointIFace;
  tablet: BrkPointIFace;
  laptop: BrkPointIFace;
  desktop: BrkPointIFace;
}

export const MediaBrkPoints: MediaBrkPointIFace = {
  mobile: {
    portrait: {
      maxWidth: 639,
      units: 'px'
    },
    landscape: {
      maxWidth: 719,
      units: 'px'
    }
  },
  tablet: {
    portrait: {
      minWidth: 640,
      maxWidth: 767,
      units: 'px'
    },
    landscape: {
      minWidth: 720,
      maxWidth: 959,
      units: 'px'
    }
  },
  laptop: {
    portrait: {
      minWidth: 768,
      maxWidth: 1079,
      units: 'px'
    },
    landscape: {
      minWidth: 960,
      maxWidth: 1279,
      units: 'px'
    }
  },
  desktop: {
    portrait: {
      minWidth: 1080,
      units: 'px'
    },
    landscape: {
      minWidth: 1280,
      units: 'px'
    }
  }
};
