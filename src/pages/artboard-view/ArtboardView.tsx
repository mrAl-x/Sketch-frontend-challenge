import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArtboardHeader from './artboard-header/ArtboardHeader';
import { ImagePlaceholder as SkeletonImagePlaceholder, StringPlaceholder } from '../../components/shared/skeleton-ui';
import { GET_DOCUMENT_BY_ID } from '../../data/constants/Queries';
import { GET_DOCUMENT_BY_ID_RESPONSE } from '../../data/types/Queries';

const filterArtboardsByName = (
  artboards: GET_DOCUMENT_BY_ID_RESPONSE['share']['version']['document']['artboards']['entries'],
  artboardName: string
) => artboards.find((artboard) => artboard.name === artboardName);

const Wrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 100px;
  padding: 0 24px;
`;

const ImagePlaceholder = styled(SkeletonImagePlaceholder)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
`;

const ArtboardView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [artboardName, setArtboardName] = useState<string | undefined>(undefined);
  const [artboardThumbnail, setArtboardThumbmail] = useState<string | undefined>(undefined);
  const { loading, data } = useQuery<GET_DOCUMENT_BY_ID_RESPONSE>(GET_DOCUMENT_BY_ID(params?.documentId || ''));
  const artboards = data?.share?.version?.document?.artboards?.entries;

  const goToPreviousPage = () => navigate(`/document/${params?.documentId}`);

  useEffect(() => {
    const artboard = artboards && filterArtboardsByName(artboards, params?.artboardId || '');

    if (!loading && !artboard) {
      goToPreviousPage();
    } else {
      setArtboardName(artboard?.name);
      setArtboardThumbmail(artboard?.files.find((artboardImage) => artboardImage.scale === 2)?.url);
    }
  }, [loading]);

  return (
    <>
      <ArtboardHeader onClose={goToPreviousPage} title={loading ? <StringPlaceholder /> : artboardName} />
      <Wrapper>{loading ? <ImagePlaceholder /> : <img src={artboardThumbnail} alt="foobar" />}</Wrapper>
    </>
  );
};

export default ArtboardView;
