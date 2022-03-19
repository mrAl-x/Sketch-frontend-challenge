import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DocumentHeader from '../components/document-header/DocumentHeader';
import { ArtboardThumbnailPlaceholder, StringPlaceholder } from '../components/shared/skeleton-ui';
import { GET_DOCUMENT_BY_ID } from '../data/constants/Queries';
import { GET_DOCUMENT_BY_ID_RESPONSE } from '../data/types/Queries';

const Main = styled.div`
  margin-top: 24px;
  margin-bottom: 100px;
  padding: 0 24px;
`;

const ArtboardList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(240px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 24px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, minmax(240px, 1fr));
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(240px, 1fr));
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(240px, 1fr));
  }
`;

const ArtboardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ArtboardThumbnail = styled.img`
  max-width: 240px;
  max-height: 385px;
  margin: auto 0;
  padding-bottom: 16px;
  object-fit: contain;
`;

const ArtboardName = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.015rem;
`;

const DocumentView = () => {
  const { loading, data } = useQuery<GET_DOCUMENT_BY_ID_RESPONSE>(
    GET_DOCUMENT_BY_ID('e981971c-ff57-46dc-a932-a60dc1804992')
  );
  const document = data?.share?.version?.document;

  return (
    <>
      <DocumentHeader title={loading ? <StringPlaceholder /> : document?.name} />
      <Main>
        {loading ? (
          <ArtboardThumbnailPlaceholder />
        ) : (
          <ArtboardList>
            {document?.artboards?.entries.map((artboard, index) => (
              <ArtboardWrapper key={index} to={`/artboard/${artboard.name}`}>
                <ArtboardThumbnail src={artboard?.files.find((artboardImage) => artboardImage.scale === 1)?.url} />
                <ArtboardName>{artboard?.name}</ArtboardName>
              </ArtboardWrapper>
            ))}
          </ArtboardList>
        )}
      </Main>
    </>
  );
};

export default DocumentView;
