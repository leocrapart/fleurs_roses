import database from '../../database'
import { ObjectID } from 'mongodb'


export default async (req, res) => {
	const _id = req.query._id
	const query = {
		_id: ObjectID(_id)
	}

	if (query) {
		const db = await database("valerie_confiture")
		await db.collection("products").deleteOne(query)
		res.send(`Product number ${_id} deleted`)
	} else {
		res.send(`No product with number ${_id}`)
	}
}