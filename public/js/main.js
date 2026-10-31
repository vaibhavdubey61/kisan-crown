/**
 * Kisan Crown Official Interactive Logic
 * Powers:
 * 1. Comprehensive Bilingual Engine (Instant Hindi / English with Deep DOM Walker)
 * 2. Real-time ROI / Net Profit Calculator
 * 3. Interactive Hotspot Feature Viewer
 * 4. WhatsApp Direct Quotation & Ad Lead Generator
 * 5. Official B2B Wholesale Dealership Calculator & Quote Modal
 * 6. Lead CRM API Sync
 * 7. Secure Admin-Only Visual In-Browser Editor (activated via ?admin_edit=1)
 */

// Comprehensive Agricultural & Commercial English-to-Hindi Dictionary
const kcTranslations = {
  "Authorized District Dealerships Open Pan-India | 100% GST Invoicing & Input Tax Credit": "पूरे भारत में जिला डीलरशिप उपलब्ध | 100% GST बिलिंग और इनपुट टैक्स क्रेडिट",
  "Become a Dealer": "डीलर बनें",
  "Become an Authorized Dealer": "अधिकृत डीलर बनें",
  "Wholesale RFP": "थोक कोटेशन",
  "Wholesale Catalog": "थोक कैटलॉग",
  "Dealer Benefits": "डीलर लाभ",
  "Margin Calculator": "मार्जिन कैलकुलेटर",
  "Specs Matrix": "तुलना तालिका",
  "Factory Hubs": "फैक्ट्री हब",
  "Apply for District Dealership": "जिला डीलरशिप हेतु आवेदन करें",
  "Explore 6 Machinery Categories": "सभी 6 उत्पाद श्रेणियां देखें",
  "Our Comprehensive Agro-Machinery Category Range": "हमारी संपूर्ण कृषि मशीनरी उत्पाद श्रेणियां",
  "Wholesale Machinery Catalog & Specifications": "थोक मशीनरी कैटलॉग और तकनीकी विवरण",
  "Why 500+ Agricultural Machinery Dealers Partner With Us": "500+ कृषि उपकरण डीलर किसान क्राउन से क्यों जुड़ते हैं",
  "Calculate Your Dealership Monthly Gross Margin & ROI": "अपने डीलरशिप के मासिक लाभ और रिटर्न की गणना करें",
  "Apply for Kisan Crown™ Authorized Dealership": "किसान क्राउन™ अधिकृत डीलरशिप हेतु आवेदन करें",
  "Request Wholesale Quote": "थोक कोटेशन प्राप्त करें",
  "Request Wholesale Dealer Price": "थोक डीलर मूल्य जानें",
  "Get Wholesale Price List on WhatsApp": "व्हाट्सएप पर थोक मूल्य सूची प्राप्त करें",
  "Rice Mills & Destoning Systems": "राइस मिल और डीस्टोनर सिस्टम",
  "Power Weeders & Rotary Tillers": "पॉवर वीडर और रोटरी टिलर",
  "Battery & Commercial Sprayers": "बैटरी और व्यावसायिक स्प्रेयर",
  "Commercial Pulverizers & Grinders": "कमर्शियल पल्वराइज़र और ग्राइंडर",
  "Mini & Commercial Oil Extraction Mills": "मिनी और कमर्शियल तेल निष्कर्षण मिल",
  "Food & Agro-Processing Machinery": "खाद्य और कृषि-प्रसंस्करण मशीनरी",

  "Over 50 Years of Engineering Trust • FMTTI Tested": "50+ वर्षों की इंजीनियरिंग विश्वसनीयता • FMTTI द्वारा परीक्षित",
  "Over 50 Years of Engineering Trust": "50+ वर्षों की इंजीनियरिंग विश्वसनीयता",
  "FMTTI Tested": "FMTTI द्वारा परीक्षित",
  "Govt. Approved": "सरकार द्वारा अनुमोदित",
  "Pan-India COD": "पूरे भारत में COD",
  "Doorstep Delivery": "घर तक सुरक्षित डिलीवरी",
  "Call Now": "कॉल करें",
  "Call Us": "कॉल करें",
  "Call Kisan Crown": "किसान क्राउन को कॉल करें",
  "WhatsApp Quote": "व्हाट्सएप कोट",
  "Quote": "कोटेशन",
  "Machinery Models": "मशीनरी मॉडल्स",
  "Model Comparison": "मॉडल तुलना तालिका",
  "Model Comparison Matrix": "मॉडल तुलना तालिका",
  "B2B & Retail": "व्यापारी व किसान",
  "B2B Dealership & Retail Benefits": "डीलरशिप व किसान लाभ",
  "Profit Calculator": "मुनाफ़ा कैलकुलेटर",
  "Pan-India Hubs": "अखिल भारतीय केंद्र",
  "Pan-India Branch Hubs": "अखिल भारतीय शाखाएं व डिपो",
  "Home": "होम",
  "Food Processing": "अनाज व खाद्य प्रसंस्करण",
  "Mini Rice Mills": "मिनी राइस मिल श्रृंखला",
  "All 5 Models Showcase": "सभी 5 मशीनें देखें",
  "All Models": "सभी मॉडल्स",
  "Punjab Machinery Mart (Since 1977)": "पंजाब मशीनरी मार्ट (1977 से स्थापित)",
  "Punjab Machinery Mart (Est. 1977)": "पंजाब मशीनरी मार्ट (स्था. 1977)",
  "Direct from Punjab Machinery Mart (Est. 1977), Raipur Mother Plant": "पंजाब मशीनरी मार्ट (स्था. 1977), रायपुर मुख्य प्लांट से सीधे",
  "India's Most Profitable Rice Mill & Agro Machinery Range": "भारत की सर्वाधिक मुनाफ़ेदार राइस मिल और कृषि मशीनरी",
  "Browse All 5 Machines": "सभी 5 मशीनें देखें",
  "Side-by-Side Comparison": "मॉडल तुलना तालिका",
  "FACTORY DIRECT PRICING": "फैक्ट्री डायरेक्ट कीमत",
  "FACTORY DIRECT INQUIRY": "फैक्ट्री डायरेक्ट पूछताछ",
  "Get Instant Price & Video Demo": "तुरंत कीमत और वीडियो डेमो प्राप्त करें",
  "Get Machine Price & Video Demo": "मशीन की कीमत और वीडियो डेमो प्राप्त करें",
  "I Am Looking As: *": "आप किस रूप में देख रहे हैं: *",
  "🌾 Farmer / Homestead": "🌾 किसान भाई / घरेलू उपयोग (B2C)",
  "🏢 Dealer / Commercial": "🏢 डीलर / व्यावसायिक व्यापारी (B2B)",
  "Select Machine of Interest: *": "अपनी पसंद की मशीन चुनें: *",
  "Your Full Name *": "आपका पूरा नाम *",
  "Your Full Name / किसान का नाम *": "आपका पूरा नाम / किसान का नाम *",
  "WhatsApp / Phone Number *": "व्हाट्सएप / मोबाइल नंबर *",
  "WhatsApp / Phone *": "व्हाट्सएप / मोबाइल नंबर *",
  "Mobile / WhatsApp Number *": "मोबाइल / व्हाट्सएप नंबर *",
  "District & State *": "ज़िला और राज्य *",
  "Purpose / Buyer Category": "खरीद का उद्देश्य / श्रेणी",
  "Farmer Category": "किसान वर्ग (सब्सिडी हेतु)",
  "Get Price & Subsidy on WhatsApp": "व्हाट्सएप पर थोक मूल्य व डीलरशिप जानकारी प्राप्त करें",
  "Get Instant Quotation on WhatsApp": "व्हाट्सएप पर तुरंत कोटेशन पाएं",
  "Send Quotation on WhatsApp": "व्हाट्सएप पर कोटेशन भेजें",
  "Send Me Details on WhatsApp": "व्हाट्सएप पर पूरी जानकारी भेजें",
  "No Spam Guarantee": "100% सुरक्षित एवं गोपनीय",
  "Response within 5 mins": "5 मिनट में त्वरित जवाब",
  "Cash On Delivery (COD)": "कैश ऑन डिलीवरी (COD सुविधा)",
  "Free Setup Video": "फ्री वीडियो सेटअप गाइड",
  "Free Video Setup": "फ्री वीडियो सेटअप",
  "1-Year Warranty": "1 वर्ष की वारंटी",
  "Spares in 24 Hrs": "24 घंटे में स्पेयर पार्ट्स",
  "24h Spares": "24 घंटे में स्पेयर पार्ट्स",
  "Low Power Consumption": "कम बिजली खपत",
  "e.g. Ramesh Patel": "जैसे: रमेश पटेल",
  "e.g. Shyam Lal": "जैसे: श्याम लाल",
  "e.g. Gurpreet Singh": "जैसे: गुरप्रीत सिंह",
  "10-digit number": "10 अंकों का मोबाइल नंबर",
  "10-digit mobile number": "10 अंकों का मोबाइल नंबर",
  "e.g. Raipur, C.G.": "जैसे: रायपुर, छत्तीसगढ़",
  "DUAL BUSINESS ECOSYSTEM": "दोहरा व्यावसायिक लाभ (किसान व व्यापारी)",
  "Engineered For Farmers (B2C) & Growing Businesses (B2B)": "किसानों (B2C) और कृषि व्यापारियों (B2B) दोनों के लिए लाभदायक",
  "Whether you want a high-recovery mill for your own harvest or an exclusive dealership for your district, Kisan Crown provides unmatched commercial terms.": "चाहे आप अपनी फसल के लिए उच्च रिकवरी वाली मिल चाहते हों या अपने जिले के लिए विशेष डीलरशिप, किसान क्राउन सर्वोत्तम व्यावसायिक शर्तें प्रदान करता है।",
  "FOR FARMERS & HOMESTEADS (B2C)": "किसान भाइयों और घरेलू उपयोग के लिए (B2C)",
  "Direct From Mother Plant to Your Farm": "फैक्ट्री से सीधे आपके खेत और घर तक",
  "Stop paying milling cuts and transporting paddy across distances. Mill pure, whole white rice at your own doorstep on standard 220V home electricity.": "धान दूर ले जाने और कुटाई का खर्च देने से मुक्ति। अपनी सामान्य 220V घरेलू बिजली पर अपने दरवाजे पर ही शुद्ध साबुत सफेद चावल बनाएं।",
  "Check My Farmer Subsidy Eligibility": "जिला डीलरशिप के लिए आवेदन करें",
  "FOR DEALERS & AGRI-BUSINESSES (B2B)": "डीलरों और कृषि व्यापारियों के लिए (B2B)",
  "Authorized Dealership & Commercial Supply": "अधिकृत डीलरशिप एवं थोक आपूर्ति",
  "Partner with Punjab Machinery Mart's 50-year established brand. Benefit from high turnover, strong retail demand, and guaranteed wholesale profit margins.": "पंजाब मशीनरी मार्ट के 50 वर्ष पुराने ब्रांड के साथ जुड़ें। उच्च मांग, त्वरित बिक्री और सुनिश्चित थोक मार्जिन का लाभ उठाएं।",
  "Apply for District Dealership": "ज़िला डीलरशिप के लिए आवेदन करें",
  "Exclusive Territory Protection:": "सुरक्षित ज़िला डीलरशिप अधिकार:",
  "Wholesale Margin Structure:": "आकर्षक थोक मुनाफा मार्जिन:",
  "Marketing & Lead Support:": "ग्राहक लीड्स और प्रचार सहायता:",
  "Bulk Freight Dispatch:": "थोक माल सुरक्षित व त्वरित परिवहन:",
  "Complete FMTTI test reports provided for DBT portal claims.": "DBT पोर्टल पर सरकारी सब्सिडी क्लेम के लिए अधिकृत FMTTI टेस्ट रिपोर्ट उपलब्ध।",
  "Pay securely when the machine reaches your village.": "जब मशीन आपके गांव या घर पहुंचे, तब सुरक्षित भुगतान करें।",
  "Free step-by-step setup guidance via WhatsApp video call.": "व्हाट्सएप वीडियो कॉल पर मशीन चालू करने की मुफ्त गाइडेंस।",
  "Instant spare parts backup from Raipur HQ.": "रायपुर मुख्यालय से तुरंत स्पेयर पार्ट्स बैकअप।",
  "Protected dealership rights in your district.": "आपके जिले में विशेष व सुरक्षित डीलरशिप अधिकार।",
  "Highly lucrative margins + periodic volume rebates.": "आकर्षक थोक मुनाफा मार्जिन और त्रैमासिक बिक्री बोनस।",
  "Customer inquiries from your area routed to you.": "आपके क्षेत्र से आने वाले सभी ग्राहकों की लीड सीधे आपको ट्रांसफर।",
  "Express truck & container transport from our 4 zonal hubs.": "हमारे 4 जोनल डिपो से सीधे सुरक्षित एवं त्वरित ट्रक परिवहन।",
  "VERIFIED PRODUCTION LINEUP": "प्रमाणित उत्पादन लाइनअप",
  "Complete Kisan Crown Precision Machinery Range": "किसान क्राउन की संपूर्ण उन्नत मशीनरी श्रृंखला",
  "Select any machine below to inspect technical specifications, calculated commercial returns, and government subsidy quotes.": "मशीन के तकनीकी विवरण, व्यावसायिक मुनाफ़ा और सरकारी सब्सिडी जानने के लिए नीचे चुनें।",
  "Explore Specifications & Price →": "पूरी जानकारी व कीमत देखें →",
  "Get Price & Subsidy": "थोक मूल्य कोटेशन",
  "Get Subsidy Quote": "डीलर कोटेशन प्राप्त करें",
  "MOTOR POWER": "मोटर पावर",
  "CAPACITY": "कुटाई क्षमता",
  "POWER SUPPLY": "बिजली कनेक्शन",
  "HOUSING": "बॉडी मेटेरियल",
  "ATTACHMENTS": "अतिरिक्त उपकरण",
  "CHASSIS": "चेसिस फ्रेम",
  "BRAN SEPARATOR": "भूसी / चोकर सेपरेटर",
  "GRADING DECK": "छनाई व ग्रेडिंग डेक",
  "SUITABILITY": "उपयुक्त फसलें",
  "OPERATION": "प्रक्रिया प्रकार",
  "FLOOR SPACE REQUIRED": "आवश्यक जगह",
  "PAYBACK PERIOD": "लागत वसूली समय",
  "DAILY OUTPUT": "दैनिक कुल उत्पादन",
  "DAILY NET PROFIT": "दैनिक शुद्ध मुनाफ़ा",
  "MONTHLY PROFIT": "मासिक शुद्ध मुनाफ़ा",
  "TECHNICAL SPECIFICATIONS": "तकनीकी विवरण",
  "CERTIFIED SPEC SHEET": "प्रमाणित तकनीकी पत्रक",
  "OFFICIAL BENCHMARK": "आधिकारिक मानक",
  "CERTIFIED BENCHMARK": "प्रमाणित मानक",
  "Model Name:": "मॉडल का नाम:",
  "Required Motor:": "आवश्यक मोटर:",
  "Motor Power Required:": "आवश्यक मोटर पावर:",
  "Production Capacity:": "उत्पादन / कुटाई क्षमता:",
  "Power Supply:": "बिजली आपूर्ति:",
  "Power Connection:": "बिजली कनेक्शन:",
  "Compatible Crops:": "उपयुक्त अनाज व फसलें:",
  "Body Structure:": "बॉडी बनावट:",
  "Bearings & Eccentric Shaft:": "बेयरिंग और शाफ्ट:",
  "Operation Type:": "कार्य प्रणाली:",
  "Floor Space Required:": "आवश्यक फर्श की जगह:",
  "Framework / Chassis:": "फ्रेमवर्क व चेसिस:",
  "Dual Processing Function:": "दोहरा प्रसंस्करण कार्य:",
  "Cyclone Bran Collector:": "साइक्लोन भूसी संग्रहकर्ता:",
  "Electric Connection:": "बिजली कनेक्शन:",
  "Housing:": "बॉडी मेटेरियल:",
  "Runs on standard household 220V single-phase power. Features heavy cast iron barrel delivering 200–250 kg/hour of polished whole white rice.": "सामान्य 220V सिंगल-फेज घरेलू बिजली पर चलती है। मजबूत कास्ट आयरन बैरल के साथ प्रति घंटे 200–250 किलो पॉलिश किया हुआ साबुत सफेद चावल तैयार करती है।",
  "Industrial combined system: High-volume 600-800 kg/hr rice milling PLUS secondary pulverizer grinder for whole wheat flour, spices & cattle feed.": "औद्योगिक कंबाइंड सिस्टम: प्रति घंटे 600-800 किलो चावल कुटाई के साथ-साथ आटा, मसाले और पशु आहार की पिसाई के लिए सेकेंडरी पल्वराइज़र।",
  "Processes 500–600 kg/hr. Includes an aerodynamic cyclone separator to extract pure choker and a high-frequency vibrating screen to remove broken grains.": "प्रति घंटे 500–600 किलो प्रोसेसिंग। शुद्ध चोकर अलग करने के लिए साइक्लोन सेपरेटर और टूटे दाने (कनकी) अलग करने के लिए हाई-फ्रीक्वेंसी वाइब्रेटिंग स्क्रीन।",
  "High-speed grain cleaner for Paddy, Wheat, Corn & Pulses. Dual action: Wind blower removes light chaff while 2-tier oscillating screens grade whole grains.": "धान, गेहूं, मक्का और दालों के लिए उच्च गति अनाज क्लीनर। दोहरा कार्य: ब्लोअर हल्के कचरे और भूसे को उड़ाता है और 2-स्तरीय स्क्रीन साबुत दानों की ग्रेडिंग करती है।",
  "The farmer's personal milling asset. Single pass high recovery (>72%), less than 5% broken grain, running quietly on normal domestic 220V plug.": "किसान भाई की अपनी व्यक्तिगत राइस मिल। सिंगल पास में 72% से अधिक रिकवरी, 5% से कम टूटन, और सामान्य घरेलू 220V प्लग पर बिना झंझट शांत संचालन।",
  "6N-110 Semi-Commercial Rice Mill": "6N-110 सेमी-कमर्शियल राइस मिल",
  "6N-110 Semi-Commercial": "6N-110 सेमी-कमर्शियल",
  "6N-70 Ultra Pro Max (Combined)": "6N-70 अल्ट्रा प्रो मैक्स (कंबाइंड राइस मिल + पल्वराइज़र)",
  "6N-70 Ultra Pro Max (Combined Unit)": "6N-70 अल्ट्रा प्रो मैक्स (कंबाइंड यूनिट)",
  "6N-70 Commercial Rice Mill": "6N-70 कमर्शियल राइस मिल",
  "6N-70 Commercial Rice Mill with Vibrator": "6N-70 कमर्शियल राइस मिल (साइक्लोन व वाइब्रेटर)",
  "Winover Cum Grader (Cleaner)": "विनोवर कम ग्रेडर (अनाज सफाई व ग्रेडिंग मशीन)",
  "Winover Cum Grader": "विनोवर कम ग्रेडर",
  "Winover Cum Grader (Multi-Crop)": "विनोवर कम ग्रेडर (मल्टी-क्रॉप)",
  "Winover Cum Grader (Multi-Crop Cleaner)": "विनोवर कम ग्रेडर (मल्टी-क्रॉप अनाज क्लीनर)",
  "6N-40 Domestic Mini Rice Mill": "6N-40 घरेलू मिनी राइस मिल",
  "6N-40 Mini": "6N-40 मिनी",
  "6N-40 Domestic": "6N-40 घरेलू",
  "6N-40 Mini Rice Mill (RM40)": "6N-40 मिनी राइस मिल (RM40)",
  "6N-70 Ultra Pro": "6N-70 अल्ट्रा प्रो",
  "6N-70 Commercial": "6N-70 कमर्शियल",
  "6N-110 (Single Phase)": "6N-110 (सिंगल फेज)",
  "6N-110 (3HP)": "6N-110 (3 HP)",
  "6N-40 (3HP)": "6N-40 (3 HP)",
  "6N-70 (10HP)": "6N-70 (10 HP)",
  "SINGLE PHASE 220V": "सिंगल फेज 220V",
  "10 HP 3-PHASE": "10 HP 3-फेज",
  "COMMERCIAL SERIES": "कमर्शियल सीरीज",
  "1.5 TONNES/HR SPEED": "1.5 टन/घंटा गति",
  "1.5 TONNES/HR THROUGHPUT": "1.5 टन/घंटा क्षमता",
  "DOMESTIC / HOMESTEAD": "घरेलू / किसान परिवार",
  "TURNKEY CUSTOM PLANTS": "टर्नकी कमर्शियल प्लांट्स",
  "FLAGSHIP DUAL POWER": "★ फ्लैगशिप दोहरा पावर",
  "MULTI-CROP CLEANER": "मल्टी-क्रॉप अनाज क्लीनर",
  "DOMESTIC & HOMESTEAD": "घरेलू एवं किसान उपयोग",
  "NORMAL 220V HOME POWER": "सामान्य 220V घरेलू बिजली",
  "220V HOME PLUG & PLAY": "220V होम प्लग एंड प्ले",
  "FMTTI TESTED • ISO 9001:2015 CERTIFIED": "FMTTI परीक्षित • ISO 9001:2015 प्रमाणित",
  "FMTTI TESTED • DUAL DECK + BLOWER": "FMTTI परीक्षित • डबल डेक + ब्लोअर",
  "DOMESTIC FAVORITE • 220V SINGLE PHASE": "किसानों की पसंद • 220V सिंगल फेज",
  "COMMERCIAL DUAL REVENUE • 10 HP 3-PHASE": "कमर्शियल दोहरा मुनाफ़ा • 10 HP 3-फेज",
  "INDUSTRIAL COMMERCIAL MILL • 10 HP 3-PHASE": "औद्योगिक कमर्शियल मिल • 10 HP 3-फेज",
  "CENTRAL MOTHER PLANT": "केंद्रीय मुख्य प्लांट",
  "CENTRAL INDIA BRANCH": "मध्य भारत जोनल डिपो",
  "EASTERN INDIA HUB": "पूर्वी भारत जोनल हब",
  "COASTAL GRAIN HUB": "तटीय अनाज हब",
  "BUSINESS PROFIT SIMULATOR": "व्यावसायिक मुनाफ़ा सिम्युलेटर",
  "3 HP Electric Motor": "3 HP इलेक्ट्रिक मोटर",
  "3 HP Electric": "3 HP इलेक्ट्रिक मोटर",
  "3 HP Single Phase": "3 HP सिंगल फेज",
  "10 HP 3-Phase": "10 HP 3-फेज मोटर",
  "10 HP Heavy Duty Motor": "10 HP हैवी ड्यूटी मोटर",
  "10 HP Heavy Motor": "10 HP हैवी मोटर",
  "220V Single Phase": "220V सिंगल फेज",
  "220V Domestic Socket": "220V घरेलू सॉकेट",
  "Single Phase (Domestic 220 Volt)": "सिंगल फेज (घरेलू 220 वोल्ट)",
  "Single Phase 220V Domestic Light Connection": "सिंगल फेज 220V घरेलू बिजली कनेक्शन",
  "Single Phase 220V (Standard Household/Farm Connection)": "सिंगल फेज 220V (सामान्य घरेलू या कृषि मीटर)",
  "3 Phase (Commercial 440 Volt AC)": "3-फेज (कमर्शियल 440 वोल्ट)",
  "Heavy Cast Iron": "मजबूत कास्ट आयरन",
  "Heavy Cast Iron Barrel": "मजबूत कास्ट आयरन बैरल",
  "Channel Iron Bed": "हैवी चैनल आयरन फ्रेम",
  "Heavy Channel Iron Chassis": "हैवी चैनल आयरन चेसिस",
  "Cyclone Air Collector": "चक्रवात एयर कलेक्टर",
  "Cyclone Air Collector + Vibrator": "साइक्लोन एयर कलेक्टर + वाइब्रेटर",
  "Vibrating Sieve Deck": "वाइब्रेटिंग छनाई डेक",
  "Blower + Dual Sieve Decks": "ब्लोअर + डबल छनाई डेक",
  "Atta/Spice Pulverizer + Cyclone": "आटा/मसाला पल्वराइज़र + साइक्लोन",
  "Single Pass High-Recovery Milling": "सिंगल पास हाई-रिकवरी कुटाई",
  "Under 4 sq. ft. (Extremely Compact)": "4 वर्ग फीट से कम (अत्यंत कॉम्पैक्ट)",
  "Under 4 sq. ft. Floor Space": "4 वर्ग फीट से कम जगह",
  "Heavy MS Structural Frame with Double Vibratory Deck": "मजबूत एमएस स्ट्रक्चरल फ्रेम (डबल वाइब्रेटरी डेक)",
  "Heavy MS Steel Structural Frame": "मजबूत एमएस स्टील फ्रेम",
  "Heavy Cast Iron Heavy-Duty Bearings": "हैवी कास्ट आयरन बेयरिंग्स",
  "Paddy, Wheat, Maize, Gram/Dal, Mustard, Soybean": "धान, गेहूं, मक्का, चना/दाल, सरसों, सोयाबीन",
  "Paddy, Wheat, Maize, Soyabean, Chana/Gram, Mustard, Pulses": "धान, गेहूं, मक्का, सोयाबीन, चना, सरसों, दालें",
  "Paddy, Wheat, Dal, Corn": "धान, गेहूं, दाल, मक्का",
  "Paddy (All Varieties - Raw & Boiled)": "धान (सभी किस्में - कच्चा व उसना/सेला)",
  "200 – 250 kg/hr": "200 – 250 किलो/घंटा",
  "200 – 250 kg/hr (2 to 2.5 Quintals/hr)": "200 – 250 किलो/घंटा (2 से 2.5 क्विंटल/घंटा)",
  "600 – 800 kg/hr": "600 – 800 किलो/घंटा",
  "600 – 800 kg/hr (6 to 8 Quintals/hr)": "600 – 800 किलो/घंटा (6 से 8 क्विंटल/घंटा)",
  "500 – 600 kg/hr": "500 – 600 किलो/घंटा",
  "500 – 600 kg/hr (5 to 6 Quintals/hr)": "500 – 600 किलो/घंटा (5 से 6 क्विंटल/घंटा)",
  "1200 – 1500 kg/hr": "1200 – 1500 किलो/घंटा",
  "1200 – 1500 kg/hr (12 to 15 Quintals/hr)": "1200 – 1500 किलो/घंटा (12 से 15 क्विंटल/घंटा)",
  "120 – 180 kg/hr": "120 – 180 किलो/घंटा",
  "120 – 180 kg/hr (1.2 to 1.8 Quintals/hr)": "120 – 180 किलो/घंटा (1.2 से 1.8 क्विंटल/घंटा)",
  "100% genuine spare parts guaranteed for 10+ years": "10+ वर्षों तक 100% असली स्पेयर पार्ट्स की गारंटी",
  "COD (Cash on Delivery) available in over 500 districts across all Indian states.": "भारत के 500 से अधिक जिलों में कैश ऑन डिलीवरी (COD) उपलब्ध।",
  "Need a Commercial Plant or Custom Sieve Size?": "क्या आपको कमर्शियल राइस मिल प्लांट या विशेष जाली चाहिए?",
  "We engineer complete automated lines including bucket elevators, destoners, grading sieves, polishers, and pulverizers with custom mesh screens.": "हम बकेट एलिवेटर, डीस्टोनर, ग्रेडिंग छलनी, पॉलिशर और विभिन्न मेश स्क्रीन वाले पल्वराइज़र सहित संपूर्ण स्वचालित प्लांट तैयार करते हैं।",
  "Talk to Our Plant Engineers": "हमारे प्लांट इंजीनियरों से बात करें",
  "INTERACTIVE COMMERCIAL PROFITABILITY CALCULATOR": "व्यावसायिक लाभ एवं मुनाफ़ा कैलकुलेटर",
  "Calculate Your Exact Monthly Earnings & Payback Period": "अपनी मासिक कमाई और मशीन की लागत वापसी का सटीक हिसाब लगाएं",
  "Calculate Your Monthly Net Profit & Break-Even Period": "अपना मासिक शुद्ध मुनाफ़ा एवं लागत वसूली समय जानें",
  "Calculates exact machine payback days": "मशीन की लागत वसूली के सटीक दिनों का हिसाब",
  "DAILY & MONTHLY RETURNS": "दैनिक और मासिक कमाई का हिसाब",
  "BULK GRAIN CLEANING ROI": "थोक अनाज सफाई मुनाफ़ा (ROI)",
  "SUPERCHARGED BULK CLEANING ROI": "थोक अनाज सफाई से भारी मुनाफ़ा",
  "Select Machine to Simulate:": "हिसाब लगाने के लिए मशीन चुनें:",
  "Operating Hours Per Day:": "प्रतिदिन चलने के घंटे:",
  "Working Hours per Day:": "प्रतिदिन चलने के घंटे:",
  "Cleaning Hours per Day:": "प्रतिदिन सफाई के घंटे:",
  "Custom Milling Charge (₹/kg):": "कुटाई शुल्क दर (₹ प्रति किलो):",
  "Milling Rate Charged (₹/kg):": "कुटाई शुल्क दर (₹ प्रति किलो):",
  "Grain Cleaning Fee (₹/kg):": "अनाज सफाई शुल्क (₹ प्रति किलो):",
  "Power Cost (₹/unit):": "बिजली दर (₹ प्रति यूनिट):",
  "Calculate Your Earnings with 6N-40": "6N-40 से अपनी कमाई का हिसाब लगाएं",
  "Calculate Your Earnings with 6N-110": "6N-110 से अपनी कमाई का हिसाब लगाएं",
  "Daily & Monthly Returns for 6N-70 Commercial": "6N-70 कमर्शियल से दैनिक व मासिक कमाई",
  "Daily & Monthly Returns for Winover Cum Grader": "विनोवर कम ग्रेडर से दैनिक व मासिक कमाई",
  "Dual Revenue Streams: Rice Milling + Pulverizer Flour Grinding": "दोहरा मुनाफ़ा: धान कुटाई + आटा व मसाला पिसाई",
  "Total Paddy:": "कुल धान कुटाई:",
  "Total Cleaned:": "कुल अनाज सफाई:",
  "Standard village custom milling rate: ₹2.5 - ₹3.5/kg": "गाँव में सामान्य कुटाई दर: ₹2.5 - ₹3.5 प्रति किलो",
  "Nominal cleaning charge: ₹50–₹100 per bag": "सामान्य सफाई शुल्क: ₹50–₹100 प्रति बोरी",
  "Based on 150 kg/hr average throughput with 3 HP motor.": "3 HP मोटर के साथ 150 किलो/घंटा औसत उत्पादन पर आधारित।",
  "Based on 225 kg/hr average throughput on single phase.": "सिंगल फेज पर 225 किलो/घंटा औसत उत्पादन पर आधारित।",
  "Based on 550 kg/hr average commercial milling throughput.": "550 किलो/घंटा औसत कमर्शियल उत्पादन पर आधारित।",
  "Based on 700 kg/hr rice milling + 150 kg/hr pulverizer grinding.": "700 किलो/घंटा धान कुटाई + 150 किलो/घंटा पल्वराइज़र पिसाई पर आधारित।",
  "Based on 1,350 kg/hr average multi-crop throughput.": "1,350 किलो/घंटा औसत मल्टी-क्रॉप सफाई गति पर आधारित।",
  "PAN-INDIA LOGISTICS & SUPPORT HUBS": "अखिल भारतीय डिलीवरी एवं सर्विस केंद्र",
  "Direct Factory Dispatch from Mother Plant & 4 Zonal Depots": "रायपुर मुख्य प्लांट एवं 4 जोनल डिपो से सीधे सुरक्षित डिलीवरी",
  "Raipur Mother Plant & HQ": "रायपुर मुख्य प्लांट एवं मुख्यालय",
  "Jabalpur Zonal Depot": "जबलपुर जोनल डिपो (म.प्र.)",
  "Kolkata Zonal Hub": "कोलकाता जोनल हब (प. बंगाल)",
  "Bhubaneswar Zonal Center": "भुवनेश्वर जोनल सेंटर (ओडिशा)",
  "Raipur (Chhattisgarh)": "रायपुर (छत्तीसगढ़)",
  "Jabalpur (Madhya Pradesh)": "जबलपुर (मध्य प्रदेश)",
  "Kolkata (West Bengal)": "कोलकाता (पश्चिम बंगाल)",
  "Bhubaneswar (Odisha)": "भुवनेश्वर (ओडिशा)",
  "Central Parts Dispatch": "केंद्रीय स्पेयर पार्ट्स डिपो",
  "Serving MP & Vidarbha": "म.प्र. और विदर्भ क्षेत्र",
  "Eastern Mandi Link": "पूर्वी मंडी एवं निर्यात हब",
  "Coastal & Delta Support": "तटीय व डेल्टा क्षेत्र सहायता",
  "HEAD-TO-HEAD COMPARISON": "मॉडल तुलना तालिका",
  "Compare Kisan Crown Models Side-by-Side": "किसान क्राउन के सभी मॉडलों की आमने-सामने तुलना",
  "Parameters": "पैरामीटर्स",
  "Target User": "उपयुक्त खरीदार",
  "Required Electric Connection": "बिजली कनेक्शन",
  "Processing Capacity / Hour": "प्रति घंटा प्रोसेसिंग क्षमता",
  "Primary Function": "मुख्य कार्य",
  "Govt Subsidy (SMAM/DBT)": "18% GST इनपुट टैक्स क्रेडिट",
  "Warranty Coverage": "वारंटी कवरेज",
  "Individual Farmers": "व्यक्तिगत किसान भाई",
  "Progressive Farmers / CHC": "प्रगतिशील किसान / कस्टम हायरिंग केंद्र",
  "Commercial Millers & Traders": "कमर्शियल मिलर्स व अनाज व्यापारी",
  "Agro Traders & Commercial Millers": "अनाज व्यापारी व कमर्शियल मिलर्स",
  "Grain Mandis, Seed Units & Traders": "अनाज मंडियां, बीज उत्पादक व व्यापारी",
  "Why Choose Kisan Crown vs Local Assemblers": "स्थानीय असेंबलरों की तुलना में किसान क्राउन क्यों चुनें?",
  "Official Quotation & Subsidy Estimate": "आधिकारिक थोक कोटेशन एवं डीलर मार्जिन",
  "Official Quotation: Model 6N-110": "पक्का कोटेशन: मॉडल 6N-110",
  "Official Quotation: 6N-70 Ultra Pro Max": "पक्का कोटेशन: 6N-70 अल्ट्रा प्रो मैक्स",
  "Official Quotation: 6N-70 Commercial": "पक्का कोटेशन: 6N-70 कमर्शियल",
  "Official Quotation: Winover Cum Grader": "पक्का कोटेशन: विनोवर कम ग्रेडर",
  "Official Quotation: Model 6N-40": "पक्का कोटेशन: मॉडल 6N-40",
  "Selected Machine:": "चुनी गई मशीन:",
  "Model Code:": "मॉडल कोड:",
  "Ex-Factory Price:": "एक्स-फैक्ट्री कीमत:",
  "Ex-Factory Base Price:": "एक्स-फैक्ट्री बेस कीमत:",
  "Govt. Subsidy (SMAM 40%):": "18% GST इनपुट टैक्स क्रेडिट:",
  "Net Effective Price:": "सब्सिडी बाद शुद्ध कीमत:",
  "Effective Net Cost:": "सब्सिडी बाद शुद्ध लागत:",
  "Category for Subsidy Claim": "डीलरशिप / थोक खरीद श्रेणी",
  "General Farmer (40% Subsidy Eligible)": "अधिकृत जिला डीलर (25%-35% मार्जिन)",
  "Small & Marginal / SC/ST / Women (50% Subsidy Eligible)": "लघु व सीमांत / SC-ST / महिला किसान (50% सब्सिडी)",
  "Small/Marginal/SC/ST/Woman (50% Subsidy)": "थोक स्टॉकिस्ट / वितरक",
  "Dealer / Commercial Wholesale Inquiry": "डीलर / व्यावसायिक थोक पूछताछ",
  "Dealer / Commercial Buyer": "डीलर / व्यावसायिक थोक खरीदार",
  "FREQUENTLY ASKED QUESTIONS": "अक्सर पूछे जाने वाले सवाल (FAQ)",
  "Can single-phase machines (6N-110 and 6N-40) really run on ordinary home electricity?": "क्या सिंगल फेज मशीनें (6N-110 और 6N-40) वास्तव में सामान्य घरेलू बिजली पर चल सकती हैं?",
  "How does the 40% to 50% government subsidy process work?": "किसान क्राउन डीलरशिप और थोक आपूर्ति कैसे प्राप्त करें?",
  "How is Cash On Delivery (COD) and delivery handled across India?": "पूरे भारत में कैश ऑन डिलीवरी (COD) और डिलीवरी कैसे होती है?",
  "How do I become an authorized dealer for my district?": "मैं अपने जिले के लिए अधिकृत डीलर कैसे बन सकता हूँ?",
  "What is the broken rice percentage in Kisan Crown mills?": "किसान क्राउन राइस मिल में चावल टूटने (कनकी) का प्रतिशत कितना होता है?",
  "Direct Mandi Premium (+15% to +20% Value)": "मंडी में 15% से 20% अधिक भाव (प्रीमियम)",
  "40% to 50% Subsidy Under SMAM Scheme": "फैक्ट्री डायरेक्ट थोक दरें एवं डीलर मार्जिन",
  "Normal 220V Electricity": "सामान्य 220V घरेलू बिजली",
  "Over 72% Grain Recovery": "72% से अधिक साबुत चावल रिकवरी",
  "1-Year Warranty & Spares": "1 वर्ष की वारंटी व स्पेयर पार्ट्स",
  "Why 6N-40 is India's Favorite Homestead Rice Mill": "6N-40 भारत की सबसे लोकप्रिय घरेलू राइस मिल क्यों है?",
  "Why 6N-110 is India's Most Trusted Semi-Commercial Rice Mill": "6N-110 भारत की सबसे भरोसेमंद सेमी-कमर्शियल राइस मिल क्यों है?",
  "Why Commercial Millers Choose 6N-70 with Cyclone & Vibrator": "कमर्शियल मिलर्स साइक्लोन और वाइब्रेटर युक्त 6N-70 क्यों चुनते हैं?",
  "Why Commercial Operators Choose 6N-70 Ultra Pro Max": "व्यावसायिक मिलर्स 6N-70 अल्ट्रा प्रो मैक्स क्यों चुनते हैं?",
  "One Machine, Multiple Profitable Grain Streams": "एक मशीन, अनेक फसलों की सफाई और ग्रेडिंग",
  "Interchangeable screens let you clean and grade every major crop of both Kharif and Rabi seasons.": "बदलने योग्य जालियों से खरीफ और रबी दोनों मौसमों की सभी प्रमुख फसलों की सफाई और ग्रेडिंग संभव है।",
  "Paddy / Rice": "धान / चावल",
  "Wheat / Gehun": "गेहूं",
  "Maize / Makka": "मक्का",
  "Soyabean": "सोयाबीन",
  "Chana / Gram": "चना / दालें",
  "Mustard & Oilseeds": "सरसों व तिलहन",
  "Removes stones, straw, immature grains": "कंकड़-पत्थर, पुआल और खोखले दाने अलग करता है",
  "Separates chaff, mud balls, broken seeds": "भूसी, मिट्टी के ढेले और कटे दाने अलग करता है",
  "High-capacity cob and grain separation": "मक्के के भुट्टे के टुकड़े और दाने अलग करता है",
  "Zero skin damage, Grade-A seed purity": "बिना छिलका टूटे ग्रेड-ए बीज तैयार करता है",
  "Uniform sizing for dal mills and packaging": "दाल मिल और पैकिंग के लिए एक समान दाना",
  "Fine screen separation of dust and weed seeds": "धूल-मिट्टी और खरपतवार के बारीक बीज अलग करता है",
  "Click on the glowing green dots on the machine to inspect engineered features.": "मशीन के विशेष इंजीनियरिंग पार्ट्स देखने के लिए हरे बिंदुओं पर क्लिक करें।",
  "Click on the glowing green dots on the machine to inspect the winnowing fan and dual screen decks.": "ब्लोअर और डबल स्क्रीन डेक देखने के लिए हरे बिंदुओं पर क्लिक करें।",
  "Click on the glowing green dots on the machine to inspect the dual mill and pulverizer system.": "डबल मिल और पल्वराइज़र देखने के लिए हरे बिंदुओं पर क्लिक करें।",
  "Click on the glowing green dots on the machine to inspect the cyclone bran separator and vibrating screen.": "साइक्लोन सेपरेटर और वाइब्रेटिंग स्क्रीन देखने के लिए हरे बिंदुओं पर क्लिक करें।",
  "Click on the glowing green dots on the machine to inspect the domestic compact design.": "घरेलू कॉम्पैक्ट डिज़ाइन देखने के लिए हरे बिंदुओं पर क्लिक करें।",
  "High-Capacity Extended Feed Hopper": "उच्च क्षमता वाला बड़ा फीड हॉपर",
  "Aerodynamic Centrifugal Wind Winnower": "एयरोडायनामिक सेंट्रीफ्यूगल हवा ब्लोअर (सफाई पंखा)",
  "Aerodynamic Wind Blower Winnower": "एयरोडायनामिक हवा ब्लोअर (सफाई पंखा)",
  "Primary Coarse Separation Sieve Deck": "पहला बड़ा छनाई डेक (मोटे कचरे की छनाई)",
  "Primary Coarse Separation Sieve": "पहला बड़ा छनाई डेक (मोटे कचरे की छनाई)",
  "Secondary Precision Grading Sieve Deck": "दूसरा ग्रेडिंग डेक (बारीक व एक समान दाना)",
  "Secondary Precision Grading Deck": "दूसरा ग्रेडिंग डेक (बारीक व एक समान दाना)",
  "Compact Hopper with Flow Regulator": "फ्लो रेगुलेटर युक्त कॉम्पैक्ट हॉपर",
  "Cast Iron Single-Pass Milling Drum": "कास्ट आयरन सिंगल-पास मिलिंग ड्रम",
  "Protective Steel Belt Enclosure": "स्टील सुरक्षा बेल्ट कवर",
  "Compact Steel Floor Mount": "कॉम्पैक्ट स्टील फ्लोर माउंट फ्रेम",
  "Deep Funnel MS Steel Hopper": "गहरा फनल एमएस स्टील हॉपर",
  "Dense Cast Iron Milling Barrel": "मजबूत कास्ट आयरन मिलिंग बैरल",
  "Full Steel Safety Belt Guard": "फुल स्टील सेफ्टी बेल्ट गार्ड",
  "Reinforced Heavy-Angle Base Platform": "मजबूत हैवी एंगल बेस प्लेटफॉर्म",
  "Precision Machines": "उन्नत मशीनें",
  "Business Partnerships": "व्यावसायिक साझेदारी",
  "Get in Touch": "संपर्क करें",
  "Speak directly with our technical advisors:": "हमारे तकनीकी सलाहकारों से सीधे बात करें:",
  "Chat on WhatsApp": "व्हाट्सएप पर बात करें",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "Official Company Site": "कंपनी की आधिकारिक वेबसाइट"
};

