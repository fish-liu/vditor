/// <reference types="./types" />
declare class Upload {
    element: HTMLElement;
    isUploading: boolean;
    range: Range;
    constructor();
}
declare const uploadFiles: (vditor: IVditor, files: FileList | DataTransferItemList | File[], element?: HTMLInputElement) => Promise<void>;
declare const uploadLinkImg: (vditor: IVditor, url: string, element?: HTMLInputElement) => void;
export { Upload, uploadFiles, uploadLinkImg };
