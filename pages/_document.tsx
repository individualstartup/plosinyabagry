import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Open+Sans:wght@300;400;700&display=swap"
                        rel="stylesheet"/>
                    <style>{`
html
{
background: rgba(85, 85, 85, 0.04);
font-size: 100%;
-webkit-text-size-adjust: 100%;
}
body
{
font: normal normal normal 1rem/normal ;
font-style: normal;
font-family: 'Open Sans';
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #555555;
margin: 0;
padding: 0;

}

abbr
{
cursor: help;
}

audio:not([controls])
{
display: none;
height: 0;
}

a {
color: #0c7bc6;
}

a:focus
{
outline: thin dotted;
}

blockquote, q
{
quotes: none;
}

details
{
display: block;
}

dl, form, h1, h2, h3, h4, h5, h6, ol, p, ul
{
margin: 0;
padding: 0;
}

h2 {
}

form label
{
cursor: pointer;
}

form button, form input[type='button'], form input[type='submit'], form input[type='reset']
{
-webkit-appearance: button;
cursor: pointer;
margin: 0;
overflow: visible;
padding: 0;
text-transform: none;
}

form button[disabled], form input[disabled]
{
cursor: default;
}

form button::-moz-focus-inner, form input:not([type='checkbox']):not([type='radio'])::-moz-focus-inner
{
border: 0;
padding: 0;
}

form input:not([type='checkbox']):not([type='radio']), form select
{
margin: 0;
}

form input [type='checkbox'], form input [type='radio']
{
box-sizing: border-box;
padding: 0;
}

form input[type='number']::-webkit-inner-spin-button, form input[type='number']::-webkit-outer-spin-button
{
height: auto;
}

form input[type='search']
{
-webkit-appearance: textfield;
outline-offset: -2px;
}

form input[type='search']::-webkit-search-cancel-button, form input[type='search']::-webkit-search-decoration
{
-webkit-appearance: none;
}

form [type='search']::-webkit-search-decoration
{
-webkit-appearance: none;
}

::-webkit-file-upload-button
{
-webkit-appearance: button;
font: inherit;
}

form textarea
{
margin: 0;
overflow: auto;
resize: vertical;
vertical-align: top;
}

[hidden]
{
display: none;
}

hr
{
border: none;
box-sizing: content-box;
margin: 0;
overflow: visible;
}

img
{
border: none;
display: inline-block;
vertical-align: middle;
}

ol li
{
list-style-type: decimal;
}

ul li
{
list-style-type: inside;
}

pre
{
white-space: pre-wrap;
}

progress
{
vertical-align: baseline;
}

summary
{
display: list-item;
}

svg:not(:root)
{
overflow: hidden;
}

table
{
margin: 0;
}

template
{
display: none;
}
  `}</style>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                {/*          <script
            id="CookieDeclaration"
            src="https://consent.cookiebot.com/145d900e-2578-4d80-8db0-8e96315583e2/cd.js"
            type="text/javascript"
            async
          ></script>*/}
                </body>
            </Html>
        );
    }
}
