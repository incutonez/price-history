import { MongoClient } from "mongodb";
import { HarrisTeeterModel } from "src/adapters/HarrisTeeterModels";

async function transform() {
	const client = new MongoClient("mongodb://127.0.0.1:27017/");
	await client.connect();
	const database = client.db("receipts");
	const collection = database.collection("harris_teeter");
	const result = await collection.find<HarrisTeeterModel>({}).toArray();
	console.log(result[0]._id.toString());
	await client.close();
}

transform();
