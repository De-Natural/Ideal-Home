import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Flag from 'react-world-flags';

const languages = [
    { code: 'en', name: 'English', flagCode: 'GBR', label: 'UK' },
    { code: 'en-US', name: 'English (US)', flagCode: 'USA', label: 'USA' },
    { code: 'zh', name: 'Chinese', flagCode: 'CHN', label: 'China' },
    { code: 'yo', name: 'Nigeria', flagCode: 'NGA', label: 'Nigeria' },
    { code: 'de', name: 'German', flagCode: 'DEU', label: 'Germany' },
    { code: 'tr', name: 'Turkish', flagCode: 'TUR', label: 'Turkey' },
    { code: 'it', name: 'Italian', flagCode: 'ITA', label: 'Italy' },
    { code: 'ko', name: 'Korean', flagCode: 'KOR', label: 'Korea' },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 pr-2 py-2 bg-white rounded-md hover:bg-gray-50 transition-colors focus:outline-none"
                >
                    <div className="w-8 h-6 overflow-hidden rounded-sm shadow-sm border border-gray-100 flex items-center justify-center bg-gray-50">
                        <Flag code={currentLanguage.flagCode} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-gray-600 transition-transform duration-200">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                </button>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-transparent"
                        onClick={() => setIsOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden border border-gray-100 transform transition-all duration-200">
                        <div className="py-2 max-h-[400px] overflow-y-auto">
                            <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                Select Language
                            </div>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`flex items-center justify-between w-full px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-50 group ${i18n.language === lang.code ? 'bg-blue-50/50 text-[#1C56BA] font-bold' : 'text-gray-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-5 overflow-hidden rounded-sm shadow-sm border border-gray-100 flex-shrink-0 bg-gray-50">
                                            <Flag code={lang.flagCode} className="w-full h-full object-cover" />
                                        </div>
                                        <span>{lang.name}</span>
                                    </div>
                                    {i18n.language === lang.code && (
                                        <div className="w-2 h-2 rounded-full bg-[#1C56BA] shadow-[0_0_8px_rgba(28,86,186,0.5)]"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSelector;
