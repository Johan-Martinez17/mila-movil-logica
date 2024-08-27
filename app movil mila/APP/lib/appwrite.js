import { Account ,Avatars,Client, Databases, ID , Query, Storage} from 'react-native-appwrite';
import 'react-native-url-polyfill/auto';

export const config ={
    endpoint : 'https://cloud.appwrite.io/v1',
    platform: 'co.edu.sena',
    projectId: '66ccf16b001cce02537d',
    databaseId: '66ccf21e0028af76c9b4',
    userCollectionId: '66ccf24d0039de83909d',
    videoCollectionId: '66ccf27a0027f58094dd',
    storageId: '66ccf3d1003b3e6d3e09'
}



// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username

    )

    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser
  } catch (error) {
    console.log(error);
    throw new Error(error);

  }

}

export async function signIn(email, password) {
  try {
    // Intentar eliminar la sesión actual, ignorar si no existe
    try {
      await account.deleteSession('current'); // Elimina la sesión actual
    } catch (e) {
      // Ignorar el error si no hay sesión
    }

    // Crear una nueva sesión
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error.message || 'Error al iniciar sesión');
  }
}
