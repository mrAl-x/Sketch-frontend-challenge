import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArtboardHeader from './artboard-header/ArtboardHeader';
import { ImagePlaceholder as SkeletonImagePlaceholder, StringPlaceholder } from '../../shared/components/skeleton-ui';
import { GET_DOCUMENT_BY_ID } from '../../data/constants/Queries';
import { GET_DOCUMENT_BY_ID_RESPONSE } from '../../data/types/Queries';
import { findArtboardByName, findArtboardByIndex } from '../../utils/helpers';

const CONTENT_PADDING = '50px';
const HEADER_HEIGHT = 64;

const Wrapper = styled.div`
  position: relative;
  // limit the height taking the page padding and navigation into consideration
  height: calc(100vh - calc(calc(${CONTENT_PADDING} * 2) + ${HEADER_HEIGHT}px));
  padding: ${CONTENT_PADDING};
`;

const ImagePlaceholder = styled(SkeletonImagePlaceholder)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
`;

const Thumbnail = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: calc(100% - ${CONTENT_PADDING} * 2);
  max-height: calc(100% - ${CONTENT_PADDING} * 2);
  transform: translate(-50%, -50%);
`;

const ArtboardView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, data } = useQuery<GET_DOCUMENT_BY_ID_RESPONSE>(GET_DOCUMENT_BY_ID(params?.documentId || ''));
  const [artboardName, setArtboardName] = useState<string | undefined>(undefined);
  const [artboardIndex, setArtboardIndex] = useState<number | undefined>(undefined);
  const [artboardThumbnail, setArtboardThumbmail] = useState<string | undefined>(undefined);
  const artboards = data?.share?.version?.document?.artboards?.entries;

  const goToPreviousPage = () => navigate(`/document/${params?.documentId}`);

  const handleArtboardNavigation = (direction: 'previous' | 'next') => {
    const navigateToArtboard = (artboard?: string) => navigate(`/document/${params?.documentId}/artboard/${artboard}`);

    if (!artboards || (!artboardIndex && artboardIndex !== 0)) {
      return;
    }

    if (direction === 'previous') {
      if (artboardIndex === 0) {
        return;
      }

      const artboard = findArtboardByIndex(artboards, artboardIndex - 1)?.name;

      return navigateToArtboard(artboard);
    } else {
      if (artboardIndex === artboards.length - 1) {
        return;
      }

      const artboard = findArtboardByIndex(artboards, artboardIndex + 1)?.name;

      return navigateToArtboard(artboard);
    }
  };

  useEffect(() => {
    const artboard = artboards && findArtboardByName(artboards, params?.artboardId || '');

    if (!loading && !artboard) {
      goToPreviousPage();
    } else {
      setArtboardName(artboard?.name);
      setArtboardIndex(artboards?.findIndex((element) => element.name === artboard?.name));
      setArtboardThumbmail(artboard?.files.find((artboardImage) => artboardImage.scale === 1)?.url);
    }
  }, [loading, params?.artboardId]);

  return (
    <>
      <ArtboardHeader
        height={HEADER_HEIGHT}
        onClose={goToPreviousPage}
        title={loading ? <StringPlaceholder /> : artboardName}
        previous={() => handleArtboardNavigation('previous')}
        next={() => handleArtboardNavigation('next')}
        currentIndex={artboardIndex}
        totalArtboards={data?.share?.version?.document?.artboards?.entries?.length}
      />
      <Wrapper>{loading ? <ImagePlaceholder /> : <Thumbnail src={artboardThumbnail} alt={artboardName} />}</Wrapper>
    </>
  );
};

export default ArtboardView;
