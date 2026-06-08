/**
 * UrPay Payment Gateway Integration
 * تكامل بوابة الدفع UrPay
 */

const axios = require('axios');

class UrPayGateway {
  constructor() {
    this.apiKey = process.env.URPAY_API_KEY;
    this.apiUrl = process.env.URPAY_API_URL || 'https://api.urpay.com';
    this.merchantId = process.env.URPAY_MERCHANT_ID;
  }

  /**
   * إنشاء طلب دفع جديد
   * @param {Object} paymentData - بيانات الدفع
   */
  async createPaymentRequest(paymentData) {
    try {
      const {
        amount,
        phoneNumber,
        referenceNo,
        description = 'Payment Request'
      } = paymentData;

      // التحقق من المبلغ
      if (amount < 10 || amount > 500) {
        throw new Error('المبلغ يجب أن يكون بين 10 و 500 ريال');
      }

      const payload = {
        merchantId: this.merchantId,
        amount: amount * 100, // تحويل إلى هللة
        currency: 'SAR',
        phone: phoneNumber,
        reference: referenceNo,
        description: description,
        successUrl: `${process.env.APP_URL}/success`,
        failureUrl: `${process.env.APP_URL}/failure`,
        notifyUrl: `${process.env.APP_URL}/webhook/urpay`
      };

      const response = await axios.post(
        `${this.apiUrl}/v1/transaction/create`,
        payload,
        {
          headers: {
            'X-API-Key': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        success: true,
        transactionId: response.data.transactionId,
        paymentUrl: response.data.paymentUrl,
        status: 'pending'
      };
    } catch (error) {
      console.error('UrPay Payment Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * التحقق من حالة العملية
   * @param {string} transactionId - معرف العملية
   */
  async checkPaymentStatus(transactionId) {
    try {
      const response = await axios.get(
        `${this.apiUrl}/v1/transaction/${transactionId}/status`,
        {
          headers: {
            'X-API-Key': this.apiKey
          }
        }
      );

      return {
        success: true,
        status: response.data.status,
        amount: response.data.amount / 100,
        currency: response.data.currency
      };
    } catch (error) {
      console.error('UrPay Status Check Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * استرجاع العملية
   * @param {string} transactionId - معرف العملية
   */
  async refundPayment(transactionId, amount) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/v1/refund/create`,
        {
          transactionId: transactionId,
          amount: amount * 100
        },
        {
          headers: {
            'X-API-Key': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        success: true,
        refundId: response.data.refundId,
        status: 'refunded'
      };
    } catch (error) {
      console.error('UrPay Refund Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = new UrPayGateway();
