# Book Search Engine

- [Link to Deployed Heroku Application](https://serene-taiga-37270-d7833fe51ad2.herokuapp.com/)
- [Link to Github Repo](https://github.com/benjstorlie/book-search-engine)

## Table of Contents

1. [Description](#description)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
3. [Screenshot](#screenshot)
4. [Comments](#comments)
5. [Acknowledgements](#acknowledgements)

## Description

This web app allows users to search for books, and save them to a list to keep track of. It uses GraphQL to update user information.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Screenshot

![This is what a user's Saved Books List looks like](./cover.png)

## Comments

1. I think the trickiest part of this project was refactoring existing code that was so similar. I was very afraid to delete anything, in case it was actually doing something important.  Especially with the authentication, I had a hard time telling what was code I needed to change, and what was just an unfamiliar method of doing what I wanted to do.

## Acknowledgements

1. When I got stuck at the end, getting 400 errors from the server, I looked through Patrick Lowe's finished project ([link](https://github.com/PatrickWLowe/Book-Search-Engine/tree/main)) to figure out what I was missing, in the components 'SavedBooks' and 'SearchBooks'.
