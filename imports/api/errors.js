import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Errors = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('errors', function () {
    return Errors.find({});
  })
}

Meteor.methods({
  //insert
  'errors.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Errors.insert({
      url,
      userId: this.userId,
    });
  },
  //delete


});
