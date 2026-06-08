# WhatsApp Payment Chatbot

روبوت دردشة واتساب مؤتمت لمعالجة الدفع وخدمة العملاء. يساعد العملاء على بدء عمليات الدفع من خلال بوابات دفع متعددة (بارا، UrPay، D360).

## المميزات

- 🤖 **معالجة الدفع الآلية** - دعم بوابات دفع متعددة
- 💬 **تكامل واتساب** - الرسائل المباشرة عبر WhatsApp Business API
- 📱 **خدمة العملاء** - ردود آلية وتتبع العمليات
- 🔄 **دعم بوابات متعددة** - تكامل بارا و UrPay و D360
- 📊 **إدارة العمليات** - تتبع وإدارة طلبات الدفع
- 🔐 **معاملات آمنة** - التحقق والتحقق من الأمان

## بوابات الدفع المدعومة

1. **بارا** - حل الدفع السعودي المحلي
2. **UrPay** - بوابة الدفع الإلكترونية
3. **D360** - منصة الدفع الرقمية

## سير عملية الدفع

```
طلب العميل → التحقق من البوت → توليد نموذج الدفع → 
إرسال الدفع من العميل → تأكيد البوت → تسجيل العملية
```

## هيكل المشروع

```
whatsapp-payment-chatbot/
├── src/
│   ├── bot/
│   │   ├── handler.js
│   │   └── middleware.js
│   ├── gateways/
│   │   ├── bara.js
│   │   ├── urpay.js
│   │   └── d360.js
│   ├── utils/
│   │   ├── validators.js
│   │   └── formatters.js
│   └── app.js
├── config/
│   └── gateways.js
├── .env.example
├── package.json
└── README.md
```

## التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/abonasir745-arch/whatsapp-payment-chatbot.git

# تثبيت الحزم
cd whatsapp-payment-chatbot
npm install

# تكوين متغيرات البيئة
cp .env.example .env
```

## متغيرات البيئة

```env
# WhatsApp Business API
WHATSAPP_API_URL=
WHATSAPP_PHONE_NUMBER=
WHATSAPP_ACCESS_TOKEN=

# بوابات الدفع
BARA_API_KEY=
URPAY_API_KEY=
D360_API_KEY=

# قاعدة البيانات
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=

# الخادم
PORT=3000
NODE_ENV=development
```

## البدء

```bash
npm start
```

## الترخيص

MIT License
