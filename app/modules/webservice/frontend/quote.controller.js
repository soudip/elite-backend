const quoteRepo = require('quote/repositories/quote.repository');
const verifyRepo = require('verify/repositories/verify.repository');
const smsClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const linknumberRepo = require('linknumber/repositories/linknumber.repository');
const mongoose = require("mongoose");
const { exists } = require('fs');
const { exit } = require('process');
const utils = require('../../../helpers/utils');

class PlanController {
    constructor() {
    }

    /* @Method: save
    // @Description: save
    */
    async save(req, res) {
        try {
            let verify = await verifyRepo.getByField({ 'mobile_number': req.body.mobile_number, isDeleted: false, status: "Active", 'is_verified': true });
            if (!_.isEmpty(verify)) {
                req.body.is_verified = true
            } else {
                req.body.is_verified = false
            }
            req.body.quote_number = utils.orderNumber();
            const quoteData = await quoteRepo.save(req.body);
            if (quoteData) {
                res.status(200).send({ status: 200, data: quoteData, message: 'Quote Saved Successfully' });
            }
            else {
                res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
            }


        } catch (error) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }


    /* @Method: saveOther
    // @Description: saveOther
    */
    async saveOther(req, res) {
        try {
            var FromQuoteData = await quoteRepo.getById(req.body.from_quote_id);
            let verify = await verifyRepo.getByField({ 'mobile_number': FromQuoteData.mobile_number, isDeleted: false, status: "Active", 'is_verified': true });
            if (!_.isEmpty(verify)) {
                req.body.is_verified = true
            } else {
                req.body.is_verified = false
            }

            req.body.first_name = FromQuoteData.first_name
            req.body.last_name = FromQuoteData.last_name
            req.body.email = FromQuoteData.email
            req.body.zip = FromQuoteData.zip
            req.body.mobile_number = FromQuoteData.mobile_number
            req.body.mobile_number_type = FromQuoteData.mobile_number_type
            req.body.link_mobile_number = FromQuoteData.link_mobile_number
            req.body.second_mobile_number = FromQuoteData.second_mobile_number
            req.body.step5 = FromQuoteData.step5  
            req.body.step6 = FromQuoteData.step6  
            req.body.quote_number = utils.orderNumber();
            const quoteData = await quoteRepo.save(req.body);
            if (quoteData) {
                res.status(200).send({ status: 200, data: quoteData, message: 'Quote Saved Successfully' });
            }
            else {
                res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
            }


        } catch (error) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    /* @Method: update
    // @Description: update
    */
    async update(req, res) {
        try {
            let secondNumber = []
            var quoteId = req.params.id;
            var quote = await quoteRepo.getById(quoteId);
            if (!_.isEmpty(quote)) {

                if (_.has(req.body, 'second_mobile_number')) {
                    if (quote.second_mobile_number.length > 0 && !_.isEmpty(quote.second_mobile_number)) {
                        for (var x = 0; x < quote.second_mobile_number.length; x++) {
                            secondNumber.push(quote.second_mobile_number[x])
                        }

                    }
                    secondNumber.push(req.body.second_mobile_number);


                    req.body.second_mobile_number = secondNumber
                }
                const quoteData = await quoteRepo.updateById(req.body, req.params.id);
                if (quoteData) {
                    res.status(200).send({ status: 200, data: quoteData, message: 'Quote Saved Successfully' });
                } else {
                    res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
                }
            } else {
                res.status(201).send({ status: 201, data: {}, message: 'You are not verified user. Please verify your email' });
            }


        } catch (error) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }


    /* @Method: update
    // @Description: update
    */
    async updateOther(req, res) {
        try {
            var quoteId = req.params.id;
            var FromQuoteData = await quoteRepo.getById(req.body.from_quote_id);
            var quote = await quoteRepo.getById(quoteId);
            if (!_.isEmpty(quote)) {
                if(req.body.isSame){
                    req.body.step4 = FromQuoteData.step4
                    req.body.sub1step4 = FromQuoteData.sub1step4
                    req.body.sub2step4 = FromQuoteData.sub2step4  
                    req.body.sub3step4 = FromQuoteData.sub3step4 
                    req.body.sub4step4 = FromQuoteData.sub4step4  
                    req.body.step5 = FromQuoteData.step5  
                    req.body.step6 = FromQuoteData.step6  
                    req.body.sub6step4 = FromQuoteData.sub6step4  
                    req.body.step7 = FromQuoteData.step7  
                    req.body.step8 = FromQuoteData.step8  
                    req.body.step9 = FromQuoteData.step9    
                    req.body.step10 = FromQuoteData.step10  
                    req.body.step11 = FromQuoteData.step11  
                    req.body.step12 = FromQuoteData.step12  
                    req.body.step13 = FromQuoteData.step13 
                }
                const quoteData = await quoteRepo.updateById(req.body, req.params.id);
                if (quoteData) {
                    res.status(200).send({ status: 200, data: quoteData, message: 'Quote Saved Successfully' });
                } else {
                    res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
                }
            } else {
                res.status(201).send({ status: 201, data: {}, message: 'You are not verified user. Please verify your email' });
            }


        } catch (error) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }


/* @Method: sendOtp
// @Description: sendOtp
*/
    async sendOtp(req, res) {
        try {
            const quoteData = await quoteRepo.getByField({ isDeleted: false, status: "Active", mobile_number: req.body.mobile_number });
            if (!_.isEmpty(quoteData)) {

                let otp = Math.floor(Math.random() * (9999 - 1110)) + 1111;

                let sendMessage = await smsClient.messages.create({
                    from: process.env.TWILIO_FROM_NUMBER,
                    to: req.body.mobile_number,
                    body: `Your 4-digit security code for Elite app is ${otp}`
                });
                if (sendMessage) {
                    const quoteupdateData = await quoteRepo.updateById({ otp: otp }, quoteData._id);
                    res.status(200).send({ status: 200, data: {}, message: 'An otp containing 4-digit number has been sent to your mobile number.' });
                } else {
                    res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
                }
            }
            else {
                res.status(201).send({ status: 201, data: {}, message: 'Please create a quote first with this mobile no.' });
            }

        } catch (error) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

 /* @Method: sendOtp
// @Description: sendOtp
*/
async sendOtpByCall(req, res) {
    try {
        const quoteData = await quoteRepo.getByField({ isDeleted: false, status: "Active", mobile_number: req.body.mobile_number });
        if (!_.isEmpty(quoteData)) {

            let otp = Math.floor(Math.random() * (9999 - 1110)) + 1111;
            const voicemsg = `Your 4-digit security code for Elite app is ${otp}`
            let sendVoiceCall = await smsClient.calls.create({
                from: process.env.TWILIO_FROM_NUMBER,
                to: req.body.mobile_number,
                twiml: `<Response><Pause length="2"/><Say>${voicemsg}</Say><Pause length="2"/><Say loop="2">${voicemsg}</Say></Response>`,
            });
            if (sendVoiceCall.sid) {
                const quoteupdateData = await quoteRepo.updateById({ otp: otp }, quoteData._id);
                res.status(200).send({ status: 200, data: {}, message: 'An otp containing 4-digit number has been sent to your mobile number.' });
            } else {
                res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
            }
        }
        else {
            res.status(201).send({ status: 201, data: {}, message: 'Please create a quote first with this mobile no.' });
        }

    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}   
    /* @Method: sendOtp
    // @Description: sendOtp
    */
    async verifyOtp(req, res) {
        try {
            var quote = await quoteRepo.getByField({
                isDeleted: false,
                status: "Active",
                mobile_number: req.body.mobile_number
            });
            if (!_.isEmpty(quote)) {
                if (req.body.otp == quote.otp) {
                    const quoteData = await quoteRepo.updateById({ is_verified: true, otp: '', $push: { browser_ip: req.body.browser_ip } }, quote._id);
                    if (quoteData) {
                        let verify = await verifyRepo.getByField({ 'mobile_number': quoteData.mobile_number, 'user_ip': req.body.user_ip, 'browser_ip': { $in: [req.body.browser_ip] }, isDeleted: false, status: "Active" });
                        if (_.isEmpty(verify)) {
                            let verifySave = await verifyRepo.save({ 'mobile_number': req.body.mobile_number, 'user_ip': req.body.user_ip, 'is_verified': true });
                            if (verifySave) {
                                let updateVerify = await verifyRepo.updateById({ $push: { 'browser_ip': req.body.browser_ip } }, verifySave._id);
                            }
                            res.status(200).send({ status: 200, data: quoteData, message: 'Quote has been verified successfully' });
                        }
                    } else {
                        res.status(201).send({ status: 201, data: {}, message: 'Something went wrong.' });
                    }
                } else {
                    res.status(201).send({ status: 201, data: {}, message: 'Wrong otp entered' });
                }

            } else {
                res.status(201).send({ status: 201, data: {}, message: 'No Quote found with this mobile number.' });
            }
        } catch (error) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async quoteList(req, res) {
        try {
            let quoteList = {}
            let listQuote = [];
            let checkNumberLink = await linknumberRepo.getByField({ 'link_number.number': { $in: [req.body.mobile_number] } });
            if (!_.isEmpty(checkNumberLink)) {
                if (_.isArray(checkNumberLink.link_number)) {
                    for (var x = 0; x < checkNumberLink.link_number.length; x++) {
                        if (checkNumberLink.link_number[x].isVerify == true) {
                            quoteList = await quoteRepo.getAllByField({ 'link_mobile_number': checkNumberLink.link_number[x].number, "isDeleted": false, "status": "Active", "is_verified": true, })
                            if (quoteList.length > 0) {
                                quoteList.map(data => {
                                    listQuote.push(data)
                                })
                            }
                        }

                    }
                    if (_.isEmpty(listQuote)) {
                        quoteList = await quoteRepo.getAllByField({ 'link_mobile_number': req.body.mobile_number, "isDeleted": false, "status": "Active", "is_verified": true, })
                        listQuote = quoteList;
                    }
                }
            } else {
                quoteList = await quoteRepo.getAllByField({ 'link_mobile_number': req.body.mobile_number, "isDeleted": false, "status": "Active", "is_verified": true, })
                listQuote = quoteList;
            }
            if (_.isArray(listQuote) && listQuote.length > 0) {
                res.status(200).send({ status: 200, data: listQuote, message: 'Records fetched successfully' });
            } else {
                res.status(201).send({ status: 201, data: [], message: 'No records not found' });
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async quoteExistChecking(req, res) {
        try {
            let verify = await verifyRepo.getByField({ 'mobile_number': req.body.mobile_number, 'user_ip': req.body.user_ip, 'browser_ip': { $in: [req.body.browser_ip] }, "is_verified": true, "isDeleted": false, "status": "Active" })
            if (!_.isEmpty(verify)) {
                res.status(200).send({ status: 200, data: verify, isVerified: true, message: 'Records fetched successfully' });
            } else {
                res.status(201).send({ status: 201, data: {}, isVerified: false, message: 'No records not found' });
            }

        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async quoteDetails(req, res) {
        try {
            let quoteList = await quoteRepo.getByField({ "_id": req.params.id, "isDeleted": false, "status": "Active" })
            if (!_.isEmpty(quoteList)) {
                res.status(200).send({ status: 200, data: quoteList, message: 'Records fetched successfully' });
            } else {
                res.status(201).send({ status: 201, data: {}, isVerified: false, message: 'No records not found' });
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async quoteDelete(req, res) {
        try {
            let quote = await quoteRepo.getById(req.body.id)
            if (!_.isEmpty(quote)) {
                let deleteQuote = await quoteRepo.delete(quote._id);
                if (deleteQuote) {
                    res.status(200).send({ status: 200, data: deleteQuote, message: 'Records deleted successfully' });
                }
            } else {
                res.status(201).send({ status: 201, data: {}, message: 'No records not found' });
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async linkNumber(req, res) {
        try {
            let linkNumber = [];
            if (_.isArray(req.body.number) && req.body.number.length) {
                if (_.has(req.body, 'link_id') && req.body.link_id != '') {
                    let checkNumberLink = await linknumberRepo.getByField({ '_id': req.body.link_id });
                    if (!_.isEmpty(checkNumberLink)) {
                        for (var x = 0; x < req.body.number.length; x++) {
                            let otp = Math.floor(Math.random() * (9999 - 1110)) + 1111;
                            let sendMessage = await smsClient.messages.create({
                                from: process.env.TWILIO_FROM_NUMBER,
                                to: req.body.number[x],
                                body: `Your 4-digit security code for Elite app is ${otp}`
                            });
                            if (sendMessage) {
                                linkNumber.push({
                                    'number': req.body.number[x],
                                    'code': otp,
                                    'isVerify': false
                                });
                            }
                        }
                        if (_.isArray(linkNumber) && linkNumber.length > 0) {
                            let numberUpdate = await linknumberRepo.updateById(checkNumberLink._id, { 'link_number': linkNumber });
                            if (numberUpdate) {
                                res.status(200).send({ status: 200, data: numberUpdate, message: 'An otp containing 4-digit number has been sent to your mobile number. Please verify mobile number' });
                            }
                        }
                    }
                } else {
                    for (var x = 0; x < req.body.number.length; x++) {
                        let otp = Math.floor(Math.random() * (9999 - 1110)) + 1111;
                        let sendMessage = await smsClient.messages.create({
                            from: process.env.TWILIO_FROM_NUMBER,
                            to: req.body.number[x],
                            body: `Your 4-digit security code for Elite app is ${otp}`
                        });
                        if (sendMessage) {
                            linkNumber.push({
                                'number': req.body.number[x],
                                'code': otp,
                                'isVerify': false
                            });
                        }


                    }
                    if (_.isArray(linkNumber) && linkNumber.length > 0) {
                        req.body.link_number = linkNumber
                        let numbersave = await linknumberRepo.save(req.body);
                        if (numbersave) {
                            res.status(200).send({ status: 200, data: numbersave, message: 'An otp containing 4-digit number has been sent to your mobile number. Please verify mobile number' });
                        }
                    }
                }
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async linkNumberVerify(req, res) {
        try {
            let linkNumber = [];
            let checkNumberLink = await linknumberRepo.getByField({ '_id': req.body.link_id });
            if (!_.isEmpty(checkNumberLink)) {
                if (_.isArray(req.body.number) && req.body.number.length) {
                    if (checkNumberLink.link_number.length > 0) {
                        for (var x = 0; x < checkNumberLink.link_number.length; x++) {
                            if (checkNumberLink.link_number[x].number == req.body.number[x].number) {
                                if (checkNumberLink.link_number[x].code == req.body.number[x].code) {
                                    linkNumber.push({
                                        'number': req.body.number[x].number,
                                        'code': '',
                                        'isVerify': true
                                    })
                                } else {
                                    res.status(201).send({ status: 201, data: {}, message: 'OTP does not match. please try again.' });
                                }
                            } else {
                                res.status(201).send({ status: 201, data: {}, message: 'Mobile number does not match. please try again' });
                            }
                        }
                    }
                }
                if (linkNumber.length > 0) {
                    let numberUpdate = await linknumberRepo.updateById(checkNumberLink._id, { 'link_number': linkNumber });
                    if (numberUpdate) {
                        res.status(200).send({ status: 200, data: numberUpdate, message: 'Mobile number successfully linked' });
                    }
                }
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async linkNumberFetch(req, res) {
        try {
            let obj = {};
            let arr = [];
            let checkNumberLink = await linknumberRepo.getByField({ 'link_number.number': { $in: [req.body.number] } });
            if (checkNumberLink) {
                for (var x = 0; x < checkNumberLink.link_number.length; x++) {
                    if (checkNumberLink.link_number[x].isVerify == true) {
                        arr.push(checkNumberLink.link_number[x])
                    }
                }
                if (arr.length > 0) {
                    obj.id = checkNumberLink._id
                    obj.number = arr
                }

                res.status(200).send({ status: 200, data: obj, message: 'Data fetch successfully' });
            } else {
                res.status(201).send({ status: 201, data: {}, message: 'No data found' });
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: error.message });
        }
    }

    async linkNumberRemoveNumber(req, res) {
        try {
            let numberUpdate = {};
            let checkNumberLink = await linknumberRepo.getByField({ '_id': req.body.id, 'link_number.number': { $in: [req.body.number] } });
            
            if (checkNumberLink) {
                if (checkNumberLink.link_number.length > 0) {
                    for (var x = 0; x < checkNumberLink.link_number.length; x++) {
                        if (checkNumberLink.link_number[x].number === req.body.number) {
                            numberUpdate = await linknumberRepo.updateById(checkNumberLink._id, { $pull: { "link_number": { '_id': checkNumberLink.link_number[x]._id } } });
                         }
                    }
                    let latestLinkNumber = await linknumberRepo.getByField({ '_id': req.body.id});
                    if(!_.isEmpty(latestLinkNumber)) {
                        const quoteTransfer = await quoteRepo.updateBulkData({'link_mobile_number':latestLinkNumber.link_number[0].number},{'mobile_number':req.body.number});
                    }
                    res.status(200).send({ status: 200, data: numberUpdate, message: 'Data remove successfully' });
                }
            } else {
                res.status(201).send({ status: 201, data: {}, message: 'No data found' });
            }
        } catch (e) {
            res.status(500).send({ status: 500, message: e.message });
        }
    }

}




module.exports = new PlanController();