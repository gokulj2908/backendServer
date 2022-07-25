const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(`Method -> ${method}, Time -> ${time}, URL --> ${url} `);
    next();
}

const authorize = (req, res, next) => {
    console.log('QUERY STRING', req.query);
    const { user } = req.query;
    if (user === 'gokul') {
        next();
    }
    else
        res.status(404).send('ADMIN MISMATCH');

}


module.exports = { logger, authorize };