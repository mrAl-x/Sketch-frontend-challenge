import { GET_DOCUMENT_BY_ID_RESPONSE } from '../data/types/Queries';

export const findArtboardByName = (
  artboards: GET_DOCUMENT_BY_ID_RESPONSE['share']['version']['document']['artboards']['entries'],
  artboardName: string
) => artboards.find((artboard) => artboard.name === artboardName);

export const findArtboardByIndex = (
  artboards: GET_DOCUMENT_BY_ID_RESPONSE['share']['version']['document']['artboards']['entries'],
  artboardIndex: number
) => artboards.find((artboard, index) => index === artboardIndex);
