import prisma from '../config/db.js';
import { getCurrentUserId } from '../utils/get-current-user-id.js';

const createComment = async (req, res) => {
    const { token } = req.headers;
    const { content, imageId } = req.body;
    const currentUserId = await getCurrentUserId(token);

    if (!content && !imageId) {
        return res.status(400).send('Vui lòng nhập content và imageId');
    }

    const isExistingImage = await prisma.image.findUnique({
        where: {
            id: Number(imageId),
        },
    });

    if (!isExistingImage) {
        return res.status(404).send('Không tìm thấy id hình');
    }

    const comment = await prisma.comment.create({
        data: {
            content,
            ownerId: currentUserId,
            imageId: Number(imageId),
        },
    });

    return res.status(201).json(comment);
};

export { createComment };
