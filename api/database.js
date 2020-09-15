const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://leocrapart:Dupr0pnet@cluster0.xbfcm.mongodb.net/<dbname>?authSource=admin&replicaSet=atlas-8ez366-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

const client = new MongoClient('mongodb+srv://leocrapart:Dupr0pnet@cluster0.xbfcm.mongodb.net/MCT?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function database(dbName) {
	if (!client.isConnected()) await client.connect()
	const db = await client.db(dbName)

	return db
}
