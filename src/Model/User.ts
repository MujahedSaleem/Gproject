import { Photo } from "./Photo";

export interface User {
  uid: string;
  displayName: string;
  photoURL?: string;
  emailVerified: boolean;
  $key: string;
  userName: string;
  email: string;
  age: number;
  gander: string;
  created: Date;
  lastActive: Date;
  photosUrl: string;
  city: string;
  country: string;
  intrests?: string;
  introduction?: string;
  lookingFor?: string;
}
