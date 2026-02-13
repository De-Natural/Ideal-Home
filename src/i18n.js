import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    "navbar": {
                        "let_property": "Let Your Property",
                        "contact_us": "Contact Us",
                        "nav": {
                            "home": "Home",
                            "about_us": "About Us",
                            "who_we_are": "Who we are",
                            "meet_the_team": "Meet the team",
                            "our_values": "Our Values",
                            "see_what_our_rentals_are_saying": "See what Our Rentals are saying",
                            "all_apartments": "All Apartments",
                            "all_serviced_apartments": "All Serviced Apartments",
                            "business_trips": "Business Trips",
                            "lesuire_and_vacation_apartments": "Leisure and Vacation Apartments",
                            "cooperate_groups": "Cooperate Groups",
                            "contractors_accomodations": "Contractors Accomodations",
                            "property_management": "Property Management"
                        }
                    },
                    "home": {
                        "hero_title": "Find your next apartment, simple, verified, and stress-free.",
                        "hero_desc": "Browse hundreds of apartments, condos, and homes for rent. All listings are verified and ready for you to move in.",
                        "hero_cta": "Find an Apartment"
                    }
                }
            },
            zh: {
                translation: {
                    "navbar": {
                        "let_property": "出租您的房产",
                        "contact_us": "联系我们",
                        "nav": {
                            "home": "首页",
                            "about_us": "关于我们",
                            "who_we_are": "我们是谁",
                            "meet_the_team": "团队介绍",
                            "our_values": "我们的价值观",
                            "see_what_our_rentals_are_saying": "客户评价",
                            "all_apartments": "所有公寓",
                            "all_serviced_apartments": "酒店式公寓",
                            "business_trips": "商务出差",
                            "lesuire_and_vacation_apartments": "休闲度假",
                            "cooperate_groups": "企业团队",
                            "contractors_accomodations": "承包商住宿",
                            "property_management": "物业管理"
                        }
                    },
                    "home": {
                        "hero_title": "寻找您的下一个公寓，简单、经核实且无压力。",
                        "hero_desc": "浏览数百个出租公寓、共管公寓和住宅。所有房源均经过核实，您可以随时入住。",
                        "hero_cta": "寻找公寓"
                    }
                }
            },
            yo: {
                translation: {
                    "navbar": {
                        "let_property": "Fi Ohun-ìní Rẹ Sílẹ̀",
                        "contact_us": "Kàn sí Wa",
                        "nav": {
                            "home": "Ilé",
                            "about_us": "Nipa Wa",
                            "who_we_are": "Ta ni a jẹ",
                            "meet_the_team": "Pade ẹgbẹ naa",
                            "our_values": "Awọn iye wa",
                            "see_what_our_rentals_are_saying": "Wo ohun ti awọn ayalegbe wa sọ",
                            "all_apartments": "Gbogbo awọn iyẹwu",
                            "all_serviced_apartments": "Gbogbo awọn iyẹwu iṣẹ",
                            "business_trips": "Awon irin-ajo iṣowo",
                            "lesuire_and_vacation_apartments": "Awọn iyẹwu isinmi",
                            "cooperate_groups": "Awọn ẹgbẹ ajọṣepọ",
                            "contractors_accomodations": "Awọn ibugbe awọn alagbaṣe",
                            "property_management": "Iṣakoso ohun-ini"
                        }
                    },
                    "home": {
                        "hero_title": "Wa iyẹwu rẹ ti n bọ, rọrun, ti a fọwọsi, ati laisi aapọn.",
                        "hero_desc": "Ṣawari awọn ọgọọgọrun ti awọn iyẹwu, awọn ile nla, ati awọn ile fun iyalo. Gbogbo awọn atokọ jẹ timo ati ṣetan fun ọ lati gbe wọle.",
                        "hero_cta": "Wa Iyẹwu kan"
                    }
                }
            },
            de: {
                translation: {
                    "navbar": {
                        "let_property": "Vermieten Sie Ihre Immobilie",
                        "contact_us": "Kontakt",
                        "nav": {
                            "home": "Startseite",
                            "about_us": "Über uns",
                            "who_we_are": "Wer wir sind",
                            "meet_the_team": "Team",
                            "our_values": "Werte",
                            "see_what_our_rentals_are_saying": "Testimonials",
                            "all_apartments": "Alle Wohnungen",
                            "all_serviced_apartments": "Serviced Apartments",
                            "business_trips": "Geschäftsreisen",
                            "lesuire_and_vacation_apartments": "Urlaubsunterkünfte",
                            "cooperate_groups": "Firmenkunden",
                            "contractors_accomodations": "Monteurzimmer",
                            "property_management": "Hausverwaltung"
                        }
                    },
                    "home": {
                        "hero_title": "Finden Sie Ihr nächstes Apartment, einfach, verifiziert und stressfrei.",
                        "hero_desc": "Durchsuchen Sie hunderte von Wohnungen, Eigentumswohnungen und Häusern zur Miete. Alle Angebote sind verifiziert und bereit für Ihren Einzug.",
                        "hero_cta": "Wohnung finden"
                    }
                }
            },
            tr: {
                translation: {
                    "navbar": {
                        "let_property": "Mülkünüzü Kiralayın",
                        "contact_us": "Bize Ulaşın",
                        "nav": {
                            "home": "Anasayfa",
                            "about_us": "Hakkımızda",
                            "who_we_are": "Biz Kimiz",
                            "meet_the_team": "Ekibimiz",
                            "our_values": "Değerlerimiz",
                            "see_what_our_rentals_are_saying": "Müşteri Yorumları",
                            "all_apartments": "Tüm Daireler",
                            "all_serviced_apartments": "Servisli Daireler",
                            "business_trips": "İş Gezileri",
                            "lesuire_and_vacation_apartments": "Tatil Daireleri",
                            "cooperate_groups": "Kurumsal Gruplar",
                            "contractors_accomodations": "Yüklenici Konaklama",
                            "property_management": "Mülk Yönetimi"
                        }
                    },
                    "home": {
                        "hero_title": "Bir sonraki dairenizi basit, doğrulanmış ve stressiz bir şekilde bulun.",
                        "hero_desc": "Kiralık yüzlerce daire arasından seçim yapın. Tüm ilanlar doğrulanmış ve hazırdır.",
                        "hero_cta": "Daire Bul"
                    }
                }
            },
            it: {
                translation: {
                    "navbar": {
                        "let_property": "Affitta la tua proprietà",
                        "contact_us": "Contattaci",
                        "nav": {
                            "home": "Home",
                            "about_us": "Chi Siamo",
                            "who_we_are": "Chi siamo",
                            "meet_the_team": "Il Team",
                            "our_values": "I Nostri Valori",
                            "see_what_our_rentals_are_saying": "Testimonianze",
                            "all_apartments": "Tutti gli Appartamenti",
                            "all_serviced_apartments": "Appartamenti Serviti",
                            "business_trips": "Viaggi di Lavoro",
                            "lesuire_and_vacation_apartments": "Vacanze e Tempo Libero",
                            "cooperate_groups": "Gruppi Aziendali",
                            "contractors_accomodations": "Alloggi per Imprese",
                            "property_management": "Gestione Immobiliare"
                        }
                    },
                    "home": {
                        "hero_title": "Trova il tuo prossimo appartamento, semplice, verificato e senza stress.",
                        "hero_desc": "Sfoglia centinaia di appartamenti in affitto. Tutti gli annunci sono verificati.",
                        "hero_cta": "Trova Appartamento"
                    }
                }
            },
            ko: {
                translation: {
                    "navbar": {
                        "let_property": "내 숙소 등록하기",
                        "contact_us": "문의하기",
                        "nav": {
                            "home": "홈",
                            "about_us": "회사 소개",
                            "who_we_are": "소개",
                            "meet_the_team": "팀원 소개",
                            "our_values": "가치",
                            "see_what_our_rentals_are_saying": "이용 후기",
                            "all_apartments": "모든 아파트",
                            "all_serviced_apartments": "서비스드 아파트",
                            "business_trips": "비즈니스 여행",
                            "lesuire_and_vacation_apartments": "레저 및 휴가",
                            "cooperate_groups": "기업 그룹",
                            "contractors_accomodations": "업체 숙소",
                            "property_management": "부동산 관리"
                        }
                    },
                    "home": {
                        "hero_title": "간편하고 검증된 당신의 다음 보금자리를 찾아보세요.",
                        "hero_desc": "수백 개의 아파트를 확인하세요. 모든 매물은 검증된 상태입니다.",
                        "hero_cta": "아파트 찾기"
                    }
                }
            }
        }
    });

export default i18n;
