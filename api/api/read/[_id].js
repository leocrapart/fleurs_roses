import database from '../../database'
import { ObjectID } from 'mongodb'

export default async (req, res) => {

	const _id = req.query._id 
	const query = {
		_id: ObjectID(_id)
	}

	const db = await database("valerie_confiture")
	const product = await db.collection("products").findOne(query)

	res.json(product)
}