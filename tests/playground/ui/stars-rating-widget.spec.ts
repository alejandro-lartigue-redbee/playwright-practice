import { test, expect } from './fixtures/playground-pages';

/* Stars Rating Widget
* Set each available rate value and assert by image, text, and number
*/
/*
* Note: The text is applied via CSS as content of a '::before'.
    .footer .text::before {
        content: "I just hate it";
    }
*/

const expectValues = [
    {
        marginTopImage: "0px",
        text: "Rate your experience",
        number: "0 out of 5"
    },
    {
        marginTopImage: "0px",
        text: "I just hate it",
        number: "1 out of 5"
    },
    {
        marginTopImage: "-135px",
        text: "I don't like it",
        number: "2 out of 5"
    },
    {
        marginTopImage: "-270px",
        text: "This is awesome",
        number: "3 out of 5"
    },
    {
        marginTopImage: "-405px",
        text: "I just like it",
        number: "4 out of 5"
    },
    {
        marginTopImage: "-540px",
        text: "I just love it",
        number: "5 out of 5"
    }
];

test.describe('Stars Rating Widget', () => {

    test.beforeEach(async ({ starsRatingWidgetPage }) => {
        await starsRatingWidgetPage.goto();
    });

    test("Without stars, should have correct image, test and number", async ({ starsRatingWidgetPage }) => {

        await expect(starsRatingWidgetPage.mainContent).toBeVisible();
        await expect(starsRatingWidgetPage.slideImg).toHaveCSS("margin-top", expectValues[0].marginTopImage);
        expect(await starsRatingWidgetPage.getCurrentText()).toEqual(expectValues[0].text);
        expect(await starsRatingWidgetPage.getCurrentNumb()).toEqual(expectValues[0].number);

    });

    test("With 1 star, should have correct image, test and number", async ({ starsRatingWidgetPage }) => {

        await expect(starsRatingWidgetPage.mainContent).toBeVisible();

        await starsRatingWidgetPage.pressStar1();

        await expect(starsRatingWidgetPage.slideImg).toHaveCSS("margin-top", expectValues[1].marginTopImage);
        expect(await starsRatingWidgetPage.getCurrentText()).toEqual(expectValues[1].text);
        expect(await starsRatingWidgetPage.getCurrentNumb()).toEqual(expectValues[1].number);
    });

    test("With 2 stars, should have correct image, test and number", async ({ starsRatingWidgetPage }) => {

        await expect(starsRatingWidgetPage.mainContent).toBeVisible();

        await starsRatingWidgetPage.pressStar2();

        await expect(starsRatingWidgetPage.slideImg).toHaveCSS("margin-top", expectValues[2].marginTopImage);
        expect(await starsRatingWidgetPage.getCurrentText()).toEqual(expectValues[2].text);
        expect(await starsRatingWidgetPage.getCurrentNumb()).toEqual(expectValues[2].number);
    });

    test("With 3 stars, should have correct image, test and number", async ({ starsRatingWidgetPage }) => {

        await expect(starsRatingWidgetPage.mainContent).toBeVisible();

        await starsRatingWidgetPage.pressStar3();

        await expect(starsRatingWidgetPage.slideImg).toHaveCSS("margin-top", expectValues[3].marginTopImage);
        expect(await starsRatingWidgetPage.getCurrentText()).toEqual(expectValues[3].text);
        expect(await starsRatingWidgetPage.getCurrentNumb()).toEqual(expectValues[3].number);
    });

    test("With 4 stars, should have correct image, test and number", async ({ starsRatingWidgetPage }) => {

        await expect(starsRatingWidgetPage.mainContent).toBeVisible();

        await starsRatingWidgetPage.pressStar4();

        await expect(starsRatingWidgetPage.slideImg).toHaveCSS("margin-top", expectValues[4].marginTopImage);
        expect(await starsRatingWidgetPage.getCurrentText()).toEqual(expectValues[4].text);
        expect(await starsRatingWidgetPage.getCurrentNumb()).toEqual(expectValues[4].number);
    });

    test("With 5 stars, should have correct image, test and number", async ({ starsRatingWidgetPage }) => {

        await expect(starsRatingWidgetPage.mainContent).toBeVisible();

        await starsRatingWidgetPage.pressStar5();

        await expect(starsRatingWidgetPage.slideImg).toHaveCSS("margin-top", expectValues[5].marginTopImage);
        expect(await starsRatingWidgetPage.getCurrentText()).toEqual(expectValues[5].text);
        expect(await starsRatingWidgetPage.getCurrentNumb()).toEqual(expectValues[5].number);
    });
});