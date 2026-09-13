/* 
 * Material You New Tab
 * Copyright (c) 2024-2026 Prem, 2023-2025 XengShi
 * Licensed under the GNU General Public License v3.0 (GPL-3.0)
 * You should have received a copy of the GNU General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 */

(function () {
    const root = document.documentElement;
    const defaultFontStack = "'poppins', 'Poppins', sans-serif";
    const systemFontStack = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

    // Comprehensive curated Google Fonts library
    const PRESET_FONTS = [
        // Default
        { id: "default", name: "Poppins", category: "Default", type: "Sans-Serif" },
        { id: "system", name: "System Default", category: "Native", type: "Sans-Serif" },

        // Sans-Serif
        { id: "K2D", name: "K2D", category: "Geometric Sans", type: "Sans-Serif" },
        { id: "Inter", name: "Inter", category: "Modern", type: "Sans-Serif" },
        { id: "Roboto", name: "Roboto", category: "Google Sans", type: "Sans-Serif" },
        { id: "Outfit", name: "Outfit", category: "Geometric", type: "Sans-Serif" },
        { id: "Montserrat", name: "Montserrat", category: "Bold", type: "Sans-Serif" },
        { id: "Open Sans", name: "Open Sans", category: "Neutral", type: "Sans-Serif" },
        { id: "Lato", name: "Lato", category: "Warm", type: "Sans-Serif" },
        { id: "Plus Jakarta Sans", name: "Plus Jakarta Sans", category: "Premium", type: "Sans-Serif" },
        { id: "Lexend", name: "Lexend", category: "Readable", type: "Sans-Serif" },
        { id: "Nunito", name: "Nunito", category: "Rounded", type: "Sans-Serif" },
        { id: "Nunito Sans", name: "Nunito Sans", category: "Clean", type: "Sans-Serif" },
        { id: "Raleway", name: "Raleway", category: "Artistic", type: "Sans-Serif" },
        { id: "Work Sans", name: "Work Sans", category: "Clean", type: "Sans-Serif" },
        { id: "Quicksand", name: "Quicksand", category: "Soft", type: "Sans-Serif" },
        { id: "Rubik", name: "Rubik", category: "Friendly", type: "Sans-Serif" },
        { id: "Ubuntu", name: "Ubuntu", category: "Canonical", type: "Sans-Serif" },
        { id: "Figtree", name: "Figtree", category: "Friendly", type: "Sans-Serif" },
        { id: "Manrope", name: "Manrope", category: "Geometric", type: "Sans-Serif" },
        { id: "DM Sans", name: "DM Sans", category: "Low-Contrast", type: "Sans-Serif" },
        { id: "Public Sans", name: "Public Sans", category: "Formal", type: "Sans-Serif" },
        { id: "Urbanist", name: "Urbanist", category: "Modern", type: "Sans-Serif" },
        { id: "Jost", name: "Jost", category: "Futura-like", type: "Sans-Serif" },
        { id: "Heebo", name: "Heebo", category: "Compact", type: "Sans-Serif" },
        { id: "Kanit", name: "Kanit", category: "Dynamic", type: "Sans-Serif" },
        { id: "Syne", name: "Syne", category: "Display Sans", type: "Sans-Serif" },
        { id: "Barlow", name: "Barlow", category: "Grotesque", type: "Sans-Serif" },
        { id: "Barlow Condensed", name: "Barlow Condensed", category: "Narrow", type: "Sans-Serif" },
        { id: "Cabin", name: "Cabin", category: "Humanist", type: "Sans-Serif" },
        { id: "Questrial", name: "Questrial", category: "Geometric", type: "Sans-Serif" },
        { id: "Asap", name: "Asap", category: "Rounded", type: "Sans-Serif" },
        { id: "Dosis", name: "Dosis", category: "Rounded Light", type: "Sans-Serif" },
        { id: "Karla", name: "Karla", category: "Quirky", type: "Sans-Serif" },
        { id: "Josefin Sans", name: "Josefin Sans", category: "Vintage", type: "Sans-Serif" },
        { id: "Overpass", name: "Overpass", category: "Highway", type: "Sans-Serif" },
        { id: "Oxygen", name: "Oxygen", category: "KDE", type: "Sans-Serif" },
        { id: "Titillium Web", name: "Titillium Web", category: "Tech", type: "Sans-Serif" },
        { id: "PT Sans", name: "PT Sans", category: "Standard", type: "Sans-Serif" },
        { id: "Archivo", name: "Archivo", category: "Strong", type: "Sans-Serif" },
        { id: "Sora", name: "Sora", category: "Crisp", type: "Sans-Serif" },
        { id: "Red Hat Display", name: "Red Hat Display", category: "Tech", type: "Sans-Serif" },
        { id: "Bricolage Grotesque", name: "Bricolage Grotesque", category: "Expressive", type: "Sans-Serif" },
        { id: "Schibsted Grotesk", name: "Schibsted Grotesk", category: "Editorial", type: "Sans-Serif" },
        { id: "Space Grotesk", name: "Space Grotesk", category: "Futuristic", type: "Sans-Serif" },
        { id: "Spline Sans", name: "Spline Sans", category: "Neutral", type: "Sans-Serif" },
        { id: "Epilogue", name: "Epilogue", category: "Variable", type: "Sans-Serif" },
        { id: "Mulish", name: "Mulish", category: "Minimal", type: "Sans-Serif" },
        { id: "Assistant", name: "Assistant", category: "Clean", type: "Sans-Serif" },
        { id: "Hind", name: "Hind", category: "Readable", type: "Sans-Serif" },
        { id: "Exo 2", name: "Exo 2", category: "Sci-Fi", type: "Sans-Serif" },
        { id: "Varela Round", name: "Varela Round", category: "Rounded", type: "Sans-Serif" },
        { id: "Comfortaa", name: "Comfortaa", category: "Curvy", type: "Sans-Serif" },
        { id: "ABeeZee", name: "ABeeZee", category: "Friendly", type: "Sans-Serif" },
        { id: "Abel", name: "Abel", category: "Narrow", type: "Sans-Serif" },
        { id: "Almarai", name: "Almarai", category: "Clean", type: "Sans-Serif" },
        { id: "Sen", name: "Sen", category: "Balanced", type: "Sans-Serif" },

        // Serif
        { id: "Playfair Display", name: "Playfair Display", category: "Editorial", type: "Serif" },
        { id: "Merriweather", name: "Merriweather", category: "Reading", type: "Serif" },
        { id: "Lora", name: "Lora", category: "Contemporary", type: "Serif" },
        { id: "Cinzel", name: "Cinzel", category: "Roman Classic", type: "Serif" },
        { id: "Cinzel Decorative", name: "Cinzel Decorative", category: "Ornate", type: "Serif" },
        { id: "Bodoni Moda", name: "Bodoni Moda", category: "Luxury", type: "Serif" },
        { id: "EB Garamond", name: "EB Garamond", category: "Classic", type: "Serif" },
        { id: "Libre Baskerville", name: "Libre Baskerville", category: "Traditional", type: "Serif" },
        { id: "Cormorant Garamond", name: "Cormorant Garamond", category: "Elegant", type: "Serif" },
        { id: "Cormorant", name: "Cormorant", category: "Fine Art", type: "Serif" },
        { id: "Bitter", name: "Bitter", category: "Slab Serif", type: "Serif" },
        { id: "PT Serif", name: "PT Serif", category: "Universal", type: "Serif" },
        { id: "Crimson Text", name: "Crimson Text", category: "Book", type: "Serif" },
        { id: "Crimson Pro", name: "Crimson Pro", category: "Refined", type: "Serif" },
        { id: "Newsreader", name: "Newsreader", category: "Longform", type: "Serif" },
        { id: "Spectral", name: "Spectral", category: "Screen Reading", type: "Serif" },
        { id: "Fraunces", name: "Fraunces", category: "Wonky Oldstyle", type: "Serif" },
        { id: "Prata", name: "Prata", category: "Didone", type: "Serif" },
        { id: "DM Serif Display", name: "DM Serif Display", category: "High Contrast", type: "Serif" },
        { id: "Arvo", name: "Arvo", category: "Geometric Slab", type: "Serif" },
        { id: "Rokkitt", name: "Rokkitt", category: "Sturdy Slab", type: "Serif" },
        { id: "Vollkorn", name: "Vollkorn", category: "Quiet", type: "Serif" },
        { id: "Baskervville", name: "Baskervville", category: "Revival", type: "Serif" },
        { id: "Zilla Slab", name: "Zilla Slab", category: "Mozilla", type: "Serif" },
        { id: "Cardo", name: "Cardo", category: "Academic", type: "Serif" },
        { id: "Domine", name: "Domine", category: "Web Digest", type: "Serif" },
        { id: "Castoro", name: "Castoro", category: "Literary", type: "Serif" },
        { id: "Alegreya", name: "Alegreya", category: "Rhythmic", type: "Serif" },
        { id: "Faustina", name: "Faustina", category: "Chiseled", type: "Serif" },
        { id: "Frank Ruhl Libre", name: "Frank Ruhl Libre", category: "Modern Classic", type: "Serif" },
        { id: "Marcellus", name: "Marcellus", category: "Inscriptional", type: "Serif" },
        { id: "Alice", name: "Alice", category: "Old-fashioned", type: "Serif" },
        { id: "Quattrocento", name: "Quattrocento", category: "Renaissance", type: "Serif" },
        { id: "Yeseva One", name: "Yeseva One", category: "Feminine Serif", type: "Serif" },
        { id: "Calistoga", name: "Calistoga", category: "Cheer Slab", type: "Serif" },

        // Monospace
        { id: "JetBrains Mono", name: "JetBrains Mono", category: "Developer", type: "Monospace" },
        { id: "Fira Code", name: "Fira Code", category: "Ligatures", type: "Monospace" },
        { id: "Inconsolata", name: "Inconsolata", category: "Crisp", type: "Monospace" },
        { id: "Roboto Mono", name: "Roboto Mono", category: "Structured", type: "Monospace" },
        { id: "Space Mono", name: "Space Mono", category: "Eclectic", type: "Monospace" },
        { id: "IBM Plex Mono", name: "IBM Plex Mono", category: "Industrial", type: "Monospace" },
        { id: "Source Code Pro", name: "Source Code Pro", category: "Adobe Code", type: "Monospace" },
        { id: "VT323", name: "VT323", category: "Terminal 80s", type: "Monospace" },
        { id: "Share Tech Mono", name: "Share Tech Mono", category: "Matrix Style", type: "Monospace" },
        { id: "DM Mono", name: "DM Mono", category: "Clean Monospace", type: "Monospace" },
        { id: "PT Mono", name: "PT Mono", category: "Technical", type: "Monospace" },
        { id: "Overpass Mono", name: "Overpass Mono", category: "Utility", type: "Monospace" },
        { id: "Courier Prime", name: "Courier Prime", category: "Screenplay", type: "Monospace" },
        { id: "Ubuntu Mono", name: "Ubuntu Mono", category: "System Console", type: "Monospace" },
        { id: "Cutive Mono", name: "Cutive Mono", category: "Typewriter", type: "Monospace" },
        { id: "Red Hat Mono", name: "Red Hat Mono", category: "Technical", type: "Monospace" },

        // Handwriting & Script
        { id: "Caveat", name: "Caveat", category: "Quick Notes", type: "Handwriting" },
        { id: "Pacifico", name: "Pacifico", category: "Surfer Brush", type: "Handwriting" },
        { id: "Dancing Script", name: "Dancing Script", category: "Bouncy", type: "Handwriting" },
        { id: "Satisfy", name: "Satisfy", category: "Brush Pen", type: "Handwriting" },
        { id: "Sacramento", name: "Sacramento", category: "Monoline Script", type: "Handwriting" },
        { id: "Great Vibes", name: "Great Vibes", category: "Calligraphy", type: "Handwriting" },
        { id: "Indie Flower", name: "Indie Flower", category: "Carefree", type: "Handwriting" },
        { id: "Shadows Into Light", name: "Shadows Into Light", category: "Spirited", type: "Handwriting" },
        { id: "Permanent Marker", name: "Permanent Marker", category: "Marker Pen", type: "Handwriting" },
        { id: "Yellowtail", name: "Yellowtail", category: "Retro Script", type: "Handwriting" },
        { id: "Marck Script", name: "Marck Script", category: "Soft Script", type: "Handwriting" },
        { id: "Parisienne", name: "Parisienne", category: "French Flair", type: "Handwriting" },
        { id: "Courgette", name: "Courgette", category: "Medium Brush", type: "Handwriting" },
        { id: "Gloria Hallelujah", name: "Gloria Hallelujah", category: "Playful Chalk", type: "Handwriting" },
        { id: "Tangerine", name: "Tangerine", category: "Calligraphic", type: "Handwriting" },
        { id: "Amatic SC", name: "Amatic SC", category: "Hand-drawn Tall", type: "Handwriting" },
        { id: "Architects Daughter", name: "Architects Daughter", category: "Architect Hand", type: "Handwriting" },
        { id: "Kaushan Script", name: "Kaushan Script", category: "Dynamic Brush", type: "Handwriting" },
        { id: "Kalam", name: "Kalam", category: "Ballpoint", type: "Handwriting" },
        { id: "Bad Script", name: "Bad Script", category: "Loose", type: "Handwriting" },
        { id: "Homemade Apple", name: "Homemade Apple", category: "Fountain Pen", type: "Handwriting" },
        { id: "Reenie Beanie", name: "Reenie Beanie", category: "Ballpoint Quick", type: "Handwriting" },
        { id: "Alex Brush", name: "Alex Brush", category: "Flowing", type: "Handwriting" },
        { id: "Allura", name: "Allura", category: "Formal Script", type: "Handwriting" },

        // Display
        { id: "Bebas Neue", name: "Bebas Neue", category: "Tall Headline", type: "Display" },
        { id: "Oswald", name: "Oswald", category: "Condensed", type: "Display" },
        { id: "Anton", name: "Anton", category: "Heavy Impact", type: "Display" },
        { id: "Bangers", name: "Bangers", category: "Comic Superhero", type: "Display" },
        { id: "Righteous", name: "Righteous", category: "Art Deco 70s", type: "Display" },
        { id: "Lobster", name: "Lobster", category: "Bold Retro", type: "Display" },
        { id: "Lobster Two", name: "Lobster Two", category: "Upright Retro", type: "Display" },
        { id: "Press Start 2P", name: "Press Start 2P", category: "8-Bit Arcade", type: "Display" },
        { id: "Silkscreen", name: "Silkscreen", category: "Pixel Font", type: "Display" },
        { id: "Fredoka", name: "Fredoka", category: "Bubble Modern", type: "Display" },
        { id: "Alfa Slab One", name: "Alfa Slab One", category: "Ultra Bold", type: "Display" },
        { id: "Abril Fatface", name: "Abril Fatface", category: "Fashion Poster", type: "Display" },
        { id: "Shrikhand", name: "Shrikhand", category: "Loud & Proud", type: "Display" },
        { id: "Creepster", name: "Creepster", category: "Spooky Horror", type: "Display" },
        { id: "Monoton", name: "Monoton", category: "Disco Lines", type: "Display" },
        { id: "Bungee", name: "Bungee", category: "Urban Signage", type: "Display" },
        { id: "Titan One", name: "Titan One", category: "Heavy Sans", type: "Display" },
        { id: "Staatliches", name: "Staatliches", category: "Bauhaus", type: "Display" },
        { id: "Russo One", name: "Russo One", category: "Bold Geometric", type: "Display" },
        { id: "Fjalla One", name: "Fjalla One", category: "Poster Display", type: "Display" },
        { id: "Teko", name: "Teko", category: "Condensed Bold", type: "Display" },
        { id: "Special Elite", name: "Special Elite", category: "Typewriter Vintage", type: "Display" },
        { id: "Lilita One", name: "Lilita One", category: "Chubby Fat", type: "Display" },
        { id: "Unbounded", name: "Unbounded", category: "Ultra Wide", type: "Display" },
        { id: "Orbitron", name: "Orbitron", category: "Cyberpunk", type: "Display" },
        { id: "Rajdhani", name: "Rajdhani", category: "Mecha Modular", type: "Display" },
        { id: "Michroma", name: "Michroma", category: "Square Tech", type: "Display" },
        { id: "Tourney", name: "Tourney", category: "Varsity Jersey", type: "Display" },
        { id: "Black Ops One", name: "Black Ops One", category: "Military Stencil", type: "Display" },
        { id: "Chango", name: "Chango", category: "Funky Cartoon", type: "Display" },
        { id: "UnifrakturMaguntia", name: "UnifrakturMaguntia", category: "Gothic Blackletter", type: "Display" }
    ];

    const loadedFontsMap = new Set(["default", "system"]);

    // load Google Font 
    function loadGoogleFont(fontName) {
        if (!fontName || fontName === "default" || fontName === "system") return;
        const fontId = `google-font-${fontName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
        if (loadedFontsMap.has(fontName) || document.getElementById(fontId)) return;

        loadedFontsMap.add(fontName);
        const link = document.createElement("link");
        link.id = fontId;
        link.rel = "stylesheet";
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName.trim().replace(/ /g, "+"))}:wght@300;400;500;600;700&display=swap`;
        document.head.appendChild(link);
    }

    //apply font
    function applyFont(fontValue, customName = "", save = true) {
        let appliedStack = defaultFontStack;
        let displayName = "Poppins (Default)";

        if (fontValue === "system") {
            appliedStack = systemFontStack;
            displayName = "System Default";
            if (save) {
                localStorage.setItem("selectedFont", "system");
                localStorage.removeItem("customFontName");
            }
        } else if (fontValue === "custom") {
            const trimmedName = customName.trim();
            if (trimmedName) {
                loadGoogleFont(trimmedName);
                appliedStack = `"${trimmedName}", ${defaultFontStack}`;
                displayName = `${trimmedName} (Custom)`;
                if (save) {
                    localStorage.setItem("selectedFont", "custom");
                    localStorage.setItem("customFontName", trimmedName);
                }
            } else {
                appliedStack = defaultFontStack;
                displayName = "Poppins (Default)";
                if (save) {
                    localStorage.setItem("selectedFont", "default");
                    localStorage.removeItem("customFontName");
                }
            }
        } else if (fontValue && fontValue !== "default") {
            loadGoogleFont(fontValue);
            appliedStack = `"${fontValue}", ${defaultFontStack}`;
            const matched = PRESET_FONTS.find(f => f.id === fontValue);
            displayName = matched ? `${matched.name}` : fontValue;
            if (save) {
                localStorage.setItem("selectedFont", fontValue);
                localStorage.removeItem("customFontName");
            }
        } else {
            // Default
            appliedStack = defaultFontStack;
            displayName = "Poppins (Default)";
            if (save) {
                localStorage.setItem("selectedFont", "default");
                localStorage.removeItem("customFontName");
            }
        }

        if (typeof window.updateGlobalFontStack === "function") {
            window.updateGlobalFontStack();
        } else {
            root.style.setProperty("--main-font-family", appliedStack);
        }

        const badge = document.getElementById("fontActiveBadge");
        if (badge) {
            badge.textContent = displayName;
        }

        updateActiveFontItem(fontValue, customName);

        if (typeof window.renderFontGrid === "function") {
            window.renderFontGrid();
        }
    }

    function updateActiveFontItem(activeId, customName = "") {
        const items = document.querySelectorAll(".fontItem");
        items.forEach(el => {
            const fontId = el.getAttribute("data-font-id");
            if (activeId === "custom") {
                el.classList.toggle("active", fontId === "custom" && el.getAttribute("data-font-name") === customName);
            } else {
                el.classList.toggle("active", fontId === activeId);
            }
        });
    }

    function applyFontWeight(weightValue, save = true) {
        const weight = String(weightValue || "400");
        root.style.setProperty("--main-font-weight", weight);
        if (document.body) {
            document.body.style.setProperty("--main-font-weight", weight);
        }
        if (save) {
            localStorage.setItem("selectedFontWeight", weight);
        }
        updateActiveFontWeight(weight);
    }

    function updateActiveFontWeight(activeWeight) {
        const pills = document.querySelectorAll(".fontWeightPill");
        pills.forEach(pill => {
            pill.classList.toggle("active", pill.getAttribute("data-weight") === String(activeWeight));
        });
    }

    window.applyUserFont = applyFont;
    window.loadGoogleFont = loadGoogleFont;
    window.applyFontWeight = applyFontWeight;

    // Apply saved font weight early
    const earlySavedWeight = localStorage.getItem("selectedFontWeight") || "400";
    applyFontWeight(earlySavedWeight, false);

    document.addEventListener("DOMContentLoaded", () => {
        const fontSectionCard = document.getElementById("fontSectionCard");
        const fontCardHeader = document.getElementById("fontCardHeader");
        const fontSearchInput = document.getElementById("fontSearchInput");
        const clearFontSearchBtn = document.getElementById("clearFontSearchBtn");
        const fontCategoryPills = document.getElementById("fontCategoryPills");
        const customFontApplyRow = document.getElementById("customFontApplyRow");
        const customFontNameDisplay = document.getElementById("customFontNameDisplay");
        const applyTypedFontBtn = document.getElementById("applyTypedFontBtn");
        const fontGrid = document.getElementById("fontGrid");

        if (!fontSectionCard || !fontGrid) return;

        let selectedCategory = "all";

        // Lazy font loader for cards in view
        const fontCardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fontName = entry.target.getAttribute("data-font-id");
                    if (fontName && fontName !== "default" && fontName !== "system" && fontName !== "custom") {
                        loadGoogleFont(fontName);
                    }
                    fontCardObserver.unobserve(entry.target);
                }
            });
        }, { root: fontGrid, rootMargin: "50px" });

        // Render font grid (always reads fresh localStorage state)
        function renderFontGrid() {
            fontCardObserver.disconnect();
            fontGrid.innerHTML = "";
            const currentSavedFont = localStorage.getItem("selectedFont") || "default";
            const currentCustomFont = localStorage.getItem("customFontName") || "";
            const filterText = (fontSearchInput ? fontSearchInput.value : "").toLowerCase().trim();

            const filtered = PRESET_FONTS.filter(font => {
                // Category check
                if (selectedCategory !== "all" && font.type !== selectedCategory) {
                    return false;
                }
                // Text search check
                if (!filterText) return true;
                return font.name.toLowerCase().includes(filterText) ||
                       font.category.toLowerCase().includes(filterText) ||
                       font.type.toLowerCase().includes(filterText);
            });

            // If user has a custom font active and it's not in the presets, display it as a card
            if (currentSavedFont === "custom" && currentCustomFont) {
                if (!filterText || currentCustomFont.toLowerCase().includes(filterText)) {
                    const customCard = document.createElement("button");
                    customCard.type = "button";
                    customCard.className = "fontItem active";
                    customCard.setAttribute("data-font-id", "custom");
                    customCard.setAttribute("data-font-name", currentCustomFont);
                    customCard.style.fontFamily = `"${currentCustomFont}", sans-serif`;
                    const fontNameEl = document.createElement("div");
                    fontNameEl.className = "fontItemName";
                    fontNameEl.textContent = currentCustomFont;
                    const fontCategoryEl = document.createElement("div");
                    fontCategoryEl.className = "fontItemCategory";
                    fontCategoryEl.textContent = "Custom Font";
                    customCard.appendChild(fontNameEl);
                    customCard.appendChild(fontCategoryEl);
                    customCard.addEventListener("click", () => {
                        applyFont("custom", currentCustomFont, true);
                    });
                    fontGrid.appendChild(customCard);
                }
            }

            filtered.forEach(font => {
                const item = document.createElement("button");
                item.type = "button";
                const isActive = (currentSavedFont === "custom" ? false : (currentSavedFont === font.id || (!currentSavedFont && font.id === "default")));
                item.className = `fontItem ${isActive ? "active" : ""}`;
                item.setAttribute("data-font-id", font.id);
                item.setAttribute("data-font-name", font.name);
                
                if (font.id === "system") {
                    item.style.fontFamily = systemFontStack;
                } else if (font.id === "default") {
                    item.style.fontFamily = defaultFontStack;
                } else {
                    item.style.fontFamily = `"${font.name}", sans-serif`;
                }

                item.innerHTML = `
                    <div class="fontItemName">${font.name}</div>
                    <div class="fontItemCategory">${font.category}</div>
                `;

                item.addEventListener("click", () => {
                    applyFont(font.id, "", true);
                });

                item.addEventListener("mouseenter", () => {
                    if (font.id !== "default" && font.id !== "system") {
                        loadGoogleFont(font.name);
                    }
                });

                fontGrid.appendChild(item);

                // Observe for lazy loading
                if (font.id !== "default" && font.id !== "system") {
                    fontCardObserver.observe(item);
                }
            });

            // Custom font prompt row if user typed a query that is not an exact match
            if (filterText) {
                const exactMatch = PRESET_FONTS.some(f => f.name.toLowerCase() === filterText);
                if (!exactMatch) {
                    customFontApplyRow.style.display = "flex";
                    customFontNameDisplay.textContent = fontSearchInput.value.trim();
                } else {
                    customFontApplyRow.style.display = "none";
                }
            } else {
                customFontApplyRow.style.display = "none";
            }
        }

        window.renderFontGrid = renderFontGrid;
        renderFontGrid();
        const initialSavedFont = localStorage.getItem("selectedFont") || "default";
        const initialCustomFont = localStorage.getItem("customFontName") || "";
        applyFont(initialSavedFont, initialCustomFont, false);

        // Category filter buttons
        if (fontCategoryPills) {
            fontCategoryPills.addEventListener("click", (e) => {
                const pill = e.target.closest(".fontPill");
                if (!pill) return;
                fontCategoryPills.querySelectorAll(".fontPill").forEach(p => p.classList.remove("active"));
                pill.classList.add("active");
                selectedCategory = pill.getAttribute("data-category") || "all";
                renderFontGrid();
            });
        }

        // Font weight buttons
        const fontWeightPills = document.getElementById("fontWeightPills");
        if (fontWeightPills) {
            fontWeightPills.addEventListener("click", (e) => {
                const pill = e.target.closest(".fontWeightPill");
                if (!pill) return;
                const weight = pill.getAttribute("data-weight");
                applyFontWeight(weight, true);
            });
            updateActiveFontWeight(localStorage.getItem("selectedFontWeight") || "400");
        }

        // Expand / Collapse card toggle
        fontCardHeader.setAttribute("aria-expanded", fontSectionCard.classList.contains("expanded") ? "true" : "false");
        fontCardHeader.addEventListener("click", () => {
            const isExpanded = fontSectionCard.classList.toggle("expanded");
            fontCardHeader.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        });

        // Search input handling
        fontSearchInput.addEventListener("input", () => {
            const val = fontSearchInput.value;
            clearFontSearchBtn.style.display = val ? "block" : "none";
            renderFontGrid();
        });

        clearFontSearchBtn.addEventListener("click", () => {
            fontSearchInput.value = "";
            clearFontSearchBtn.style.display = "none";
            renderFontGrid();
            fontSearchInput.focus();
        });

        function handleCustomFontSubmit() {
            const typedVal = fontSearchInput.value.trim();
            if (typedVal) {
                applyFont("custom", typedVal, true);
                renderFontGrid();
            }
        }

        applyTypedFontBtn.addEventListener("click", handleCustomFontSubmit);
        fontSearchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                handleCustomFontSubmit();
            }
        });
    });
})();
