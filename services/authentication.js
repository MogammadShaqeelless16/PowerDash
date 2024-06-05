import { auth } from '../firebase';

const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error);
  }
};

const register = async (name, email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser.updateProfile({
      displayName: name,
    });
  } catch (error) {
    console.error(error);
  }
};

export { login, register };