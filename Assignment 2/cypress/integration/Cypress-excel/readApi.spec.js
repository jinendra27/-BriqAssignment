const XLSX = require('xlsx')
describe('verify the api repsonse', () => {
    const convertJsonToExcel = (students) => {
        const workSheet = XLSX.utils.json_to_sheet(students);
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, "students")
        // Generate buffer
        XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })
        // Binary string
        XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
        XLSX.writeFile(workBook, "studentsData.xlsx")

    }
    it('verify the data into the excel sheet', () => {
        cy.request({
            url: 'https://data.sfgov.org/resource/p4e4-a5a7.json',
        }).then((response) => {
            cy.log(response.body)
            convertJsonToExcel(response.body)

        })

    })

})




