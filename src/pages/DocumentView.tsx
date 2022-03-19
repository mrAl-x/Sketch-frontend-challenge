import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_DOCUMENT_BY_ID } from '../data/constants/Queries';
import DocumentHeader from '../components/document-header/DocumentHeader';
import { StringPlaceholder } from '../components/shared/skeleton-ui';

const ArtboardList = styled.div`
  display: flex;
`;

const ArtboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocumentView = () => {
  const { loading, error, data } = useQuery(GET_DOCUMENT_BY_ID('e981971c-ff57-46dc-a932-a60dc1804992'));

  return (
    <>
      <DocumentHeader title={loading ? <StringPlaceholder /> : '[Document Name]'} />
      {loading ? (
        <div>Loading</div>
      ) : (
        <ArtboardList>
          <ArtboardWrapper>foobar</ArtboardWrapper>
        </ArtboardList>
      )}
    </>
  );
};

export default DocumentView;
