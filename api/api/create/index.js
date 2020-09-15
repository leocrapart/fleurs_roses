import database from '../../database'

export default async (req, res) => {

	const db = await database("valerie_confiture")
	if (req.body != null) {
		await db.collection("products").insertOne(req.body)
		res.send("Product inserted into the database")
	}
	else {
		res.send("the body of the request is null, cannot insert")
	}
	
}