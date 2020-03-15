const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Followers = require('../../models/Followers');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


router.patch(
    '/',
    auth,
    async (req, res) => {
      
  
      try {
        const user = await User.findById(req.user.id).select('-password');
  
        const newFollower =  {
          avatar: user.avatar,
          user: req.user.id,
          followers: [],
          following:[]
        };
        const getUserFollowers = await Followers.findOne({ user: req.body.id });
        const following = await Followers.findOne({ user: req.user.id });
            console.log('Followers', getUserFollowers);
            console.log('following', following);
          const newFollow = {
            avatar: user.avatar,
            user: req.body.id,
            followers: [],
            following:[]
          };
          following.following.forEach((follow, index) => {
            if(follow.user.toString() === req.body.id) {
              following.following.splice(index, 1);
            } else {
            following.following.unshift(newFollow);
            }
          });
          getUserFollowers.followers.forEach((follower, index) => {
            if(follower.user.toString() === req.user.id) {
              getUserFollowers.followers.splice(index, 1);
            } else {
              getUserFollowers.followers.unshift(newFollower);
            }
          });
          await getUserFollowers.save();
          await following.save();
          res.json({ message: 'Success' , data: following, });
          
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  router.get(
    '/',
    auth,
    async (req, res) => {
      
      try {
        const getUserFollowers = await Followers.find({ user: req.user.id })
      
        console.log(getUserFollowers)
        res.json(getUserFollowers);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  router.get(
    '/:user_id',
    auth,
    async (req, res) => {
      
      try {
        const getUserFollowers = await Followers.find({ user: req.params.user_id })
        res.json(getUserFollowers);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  module.exports = router;
