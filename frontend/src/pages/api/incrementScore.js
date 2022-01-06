import prisma from '../../../lib/prisma'

// update the score of the person 

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const bod = req.body;
        console.log(bod);
        const whichQ = bod.question;
        const userEmail = bod.userEmail;

        try {
            if (whichQ == 1) {
                const updateScore = await prisma.user.update({
                    where: {
                        email: userEmail
                    },
                    data: {
                        score: {
                            increment: 1
                        },
                        Answer1: true
                    }
                })
                res.status(200).json(updateScore);
            }
            if (whichQ == 2) {
                const updateScore = await prisma.user.update({
                    where: {
                        email: userEmail
                    },
                    data: {
                        score: {
                            increment: 1
                        },
                        Answer2: true
                    }
                })
                res.status(200).json(updateScore);
            }
            if (whichQ == 3) {
                const updateScore = await prisma.user.update({
                    where: {
                        email: userEmail
                    },
                    data: {
                        score: {
                            increment: 1
                        },
                        Answer3: true
                    }
                })
                res.status(200).json(updateScore);
            }
            if (whichQ == 4) {
                const updateScore = await prisma.user.update({
                    where: {
                        email: userEmail
                    },
                    data: {
                        score: {
                            increment: 1
                        },
                        Answer4: true
                    }
                })
                res.status(200).json(updateScore);
            }
            if (whichQ == 5) {
                const updateScore = await prisma.user.update({
                    where: {
                        email: userEmail
                    },
                    data: {
                        score: {
                            increment: 1
                        },
                        Answer5: true
                    }
                })
                res.status(200).json(updateScore);
            }
            if (whichQ == 6) {
                const updateScore = await prisma.user.update({
                    where: {
                        email: userEmail
                    },
                    data: {
                        score: {
                            increment: 1
                        },
                        Answer6: true
                    }
                })
                res.status(200).json(updateScore);
            }
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }
}