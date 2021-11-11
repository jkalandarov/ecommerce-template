module.exports = class Eskiz {
    static token = ''
    static smsdata = {}
    static sms_gateway_data = {}

    constructor(email = '', secret = '') {
        if (email != '' && secret != '') {
            this.smsdata = {
                email: email,
                password: secret,
            }
        } else {
            this.smsdata = {
                email: process.env.SMS_GATEWAY_EMAIL,
                password: process.env.SMS_GATEWAY_SECRET,
            }
        }

        if (process.env.SMS_GATEWAY_TOKEN == '') {
            this.sms_gateway_data = JSON.parse(
                this.sendPing(this.smsdata, 'auth/login', 'oauth'),
                1
            )
            if (this.sms_gateway_data['message'] == 'token_generated') {
                file_put_contents(
                    Sprocess.env.MS_GATEWAY_TOKEN_FILE,
                    this.sms_gateway_data['data'].token
                )
            }
            token = this.sms_gateway_data['data'].token
        } else {
            token = file_get_contents(
                process.env.SMS_GATEWAY_TOKEN_FILE,
                this.sms_gateway_data['data'].token
            )

            data = this.sendPing([], 'auth/user')
            // print_r(data)
            if (
                data['message'] != 'authenticated_user' &&
                data['data']['status'] !== 'active'
            ) {
                data = this.sendPing([], 'auth/refresh', 'PATCH')
            }
        }

        this.token = token
    }
    // getToken - get token from Eskiz.uz GateWay
    getToken(data) {
        output = this.sendPing(data, 'auth/login', 'oauth') // type is oauth when token is needed
        // print_r(output)
        if (output['message'] === 'token_generated') {
            output = output['data'].token
        }
        return output
    }

    // sendSMS - send SMS to a number through Eskiz.uz GateWay
    sendSMS(data) {
        output = this.sendPing(data, 'message/sms/send')
        // print_r(output)
        output['is_sent'] = 'no'
        if (output['status'] == 'waiting') {
            output['is_sent'] = 'yes'
        }

        return output
    }

    // getSMS - get requests from Eskiz.uz GateWay
    getSMS(sms_id) {
        output = this.sendPing([], 'message/sms/get/status/'.sms_id)
        // print_r(output)
        if (
            output['status'] === 'success' &&
            output['message']['status'] === 'Delivered'
        ) {
            output = output['message']['status']
        }
        return output
    }

    // sendPing - sending/getting(SMS)/refresh_token/get_token using Eskiz.uz GateWay
    sendPing(content, method, type = '') {
        // type is oauth when token is needed

        return true
    }
}
