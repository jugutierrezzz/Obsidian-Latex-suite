[
    // =================================================================
    //  Guide & custom snippets
    // =================================================================

    // Regla N1: no te compliques.
    // Para snippets fáciles de escribir como (eg. \div, \quad, \nabla, \vdots, etc.), haz el trigger igual al comando latex pero que añada el backslash automáticamente.
    // Para snippets complejos de escribir, como (eg. \parallel, \overleftrightarrow, text{},) ahí sí inventa un trigger más corto y fácil.
    // ${GREEK} and ${SYMBOL} Are snippet variables and can be edited in your advanced snippet settings.


    //  Snnipets created by me
    {trigger: "div", replacement: "\\div", options: "mA"}, // For division symbol
    {trigger: "oline", replacement: "\\overline{$0}$1", options: "mA"}, // For overline
    {trigger: "^", replacement: "^{$0}$1", options: "mA"}, // For superscript
    {trigger: "deg", replacement: "^{\\circ}", options: "mA"}, // For degrees
    {trigger: "oarrows", replacement: "\\overleftrightarrow{$0}$1", options: "mA"}, // For over arrows
    {trigger: "mangle", replacement: "\\measuredangle", options: "mA"}, // For measure of angle simbol
    {trigger: "uline", replacement: "\\underline{$0}$1", options: "mA"}, // For underline
    {trigger: "xx", replacement: "\\cdot", options: "mA"}, // For dot
    {trigger: "===", replacement: "\&=", options: "mA"}, // For align of equations
    {trigger: "\\gg>", replacement: "&>", options: "mA"}, // For align of inequalities
    {trigger: "\\ll<", replacement: "&<", options: "mA"}, // For align of inequalities
    {trigger: "ninfty", replacement: "-\\infty", options: "mA", priority: 1}, // For negative infinity 
    {trigger: "\\geq=", replacement: "&\\geq", options: "mA"}, // For align of inequalities
    {trigger: "\\leq=", replacement: "&\\leq", options: "mA"}, // For align of inequalities    


    // =================================================================
    //  MATH MODE & ENVIRONMENTS
    // =================================================================

    // -- Entering Math Mode --
    {trigger: "qf", replacement: "$$0$", options: "tA"},       // Inline math
    {trigger: "qp", replacement: "$$\n$0\n$$", options: "tAw"}, // Display math

    // -- General Environments --
    {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},
    {trigger: "cases", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA"},
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
    {trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA"},

    // -- Matrix Environments --
    {trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA"},
    {trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA"},


    // =================================================================
    //  BASIC OPERATIONS & FORMATTING
    // =================================================================

    // -- Subscripts & Superscripts --
    {trigger: "_", replacement: "_{$0}$1", options: "mA"},
    {trigger: "sts", replacement: "_\\text{$0}", options: "mA"},
    {trigger: "inv", replacement: "^{-1}", options: "mA"},
    {trigger: "conj", replacement: "^{*}", options: "mA"},
    {trigger: "dag", replacement: "^{\\dagger}", options: "mA"}, // For quantum mechanics

    // -- Fractions & Roots --
    {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
    {trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA"},

    // -- Exponentials & Logs --
    {trigger: "ee", replacement: "e^{ $0 }$1", options: "mA"},
    {trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    
    // -- Text Styling --
    {trigger: "#d", replacement: "\\displaystyle ", options: "mA"},
    {trigger: "#t", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "#n", replacement: "\\mathrm{$0}", options: "mA"},
    {trigger: "#b", replacement: "\\mathbf{$0}", options: "mA"},


    // =================================================================
    //  SYMBOLS
    // =================================================================

    // -- General Symbols --
    {trigger: "+-", replacement: "\\pm", options: "mA"},
    {trigger: "-+", replacement: "\\mp", options: "mA"},
    {trigger: "nabla", replacement: "\\nabla", options: "mA"},
    {trigger: "...", replacement: "\\dots", options: "mA"},
    {trigger: "vdots", replacement: "\\vdots", options: "mA"},
    {trigger: "ddots", replacement: "\\ddots", options: "mA"},
    {trigger: "infty", replacement: "\\infty ", options: "mA"},
    {trigger: "sum", replacement: "\\sum", options: "mA"},
    {trigger: "\\sum", replacement: "\\sum_{ $0 }^{ $1 }", options: "m"},
    {trigger: "prod", replacement: "\\prod", options: "mA"},
    {trigger: "\\prod", replacement: "\\prod_{ $0 }^{ $1 }", options: "m"},

    // -- Relational Operators --
    {trigger: "!=", replacement: "\\neq", options: "mA"},
    {trigger: ">=", replacement: "\\geq", options: "mA"},
    {trigger: "<=", replacement: "\\leq", options: "mA"},
    {trigger: ">>", replacement: "\\gg", options: "mA"},
    {trigger: "<<", replacement: "\\ll", options: "mA"},
    {trigger: "equiv", replacement: "\\equiv", options: "mA"},
    {trigger: "sim", replacement: "\\sim", options: "mA"},
    {trigger: "sim=", replacement: "\\simeq", options: "mA"},
    {trigger: "prop", replacement: "\\propto", options: "mA"},
    {trigger: "paral", replacement: "\\parallel", options: "mA"},

    // -- Arrows --
    {trigger: "->", replacement: "\\rightarrow", options: "mA"},
    {trigger: "<-", replacement: "\\leftarrow", options: "mA"},
    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
    {trigger: "=>", replacement: "\\Rightarrow", options: "mA"},
    {trigger: "=<", replacement: "\\Leftarrow", options: "mA"},
    {trigger: "<=>", replacement: "\\Leftrightarrow", options: "mA"},
    {trigger: "-^", replacement: "\\uparrow", options: "mA"},
    {trigger: "-v", replacement: "\\downarrow", options: "mA"},
    {trigger: "^-v", replacement: "\\updownarrow", options: "mA"},
    {trigger: "v-^", replacement: "\\updownarrow", options: "mA"},
    {trigger: "=^", replacement: "\\Uparrow", options: "mA"},
    {trigger: "=v", replacement: "\\Downarrow", options: "mA"},
    {trigger: "^=v", replacement: "\\Updownarrow", options: "mA"},
    {trigger: "v=^", replacement: "\\Updownarrow", options: "mA"},
    {trigger: "|->", replacement: "\\mapsto", options: "mA"},
    {trigger: "|-->", replacement: "\\longmapsto", options: "mA"},
    {trigger: "/>", replacement: "\\nearrow", options: "mA"},


    // =================================================================
    //  LETTERS, ACCENTS & SPECIAL SETS
    // =================================================================

    // -- Greek Letters --
    {trigger: "@a", replacement: "\\alpha", options: "mA"},
    {trigger: "@b", replacement: "\\beta", options: "mA"},
    {trigger: "@g", replacement: "\\gamma", options: "mA"},
    {trigger: "@G", replacement: "\\Gamma", options: "mA"},
    {trigger: "@d", replacement: "\\delta", options: "mA"},
    {trigger: "@D", replacement: "\\Delta", options: "mA"},
    {trigger: "@e", replacement: "\\epsilon", options: "mA"},
    {trigger: ":e", replacement: "\\varepsilon", options: "mA"},
    {trigger: "@z", replacement: "\\zeta", options: "mA"},
    {trigger: "@t", replacement: "\\theta", options: "mA"},
    {trigger: "@T", replacement: "\\Theta", options: "mA"},
    {trigger: ":t", replacement: "\\vartheta", options: "mA"},
    {trigger: "@i", replacement: "\\iota", options: "mA"},
    {trigger: "@k", replacement: "\\kappa", options: "mA"},
    {trigger: "@l", replacement: "\\lambda", options: "mA"},
    {trigger: "@L", replacement: "\\Lambda", options: "mA"},
    {trigger: "@s", replacement: "\\sigma", options: "mA"},
    {trigger: "@S", replacement: "\\Sigma", options: "mA"},
    {trigger: "@u", replacement: "\\upsilon", options: "mA"},
    {trigger: "@U", replacement: "\\Upsilon", options: "mA"},
    {trigger: "@o", replacement: "\\omega", options: "mA"},
    {trigger: "@O", replacement: "\\Omega", options: "mA"},

    // -- Accents & Diacritics --
    {trigger: ",h", replacement: "\\hat{$0}$1", options: "mA"},
    {trigger: ",H", replacement: "\\widehat{$0}$1", options: "mA"},
    {trigger: ",d", replacement: "\\dot{$0}$1", options: "mA"},
    {trigger: ",D", replacement: "\\ddot{$0}$1", options: "mA", priority: 2},
    {trigger: ",t", replacement: "\\tilde{$0}$1", options: "mA"},
    {trigger: ",T", replacement: "\\widetilde{$0}$1", options: "mA"},
    {trigger: ",v", replacement: "\\vec{$0}$1", options: "mA"},
    {trigger: ",V", replacement: "\\overrightarrow{$0}$1", options: "mA"},

    // -- Special Sets & Calligraphy --
    {trigger: "RR", replacement: "\\mathbb{R}", options: "mA"},
    {trigger: "CC", replacement: "\\mathbb{C}", options: "mA"},
    {trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA"},
    {trigger: "NN", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "LL", replacement: "\\mathcal{L}", options: "mA"},
    {trigger: "HH", replacement: "\\mathcal{H}", options: "mA"},


    // =================================================================
    //  BRACKETS & DELIMITERS
    // =================================================================

    // -- Auto-closing Brackets --
    {trigger: "(", replacement: "($0)$1", options: "mA"},
    {trigger: "[", replacement: "[$0]$1", options: "mA"},
    {trigger: "{", replacement: "{$0}$1", options: "mA"},
    {trigger: "abs", replacement: "|$0|$1", options: "mA"}, // For absolute value
    {trigger: "mod", replacement: " \\pmod{$0}", options: "mA"}, // For modulo operator


    // -- Auto-sizing Brackets --
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},

    // -- Named Delimiters --
    {trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
    {trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
    {trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
    {trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
    {trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA"},


    // =================================================================
    //  SUBJECT-SPECIFIC SNIPPETS
    // =================================================================

    // -- Set Theory --
    {trigger: "and", replacement: "\\cap", options: "mA"},
    {trigger: "orr", replacement: "\\cup", options: "mA"},
    {trigger: "inn", replacement: "\\in", options: "mA"},
    {trigger: "notin", replacement: "\\not\\in", options: "mA"},
    {trigger: "empty", replacement: "\\emptyset", options: "mA"},
    {trigger: "xset", replacement: "\\{ x \\mid $0 \\}$1", options: "mA"},
    {trigger: "fa", replacement: "\\forall ", options: "mA"},
    {trigger: "ex", replacement: "\\exists ", options: "mA"},
    {trigger: "sub", replacement: "\\subset ", options: "m"},
    {trigger: "sub=", replacement: "\\subseteq ", options: "mA"},
    {trigger: "sup", replacement: "\\supset ", options: "mA"},
    {trigger: "bslash", replacement: "\\setminus ", options: "mA"},

    // -- Linear Algebra --
    {trigger: /([^\\])(det)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},
    {trigger: "Re", replacement: "\\mathrm{Re}", options: "mA"},
    {trigger: "Im", replacement: "\\mathrm{Im}", options: "mA"},

    // -- Calculus --
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},
    {trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
    {trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "mA", priority: -1},
    {trigger: "\\int", replacement: "\\int $0 \\, d${1:x} $2", options: "m"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "mA"},
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
    {trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Taylor expansion"},

    // -- Trigonometry --
    {trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before trig funcs"},
    {trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/, replacement: "\\[[0]] [[1]]", options: "rmA", description: "Add space after trig funcs. Skips 'h' for sinh, etc."},
    {trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/, replacement: "\\[[0]] [[1]]", options: "rmA", description: "Add space after hyperbolic trig funcs"},

    // -- Physics --
    {trigger: "kbt", replacement: "k_{B}T", options: "mA"},
    {trigger: "msun", replacement: "M_{\\odot}", options: "mA"},

    // -- Quantum Mechanics --
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
    {trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
    {trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
    {trigger: "outer", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},
    {trigger: "o+", replacement: "\\oplus ", options: "mA"},

    // -- Chemistry --
    {trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
    {trigger: "cee", replacement: "\\ce{ $0 }", options: "mA"},
    {trigger: "he4", replacement: "{}^{4}_{2}He ", options: "mA"},
    {trigger: "he3", replacement: "{}^{3}_{2}He ", options: "mA"},
    {trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},


    // =================================================================
    //  VISUAL & DECORATIVE SNIPPETS
    // =================================================================

    // -- Boxing & Tagging --
    {trigger: "tag", replacement: " \\tag{$0}", options:"mA"},
    {trigger: "box", replacement: "\\boxed{$0}$1", options: "mA"},

    // -- Snippets for Visual Selections (${VISUAL}) --
    {trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
    {trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
    {trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
    {trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},
    {trigger: "X", replacement: "\\boxed{ ${VISUAL} }", options: "mA"},
    {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    {trigger: "|", replacement: "|${VISUAL}|", options: "mA"},


    // =================================================================
    //  ADVANCED & REGEX-BASED SNIPPETS
    // =================================================================

    // -- Auto Subscripts --
    {trigger: "xnn", replacement: "x_{n}", options: "mA"},
    {trigger: "\\xii", replacement: "x_{i}", options: "mA", priority: 1},
    {trigger: "xjj", replacement: "x_{j}", options: "mA"},
    {trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
    {trigger: "ynn", replacement: "y_{n}", options: "mA"},
    {trigger: "yii", replacement: "y_{i}", options: "mA"},
    {trigger: "yjj", replacement: "y_{j}", options: "mA"},

    // -- Auto Backslashes & Spacing --
    {trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before Greek letters"},
    {trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before symbols"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA", description: "Insert space after symbols"},

    // -- Auto Accents on Symbols --
    {trigger: "\\\\(${GREEK}|${SYMBOL}) ^", replacement: "\\[[0]]^{$0}$1", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
    {trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},

    // -- Function-based nth Root --
    {trigger: "([0-9|n|m|k]{1,})sq", replacement: (match) => { return `\\sqrt[${match[1]}]{ $0 }$2`; }, options: "rmA"},
    {trigger: ";sq", replacement: (match) => { return `\\sqrt[${'$'}0]{ $1 }`; }, options: "rmA"},

    // -- Function-based Matrix Generator --
    // Usage: (rows)(cols)(bracket_type)(bracket_type) -> e.g., 23ff for a 2x3 matrix with [ ]
    // Bracket Types: y=(), f=[], h={}, d=||, n=\|\|. Use uppercase for display mode ($$), lowercase for inline ($).
    {trigger: /(\d)(\d)(y|Y|f|F|h|H|d|D|n|N)\3/, replacement: (match) => {
        const n = match[1];
        const m = match[2];
        const bracket = match[3];
        let arr = [];
        let bracketstr;
        let output;

        for (let j = 0; j < n; j++) {
            arr[j] = [];
            for (let i = 0; i < m; i++) {
                arr[j][i] = `\${${j * m + i + 1}:}`;
            }
        }

        switch(bracket.toLowerCase()) {
            case 'y': bracketstr = "pmatrix"; break;
            case 'f': bracketstr = "bmatrix"; break;
            case 'h': bracketstr = "Bmatrix"; break;
            case 'd': bracketstr = "vmatrix"; break;
            case 'n': bracketstr = "Vmatrix"; break;
        }

        if (bracket >= 'a' && bracket <= 'z') { // lowercase for inline
            output = arr.map(el => el.join(" & ")).join(" \\\\ ");
            output = `\\begin{${bracketstr}} ${output} \\end{${bracketstr}}`;
        } else { // uppercase for display
            output = arr.map(el => el.join(" & ")).join(" \\\\ \n");
            output = `\\begin{${bracketstr}}\n${output}\n\\end{${bracketstr}}`;
        }
        return output;
    }, options: "rmA"},
]
