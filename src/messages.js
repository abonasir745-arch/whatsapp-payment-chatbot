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

  // رسائل النجاح
  paymentSuccess: {
    ar: (data) => `✅ تم الدفع بنجاح!

📋 رقم الإيصال: ${data.receiptNo}
💰 المبلغ: ${data.amount} ريال
🏦 البوابة: ${data.gateway}
🕐 التاريخ: ${data.date}
🔐 معرّف: ${data.transactionId}

شكراً لاستخدام خدمتنا! 🙏`,
    en: (data) => `✅ Payment Successful!

📋 Receipt No: ${data.receiptNo}
💰 Amount: ${data.amount} SAR
🏦 Gateway: ${data.gateway}
🕐 Date: ${data.date}
🔐 Transaction ID: ${data.transactionId}

Thank you for using our service! 🙏`
  },

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
  }
};

module.exports = messageTemplates;