// Bilingual Translation Engine
const translations = {
  currentLang: 'en',
  
  setLang: function(lang) {
    this.currentLang = lang;
    localStorage.setItem('kc_preferred_lang', lang);
    this.apply();
  },

  toggle: function() {
    this.setLang(this.currentLang === 'en' ? 'hi' : 'en');
  },

  apply: function() {
    const isHi = this.currentLang === 'hi';

    // 1. Process explicit [data-en] and [data-hi] attributes
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = el.getAttribute(`data-${this.currentLang}`);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // 2. Recursive Text Node DOM Translation
    try {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName.toLowerCase();
            if (tag === 'script' || tag === 'style' || tag === 'noscript' || parent.id === 'admin-live-toolbar' || parent.closest('#admin-live-toolbar') || parent.closest('#kc-floating-lang-pill')) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const nodesToProcess = [];
      let currentNode;
      while (currentNode = walker.nextNode()) {
        nodesToProcess.push(currentNode);
      }

      nodesToProcess.forEach(node => {
        if (node._kcOrig === undefined) {
          node._kcOrig = node.nodeValue;
        }

        if (isHi) {
          const raw = node._kcOrig;
          const trimmed = raw.trim();
          if (kcTranslations[trimmed]) {
            node.nodeValue = raw.replace(trimmed, kcTranslations[trimmed]);
          } else {
            // Substring replacement for known key terms
            let replaced = raw;
            for (const [enKey, hiVal] of Object.entries(kcTranslations)) {
              if (enKey.length >= 4 && replaced.includes(enKey)) {
                replaced = replaced.split(enKey).join(hiVal);
              }
            }
            if (replaced !== raw) {
              node.nodeValue = replaced;
            }
          }
        } else {
          node.nodeValue = node._kcOrig;
        }
      });
    } catch (err) {
      console.warn('DOM translation walker notice:', err);
    }

    // 3. Translate Input / Textarea Placeholders
    document.querySelectorAll('input, textarea').forEach(input => {
      if (input._kcOrigPlaceholder === undefined) {
        input._kcOrigPlaceholder = input.placeholder || '';
      }
      if (isHi) {
        const trimmed = input._kcOrigPlaceholder.trim();
        if (kcTranslations[trimmed]) {
          input.placeholder = kcTranslations[trimmed];
        }
      } else {
        input.placeholder = input._kcOrigPlaceholder;
      }
    });

    // 4. Translate Dropdown Options
    document.querySelectorAll('select option').forEach(opt => {
      if (opt._kcOrigText === undefined) {
        opt._kcOrigText = opt.text;
      }
      if (isHi) {
        const trimmed = opt._kcOrigText.trim();
        if (kcTranslations[trimmed]) {
          opt.text = kcTranslations[trimmed];
        }
      } else {
        opt.text = opt._kcOrigText;
      }
    });

    // 5. Update All Language Switcher Buttons Across Header, Top Bar & Mobile Menu
    document.querySelectorAll('.lang-toggle-btn, #lang-toggle-btn, #nav-lang-btn, #mobile-lang-btn').forEach(btn => {
      if (isHi) {
        btn.innerHTML = '<i class="fa-solid fa-language text-amber-300 mr-1.5"></i> English';
        btn.title = 'Switch to English';
      } else {
        btn.innerHTML = '<i class="fa-solid fa-language text-amber-400 mr-1.5"></i> हिन्दी';
        btn.title = 'हिंदी में देखें / Switch to Hindi';
      }
    });

    // 6. Update Floating Language Badge
    this.updateFloatingLangBadge();
  },

  updateFloatingLangBadge: function() {
    let badge = document.getElementById('kc-floating-lang-pill');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'kc-floating-lang-pill';
      badge.className = 'fixed bottom-6 left-6 z-40';
      badge.innerHTML = `
        <button onclick="translations.toggle()" class="flex items-center gap-2 bg-emerald-950/90 hover:bg-emerald-900 text-white border-2 border-amber-400 px-4 py-2.5 rounded-full shadow-2xl transition hover:scale-105 backdrop-blur text-xs font-bold">
          <i class="fa-solid fa-language text-base text-amber-400"></i>
          <span id="floating-lang-text">${this.currentLang === 'hi' ? '🌐 Switch to English' : '🇮🇳 हिन्दी में देखें'}</span>
        </button>
      `;
      document.body.appendChild(badge);
    } else {
      const textSpan = document.getElementById('floating-lang-text');
      if (textSpan) {
        textSpan.innerText = this.currentLang === 'hi' ? '🌐 Switch to English' : '🇮🇳 हिन्दी में देखें';
      }
    }
  },

  init: function() {
    const saved = localStorage.getItem('kc_preferred_lang');
    if (saved === 'hi' || (!saved && navigator.language && navigator.language.startsWith('hi'))) {
      this.setLang('hi');
    } else {
      this.updateFloatingLangBadge();
    }
  }
};

