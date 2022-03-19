export type GET_DOCUMENT_BY_ID_RESPONSE = {
  share: {
    identifier: string;
    version: {
      document: {
        artboards: {
          entries: {
            files: {
              height: number;
              scale: number;
              thumbnails: {
                height?: number;
                url: string;
                width?: number;
              }[];
              url: string;
              width: number;
            }[];
            isArtboard: boolean;
            name: string;
          }[];
        };
        name: string;
      };
    };
  };
};
