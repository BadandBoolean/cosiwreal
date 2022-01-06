import prisma from '../../../lib/prisma'

// updates the color of a course when it has been clicked on..nice and simple!

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const bod = req.body;
        
        const courseNum = bod.courseNum;
        const color = bod.color;
        const userEmail = bod.userEmail;
        let updateColor

        try {
            if (courseNum == 1) {
                updateColor = await prisma.user.update({
                where: {
                    email: userEmail
                },
                data: {
                    progOne: color
                },
                })
                res.status(200).json(updateColor);
            }
            if (courseNum == 2) {
                updateColor = await prisma.user.update({
                where: {
                    email: userEmail
                },
                data: {
                    progTwo: color 
                },
                })
                res.status(200).json(updateColor);
        
            }
            if (courseNum == 3) {
                updateColor = await prisma.user.update({
                where: {
                    email: userEmail
                },
                data: {
                    progThree: color 
                },
                })
                res.status(200).json(updateColor);
            }
            if (courseNum == 4) {
                updateColor = await prisma.user.update({
                where: {
                    email: userEmail
                },
                data: {
                    progFour: color 
                },
                })
                res.status(200).json(updateColor);
            }
            if (courseNum == 5) {
                updateColor = await prisma.user.update({
                where: {
                    email: userEmail
                },
                data: {
                    progFive: color 
                },
                })
                res.status(200).json(updateColor);
            }

        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}