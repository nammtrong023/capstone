import multer, { diskStorage } from 'multer';
export const upload = multer({
    storage: diskStorage({
        // eslint-disable-next-line no-undef
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) => {
            callback(null, new Date().getTime() + `_${file.originalname}`);
        },
    }),
});
