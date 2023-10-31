import multer, { diskStorage } from 'multer';
export const upload = multer({
    storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) => {
            callback(null, new Date().getTime() + `_${file.originalname}`);
        },
    }),
});
