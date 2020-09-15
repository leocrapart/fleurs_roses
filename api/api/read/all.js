import database from '../../database'
export default async (req, res) => {
	const db = await database("valerie_confiture")
	const cursor = await db.collection("products").find()

	const products = await cursor.toArray()
	res.send(products)
}