/*
 * Material You New Tab
 * Copyright (c) 2024-2026 Prem, 2023-2025 XengShi
 * Licensed under the GNU General Public License v3.0 (GPL-3.0)
 * You should have received a copy of the GNU General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 */

// Translation data
const translations = {
    en: en, // English
    pt: pt, // Portuguese-BR (Brazil)
    zh: zh, // Chinese (Simplified)
    zh_TW: zh_TW, // Chinese (Traditional)
    hi: hi, // Hindi
    hu: hu, // Hungarian
    cs: cs, // Czech
    it: it, // Italian
    tr: tr, // Turkish
    bn: bn, // Bengali
    vi: vi, // Vietnamese
    ru: ru, // Russian
    uz: uz, // Uzbek
    es: es, // Spanish
    ja: ja, // Japanese
    ko: ko, // Korean
    idn: idn, // Indonesian
    mr: mr, // Marathi
    fr: fr, // French
    az: az, // Azerbaijani
    sl: sl, // Slovenian
    ne: ne, // Nepali
    ur: ur, // Urdu
    de: de, // German
    fa: fa, // Farsi (Persian)
    ar_SA: ar_SA, // Arabic (Saudi Arabia)
    el: el, // Greek
    ta: ta, // தமிழ்
    th: th, // Thai
    pl: pl, // Polish
    uk: uk, // Ukrainian
    sv: sv, // Swedish
    ota_TR: ota_TR, // Turkish (Arabic script)
    "ota-tr": ota_TR,
};

// Define the width of the menu container for each language
const menuWidths = {
    en: "443px",
    ta: "522px",
    pt: "512px",
    sv: "472px",
    bn: "458px",
    uz: "497px",
    vi: "487px",
    cs: "494px",
    es: "488px",
    hi: "450px",
    mr: "460px",
    hu: "487px",
    ja: "486px",
    ru: "442px",
    it: "479px",
    idn: "477px",
    tr: "472px",
    fr: "517px",
    az: "460px",
    sl: "512px",
    ne: "472px",
    de: "502px",
    fa: "502px",
    ar_SA: "482px",
    el: "497px",
    th: "497px",
    pl: "497px",
    uk: "497px",
    ota_TR: "492px",
    "ota-tr": "492px",
    // Add more languages and widths as needed
};

