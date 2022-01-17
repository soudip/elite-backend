const cmsRepo = require('cms/repositories/cms.repository');
const axios = require('axios').default;
const qs = require('qs');
const superagent = require('superagent');

const BASEURL = 'https://api-m.paypal.com';

class OrderController {
    constructor() {
        let accessToken = '';
    }

    /* @Method: getAccessToken
    // @Description: get paypal access token
    */
    async getAccessToken(req, res) {
        try {
            let responseAccessToken = await axios({
                method: 'post',
                url: `${BASEURL}/v1/oauth2/token`,
                auth: {
                    username: 'AT5gNZMOIzeG9aeJW582kIZz-dGCijDbyiTUPeVrMTlEL01Cb-0FYPoV0boYw2Z2pkPaNM6F4EmYSMeS',
                    password: 'EEjvFjpt6VPFiTflq4C51DRan3wxHm9VnVx8V1uG9OorbEmfbRgsC6qevoF86NPbl6YnizVeGUILJX2N'
                        // username: 'AcNcfZ46XlzgE6zMnF80lesj7VCVjBmCYyKzzwS5ABcgEITiY_TGBr6mr_myUvWe4DY1QQSW6cZFsRa4',
                        // password: 'EEVo_rtVGPncpmeGp1qYVSuMeYxpeuTxC5nOh67bSEWYey8h3HgHWAx6SeLhQnSoGddVLbV0qDm6JcLK'
                },
                data: qs.stringify({
                    grant_type: 'client_credentials'
                }),
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'en_US'
                }
            });
            console.log(41, responseAccessToken.data.access_token);
           

            let response = await axios({
                method: 'post',
                url: `${BASEURL}/v1/identity/generate-token`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${responseAccessToken.data.access_token}`,
                    'Accept-Language': 'en_US'
                }
            });
            // console.log(52, response.data.client_token);

            res.status(200).send({ status: 200, data: response.data.client_token, message: 'Access Token fetched Successfully' });
        } catch (error) {
            // console.log(42, error);
            res.status(500).send({ message: error.message });
        }
    };

    /* @Method: placeOrder
    // @Description: placeorder
    */
    async placeOrder(req, res) {
        try {
            let responseAccessToken = await axios({
                method: 'post',
                url: `${BASEURL}/v1/oauth2/token`,
                auth: {
                    username: 'AT5gNZMOIzeG9aeJW582kIZz-dGCijDbyiTUPeVrMTlEL01Cb-0FYPoV0boYw2Z2pkPaNM6F4EmYSMeS',
                    password: 'EEjvFjpt6VPFiTflq4C51DRan3wxHm9VnVx8V1uG9OorbEmfbRgsC6qevoF86NPbl6YnizVeGUILJX2N'
                        // username: 'AcNcfZ46XlzgE6zMnF80lesj7VCVjBmCYyKzzwS5ABcgEITiY_TGBr6mr_myUvWe4DY1QQSW6cZFsRa4',
                        // password: 'EEVo_rtVGPncpmeGp1qYVSuMeYxpeuTxC5nOh67bSEWYey8h3HgHWAx6SeLhQnSoGddVLbV0qDm6JcLK'
                },
                data: qs.stringify({
                    grant_type: 'client_credentials'
                }),
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'en_US'
                }
            });
            //console.log(responseAccessToken.data.access_token);
            let response = await superagent.post(`${BASEURL}/v2/checkout/orders`)
                .send({
                    intent: "CAPTURE",
                    purchase_units: [{
                        amount: {
                            currency_code: 'USD',
                            value: "1.00"
                        }
                    }]
                })
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${responseAccessToken.data.access_token}`);

            // let getOrderDetails = await superagent.get(`${BASEURL}/v2/checkout/orders/${response.body.id}`)
            //     .set('Content-Type', 'application/json')
            //     .set('Authorization', `Bearer ${responseAccessToken.data.access_token}`);

            // // let paymentCaptureResponse = await superagent.post(`${BASEURL}/v2/checkout/orders/${response.body.id}/capture`)
            // //     .set('Content-Type', 'application/json')
            // //     .set('Authorization', `Bearer ${responseAccessToken.data.access_token}`);

            // // console.log(99, paymentCaptureResponse);

            // console.log(95, getOrderDetails.body);

            //console.log(104, response.body, `${BASEURL}/v2/checkout/orders`);
            res.status(201).send({ status: 201, data: { id: response.body.id, status: response.body.status }, message: 'Order Placed Successfully' });

        } catch (error) {
            console.log(42, error);
            res.status(500).send({ message: error.message });
        }
    };


    /* @Method: checkoutOrder
    // @Description: checkoutOrder
    */
    async checkoutOrder(req, res) {
        try {
            let orderId = req.params.orderId;
            let responseAccessToken = await axios({
                method: 'post',
                url: `${BASEURL}/v1/oauth2/token`,
                auth: {
                    username: 'AT5gNZMOIzeG9aeJW582kIZz-dGCijDbyiTUPeVrMTlEL01Cb-0FYPoV0boYw2Z2pkPaNM6F4EmYSMeS',
                    password: 'EEjvFjpt6VPFiTflq4C51DRan3wxHm9VnVx8V1uG9OorbEmfbRgsC6qevoF86NPbl6YnizVeGUILJX2N'
                        // username: 'AcNcfZ46XlzgE6zMnF80lesj7VCVjBmCYyKzzwS5ABcgEITiY_TGBr6mr_myUvWe4DY1QQSW6cZFsRa4',
                        // password: 'EEVo_rtVGPncpmeGp1qYVSuMeYxpeuTxC5nOh67bSEWYey8h3HgHWAx6SeLhQnSoGddVLbV0qDm6JcLK'
                },
                data: qs.stringify({
                    grant_type: 'client_credentials'
                }),
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'en_US'
                }
            });
            //console.log(responseAccessToken.data.access_token);
            // let response = await superagent.post(`${BASEURL}/v2/checkout/orders`)
            //     .send({
            //         intent: "CAPTURE",
            //         purchase_units: [{
            //             amount: {
            //                 currency_code: 'USD',
            //                 value: "100.00"
            //             }
            //         }]
            //     })
            //     .set('Content-Type', 'application/json')
            //     .set('Authorization', `Bearer ${responseAccessToken.data.access_token}`);

            // let getOrderDetails = await superagent.get(`${BASEURL}/v2/checkout/orders/${response.body.id}`)
            //     .set('Content-Type', 'application/json')
            //     .set('Authorization', `Bearer ${responseAccessToken.data.access_token}`);

            let paymentCaptureResponse = await superagent.post(`${BASEURL}/v2/checkout/orders/${orderId}/capture`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${responseAccessToken.data.access_token}`);

            console.log(99, paymentCaptureResponse);

            // console.log(95, getOrderDetails.body);

            //console.log(200, response.body, `${BASEURL}/v2/checkout/orders`);
            res.status(201).send({ status: 201, data: {}, message: 'Order Captured Successfully' });

        } catch (error) {
            console.log(42, error);
            res.status(500).send({ message: error.message });
        }
    };

}

module.exports = new OrderController();