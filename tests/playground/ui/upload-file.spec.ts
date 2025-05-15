import { test, expect } from './fixtures/playground-pages';

test.describe('Upload File', () => {
    test.beforeEach(async ({ uploadFilePage }) => {
        await uploadFilePage.goto();
    });

    test('Should show correct number of files before upload', async ({ uploadFilePage }) => {

        expect(await uploadFilePage.getNumOfFiles()).toBe('No File Selected');

    });

    test('Should show correct number of files after upload one file', async ({ uploadFilePage }) => {

        const filePath = 'tests/playground/ui/extras/files/PNG_1.png';

        await uploadFilePage.uploadFile(filePath);

        expect(await uploadFilePage.getNumOfFiles()).toBe('1 File Selected');

    });

    test('Should show correct number of files after upload multiple files', async ({ uploadFilePage }) => {

        const filePath = 'tests/playground/ui/extras/files/PNG_1.png';
        const filePath2 = 'tests/playground/ui/extras/files/PNG_2.png';
        const filePath3 = 'tests/playground/ui/extras/files/PNG_3.png';

        await uploadFilePage.uploadFiles([filePath, filePath2, filePath3]);

        expect(await uploadFilePage.getNumOfFiles()).toBe('3 Files Selected');

    });

    test('There should be 1 file after uploading', async ({ uploadFilePage }) => {

        const filePath = 'tests/playground/ui/extras/files/PNG_1.png';

        await uploadFilePage.uploadFile(filePath);

        expect(await uploadFilePage.existUploadesFiles()).toBeTruthy();
        expect(await uploadFilePage.getCountploadesFiles()).toBe(1);

    });

    test('There should be 3 files after uploading', async ({ uploadFilePage }) => {

        const filePath = 'tests/playground/ui/extras/files/PNG_1.png';
        const filePath2 = 'tests/playground/ui/extras/files/PNG_2.png';
        const filePath3 = 'tests/playground/ui/extras/files/PNG_3.png';

        await uploadFilePage.uploadFiles([filePath, filePath2, filePath3]);

        expect(await uploadFilePage.existUploadesFiles()).toBeTruthy();
        expect(await uploadFilePage.getCountploadesFiles()).toBe(3);

    });

    test('There should be a file with the name "PNG_1.png" after upload it', async ({ uploadFilePage }) => {

        const filePath = 'tests/playground/ui/extras/files/PNG_1.png';

        await uploadFilePage.uploadFile(filePath);

        expect(await uploadFilePage.existUploadesFile('PNG_1.png')).toBeTruthy();
    });
});
