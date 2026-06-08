# دليل الإعداد والتثبيت
# Setup and Installation Guide

## المتطلبات / Requirements
- Node.js v14+
- npm أو yarn
- حساب WhatsApp Business
- مفاتيح API من بوابات الدفع

## خطوات الإعداد / Installation Steps

### 1. استنساخ المستودع / Clone Repository
```bash
git clone https://github.com/abonasir745-arch/whatsapp-payment-chatbot.git
cd whatsapp-payment-chatbot
```

### 2. تثبيت الحزم / Install Dependencies
```bash
npm install
```

### 3. إعداد المتغيرات البيئية / Setup Environment Variables
```bash
cp .env.example .env
```

ثم قم بتعديل ملف `.env` وأضف:
- WhatsApp API credentials
- Payment gateway API keys
- Database connection details

### 4. تشغيل التطبيق / Start Application

**للتطوير (Development mode):**
```bash
npm run dev
```

**للإنتاج (Production mode):**
```bash
npm start
```

## تكوين بوابات الدفع / Payment Gateway Setup

### Bara Integration
1. تسجيل الدخول إلى حساب Bara
2. الحصول على API Key
3. إضافة الـ API Key إلى ملف `.env`

### UrPay Integration
1. الدخول إلى لوحة تحكم UrPay
2. نسخ مفتاح API
3. إضافته إلى المتغيرات البيئية

### D360 Integration
1. الاتصال بفريق D360
2. الحصول على بيانات الوصول
3. تكوينها في `.env`

## كيفية الاستخدام / How to Use

### للعميل / For Customer
1. إرسال رسالة إلى رقم البوت في WhatsApp
2. اختيار "دفع" من الخيارات
3. اتباع التعليمات على الشاشة
4. تحديد المبلغ والبوابة المفضلة
5. إكمال عملية الدفع

### للدعم / For Support Team

#### شرح للعميل عبر واتساب:

```
مرحباً بك في خدمة الدفع الآلية ✋

اتبع هذه الخطوات البسيطة:

1️⃣ ارسل "دفع" أو "payment"
   🔹 سيرسل لك البوت خيارات الدفع

2️⃣ اختر بوابة الدفع:
   🔹 بارا (Bara)
   🔹 UrPay
   🔹 D360

3️⃣ أدخل المبلغ المطلوب:
   🔹 الحد الأدنى: 10 ريال
   🔹 الحد الأقصى: حسب البوابة

4️⃣ أكمل العملية:
   🔹 انقر على رابط الدفع
   🔹 أدخل بيانات بطاقتك
   🔹 أكمل التحقق الثنائي

5️⃣ استقبل التأكيد:
   ✅ سيصلك رسالة بتأكيد الدفع
   📋 احفظ رقم العملية للمرجعية

❓ في حالة المشاكل:
📞 تواصل مع فريق الدعم
💬 أرسل "مساعدة" للتعليمات
```

#### كيفية تحويل العملاء / How to Transfer Customers

**طريقة 1: رابط المدفوعات الفوري**
```
https://chatbot.yoursite.com/payment?amount=100&gateway=bara
```

**طريقة 2: عبر الرسالة المباشرة**
```
يمكنك الدفع مباشرة من خلال الرابط:
[رابط الدفع]
```

## استكشاف الأخطاء / Troubleshooting

### الخطأ: "Invalid API Key"
- تحقق من صحة مفتاح API
- تأكد من تعيينه في ملف `.env`
- أعد تشغيل التطبيق

### الخطأ: "Payment Failed"
- تحقق من اتصال الإنترنت
- تأكد من صحة بيانات الدفع
- حاول مرة أخرى بعد دقائق

### الرسالة لا تصل
- تحقق من رقم WhatsApp
- تأكد من تفعيل حساب WhatsApp Business
- تحقق من صلاحيات الحساب

## الدعم / Support
للمساعدة والدعم، تواصل معنا على:
- 📧 Email: support@yourcompany.com
- 💬 WhatsApp: +966XX XXX XXXX
- 🐙 GitHub Issues: [GitHub Repository]
