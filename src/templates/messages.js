/**
 * Message Templates
 * نماذج الرسائل للعملاء والدعم
 */

const messageTemplates = {
  // رسائل الترحيب والبداية
  welcome: {
    ar: `👋 مرحباً بك في خدمة الدفع الآلية

كيف يمكنني مساعدتك؟
1️⃣ دفع جديد
2️⃣ الاستفسار عن حالة
3️⃣ طلب مساعدة`,
    en: `👋 Welcome to Payment Service

How can I help you?
1️⃣ New Payment
2️⃣ Check Status
3️⃣ Get Help`
  },

  // رسائل خيارات البوابات
  gatewaySelection: {
    ar: `📱 اختر بوابة الدفع المفضلة:

1️⃣ بارا (Bara)
   💰 من 10 إلى 500 ريال
   ⚡ سريعة وآمنة

2️⃣ UrPay
   💰 من 10 إلى 500 ريال
   ⚡ موثوقة وسهلة

3️⃣ D360
   💰 من 10 إلى 2000 ريال
   ⚡ مرنة وشاملة`,
    en: `📱 Choose Your Payment Gateway:

1️⃣ Bara
   💰 From 10 to 500 SAR
   ⚡ Fast and Secure

2️⃣ UrPay
   💰 From 10 to 500 SAR
   ⚡ Reliable and Easy

3️⃣ D360
   💰 From 10 to 2000 SAR
   ⚡ Flexible and Comprehensive`
  },

  // رسائل إدخال المبلغ
  amountRequest: {
    ar: `💵 الرجاء إدخال المبلغ المطلوب:

📌 الحد الأدنى: 10 ريال
📌 الحد الأقصى: حسب البوابة المختارة

مثال: 100`,
    en: `💵 Please enter the amount:

📌 Minimum: 10 SAR
📌 Maximum: Depends on gateway

Example: 100`
  },

  // رسائل النجاح
  paymentSuccess: (data) => ({
    ar: `✅ تم الدفع بنجاح!

📋 رقم الإيصال: ${data.receiptNo}
💰 المبلغ: ${data.amount} ريال
🏦 البوابة: ${data.gateway}
🕐 التاريخ: ${data.date}
🔐 معرّف: ${data.transactionId}

شكراً لاستخدام خدمتنا! 🙏`,
    en: `✅ Payment Successful!

📋 Receipt No: ${data.receiptNo}
💰 Amount: ${data.amount} SAR
🏦 Gateway: ${data.gateway}
🕐 Date: ${data.date}
🔐 Transaction ID: ${data.transactionId}

Thank you for using our service! 🙏`
  }),

  // رسائل الفشل
  paymentFailed: {
    ar: `❌ للأسف، فشلت عملية الدفع

الأسباب المحتملة:
• عدم كفاية الرصيد
• بيانات البطاقة غير صحيحة
• انتهاء صلاحية البطاقة
• مشكلة فنية مؤقتة

الحل:
1️⃣ تحقق من رصيدك
2️⃣ تأكد من البيانات
3️⃣ حاول مرة أخرى

هل تريد إعادة المحاولة؟`,
    en: `❌ Payment Failed

Possible Reasons:
• Insufficient Balance
• Invalid Card Details
• Card Expired
• Technical Issue

Solution:
1️⃣ Check Your Balance
2️⃣ Verify Your Details
3️⃣ Try Again

Would you like to retry?`
  },

  // رسائل طلب المساعدة
  helpMessage: {
    ar: `ℹ️ قائمة الخدمات المتاحة:

📌 اكتب "دفع" - لبدء عملية دفع جديدة
📌 اكتب "حالة" - للاستفسار عن العمليات السابقة
📌 اكتب "فاتورة" - للحصول على الفاتورة الأخيرة
📌 اكتب "تحويل" - لتحويل الأموال
📌 اكتب "شكوى" - لتقديم شكوى

كيفية الاستخدام:
1. اختر الخدمة المطلوبة
2. اتبع التعليمات على الشاشة
3. أكمل العملية بأمان

هل تحتاج إلى مساعدة إضافية؟`,
    en: `ℹ️ Available Services:

📌 Type "pay" - Start New Payment
📌 Type "status" - Check Transaction Status
📌 Type "invoice" - Get Last Invoice
📌 Type "transfer" - Transfer Money
📌 Type "complaint" - File a Complaint

How to Use:
1. Choose Service
2. Follow Instructions
3. Complete Securely

Need More Help?`
  },

  // رسائل تأكيد الهوية
  verificationRequired: {
    ar: `🔐 التحقق الثنائي

لأسباب أمنية، يرجى التحقق من هويتك:

1️⃣ سيتم إرسال رمز التحقق إلى هاتفك
2️⃣ أدخل الرمز في الحقل المخصص
3️⃣ اضغط تأكيد

الرمز صالح لمدة 10 دقائق فقط`,
    en: `🔐 Two-Factor Verification

For security, please verify your identity:

1️⃣ Verification code sent to your phone
2️⃣ Enter the code in the field
3️⃣ Click Confirm

Code is valid for 10 minutes only`
  },

  // رسائل الخطأ
  errors: {
    invalidAmount: {
      ar: '❌ المبلغ غير صحيح. يجب أن يكون بين 10 و 500 ريال',
      en: '❌ Invalid Amount. Must be between 10 and 500 SAR'
    },
    invalidPhone: {
      ar: '❌ رقم الهاتف غير صحيح. استخدم صيغة سعودية',
      en: '❌ Invalid Phone. Use Saudi format'
    },
    timeout: {
      ar: '⏱️ انتهت مهلة الطلب. يرجى المحاولة مرة أخرى',
      en: '⏱️ Request Timeout. Please Try Again'
    },
    networkError: {
      ar: '🌐 خطأ في الاتصال. تحقق من الإنترنت',
      en: '🌐 Connection Error. Check Your Internet'
    },
    gatewayError: {
      ar: '🔌 خطأ في البوابة. حاول بوابة أخرى',
      en: '🔌 Gateway Error. Try Another Gateway'
    }
  },

  // رسائل استفسار الحالة
  statusInquiry: {
    ar: `📊 حالة عملياتك الأخيرة:

العملية الأخيرة:
• الحالة: مكتملة ✅
• المبلغ: 100 ريال
• التاريخ: اليوم الساعة 14:30
• البوابة: بارا
• الرقم: 0561399583

هل تريد المزيد من التفاصيل؟`,
    en: `📊 Your Recent Transactions:

Last Transaction:
• Status: Completed ✅
• Amount: 100 SAR
• Date: Today at 14:30
• Gateway: Bara
• Reference: 0561399583

Need More Details?`
  },

  // رسائل للدعم
  supportGuide: {
    ar: `📞 كيفية التواصل مع الدعم:

📧 البريد الإلكتروني:
   support@company.com

💬 واتساب:
   +966501234567

🌐 الموقع:
   www.company.com

📱 التطبيق الجوال:
   [رابط التحميل]

⏰ ساعات العمل:
   السبت - الخميس: 9:00 - 18:00
   الجمعة: مغلق`,
    en: `📞 Contact Support:

📧 Email:
   support@company.com

💬 WhatsApp:
   +966501234567

🌐 Website:
   www.company.com

📱 Mobile App:
   [Download Link]

⏰ Working Hours:
   Sat - Thu: 9:00 - 18:00
   Fri: Closed`
  }
};

module.exports = messageTemplates;
