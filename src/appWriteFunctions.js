import {Account, Client, Databases, ID} from "appwrite";

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("desiroomy")

export const createDocument = async (collectionId, data) => {
     // Your project ID

    const databases = new Databases(client);
    console.log("collectionId", collectionId);
    try {
        const response = await databases.createDocument(
            "67c7c3d400051970d9a6",
            collectionId,
            ID.unique(),
            data
        );
        return response;
    } catch (error) {
        console.error("Error creating document:", error);
    }

}

export const createUser = async (email, password, name) => {
  const account = new Account(client);
   try {
        const response = await account.create(ID.unique(),email, password, name);
        return response;
    } catch (error) {
        console.error("Error creating user:", error);
   }
}