const numberMappings = {
    "bn": { "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯" },
    "ta": { "0": "௦", "1": "௧", "2": "௨", "3": "௩", "4": "௪", "5": "௫", "6": "௬", "7": "௭", "8": "௮", "9": "௯" },
    "mr": { "0": "०", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९" },
    "ne": { "0": "०", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९" },
    "fa": { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹" },
    "ar_SA": { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "٤", 5: "٥", 6: "٦", 7: "۷", 8: "۸", 9: "۹" },
    "ota_TR": { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹" },
    "ota-tr": { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹" }
    // Add more languages as needed, Ensure it is supported in the fonts
};

const LRM = "\u200E"; // Left-to-Right Mark

function localizeNumbers(text, language) {
    const map = numberMappings[language]; // Get the numeral map for the current language

    // Define languages that use a comma as the decimal separator instead of a dot
    const specialDecimalLanguages = ["cs", "it", "pt", "ru", "tr", "vi", "uz", "es", "ko", "idn", "fr", "az", "sl", "hu", "de", "fa", "el", "uk", "sv", "ota_TR", "ota-tr"]; // Add more languages here as needed

    if (specialDecimalLanguages.includes(language)) {
        // Replace decimal point with a comma for specific languages
        text = text.replace(".", ",");
    }
    // Apply digit localization if the numeral map exists
    if (map) {
        text = text.replace(/\d/g, (digit) => map[digit] || digit);
    }

    // LRM marks, for RTL languages to ensure correct display
    const rtlFlipLanguages = ["ar_SA", "ota", "ota_TR", "ota-tr"];
    if (rtlFlipLanguages.includes(language)) {
        text = `${LRM}${text}${LRM}`;
    }

    return text; // Return the localized text
}

// Right-to-left languages
const rtlLanguages = ["ur", "fa", "ar_SA", "ota", "ota_TR", "ota-tr"];

// Complete list of supported languages
const ALL_LANGUAGES = [
    { code: "ar_SA", name: "Arabic", nativeName: "العربية" },
    { code: "az", name: "Azerbaijani", nativeName: "Azərbaycanca" },
    { code: "bn", name: "Bangla", nativeName: "বাংলা" },
    { code: "zh", name: "Chinese (Simplified)", nativeName: "简体中文" },
    { code: "zh_TW", name: "Chinese (Traditional)", nativeName: "繁體中文" },
    { code: "cs", name: "Czech", nativeName: "Čeština" },
    { code: "en", name: "English", nativeName: "English" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "el", name: "Greek", nativeName: "Ελληνικά" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
    { code: "hu", name: "Hungarian", nativeName: "Magyar" },
    { code: "idn", name: "Indonesian", nativeName: "Bahasa Indonesia" },
    { code: "it", name: "Italian", nativeName: "Italiano" },
    { code: "ja", name: "Japanese", nativeName: "日本語" },
    { code: "ko", name: "Korean", nativeName: "한국어" },
    { code: "mr", name: "Marathi", nativeName: "मराठी" },
    { code: "ne", name: "Nepali", nativeName: "नेपाली" },
    { code: "fa", name: "Persian", nativeName: "فارسی" },
    { code: "pl", name: "Polish", nativeName: "Polski" },
    { code: "pt", name: "Portuguese (Brazil)", nativeName: "Português" },
    { code: "ru", name: "Russian", nativeName: "Русский" },
    { code: "sl", name: "Slovenian", nativeName: "Slovenščina" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "sv", name: "Swedish", nativeName: "Svenska" },
    { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
    { code: "th", name: "Thai", nativeName: "ภาษาไทย" },
    { code: "tr", name: "Turkish", nativeName: "Türkçe" },
    { code: "ota-tr", name: "Turkish (Arabic script)", nativeName: "عثمانلیجه (تورکجه)" },
    { code: "uk", name: "Ukrainian", nativeName: "Українська" },
    { code: "ur", name: "Urdu", nativeName: "اردو" },
    { code: "uz", name: "Uzbek", nativeName: "O'zbek" },
    { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" }
];

// Function to apply the language to the page
function applyLanguage(lang) {
    if (lang === "ota_TR") {
        lang = "ota-tr";
    }
    document.title = translations[lang]?.newTabTitle || translations["en"].newTabTitle;

    // Mapping of text elements and their translation keys
    const translationMap = [
        "feedback",
        "resetsettings",
        "shortcutsText",
        "enableShortcutsText",
        "editShortcutsText",
        "shortcutsInfoText",
        "editShortcutsList",
        "editShortcutsListInfo",
        "adaptiveIconText",
        "adaptiveIconInfoText",
        "ai_tools_button",
        "enable_ai_tools",
        "aiToolsSettingsText",
        "aiToolsSettingsInfo",
        "googleAppsMenuText",
        "googleAppsMenuInfo",
        "todoListText",
        "todoListInfo",
        "fahrenheitCelsiusCheckbox",
        "fahrenheitCelsiusText",
        "minMaxTempText",
        "minMaxTempSubText",
        "hideWeatherTitle",
        "hideWeatherInfo",
        "hideWeatherBox",
        "hideWeatherBoxInfo",
        "micIconTitle",
        "micIconInfo",
        "aiModeIconTitle",
        "aiModeIconInfo",
        "hideSearchWith",
        "hideSearchWithInfo",
        "motivationalQuotesText",
        "motivationalQuotesInfo",
        "newQuoteOnRefreshText",
        "newQuoteOnRefreshInfo",
        "search_suggestions_button",
        "search_suggestions_text",
        "hideClockBox",
        "hideClockBoxInfo",
        "digitalclocktitle",
        "digitalclockinfo",
        "timeformattitle",
        "timeformatinfo",
        "greetingtitle",
        "greetinginfo",
        "userTextTitle",
        "userTextInfo",
        "fontTitle",
        "fontDesc",
        "useproxytitletext",
        "useproxyText",
        "ProxyText",
        "ProxySubtext",
        "HostproxyButton",
        "UserLocText",
        "UserLocSubtext",
        "useGPS",
        "useGPSInfo",
        "PrivacyPolicy",
        "WeatherApiText",
        "WeatherApiSubtext",
        "LearnMoreButton",
        "saveAPI",
        "enterBtn",
        "ai_tools",
        "defaultEngine",
        "googleEngine",
        "duckEngine",
        "bingEngine",
        "braveEngine",
        "youtubeEngine",
        "gImagesEngine",
        "redditEngine",
        "wikipediaEngine",
        "quoraEngine",
        "chatGPT",
        "gemini",
        "copilot",
        "claude",
        "grok",
        "qwen",
        "perplexity",
        "deepseek",
        "metaAI",
        'firefly',
        "github",
        "googleAppsHover",
        "todoListHover",
        "uploadWallpaperText",
        "backupText",
        "restoreText",
        "rangColor",
        "bookmarksText",
        "bookmarksInfo",
        "bookmarksHeading",
        "bookmarkSortBy",
        "sortAlphabetical",
        "sortTimeAdded",
        "bookmarkViewAs",
        "bookmarkViewGrid",
        "bookmarkViewList",
        "editBookmarkHeading",
        "lightThemed",
        "darkThemed",
        "systemThemed",
        "switchSearchModes",
        "switchSearchModesInfo",
        "adjustZoom",
        "changeBrowserTheme",
        "updateFirefoxHomepage",
        "dontShowTips",
        "aiSettingsIntro",
        "resetAISettingsBtn",
        "opacityTitle",
        "adjustOpacityDesc",
        "footerToastTitle",
        "footerToastMessage",
        "personalizationSectionTitle",
        "clockSectionTitle",
        "searchSectionTitle",
        "weatherSectionTitle",
        "appearanceSectionTitle",
        "settingsSectionTitle",
        "iconFileTooLargeMessage",
        "iconStorageQuotaMessage"
    ];

    // Specific mapping for placeholders
    const placeholderMap = [
        { id: "userLoc", key: "userLoc" },
        { id: "userAPI", key: "userAPI" },
        { id: "searchQ", key: "searchPlaceholder" },
        { id: "todoInput", key: "todoPlaceholder" },
        { id: "bookmarkSearch", key: "bookmarkSearch" },
        { id: "editBookmarkName", key: "editBookmarkName" },
        { id: "editBookmarkURL", key: "editBookmarkURL" }
    ];

    // Mapping of elements and their different translation keys
    const elementsMap = [
        { id: "todoListHeading", key: "todoListText" },
        { id: "defaultEngineDD", key: "defaultEngine" },
        { id: "googleEngineDD", key: "googleEngine" },
        { id: "duckEngineDD", key: "duckEngine" },
        { id: "bingEngineDD", key: "bingEngine" },
        { id: "braveEngineDD", key: "braveEngine" },
        { id: "youtubeEngineDD", key: "youtubeEngine" },
        { id: "gImagesEngineDD", key: "gImagesEngine" },
        { id: "redditEngineDD", key: "redditEngine" },
        { id: "wikipediaEngineDD", key: "wikipediaEngine" },
        { id: "quoraEngineDD", key: "quoraEngine" },
        { id: "bookmarksHover", key: "bookmarksHeading" },
        { id: "saveproxy", key: "saveAPI" },
        { id: "saveLoc", key: "saveAPI" },
        { id: "saveBookmarkChanges", key: "saveAPI" },
        { id: "cancelBookmarkEdit", key: "cancelText" },
        { id: "aiSettingsHeader", key: "aiToolsSettingsText" },
        { id: "saveAISettingsBtn", key: "saveAPI" },
        { id: "editBookmarkNameLabel", key: "editBookmarkName" },
        { id: "editBookmarkURLLabel", key: "editBookmarkURL" },
        { id: "shortcutsSectionTitle", key: "shortcutsText" },
    ];

    // Function to apply translations
    function applyTranslations(items, isPlaceholder) {
        items.forEach(item => {
            // Get the element by its ID
            const element = document.getElementById(item.id || item);
            if (element) {
                // Use "key" if defined, otherwise use "id" as the translation key
                const key = item.key || item;
                // Get the translation, fallback to English if not found in the current language
                const translation = translations[lang]?.[key] || translations["en"]?.[key];

                // Apply the translation to either placeholder or innerText
                if (isPlaceholder) {
                    element.placeholder = translation;
                } else {
                    element.innerText = translation;
                }
            }
        });
    }

    // Apply the translations
    applyTranslations(placeholderMap, true);   // For placeholders
    applyTranslations(elementsMap, false);     // For innerTexts with different IDs and keys
    applyTranslations(translationMap, false);  // For innerTexts with same ID and keys

    // For userText
    const userTextDiv = document.getElementById("userText");
    if (translations[lang]) {
        const placeholder = translations[lang]?.userText || translations["en"].userText;
        userTextDiv.dataset.placeholder = placeholder; // Update the placeholder in data attribute
        // Only set the text content if there's nothing in localStorage
        if (!localStorage.getItem("userText")) {
            userTextDiv.innerText = placeholder;
        }
    }

    // Update placeholders on already-rendered shortcut inputs
    document.querySelectorAll(".shortcutSettingsEntry .shortcutName")
        .forEach(el => el.placeholder = translations[lang]?.shortcutInputName  || translations["en"].shortcutInputName);
    document.querySelectorAll(".shortcutSettingsEntry .URL")
        .forEach(el => el.placeholder = translations[lang]?.shortcutInputUrl   || translations["en"].shortcutInputUrl);
    document.querySelectorAll(".shortcutSettingsEntry .iconURL")
        .forEach(el => el.placeholder = translations[lang]?.shortcutInputIcon  || translations["en"].shortcutInputIcon);

    // Update hover text for #menuCloseButton
    const menuCloseButton = document.getElementById("menuCloseButton");
    if (menuCloseButton) {
        const hoverText = translations[lang]?.menuCloseText || translations["en"].menuCloseText;
        menuCloseButton.setAttribute("data-lang", hoverText);
    }

    // Update the width of the menu container based on the language
    const menuCont = document.querySelector(".menuBar .menuCont");
    if (menuCont) {
        menuCont.style.width = menuWidths[lang] || menuWidths["en"];
        let widthh = window.innerWidth / parseInt(menuWidths[lang] || menuWidths["en"]);
        if (window.innerWidth < 522) {
            let menuStyle = document.getElementById("menuStyle") || document.createElement("style");
            menuStyle.id = "menuStyle";
            menuStyle.innerHTML = `
                .menuCont {
                    scale: ${widthh} !important;
                    height: ${(100 / widthh).toString()}dvh !important;
                    transform-origin: top right !important;
                }
            `;
            document.head.append(menuStyle);
        }
    }

    // Function to dynamically load Google Fonts
    function loadFont(fontUrl) {
        if (!document.querySelector(`link[href="${fontUrl}"]`)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = fontUrl;
            document.head.appendChild(link);
        }
    }

    // Function to load and apply global font stack seamlessly across languages
    function updateGlobalFontStack(targetLang) {
        const root = document.documentElement;
        const currentLang = targetLang || getLanguageStatus("selectedLanguage") || "en";
        const savedUserFont = localStorage.getItem("selectedFont");
        const savedCustomFont = localStorage.getItem("customFontName");

        let activeFontName = savedUserFont && savedUserFont !== "default"
            ? (savedUserFont === "custom" ? savedCustomFont : savedUserFont)
            : null;

        // Ensure active Google font stylesheet is dynamically loaded immediately without reload
        if (activeFontName && savedUserFont !== "system") {
            if (typeof window.loadGoogleFont === "function") {
                window.loadGoogleFont(activeFontName);
            } else {
                const fontId = `google-font-${activeFontName.replace(/\s+/g, "-").toLowerCase()}`;
                if (!document.getElementById(fontId)) {
                    const link = document.createElement("link");
                    link.id = fontId;
                    link.rel = "stylesheet";
                    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(activeFontName.trim().replace(/ /g, "+"))}:wght@300;400;500;600;700&display=swap`;
                    document.head.appendChild(link);
                }
            }
        }

        const defaultStack = "'poppins', 'Poppins', sans-serif";
        const systemStack = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

        let userStack = defaultStack;
        if (activeFontName) {
            if (savedUserFont === "system") {
                userStack = systemStack;
            } else {
                userStack = `"${activeFontName}", ${defaultStack}`;
            }
        }

        // Augment stack for language-specific scripts
        let fullStack = userStack;
        if (currentLang === "vi") {
            loadFont("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap");
            fullStack = activeFontName ? `${userStack}, "Be Vietnam Pro"` : `"Be Vietnam Pro", ${userStack}`;
        } else if (currentLang === "ur" || currentLang === "ar_SA" || currentLang.startsWith("ota")) {
            loadFont("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap");
            fullStack = activeFontName ? `${userStack}, "Noto Sans Arabic"` : `"Noto Sans Arabic", ${userStack}`;
        } else if (currentLang === "fa") {
            loadFont("https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap");
            fullStack = activeFontName ? `${userStack}, "Vazirmatn"` : `"Vazirmatn", ${userStack}`;
        }

        root.style.setProperty("--main-font-family", fullStack);

        // Clear any inline fontFamily override on quotesContainer so it cleanly inherits --main-font-family
        const quotesText = document.querySelector(".quotesContainer");
        if (quotesText) {
            quotesText.style.fontFamily = "";
        }

        // Update font badge in font card if available
        const fontBadge = document.getElementById("fontActiveBadge");
        if (fontBadge) {
            if (savedUserFont === "system") {
                fontBadge.textContent = "System Default";
            } else if (savedUserFont === "custom" && savedCustomFont) {
                fontBadge.textContent = `${savedCustomFont} (Custom)`;
            } else if (activeFontName) {
                fontBadge.textContent = activeFontName;
            } else {
                fontBadge.textContent = "Poppins (Default)";
            }
        }

        // Re-render font grid if available to keep active states synced
        if (typeof window.renderFontGrid === "function") {
            window.renderFontGrid();
        }
    }
    window.updateGlobalFontStack = updateGlobalFontStack;

    // Apply font stack for current language
    updateGlobalFontStack(lang);

    // Apply the direction attribute to specific selectors for RTL languages
    const isRTL = rtlLanguages.includes(lang);
    const rtlSelectors = [".topDiv", ".searchbar", ".searchWithCont", ".resultBox", ".quotesCont",
        ".leftDiv", ".shortcutsContainer", ".page", "#prompt-modal-box", ".todo-container",
        ".bookmark-search-container", ".bookmark-controls-container", "#editBookmarkModal", ".liquidGlass-toast"];

    rtlSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.setAttribute("dir", isRTL ? "rtl" : "ltr");
        });
    });

    // Update feelsLike element styles for RTL languages
    const feelsLikeElement = document.getElementById("feelsLike");
    feelsLikeElement.style.left = isRTL ? "12px" : "";
    feelsLikeElement.style.paddingRight = isRTL ? "43px" : "";
    feelsLikeElement.style.width = isRTL ? "calc(100% - 12px)" : "";
    feelsLikeElement.style.textAlign = isRTL ? "right" : "left";

    const quotesContainer = document.querySelector(".quotesContainer");
    if (quotesContainer) {
        quotesContainer.style.fontFamily = "";
    }

    // Save the selected language in localStorage
    document.documentElement.lang = lang;
    saveLanguageStatus("selectedLanguage", lang);

    // Update active badge in language card header
    const activeBadge = document.getElementById("languageActiveBadge");
    if (activeBadge) {
        const matched = ALL_LANGUAGES.find(l => l.code === lang);
        if (matched) {
            activeBadge.textContent = `${matched.nativeName} (${matched.name})`;
        } else {
            activeBadge.textContent = lang;
        }
    }

    // Sync legacy select element if present
    const legacySelect = document.getElementById("languageSelector");
    if (legacySelect && legacySelect.value !== lang) {
        legacySelect.value = lang;
    }
}


// Initialize language selector expandable UI
function initLanguageUI() {
    const card = document.getElementById("languageSectionCard");
    const header = document.getElementById("languageCardHeader");
    const searchInput = document.getElementById("languageSearchInput");
    const clearBtn = document.getElementById("clearLanguageSearchBtn");
    const grid = document.getElementById("languageGrid");
    const legacySelect = document.getElementById("languageSelector");

    if (!card || !grid) return;

    // Toggle expansion
    if (header) {
        header.setAttribute("aria-expanded", card.classList.contains("open") ? "true" : "false");
        header.addEventListener("click", () => {
            const isOpen = card.classList.toggle("open");
            header.setAttribute("aria-expanded", isOpen ? "true" : "false");
            if (isOpen && searchInput) {
                setTimeout(() => searchInput.focus(), 150);
            }
        });
    }

    // Render language grid
    function renderLanguageGrid() {
        grid.innerHTML = "";
        const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
        const currentLang = getLanguageStatus("selectedLanguage") || "en";

        const filtered = ALL_LANGUAGES.filter(item => {
            if (!query) return true;
            return item.name.toLowerCase().includes(query) ||
                   item.nativeName.toLowerCase().includes(query) ||
                   item.code.toLowerCase().includes(query);
        });

        filtered.forEach(item => {
            const el = document.createElement("button");
            el.type = "button";
            const isActive = item.code === currentLang;
            el.className = `languageItem ${isActive ? "active" : ""}`;
            el.setAttribute("data-lang-code", item.code);

            el.innerHTML = `
                <div class="languageItemNative">${item.nativeName}</div>
                <div class="languageItemEnglish">${item.name}</div>
            `;

            el.addEventListener("click", () => {
                saveLanguageStatus("selectedLanguage", item.code);
                sessionStorage.setItem("reopenSettingsMenu", "true");
                sessionStorage.setItem("reopenLanguageCard", "true");
                window.location.reload();
            });

            grid.appendChild(el);
        });
    }

    // Restore open state after reload if language was just changed
    if (sessionStorage.getItem("reopenLanguageCard") === "true") {
        sessionStorage.removeItem("reopenLanguageCard");
        if (card) {
            card.classList.add("open");
            if (header) {
                header.setAttribute("aria-expanded", "true");
            }
        }
    }

    // Search filter listener
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            if (clearBtn) {
                clearBtn.style.display = searchInput.value ? "flex" : "none";
            }
            renderLanguageGrid();
        });
    }

    // Clear search button listener
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                clearBtn.style.display = "none";
                searchInput.focus();
                renderLanguageGrid();
            }
        });
    }

    // Legacy select change listener for compatibility
    if (legacySelect) {
        legacySelect.addEventListener("change", (e) => {
            saveLanguageStatus("selectedLanguage", e.target.value);
            sessionStorage.setItem("reopenSettingsMenu", "true");
            window.location.reload();
        });
    }

    renderLanguageGrid();
}

// Function to apply the language when the page loads
function initLanguage() {
    const savedLanguage = getLanguageStatus("selectedLanguage") || "en";
    const legacySelect = document.getElementById("languageSelector");
    if (legacySelect) {
        legacySelect.value = savedLanguage;
    }
    applyLanguage(savedLanguage);
    initLanguageUI();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguage);
} else {
    initLanguage();
}

// Fallback window.onload for total safety
window.addEventListener("load", () => {
    const savedLanguage = getLanguageStatus("selectedLanguage") || "en";
    const legacySelect = document.getElementById("languageSelector");
    if (legacySelect && legacySelect.value !== savedLanguage) {
        legacySelect.value = savedLanguage;
    }
    const badge = document.getElementById("languageActiveBadge");
    if (badge && (!badge.textContent || badge.textContent === "Language")) {
        const matched = ALL_LANGUAGES.find(l => l.code === savedLanguage);
        if (matched) badge.textContent = `${matched.nativeName} (${matched.name})`;
    }
});

// Function to save the language status in localStorage
function saveLanguageStatus(key, languageStatus) {
    localStorage.setItem(key, languageStatus);
}

// Function to get the language status from localStorage
function getLanguageStatus(key) {
    let status = localStorage.getItem(key);
    if (key === "selectedLanguage" && status === "ota_TR") {
        status = "ota-tr";
        localStorage.setItem(key, "ota-tr");
    }
    return status;
}
