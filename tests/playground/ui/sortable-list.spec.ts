import { test, expect } from './fixtures/playground-pages';

const richestPersonRanking = [
   { rank: 1, name: "Jeff Bezos" },
   { rank: 2, name: "Bill Gates" },
   { rank: 3, name: "Warren Buffet" },
   { rank: 4, name: "Bernard Arnault" },
   { rank: 5, name: "Carlos Slim Helu" },
   { rank: 6, name: "Amancio Ortega" },
   { rank: 7, name: "Larry Ellison" },
   { rank: 8, name: "Mark Zuckerberg" },
   { rank: 9, name: "Michael Bloomberg" },
   { rank: 10, name: "Larry Page" }
];

test.describe('Sortable List', () => {

   test.beforeEach(async ({ sortableListPage }) => {
      await sortableListPage.goto();
      await sortableListPage.zoomOut();
   });

   test("Should have all the list green text when the order is right", async ({ sortableListPage }) => {

      await sortableListPage.dragAndDrop(richestPersonRanking[0].name, richestPersonRanking[0].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[1].name, richestPersonRanking[1].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[2].name, richestPersonRanking[2].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[3].name, richestPersonRanking[3].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[4].name, richestPersonRanking[4].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[5].name, richestPersonRanking[5].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[6].name, richestPersonRanking[6].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[7].name, richestPersonRanking[7].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[8].name, richestPersonRanking[8].rank);
      await sortableListPage.dragAndDrop(richestPersonRanking[9].name, richestPersonRanking[9].rank);
      await sortableListPage.pressCheckButton();

      await expect(await sortableListPage.page.getByText(richestPersonRanking[0].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[1].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[2].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[3].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[4].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[5].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[6].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[7].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[8].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
      await expect(await sortableListPage.page.getByText(richestPersonRanking[9].name)).toHaveCSS('color', 'rgb(58, 227, 116)');
   });
});