// ROI Profitability Calculator
function updateROICalculator(defaultCapacity = 250) {
  const hoursInput = document.getElementById('calc-hours');
  const rateInput = document.getElementById('calc-rate');
  const powerCostInput = document.getElementById('calc-power-rate');
  
  if (!hoursInput) return;

  const hours = parseFloat(hoursInput.value) || 8;
  const ratePerKg = parseFloat(rateInput ? rateInput.value : 3.0); // ₹ per kg for custom milling
  const powerRate = parseFloat(powerCostInput ? powerCostInput.value : 7.0);

  const calcContainer = document.getElementById('roi-calc-container');
  const capacity = calcContainer && calcContainer.dataset.capacity ? parseFloat(calcContainer.dataset.capacity) : defaultCapacity;
  const motorHp = calcContainer && calcContainer.dataset.motorHp ? parseFloat(calcContainer.dataset.motorHp) : 3;

  const dailyOutputKg = capacity * hours;
  const dailyGross = dailyOutputKg * ratePerKg;

  const unitsPerHour = motorHp * 0.75;
  const dailyPowerUnits = unitsPerHour * hours;
  const dailyPowerCost = dailyPowerUnits * powerRate;
  const dailyLaborMaintenance = 350;

  const dailyNetProfit = dailyGross - dailyPowerCost - dailyLaborMaintenance;
  const monthlyNetProfit = dailyNetProfit * 26;

  const machinePrice = calcContainer && calcContainer.dataset.price ? parseFloat(calcContainer.dataset.price) : 65000;
  const paybackDays = Math.ceil(machinePrice / (dailyNetProfit > 0 ? dailyNetProfit : 1));

  if (document.getElementById('calc-hours-display')) {
    document.getElementById('calc-hours-display').innerText = hours + ' hrs/day';
  }
  if (document.getElementById('calc-rate-display')) {
    document.getElementById('calc-rate-display').innerText = '₹' + ratePerKg.toFixed(1) + '/kg';
  }
  if (document.getElementById('res-daily-output')) {
    document.getElementById('res-daily-output').innerText = dailyOutputKg.toLocaleString() + ' kg (' + (dailyOutputKg / 100).toFixed(1) + ' Qtl)';
  }
  if (document.getElementById('res-daily-profit')) {
    document.getElementById('res-daily-profit').innerText = '₹' + Math.max(0, Math.round(dailyNetProfit)).toLocaleString();
  }
  if (document.getElementById('res-monthly-profit')) {
    document.getElementById('res-monthly-profit').innerText = '₹' + Math.max(0, Math.round(monthlyNetProfit)).toLocaleString();
  }
  if (document.getElementById('res-payback-period')) {
    const months = (paybackDays / 26).toFixed(1);
    document.getElementById('res-payback-period').innerText = `${paybackDays} days (~${months} mo)`;
  }
}

