/**
 * Data Validators
 * مدققات البيانات
 */

const Joi = require('joi');

/**
 * التحقق من بيانات الدفع
 */
const validatePaymentData = (data) => {
  const schema = Joi.object({
    amount: Joi.number()
      .required()
      .min(10)
      .max(500)
      .messages({
        'number.min': 'المبلغ الأدنى هو 10 ريال',
        'number.max': 'المبلغ الأقصى هو 500 ريال'
      }),
    phoneNumber: Joi.string()
      .required()
      .pattern(/^(\+966|0)[0-9]{9}$/)
      .messages({
        'string.pattern.base': 'رقم الهاتف غير صحيح'
      }),
    referenceNo: Joi.string()
      .required()
      .messages({
        'any.required': 'رقم المرجع مطلوب'
      }),
    gateway: Joi.string()
      .required()
      .valid('bara', 'urpay', 'd360')
      .messages({
        'any.only': 'اختر بوابة دفع صحيحة'
      })
  });

  return schema.validate(data);
};

/**
 * التحقق من رقم الهاتف السعودي
 */
const validateSaudiPhone = (phoneNumber) => {
  const pattern = /^(\+966|0)[0-9]{9}$/;
  return pattern.test(phoneNumber);
};

/**
 * التحقق من صيغة البريد الإلكتروني
 */
const validateEmail = (email) => {
  const schema = Joi.string()
    .email()
    .required();

  return schema.validate(email);
};

/**
 * التحقق من المبلغ المالي
 */
const validateAmount = (amount) => {
  return amount >= 10 && amount <= 500;
};

module.exports = {
  validatePaymentData,
  validateSaudiPhone,
  validateEmail,
  validateAmount
};
