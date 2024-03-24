const { error } = require("./constants");
const File = require("./file");
const { rejects, deepStrictEqual } = require("assert");
;
(async () => {
    {
        const filePath = "./mocks/emptyFile-invalid.csv";
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = "./mocks/fourItems-invalid.csv";
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = "./mocks/threeItems-valid.csv";
        const result = await File.csvToJson(filePath);
        const expected = [
            {
                "name": "Eryálef Vieira",
                "id": 111,
                "profession": "Javascript Developer",
                "age": 19,
            },
            {
                "name": "Juliana",
                "id": 112,
                "profession": "Java Entusiast",
                "age": 17,
            },
            {
                "name": "Nenem",
                "id": 113,
                "profession": "C# Developer",
                "age": 16,
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }
})()