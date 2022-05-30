import { Schema } from 'mongoose';

/**
 * This is the Interface for the User Schema.
 * @property {string} username - A unique name chosen by the user.
 * @property {string} profile_image - The url for the user's profile image.
 * @property {string} email - the email of the user to log in
 * @property {string} password - the password for the user to log in
 * @property {Date} created_at - the date in which the user created their account
 * @property {Date} updated_at _ the date in which the user last updated their account
 * @property {Schema.Types.ObjectId} links - custom links that will be shown as buttons on the user's page
 * @property {Schema.Types.ObjectId} connections - social media links the user can set
 */
interface IUser {
  username: string;
  profile_image: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  links: Schema.Types.ObjectId;
  connections: Schema.Types.ObjectId;
}
