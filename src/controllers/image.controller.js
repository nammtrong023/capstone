import prisma from '../config/db.js';
import { getCurrentUserId } from '../utils/get-current-user-id.js';

const uploadImage = async (req, res) => {
    const { token } = req.headers;
    const files = req.files;
    const userId = await getCurrentUserId(token);

    if (!files) {
        return res.status(400).send('Files không hợp lệ');
    }

    const imageNames = files.map((file) => file.originalname);

    const imageData = imageNames.map((imageName) => ({
        name: imageName,
        ownerId: userId,
    }));

    const images = await prisma.image.createMany({
        data: imageData,
    });

    return res.status(201).send('Upload thành công');
};

const getListImage = async (req, res) => {
    const { name } = req.query;

    let whereClause = {};

    if (name) {
        whereClause = {
            OR: [
                {
                    name: {
                        contains: name,
                    },
                },
            ],
        };
    }

    const images = await prisma.image.findMany({
        where: whereClause,
    });

    if (images.length === 0) {
        return res.status(404).send('Không tìm thấy hình ảnh');
    }

    return res.status(200).json(images);
};

const getImageById = async (req, res) => {
    const { imageId } = req.params;

    const image = await prisma.image.findFirst({
        where: {
            id: Number(imageId),
        },
        include: {
            onwer: true,
            comments: true,
        },
    });

    if (!image) {
        return res.status(404).send('Không tìm thấy thông tin hình ảnh');
    }

    return res.status(200).json(image);
};

const getImageByUserId = async (req, res) => {
    const { userId } = req.params;

    const image = await prisma.image.findFirst({
        where: {
            ownerId: Number(userId),
        },
    });

    if (!image) {
        return res.status(404).send('Không tìm thấy hình ảnh');
    }

    return res.status(200).json(image);
};

const deleteImage = async (req, res) => {
    const { imageId } = req.params;

    try {
        const result = await prisma.image.delete({
            where: { id: Number(imageId) },
        });

        if (result) {
            return res.status(200).send('Xoá thành công');
        }
    } catch (error) {
        return res.status(500).send('Lỗi khi xoá hình ảnh');
    }
};

export { uploadImage, getListImage, getImageById, getImageByUserId, deleteImage };
