function getAll(db, req, res) {

	const a = "juanma"
	const b = 23
	const getCursor = req.locals.getCursor;

	const collection = db.collection('restaurants');
	const cursor = getCursor( collection )

	debugger;
	cursor.toArray()
		.then( docs => res.json(docs) )
		.catch( err => {throw err} )

}

module.exports = getAll;