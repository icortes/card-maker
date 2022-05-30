import { CallbackError, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * This is the Interface for the User Schema.
 * @interface
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
  profile_image?: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  links?: Schema.Types.ObjectId;
  connections?: Schema.Types.ObjectId;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: [
      function (this: IUser) {
        return this.username.length > 2;
      },
      'Username too short. Must be 3 characters or more.',
    ],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Bad email provided'],
  },
  password: {
    type: String,
    required: true,
    // validation is done within pre-hooks
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  profile_image: {
    type: String,
  },
  links: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Link',
    },
  ],
  connections: {
    type: Schema.Types.ObjectId,
    ref: 'Connections',
  },
});

UserSchema.pre('save', async function (next) {
  try {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!this.password.match(regex)) {
      return next(new Error('Password failed validation.'));
    }

    if (/\s/g.test(this.username)) {
      return next(new Error('Username must not contain spaces.'));
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error: any) {
    return next(error);
  }
});

UserSchema.pre(/^find/, async function (next) {
  try {
    const user = this;
    if (!user.getChanges().password) return next();

    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!user.password.match(regex)) {
      return next(new Error('New password failed validation'));
    }

    const salt = await bcrypt.genSalt(10);
    user.getChanges().password = await bcrypt.hash(
      user.getChanges().password,
      salt
    );
    return next();
  } catch (error: any) {
    return next(error);
  }
});
