import { db } from '../firebase';

const getDashboardData = async () => {
  try {
    const data = await db.collection('dashboard').get();
    return data.docs.map(doc => doc.data());
  } catch (error) {
    console.error(error);
  }
};

const getReportsData = async () => {
  try {
    const data = await db.collection('reports').get();
    return data.docs.map(doc => doc.data());
  } catch (error) {
    console.error(error);
  }
};

export { getDashboardData, getReportsData };