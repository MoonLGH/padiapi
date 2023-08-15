import {Schema, model, Document} from "mongoose";

interface ICalendar {
  date: Date;
  info: string;
}

interface IUserInfo extends Document {
  username: string;
  terakhirTanam: Date;
  calendar: ICalendar[];
  tipeTanaman: string;
}

const userInfoSchema: Schema<IUserInfo> = new Schema({
  username: {type: String, required: true, unique: true},
  terakhirTanam: {type: Date, required: true},
  calendar: [
    {
      date: {type: Date, required: true},
      info: {type: String, required: true},
    },
  ],
  tipeTanaman: {type: String, required: true},
});

export const userInfo = model<IUserInfo>("UserInfo", userInfoSchema);
