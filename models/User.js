const { Schema, model } = require('mongoose');

// user schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// get total count of thoughts on retrieval
UserSchema.virtual('thoughtCount').get(function () {
    return this.thoughts.length;
});

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});


const User = model('User', UserSchema);

// export
module.exports = User;