import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  // Firebase 설정을 여기에 입력하세요
  apiKey: "AIzaSyA8R_UpnWo6doq1b7fV1ExQbn9Oaxv0CHU",
  authDomain: "memento-landing.firebaseapp.com",
  projectId: "memento-landing",
  storageBucket: "memento-landing.firebasestorage.app",
  messagingSenderId: "787705661114",
  appId: "1:787705661114:web:ea31cebbf9d404b49ae483",
  measurementId: "G-VYZJDLHR0Z"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // 이메일 유효성 검사
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Firestore에 이메일 저장
    const docRef = await addDoc(collection(db, 'subscribers'), {
      email,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({ message: 'Subscription successful', id: docRef.id });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 