// Ne sert à rien pour le moment

const IMAGES_PATH = '/portfolio_2.0/images/';
const DOCUMENTS_PATH = '/portfolio_2.0/documents/';

export function getImageUrl(fileName) {
    return `${IMAGES_PATH}${fileName}`;
}

export function getDocumentUrl(fileName) {
    return `${DOCUMENTS_PATH}${fileName}`;
}
