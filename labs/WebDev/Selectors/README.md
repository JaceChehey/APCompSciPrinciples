# Selectors

## Introduction
In this lab you will apply CSS selectors to style pages

## Your Tasks

- [ ] Locate the "Selectors" lab guide [Selectors.pdf](Selectors.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Implement challenge 1
	* Show your completed challenge to Ms. Pluska or her designated TA to receive credit for the individual portion of this lab

### Challenge 1

- [ ] In your main website directory, create a directory called _Selectors_.  Inside this directory add the following files, 

	* [Selectors/Index.html](Selectors/Index.html)
	* [Selectors/Styles.css](Selectors/Styles.css)

- [ ] Complete the following

1.  Take a look at the site's structure in Index.html.

	- Start by making the image at the top of the page a little smaller. Navigate to style.css and write a CSS selector for the img tag.  Within its curly braces, write: height: 150px;
	- Try experimenting with the 150 number and observing the results.

2.  The font size of the recipe description should be larger. 

	- In Styles.css, write a CSS selector for the .description class. Within its curly braces, add the following CSS: font-size: 20px;

3. Next, let’s style the cooking time. The element on about line 15 of Index.html has an id attribute of cook-time. 

	- Navigate to Styles.css and add a cook-time ID selector. Inside of its curly braces, write: font-weight: bold;

4. Now, let’s change the bullet points of the ingredient list to squares instead of circles. 

	- Start by writing a selector for the li elements inside of the .ingredients element.
Then, write this inside of its curly braces:  list-style: square;


5. Next let’s make the time for each preparation step appear gray. 

	- In Styles.css, write a selector for p elements that also have a class of .time.  Then, inside of this selector’s curly braces, write: color: gray;

6. At the bottom of the page, there’s a link to the full recipe. Let’s make the link a different color. 

	- Notice that in Index.html, on about line 42, there is a p element with a class of citation, then an a element inside of it with a class of external-link. 
	- Navigate to Styles.css and write a selector using external-link class.  Then, add this code inside of the selector’s curly braces: color: SeaGreen;

7. Finally let’s make the font Helvetica instead of the default Times New Roman. 

	- Instead of writing multiple selectors to apply the font-family property, write a selector that applies a font-family attribute to all text at once. The selector should target the h1, h2, p, and li elements.
	- To change their font, include this line of code inside the curly braces: font-family: Helvetica;

8. Create a 3 new pages in your web directory.  On each page you will write a new recipe.

9. In the header section of each page, link the style sheet you just created.

10. Complete the pages with three new recipes. Each page, 

	- Must include a picture of the recipe
	- A bulleted list of instuctions



