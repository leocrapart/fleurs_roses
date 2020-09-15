import database from '../../database'
import { ObjectID } from 'mongodb'


export default async (req, res) => {
	const _id = req.query._id
	const query = {
		_id: ObjectID(_id)
	}

	const update = {
		$set: req.body
	}
	
	if (update.$set) {
		const db = await database("valerie_confiture")
		await db.collection("products").updateOne(query, update)
		res.send(`Updated product number ${_id}`)
	}
	else {
		res.send('Update request is null')
	}

}