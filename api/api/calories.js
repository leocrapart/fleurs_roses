import database from "../database"

export default async(req, res) => {

	const db = await database("MCT")
	const doc = await db.collection("daily").findOne()

	res.json(doc)
}
