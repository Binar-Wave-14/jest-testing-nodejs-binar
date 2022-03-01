exports.hello = async (req, res, next) => {
    try {
        const data = {
            user: 'Saefulloh Maslul',
            avatar: 'image.jpg',
        }

        return res.status(200).json({
            message: 'success get hello',
            data,
            error: null
        })
    } catch (error) {
        return next(error)
    }
}