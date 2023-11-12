import prisma from '../config/db.js';
import { getCurrentUserId } from '../utils/get-current-user-id.js';

const saveImage = async (req, res) => {
    const { token } = req.headers;
    const { imageId } = req.body;

    const userId = await getCurrentUserId(token);

    if (!imageId) {
        return res.status(404).send('Vui lòng nhập image id');
    }

    const isExistedImage = await prisma.image.findFirst({
        where: {
            id: imageId,
        },
    });

    if (!isExistedImage) {
        return res.status(404).send('Không tìm thấy hình ảnh');
    }

    const saveImage = await prisma.saveImage.create({
        data: {
            ownerId: userId,
            imageId,
        },
    });

    return res.status(200).json(saveImage);
};

const getSavedImageByImgId = async (req, res) => {
    const { imageId } = req.params;

    if (!imageId) {
        return res.status(404).send('Vui lòng nhập image id');
    }

    const savedImage = await prisma.saveImage.findFirst({
        where: {
            id: parseInt(imageId),
        },
    });

    if (!savedImage) {
        return res.status(404).send('Không tìm thấy thông tin hình');
    }

    return res.status(200).json(savedImage);
};

const getSavedImageByUserId = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(404).send('Vui lòng nhập userId');
    }

    const isExistedUser = await prisma.user.findFirst({
        where: {
            id: parseInt(userId),
        },
    });

    if (!isExistedUser) {
        return res.status(404).send('Không tìm thấy thông tin user');
    }

    const savedImage = await prisma.saveImage.findFirst({
        where: {
            ownerId: parseInt(userId),
        },
    });

    if (!savedImage) {
        return res.status(404).send('Không tìm thấy thông tin hình');
    }

    return res.status(200).json(savedImage);
};

export { saveImage, getSavedImageByImgId, getSavedImageByUserId };
