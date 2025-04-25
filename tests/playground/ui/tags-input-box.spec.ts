import { test, expect } from './fixtures/playground-pages';

test.describe('Tags input box', () => {

    test.beforeEach(async ({ tagsInputBoxPage }) => {
        await tagsInputBoxPage.goto();
     });

     test("Add label", async ({ tagsInputBoxPage }) => {
       await tagsInputBoxPage.writeTag('hola');
       await expect(tagsInputBoxPage.spanTag).toHaveText('7');
     });

     
     test("Remove all tags", async ({ tagsInputBoxPage }) => {
       await tagsInputBoxPage.removeAllTags();
       await expect(tagsInputBoxPage.spanTag).toHaveText('10');
     });

     test("Add the maximum number of tags", async ({ tagsInputBoxPage }) => {
        await tagsInputBoxPage.removeAllTags();
        await tagsInputBoxPage.writeTag('1,2,3,4,5,6,7,8,9,10');
        await expect(tagsInputBoxPage.spanTag).toHaveText('0');
      });

      test("Remove tag 2", async ({ tagsInputBoxPage }) => {
        await tagsInputBoxPage.removeTag();
        await expect(tagsInputBoxPage.spanTag).toHaveText('9');
      });
 
});