// Hotspot Interactive Annotation
function initHotspots() {
  document.querySelectorAll('.hotspot-marker').forEach(marker => {
    marker.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = marker.getAttribute('data-title');
      const desc = marker.getAttribute('data-desc');
      const infoBox = document.getElementById('hotspot-infobox');
      if (infoBox) {
        infoBox.innerHTML = `
          <div class="flex items-start justify-between">
            <div>
              <span class="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded mb-1">PRECISION ENGINEERING</span>
              <h4 class="font-bold text-slate-900 text-sm md:text-base">${title}</h4>
              <p class="text-xs text-slate-600 mt-1">${desc}</p>
            </div>
            <button onclick="closeHotspotBox()" class="text-slate-400 hover:text-slate-700 ml-3 text-lg font-bold">&times;</button>
          </div>
        `;
        infoBox.classList.remove('hidden');
      }
    });
  });
}

function closeHotspotBox() {
  const infoBox = document.getElementById('hotspot-infobox');
  if (infoBox) infoBox.classList.add('hidden');
}

// B2B Wholesale & Dealership Quotation Modal Logic
function openQuotationModal(modelName, modelCode, basePrice = 65000, moq = '1 Unit Trial / 5 Units Lot') {
  const modal = document.getElementById('quotation-modal');
  if (!modal) return;

  const titleEl = document.getElementById('quote-modal-title');
  if (titleEl) titleEl.innerText = `B2B Wholesale Quotation: ${modelName}`;
  const nameEl = document.getElementById('quote-model-name');
  if (nameEl) nameEl.innerText = modelName;
  const codeEl = document.getElementById('quote-model-code');
  if (codeEl) codeEl.innerText = modelCode;
  const basePriceEl = document.getElementById('quote-base-price');
  if (basePriceEl) basePriceEl.innerText = '₹' + basePrice.toLocaleString();
  
  const gstAmount = Math.round(basePrice * 0.18);
  const gstEl = document.getElementById('quote-gst-amount');
  if (gstEl) gstEl.innerText = `+ ₹${gstAmount.toLocaleString()} (18% ITC Eligible)`;
  const moqEl = document.getElementById('quote-moq-display');
  if (moqEl) moqEl.innerText = moq;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeQuotationModal() {
  const modal = document.getElementById('quotation-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// WhatsApp Dynamic Lead Trigger
function openWhatsAppInquiry(modelName, customMsg = '') {
  const phone = '919827110000'; // Official Kisan Crown hotline
  const message = customMsg || `Hello Kisan Crown team, I am interested in *${modelName}*. Please send me the best factory-direct wholesale price, dealer margin slab, and video demo.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Record Lead to Server CRM API
async function recordLead(leadData) {
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
  } catch (err) {
    console.warn('Lead async sync notice:', err);
  }
}

// Show Toast Message
function showToast(message, type = 'success') {
  let toast = document.getElementById('kc-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'kc-toast';
    toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl shadow-2xl text-white font-bold text-xs sm:text-sm transition-all duration-300 pointer-events-none flex items-center gap-2';
    document.body.appendChild(toast);
  }
  toast.className = `fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl shadow-2xl text-white font-bold text-xs sm:text-sm transition-all duration-300 pointer-events-none flex items-center gap-2 ${
    type === 'success' ? 'bg-emerald-600' : 'bg-slate-900'
  }`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 4000);
}

// Handle Lead Submissions
function handleProductLeadSubmit(e, model) {
  e.preventDefault();
  const name = document.getElementById('prod-lead-name') ? document.getElementById('prod-lead-name').value : '';
  const phone = document.getElementById('prod-lead-phone') ? document.getElementById('prod-lead-phone').value : '';
  const loc = document.getElementById('prod-lead-loc') ? document.getElementById('prod-lead-loc').value : '';
  const cat = document.getElementById('prod-lead-cat') ? document.getElementById('prod-lead-cat').value : 'Direct Ad Inquiry';

  recordLead({
    name,
    phone,
    location: loc,
    model,
    category: cat,
    status: 'New Inquiry'
  });

  showToast('Inquiry received! Forwarding to WhatsApp...');

  const msg = `*New Ad Inquiry - ${model}*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${loc}\n*Category:* ${cat}\n\nPlease share the best ex-factory price and video demo.`;
  setTimeout(() => {
    openWhatsAppInquiry(model, msg);
  }, 500);
}

function handleModalQuotation(e) {
  e.preventDefault();
  const titleEl = document.getElementById('quote-model-name');
  const model = titleEl ? titleEl.innerText : 'Kisan Crown Machinery';
  const name = document.getElementById('modal-lead-name') ? document.getElementById('modal-lead-name').value : '';
  const phone = document.getElementById('modal-lead-phone') ? document.getElementById('modal-lead-phone').value : '';
  const loc = document.getElementById('modal-lead-loc') ? document.getElementById('modal-lead-loc').value : '';

  recordLead({
    name,
    phone,
    location: loc,
    model,
    category: 'Quotation Request',
    status: 'Quote Requested'
  });

  showToast('Quotation generated! Opening WhatsApp...');

  const msg = `*Official B2B Wholesale / Dealership Inquiry*\n*Machine:* ${model}\n*Firm / Contact:* ${name}\n*Phone:* ${phone}\n*District & State:* ${loc}\n\nPlease send the factory-direct wholesale price list, distributor margin slab, and technical specsheet.`;
  closeQuotationModal();
  setTimeout(() => {
    openWhatsAppInquiry(model, msg);
  }, 500);
}

// Secure Admin-Only Visual In-Browser Editor (Only enabled if ?admin_edit=1 is present in URL)
function initAdminToolbar() {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('admin_edit')) return;

  const bar = document.createElement('div');
  bar.id = 'admin-live-toolbar';
  bar.className = 'fixed top-4 right-4 z-50 bg-slate-900/95 text-white border-2 border-amber-400 p-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur';
  bar.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
      <span class="text-xs font-black uppercase text-amber-300">Admin Live Edit Mode</span>
    </div>
    <button id="toggle-editable-btn" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs transition">
      <i class="fa-solid fa-pen-to-square mr-1"></i> Edit Text
    </button>
    <button id="save-page-btn" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition flex items-center gap-1">
      <i class="fa-solid fa-floppy-disk"></i> Save to Disk
    </button>
    <a href="admin.html" class="bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition">
      <i class="fa-solid fa-gauge mr-1"></i> Portal
    </a>
  `;
  document.body.appendChild(bar);

  let isEditing = false;
  const toggleBtn = document.getElementById('toggle-editable-btn');
  const saveBtn = document.getElementById('save-page-btn');

  toggleBtn.addEventListener('click', () => {
    isEditing = !isEditing;
    const editableElements = document.querySelectorAll('h1, h2, h3, h4, p, span, strong, li');
    editableElements.forEach(el => {
      if (bar.contains(el)) return;
      el.contentEditable = isEditing ? 'true' : 'false';
      if (isEditing) {
        el.classList.add('outline-dashed', 'outline-1', 'outline-amber-400');
      } else {
        el.classList.remove('outline-dashed', 'outline-1', 'outline-amber-400');
      }
    });

    toggleBtn.innerHTML = isEditing ? 
      '<i class="fa-solid fa-check mr-1"></i> Done Editing' : 
      '<i class="fa-solid fa-pen-to-square mr-1"></i> Edit Text';
    showToast(isEditing ? 'Click any text on the page to edit it directly!' : 'Editing paused.');
  });

  saveBtn.addEventListener('click', async () => {
    // Clone document, remove toolbar and outline classes before saving
    const docClone = document.documentElement.cloneNode(true);
    const clonedToolbar = docClone.querySelector('#admin-live-toolbar');
    if (clonedToolbar) clonedToolbar.remove();
    const clonedToast = docClone.querySelector('#kc-toast');
    if (clonedToast) clonedToast.remove();
    
    docClone.querySelectorAll('[contenteditable]').forEach(el => {
      el.removeAttribute('contenteditable');
      el.classList.remove('outline-dashed', 'outline-1', 'outline-amber-400');
    });

    const filename = window.location.pathname.split('/').pop() || 'index.html';
    const htmlToSave = '<!DOCTYPE html>\n' + docClone.outerHTML;

    saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    try {
      const res = await fetch('/api/save-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, html: htmlToSave })
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Saved ${filename} successfully to server!`);
      } else {
        alert('Save failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Error saving page: ' + err.message);
    } finally {
      saveBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save to Disk';
    }
  });
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  translations.init();
  initHotspots();
  updateROICalculator();
  if (typeof updateDealerCalculator === 'function') updateDealerCalculator();
  initAdminToolbar();

  window.addEventListener('click', (e) => {
    const qModal = document.getElementById('quotation-modal');
    if (qModal && e.target === qModal) closeQuotationModal();
    closeHotspotBox();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuotationModal();
      closeHotspotBox();
    }
  });
});

// B2B Category Filter for Products Showcase
function filterCategory(categoryName, btnEl) {
  const cards = document.querySelectorAll('.product-catalog-card');
  const tabs = document.querySelectorAll('.category-filter-tab');
  
  tabs.forEach(t => {
    t.classList.remove('bg-emerald-700', 'text-white', 'shadow-md');
    t.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
  });
  if (btnEl) {
    btnEl.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
    btnEl.classList.add('bg-emerald-700', 'text-white', 'shadow-md');
  }

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (categoryName === 'all' || cardCat === categoryName) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// B2B Dealership Calculator
function updateDealerCalculator() {
  const volumeSlider = document.getElementById('dealer-volume-range');
  const marginSelect = document.getElementById('dealer-avg-margin');
  if (!volumeSlider) return;

  const volume = parseInt(volumeSlider.value) || 10;
  const avgMargin = parseInt(marginSelect ? marginSelect.value : 12000) || 12000;
  
  const monthlyProfit = volume * avgMargin;
  const annualProfit = monthlyProfit * 12;
  const itcEstimate = Math.round(volume * 45000 * 0.18); // Estimated GST Input credit

  const volDisplay = document.getElementById('dealer-volume-display');
  if (volDisplay) volDisplay.innerText = `${volume} Machines / Month`;

  const profitDisplay = document.getElementById('dealer-monthly-profit-display');
  if (profitDisplay) profitDisplay.innerText = `₹${monthlyProfit.toLocaleString()}`;

  const annualDisplay = document.getElementById('dealer-annual-profit-display');
  if (annualDisplay) annualDisplay.innerText = `₹${(annualProfit / 100000).toFixed(1)} Lakhs`;

  const itcDisplay = document.getElementById('dealer-itc-display');
  if (itcDisplay) itcDisplay.innerText = `₹${itcEstimate.toLocaleString()}`;
}

// B2B Lead Submission Handlers
function handleB2BLeadSubmit(e) {
  e.preventDefault();
  const firm = document.getElementById('b2b-firm-name') ? document.getElementById('b2b-firm-name').value : '';
  const name = document.getElementById('b2b-contact-name') ? document.getElementById('b2b-contact-name').value : '';
  const phone = document.getElementById('b2b-phone') ? document.getElementById('b2b-phone').value : '';
  const loc = document.getElementById('b2b-location') ? document.getElementById('b2b-location').value : '';
  const gstin = document.getElementById('b2b-gstin') ? document.getElementById('b2b-gstin').value : 'Not provided';
  const category = document.getElementById('b2b-category-select') ? document.getElementById('b2b-category-select').value : 'All Machinery';
  const inquiryType = document.getElementById('b2b-inquiry-type') ? document.getElementById('b2b-inquiry-type').value : 'Dealership Application';

  recordLead({
    firm,
    name,
    phone,
    location: loc,
    gstin,
    category,
    inquiryType,
    status: 'B2B Lead'
  });

  showToast('Dealership inquiry received! Connecting to B2B Desk on WhatsApp...');

  const msg = `*New B2B Dealership / Wholesale RFP*\n\n*Firm / Business:* ${firm}\n*Contact Person:* ${name}\n*WhatsApp / Phone:* ${phone}\n*District & State:* ${loc}\n*GSTIN:* ${gstin}\n*Category of Interest:* ${category}\n*Inquiry Type:* ${inquiryType}\n\nPlease share the official wholesale distributor price list, dealer agreement, and product specsheet.`;
  setTimeout(() => {
    openWhatsAppInquiry('B2B Dealership Desk', msg);
  }, 600);
}

function handleHeroLeadSubmit(e) {
  e.preventDefault();
  const firm = document.getElementById('hero-business-name') ? document.getElementById('hero-business-name').value : '';
  const name = document.getElementById('hero-name') ? document.getElementById('hero-name').value : '';
  const phone = document.getElementById('hero-phone') ? document.getElementById('hero-phone').value : '';
  const loc = document.getElementById('hero-location') ? document.getElementById('hero-location').value : '';
  const machine = document.getElementById('hero-selected-machine') ? document.getElementById('hero-selected-machine').value : 'All Categories';
  const inquiryType = document.querySelector('input[name="buyer-type"]:checked') ? document.querySelector('input[name="buyer-type"]:checked').value : 'B2B Wholesale / Dealership';

  recordLead({
    firm,
    name,
    phone,
    location: loc,
    machine,
    inquiryType,
    status: 'B2B Hero RFP'
  });

  showToast('Wholesale inquiry logged! Connecting with Kisan Crown B2B Desk...');

  const msg = `*B2B Wholesale Inquiry - Kisan Crown™*\n\n*Business Name:* ${firm || 'Agro Dealer'}\n*Contact Person:* ${name}\n*Phone:* ${phone}\n*Location:* ${loc}\n*Machine / Category:* ${machine}\n*Requirement:* ${inquiryType}\n\nPlease send the factory-direct wholesale pricing, MOQ, and dealer catalog.`;
  setTimeout(() => {
    openWhatsAppInquiry(machine, msg);
  }, 500);
}

// Social Share Helper for Ad Landing Pages
function shareProductWhatsApp(productName, customUrl = '') {
  const url = customUrl || window.location.href;
  const text = `Check out *${productName}* from Kisan Crown (GTB International Pvt. Ltd.). Heavy-duty agricultural machinery at factory-direct wholesale rates: ${url}`;
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function copyProductLink() {
  const url = window.location.href;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Product link copied to clipboard! Share it anywhere.', 'success');
    }).catch(() => {
      prompt('Copy this link:', url);
    });
  } else {
    prompt('Copy this link:', url);
  }
}
