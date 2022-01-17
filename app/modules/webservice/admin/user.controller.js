const mongoose = require('mongoose');
const User = require('user/models/user.model');
const userRepo = require('user/repositories/user.repository');
const roleRepo = require('role/repositories/role.repository');
const settingRepo = require('setting/repositories/setting.repository');
const querystring = require('querystring');
const bcrypt = require('bcryptjs');
const gm = require('gm').subClass({imageMagick: true});
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mailer = require("../../../helpers/mailer.js");


class UserController {
    constructor() { 
    }

    /* @Method: signin
    // @Description: admin Login
    */
    async signin(req, res) {
        try {
            let checkUserData = await userRepo.getUserByField({ "email": req.body.email, "isDeleted": false });
            if (!_.isEmpty(checkUserData)) {
                if (checkUserData.role.role == "user") {
                    if (checkUserData.isActive && checkUserData.isActive === true) {
                        let isPasswordMatched = bcrypt.compareSync(req.body.password, checkUserData.password);
                        if (!isPasswordMatched) {
                            res.status(201).send({data:{},isLoggedIn: false,"message": 'Password not matched.'});
                        }
                        else {
                            const payload = { id: checkUserData._id };
                            const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 2592000 });
                            res.status(200).send({data: checkUserData,isLoggedIn: true,token: token, "message": 'Login successful.'});
                         }
                    }
                    else {
                        res.status(201).send({data:{},isLoggedIn: false,"message": 'Admin status is inactive..'});
                    }
                }
                else {
                    res.status(201).send({data:{},isLoggedIn: false,"message": 'Sorry user not found.'});
                 }
            }
            else {
                res.status(201).send({data:{},isLoggedIn: false,"message": 'Sorry user not found.'});
            }      
        } catch (e) {
            res.status(500).send({message: e.message});
        }
    };

    /* @Method: getProfile
    // @Description: admin Profile
    */
    async getProfile(req,res) {
		try {
            const userId = req.user._id;
            const user = await userRepo.getById(userId);
            if (!_.isEmpty(user)) {
                res.status(200).send({data:user,message: 'Profile Info fetched Successfully'});
			}
			else {
                res.status(201).send({data:{},message: 'Sorry user not found.'});
			}
		}
		catch (e) {
            res.status(500).send({message: e.message});
		}
    }

    /* @Method: updateProfile
    // @Description: Admin Update Profile
    */
    async updateProfile(req) {
		try {
            const userId = req.user._id;
            const user = await userRepo.getById(userId);
            if (!_.isEmpty(user)) {
				if (_.has(req.body, 'email') && (user.email != req.body.email)) {
					const result = await userRepo.getByField({ 'email': req.body.email, 'isDeleted': false });
					if (!_.isEmpty(result) && (result.role.role == 'admin')) {
                        res.status(201).send({data:{},message: 'This email address is already exist!'});
					}
				} else {
                    
                    if (_.has(req.body, 'password') && !_.isEmpty(req.body.password)) {
                        req.body.password = User.generateHash(req.body.password);
                    }
                    const resultUpdate = await userRepo.updateById(req.body, userId);
                    res.status(200).send({data:resultUpdate,message: 'User details updated successfully'});
                }
				
             }
			else {
				res.status(201).send({data:{},message: 'Sorry user not found.'});
			}
		}
		catch (e) {
            res.status(500).send({message: e.message});
		}
	}
    
    /* @Method: changePassword
    // @Description: Admin Change Password
    */
   async changePassword(req, res) {
    try {
            const userId = req.user._id;
            let userData = await userRepo.getById(userId);
            if (!_.isEmpty(userData) && userData.isActive == true && userData.isDeleted == false) {
                if (userData.validPassword(req.body.old_password, userData.password)) {
                    let newPassword = userData.generateHash(req.body.new_password);
                    let updatedUser = await userRepo.updateById({ password: newPassword }, userData._id);
                    if (updatedUser) {
                        res.status(200).send({data:updatedUser,message: 'Password Changed Successfully'});
                    }
                } else {
                    res.status(201).send({data:{}, message: 'Wrong Current Password'});
                }
            } else {
                res.status(201).send({data:{},message: 'User not Found'});
            }
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    };

    /* @Method: forgotPassword
	// @Description: To forgotPassword
	*/
	async forgotPassword(req, res) {
		try {

			const user = await userRepo.getByField({
				email: req.body.email
			});

			if (!_.isEmpty(user)) {
				let forgotPassUrl = 'test.com';

				const setting_data = await settingRepo.getAllByField({
					"isDeleted": false
				});
				var settingObj = {};
				if (!_.isEmpty(setting_data)) {
					setting_data.forEach(function (element) {
						settingObj[element.setting_name.replace(/\s+/g, "_")] = element.setting_value;
					});
				}
				let locals = {
					user_fullname: user.first_name+' '+user.last_name,
					link: forgotPassUrl,
					site_title: settingObj.Site_Title
				};
				let isMailSend = await mailer.sendMail(`Admin<${process.env.MAIL_USERNAME}>`,user.email, 'Forgot Password', 'forgot-password', locals);
				if (isMailSend) {
                    res.status(200).send({data:user,message: 'A link to reset your password sent to your registered email'});
				}
			}
			else {
                res.status(201).send({data:{},message: 'User not Found'});
			}
		}
		catch (e) {
			return res.status(500).send({ message: e.message });
		}
	}

    /* @Method: logout
	// @Description: To logout user
	*/
	async logout(req, res) {
		try {
            const userId = req.user._id;
			const result = await userRepo.getById(userId);
			if (!_.isEmpty(result)) {
				const payload = { id: result._id };
                const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 0 });
                res.status(200).send({data:{},isLoggedIn: false, message: 'Logout successfully'});
			}
			else {
				res.status(201).send({data:{},message: 'User not Found'});
			}
		}
		catch (e) {
			return res.status(500).send({ "message": e.message });
		}
	}

}

module.exports = new UserController();