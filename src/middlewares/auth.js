const jwt = require('jsonwebtoken');
const path = require('path');

require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader){
		return res.status(401).send({ error: 'No token provided' });
	}

	const parts = authHeader.split(' ');

	if (!parts.length === 2){
		return res.status(401).send({ error: 'Token error' });
	}

	const [ scheme, access_token ] = parts;

	if (!/^Bearer$/i.test(scheme)){
		return res.status(401).send({ error: 'Token malformatted' });
	}

	jwt.verify(access_token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) return res.status(401).send({ error: 'Token invalid' });

		req.user = decoded.userId;
		
		return next();
	});

}