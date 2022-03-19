import { gql } from '@apollo/client';

const GET_DOCUMENT_BY_ID = (id: string) => gql`
  {
    share(id: "${id}") {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_DOCUMENT_BY_ID };
