// playground requires you to assign document definition to a variable called dd
// http://pdfmake.org/playground.html
var issuedDate = 'YYYY/MM/DD'
var invoiceNumber = '2019-11-005'
var companyName = 'KABU OFFICE BEBE'
var postalCode = 'PPP POSTAL'
var address1 = 'TOKYOTO MINATOKU AKASAKA 4-13-5'
var address2 = 'AKASAKA OFFICE BUILDING 1F'
var address3 = 'DAIHYO TORISHIMARIYAKU'
var name = 'KUNIHIRO YASHIMA' + ' SAMA'

var seikyuBi = '2019/12/25'
var oshiharaiKigen = '2019/12/31'
var totalAmount = '44,000'



var dd = {
    pageSize: 'a4',
    pageMargins: [40, 50, 40, 0],
    content: [
        {
            columns: [
                {
                    width: '30%',
                    margin: [160, 10, 0, 10],
                    fontSize: 20,
                    height: 200,
                    alignment: 'center',
                    fillColor: '#bdcf99',
                    color: 'black',
                    bold: true,
                    hLineColor: 'white',
                    vLineColor: 'white',
                    table: {
                        widths: [200],
                        heights: [20],
                        body: [
                            ['GOSEIKYUSYO'],
                        ]
                    },
                },
            ]
        },
        {
            columns: [
                {
                    margin: [0, 10, 0, 0],
                    width: 320,
                    text: [
                        { text: companyName, fontSize: 10, bold: true },
                        '\n',
                        { text: postalCode, fontSize: 10, bold: true },
                        '\n',
                        { text: address1, fontSize: 10, bold: true },
                        '\n',
                        { text: address2, fontSize: 10, bold: true },
                        '\n',
                        { text: address3, fontSize: 10, bold: true },
                        '\n',
                        { text: name, fontSize: 10, bold: true },
                        '\n',
                    ]
                },
                {
                    margin: [30, 10, 0, 0],
                    text: [
                        { text: 'HAKKOUBI: ' + issuedDate, fontSize: 10, bold: true },
                        '\n',
                        { text: 'GOSEIKYUSYOBANGO: ' + invoiceNumber, fontSize: 10, bold: true },
                        '\n',
                        '\n',
                        { text: 'BIZAPP FACTORY', fontSize: 10, bold: true },
                        '\n',
                        { text: 'POSTAL CODE', fontSize: 10, bold: true },
                        '\n',
                        { text: 'TOKYOTO MINATOKU 3-10-41', fontSize: 10, bold: true },
                        '\n',
                        { text: 'JUEL AOYAMA BUILDING 202', fontSize: 10, bold: true },
                    ]
                },
            ]
        },
        {
            columns: [
                {
                    margin: [0, 0, 0, 20],
                    width: 320,
                    text: [
                        { text: 'HEISOHAKAKUBETUNOGOGOUHAIWOUKETAMAWARI', fontSize: 10, bold: true },
                        '\n',
                        { text: 'KAKINOTOORI GOSEIKYUMOUSHIAGEMASU', fontSize: 10, bold: true },
                    ]
                },
                {
                    margin: [120, 0, 0, 0],
                    image: 'data:image/jpeg;base64,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',
                    width: 50,
                    height: 50,
                    align: 'right'
                },
            ]
        },
        {
            columns: [
                {
                    margin: [0, 0, 0, 0],
                    text: [
                        { text: 'SEIKYUBI: ' + seikyuBi, fontSize: 10, bold: true },
                        '\n',
                        { text: 'OSHIHARAIKIEGN: ' + oshiharaiKigen, fontSize: 10, bold: true },
                    ]
                },
            ]
        },
        {
            columns: [
                {
                    margin: [0, 10, 0, 30],
                    decoration: 'underline',
                    text: [
                        { text: 'GOSEIKYUKI    ¥' + totalAmount + '  ', fontSize: 16, bold: true },
                    ]
                },
            ]
        },
        {
          margin: [0, 10, 0, 0],
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ 140, 80, 80, 80, '*' ],
            body: [
              [ { text: 'ITEM NAME', fillColor: '#bdcf99'}, { text: 'PRICE', fillColor: '#bdcf99'}, { text: 'NUM', fillColor: '#bdcf99'}, { text: 'UNIT', fillColor: '#bdcf99'}, { text: 'SYOUKEI', fillColor: '#bdcf99'} ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4', 'VAL5' ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4', 'VAL 5' ],
              [ '', '', '', '', ' ' ],
            ]
          }
        },
        {
          margin: [0, 20, 0, 10],
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [120, 110, 110, '*' ],
            body: [
              [ { text: 'GOUKEI', fillColor: '#bdcf99'}, 'W/O TAX 999', 'With TAX 1005', 'Total 1005' ],
            ]
          }
        },
        {
            columns: [
                {
                    margin: [0, 0, 0, 0],
                    text: [
                        { text: '<FURIKOMISAKI> KAKINOKOUZANIOFURIKOMIKUDASAI', fontSize: 10, bold: true },
                        '\n',
                        { text: 'MITHUBISI URJ BANK OMOTESANDO', fontSize: 10, bold: true },
                        '\n',
                        { text: 'FUTU KOZA 0700474 KOZAMEIGI NAKACHI HARUO', fontSize: 10, bold: true },
                    ]
                },
            ]
        },
        {
            columns: [
                {
                    width: '100%',
                    margin: [0, 10, 0, 10],
                    fontSize: 10,
                    height: 200,
                    alignment: 'left',
                    color: 'black',
                    bold: true,
                    hLineColor: 'white',
                    vLineColor: 'white',
                    table: {
                        widths: [505],
                        heights: [60],
                        body: [
                            ['BIKO'],
                        ]
                    },
                },
            ]
        },
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        bigger: {
            fontSize: 15,
            italics: true,
        },
        invoiceSubValue:
        {
            bold: true,
            fontSize: 10
        }
    },
    defaultStyle: {
        columnGap: 20,
    }
}
