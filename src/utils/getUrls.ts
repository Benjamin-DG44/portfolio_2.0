const IMAGES_PATH = '/portfolio_2.0/images/';
const DOCUMENTS_PATH = '/portfolio_2.0/documents/';

export function getImageUrl(fileName: string) {
    return `${IMAGES_PATH}${fileName}`;
}

export function getDocumentUrl(fileName: string) {
    return `${DOCUMENTS_PATH}${fileName}`;
}
