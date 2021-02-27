# Assignment1-AkhtarParrott
## Repo for Assignment#1 - WebAppDev2021

- File Structure:
    ```
        Assignment1-AkhtarParrott
        ├── css
        │   ├── images/.. [images used for webpages]
        │   └── /[.css files for each html file]
        ├── jss
        │   └── /[.js files for each html file]
        │   
        ├── favicon.ico [Chirpy icon for page headers]
        │── header.html [left-sidebar for homepage]
        ├── home.html [homepage for Chirpy webapp with feed in middle]
        ├── right-hand-col.html [right-sidebar for homepage]
        ├── signin.html [signin page for Chirpy]
        ├── signup.html [signup page for Chirpy]
        ├── verify.html [asks user to verify account after signup]
        └── table.html ['who to follow' component]
    ```
- Description of main pages:
  <details>
  <summary>home.html </summary>

      This is the homepage the user will see once logged into the Chirpy webapp (our version of Twitter).
      Its basic structure is as follows:
  
  <details><summary>home.html: left-sidebar</summary>
  <ul>
  <li>(Home)</li>
  <li>(#Explore)</li>
  <li>(Notifications)</li>
  <li>(Messages)</li>
  <li>(Bookmarks)</li>
  <li>(Profile)</li>
  <li>(Settings)</li>
  <li>(Chirp)</li>
  </ul> 
  </details>

  <details><summary>home.html: feed</summary>
    <ul>
    <li>(Home header)</li>
    <li>(ChirpBox)</li>
    <li>(Feed which contains mockdata of Chirpy posts)</li>
    </ul>
  </details>

  <details><summary>home.html: right-sidebar</summary>
  <ul>
    <li>(Search box)</li>
    <li>(News)</li>
    <li>(Who to Follow/Trending)</li>
  </ul>
  </details>
  </details>

  <details><summary>signup.html</summary>

      Signup Page for Chirpy - all requirements met as specified for Assignment#1.
      We did not add the left-navbar for signup.html because that should only be accessed by a logged in user.
  </details>

  <details><summary>signin.html</summary>

      Signin Page for Chirpy - all requirements met as specified for Assignment#1.
      We did not add the left-navbar for signin.html because that should only be accessed by a logged in user.
  </details>

  <details><summary>verify.html</summary>

      Verify Page for Chirpy - user must verify account after signup with 5-digit code
  </details>

- Delegation of Responsibilities:
  - signup.html was created by Jacob along with styling
  - signin.html was created by Ayesha along with styling
  - left sidebar was created and styled by Ayesha
  - feed was created and styled by Jacob
  - right sidebar was created and styled by Ayesha
  - Jacob and Ayesha also collaborated extensively on the home.html:
    - Pair programming to make sure style and sizing was consistent
    - Integrated our components together and in home.html and debugged
    - Brainstorming and adding/removing features

- Notes and Caveats:
  - <i>The navbar was purposely left off certain pages because it should not appear for users if they are not logged in/don't have an account</i>
  - certain "inline" styling was necessary for proper rendering
    - this occured with signup background image
    - the html-checker did not like this but css pathing to image does not display for some reason
  - at first we tried to develop components in a modular fashion as to make code easier to read and follow best practices but had <i>horrible</i> issues with the components not loading/rendering.
    - these files include table, right-hand-col, header:
      - these are not standalone webpages and are considered componenets - some are not used.
- Moving Forward and Lessons Learned
  - In order to develop in a modular fashion we both want to use a framework like React or Vue where we can create reusable component classes
    - this will avoid a lot of headache, make code more resilient and readable
    - rendering issues with importing our components made for a lot of time spent refactoring our codebase
  - Peer programming was extremely effective when trouble-shooting a single page and figuring out sizing/styling
    - we anticipate using this strategy again for larger/more complex files as we integrate this Chirpy webapp FE design into a full-stack application.
  - I met with the TA and he made a great point about certain css libraries/frameworks overwriting and competing with one another
    - This can be a good heuristic to use for solving difficult or odd issues with styling especially