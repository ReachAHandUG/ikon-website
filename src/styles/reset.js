import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *, 
    *::before,
    *::after {
        box-sizing: border-box;
    }

    ::-moz-selection {
        background: ${props => props.theme.base}; 
        color: ${props => props.theme.secondary};
    }
    ::selection {
        background: ${props => props.theme.primary}; 
        color: ${props => props.theme.base};
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block
    }

    ol,
    ul {
        list-style: none
    }

    blockquote,q {
        quotes: none
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none
    }
    strong {
        font-weight: bold
    }

    em {
        font-style: italic
    }

    img {
        max-width: 100%;
        display: block;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    a {
        text-decoration: none;
        outline: 0;
        color: inherit;
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
        border: none;
        background: none;
        font-size: 100%;
        resize: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        border-radius: 0;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }

    input::-moz-placeholder {
        opacity: 1
    }

    textarea::-moz-placeholder {
        opacity: 1
    }

    input::-moz-focus-inner {
        border: 0;
        padding: 0
    }

    input {
        -webkit-appearance: none;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    select, textarea, input[type="text"], input[type="password"],
    input[type="datetime"], input[type="datetime-local"],
    input[type="date"], input[type="month"], input[type="time"],
    input[type="week"], input[type="number"], input[type="email"],
    input[type="url"]{
        @media (max-width: 767px){
            font-size: 16px;
        }
    }
`
